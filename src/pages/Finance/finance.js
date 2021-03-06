import React, { useEffect, useState } from 'react'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import Typography from '@mui/material/Typography'
import { FinanceChart } from './finance-chart'
import { FinanceStatistics } from './finance-statistics'
import { NewFounds } from './new-founds'
import axios from 'axios'
import { t } from 'i18next'
import { beURL } from '../../config'
import { SavedCards } from './SavedCards'
import { useSelector } from 'react-redux'


export const Finance = () => {
  const user = useSelector(state => {
    return state.user.userData
  })
  const [transactions, setTransactions] = useState([])
  const [incomeStatistic, setIncomeStatistic] = useState({
    tips: 0,
    followers: 0,
    products: 0,
    total: 0
  })
  const [balance, setBalance] = useState(0)
  useEffect(() => {
    axios.get('/api/credit').then(({ data }) => {
      setTransactions(data.transactions)
      setBalance(data.total)
      const filterByCategory = filterName => data.transactions
        .filter(i => i.category === filterName)
        .map(i => i.amount).filter(amount => amount > 0).reduce((a, b) => a + b, 0)
      setIncomeStatistic({
        ...incomeStatistic,
        tips: filterByCategory('TIP'),
        followers: filterByCategory('followers'),
        products: filterByCategory('products'),
        total: data?.total
      })
    })
  }, [])

  return <>
    <Box sx={{ 'mt': 2 }}>
      <Box className="profileGrid" sx={{
        display: 'grid', gridTemplateColumns: {
          sm: '1fr 1fr 3fr',
          xs: '1fr'
        }, gap: 2
      }} xs={{
        display: 'none'
      }}>
        <Box>
          <FinanceStatistics tips={incomeStatistic.tips} followers={incomeStatistic.followers}
                             products={incomeStatistic.products} total={incomeStatistic.total} />
          <Typography sx={{ mt: 10 }} variant={'h5'}>{t('FINANCE.ADD_NEW_FUNDS')}</Typography>
          <NewFounds balance={balance} />
          <Typography sx={{ mt: 8 }} variant={'h5'}>{t('FINANCE.INCOMING_ANALYTICS')}</Typography>
          <Box sx={{
            mt: 2,
            mb: 10,
            display: 'flex',
            justifyContent: 'space-between',
            flexDirection: { xs: 'column', md: 'row' }
          }}>
            <FinanceChart />
            <Box style={{ marginLeft: '10px' }}>
              <Card sx={{ height: '322px' }}>
                <CardActions sx={{ display: 'flex', flexDirection: 'column' }}>
                  <Typography sx={{ fontSize: '20px', fontWeight: 'bold' }}>{t('USERMENU.TRANSACTIONS')}</Typography>
                  <div style={{ maxHeight: '282px', display: 'flex', flexDirection: 'column', overflow: 'scroll' }}>
                    {transactions.filter(i => {
                      return i?.recipient?._id === user?._id;
                    })?.map(i => {
                      return i ? <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr 1fr', gap: 2 }}>
                        <Box>
                          <img
                            style={{ width: '48px', height: '100%', borderRadius: '100%' }}
                            src={beURL + i.sender?.profilePic} alt="" />
                        </Box>
                        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                          <strong style={{ fontWeight: 'bold' }}>{i.sender?.firstName}</strong>
                          <span>
                           {
                             i.category === 'SUBSCRIPTION' ?
                               <span style={{ fontSize: '10px', color: '#5D5E65' }}>
                               <img style={{ width: '15px', height: '15px' }}
                                    src="/images/icons/crown.svg" /> {t('Subscription')}</span>
                               : <img style={{ width: '15px', height: '15px' }} src="/images/icons/briefcase.svg" />
                           }
                         </span>
                        </Box>
                        <Box>
                          <span style={{ color: i.amount > 0 ? '#1FCC64' : 'red', fontSize: '14px' }}>{i.amount}</span>
                        </Box>
                      </div> : 'No transactions yet'
                    })}
                  </div>
                </CardActions>
              </Card>
            </Box>
          </Box>
        </Box>
      </Box>
      <SavedCards expiered={'22/11'} number={'4395'} type={'VISA'} />
    </Box>
  </>
}

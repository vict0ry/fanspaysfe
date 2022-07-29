import { SharedLeftMenu } from '../../layout/components/SharedLeftMenu'
import React, { useEffect, useState } from 'react'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import { FinanceChart } from './finance-chart'
import { FinanceStatistics } from './finance-statistics'
import { NewFounds } from './new-founds'
import axios from 'axios'
import { t } from 'i18next'
import { beURL } from '../../config'
import { Button } from '@mui/material'
import {Icon} from '../messages/Icon'


export const Finance = () => {

  const [transactions, setTransactions] = useState([]);
  const [transactionsSplitted, setTransactionsSplitted] = useState(transactions);
  const [pageTransactions, setPageTransactions] = useState(0);

  console.log(transactionsSplitted);

  useEffect(() => {
    const transactionsSplittedTemp = [];
    let split = [];
    transactions.forEach((transaction, i) => {
      split.push(transaction);
      if(i % 5 === 4){
        transactionsSplittedTemp.push(split);
        split = [];
      }
    })
    if(split.length){
      transactionsSplittedTemp.push(split)
    }

    setTransactionsSplitted(transactionsSplittedTemp);
  }, [transactions])

  const [incomeStatistic, setIncomeStatistic] = useState({
    tips: 0,
    followers: 0,
    products: 0,
    total: 0
  })
  const [balance, setBalance] = useState(0);
  useEffect(() => {
    axios.get('/api/credit').then(({ data }) => {
      setTransactions(data.transactions);
      setBalance(data.total)
      const filterByCategory = filterName => data.income.filter(i => i.category === filterName).map(i => i.amount).reduce((a,b) => a+b, 0)
      setIncomeStatistic({
        ...incomeStatistic,
        tips: filterByCategory('TIP'),
        followers: filterByCategory('followers'),
        products: filterByCategory('products'),
        total: data.income.map(i => i.amount).reduce((a,b) => a+b)
      })
    })
  }, []);

  return (
      // <Box
      //   className="profileGrid"
      //   sx={{
      //     display: 'grid',
      //     gridTemplateColumns: {
      //       sm: '1fr 1fr 3fr',
      //       xs: '1fr'
      //     },
      //     gap: 2
      //   }}
      //   xs={{
      //     display: 'none'
      //   }}
      // >
        <Box>
          <FinanceStatistics
            tips={incomeStatistic.tips}
            followers={incomeStatistic.followers}
            products={incomeStatistic.products}
            total={incomeStatistic.total}
          />
          <Typography sx={{mt: {md: 10, xs: "24px"}, fontSize: "24px", fontWeight: 700}}>Add new funds</Typography>
          <NewFounds balance={balance} />
          <Typography sx={{mt: "32px", fontSize: "24px", fontWeight: 700}} variant={'h5'}>Incoming Analytics</Typography>
          <Box sx={{mt: "24px", mb: 10, display: 'flex', justifyContent: 'space-between', flexDirection: {xs: 'column', md: 'row'}}}>
            <FinanceChart />
            <Box sx={{marginLeft: {md: '32px'}, marginTop: {xs: "24px", md: 0}}}>
             <Card sx={{minWidth: "320px", width: "100%", borderRadius: "8px"}}>
               <CardActions
                 sx={{
                   display: 'flex',
                   flexDirection: 'column',
                   padding: "16px"
                 }}
               >
                 <Box
                  sx={{
                    marginBottom: "16px",
                    display: "flex",
                    width: "100%",
                    justifyContent: "space-between",
                    alignItems: "center"
                  }}
                 >
                  <Typography sx={{fontSize: '20px', fontWeight: 700}}>Transactions</Typography>
                   <Box>
                     <Button sx={{
                       minWidth: 0,
                       minHeight: 0,
                       padding: 0
                     }}
                     onClick={() => {
                       setPageTransactions(0)
                     }}>
                       <Icon name="refresh" />
                     </Button>
                     <Button sx={{
                       minWidth: 0,
                       minHeight: 0,
                       padding: 0,
                       margin: "0 16px"
                     }}
                     onClick={() => {
                       if(pageTransactions > 0) {
                         setPageTransactions(pageTransactions - 1)
                       }
                     }}>
                       <Icon
                         name="chevronLeft"
                         color={pageTransactions > 0 ? "#5D5E65" : "#B3B3B3"}
                       />
                     </Button>
                     <Button sx={{
                       minWidth: 0,
                       minHeight: 0,
                       padding: 0
                     }}
                     onClick={() => {
                       if(pageTransactions < transactionsSplitted.length-1) {
                         setPageTransactions(pageTransactions + 1)
                       }
                     }}>
                       <Icon
                         name="chevronRight"
                         color={pageTransactions < transactionsSplitted.length-1 ? "#5D5E65" : "#B3B3B3"}
                       />
                     </Button>
                   </Box>
                 </Box>
                 <div style={{display: 'flex', flexDirection: 'column', alignItems: "center", margin: 0, width: "100%"}}>
                   { transactionsSplitted[pageTransactions]?.map(i => {
                     return i ? <div style={{display: 'flex', width: "100%", justifyContent: "space-between", marginBottom: "12px", alignItems: "center"}}>
                       <Box sx={{display: "flex"}}>
                         <Box sx={{marginRight: "12px"}}>
                           <img
                             style={{width: '48px', height: '48px', borderRadius: '100%'}} src={beURL + i.sender?.profilePic} alt="" />
                         </Box>
                         <Box sx={{display: 'flex', flexDirection: 'column'}}>
                           <Box sx={{fontWeight: 700, fontSize: "14px", lineHeight: "16px"}}>{i.sender.firstName} {i.sender.lastName}</Box>
                           <span>
                             {
                             i.category === 'SUBSCRIPTION' ?
                               <span style={{fontSize: '10px', color: '#5D5E65'}}>
                                 <img style={{width: '15px', height: '15px'}} src="/images/icons/crown.svg" /> {t('Subscription')}</span>
                               : <img style={{width: '15px', height: '15px'}} src="/images/icons/briefcase.svg" />
                           }
                           </span>
                         </Box>
                       </Box>
                       <Box>
                         <span style={{color: i.amount > 0 ? '#1FCC64' : 'red', fontSize: '14px', fontWeight: 700}}>{i.amount>0 && "+"} $ {i.amount}</span>
                       </Box>
                     </div> : 'No transactions yet'
                   }) }
                   <Button sx={{background: '#4776E6', lineHeight: "20px", borderRadius: "8px", minWidth: 0, minHeight: 0, padding: "10px 24px", fontSize: "14px", fontWeight: 700}} variant={'contained'}>Show all</Button>
                 </div>
               </CardActions>
             </Card>
            </Box>
          </Box>
        </Box>
      // </Box>
  );
}

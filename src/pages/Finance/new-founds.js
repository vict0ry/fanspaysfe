import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import CardActions from '@mui/material/CardActions'
import Button from '@mui/material/Button'
import React, { useState } from 'react'
import Modal from '@mui/material/Modal'
import Payment from './payment'
import axios from 'axios'
import { t } from 'i18next'


export const NewFounds = ({ balance }) => {
  const [openPaymentModal, setPaymentModal] = useState(false)
  const handleOpen = () => setPaymentModal(true)
  const handleClose = () => setPaymentModal(false)
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    height: '400px',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4
  }
  return (
    <Box sx={{
      mt: 5,
      ml: { xs: 0 },
      alignItems: 'center',
      height: { xs: '17%' },
      display: 'flex',
      flexDirection: { xs: 'column', md: 'row' },
      justifyContent: 'space-between'
    }}>
      <Box>
        <Card>
          <CardContent sx={{ display: 'flex' }}>
            <Typography variant={'h5'}>{t('COMMON.BALANCE')}:</Typography>
            <Typography sx={{ mt: 0.8, ml: 1 }} variant={'body1'}>{balance}</Typography>
          </CardContent>
          <CardActions>
            <Button sx={{ background: '#4776E6' }} variant={'contained'}>{t('COMMON.DEPOSIT')}</Button>
          </CardActions>
        </Card>
      </Box>
      <Box sx={{ width: { md: '65%', xs: '100%' } }}>
        <Card>
          <CardContent sx={{ display: 'flex' }}>
            <Typography sx={{ fontWeight: 'bold' }} variant={'h6'}>{t('FINANCE.CHOOSE_PAYMENT_METHOD')}</Typography>
          </CardContent>
          <CardActions>
            <Button onClick={handleOpen} sx={{
              width: '50%',
              background: '#E8EFFF',
              color: '#4776E6',
              fontWeight: 'bold'
            }} variant={'outlined'}>Add method</Button>
            <Typography sx={{ ml: 1 }} variant={'caption'}>Funds are withdrawn automatically once a week if the balance
              is more than $ 50.
              The service takes a commission of 15%</Typography>
            <Modal
              open={openPaymentModal}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box sx={style}>
                <Button onClick={() => {
                  axios.post('/api/stripe/pay').then(res => {
                    return res
                  })
                }}>Pay me</Button>

                <Payment />
              </Box>
            </Modal>
          </CardActions>
        </Card>
      </Box>
    </Box>
  )
}

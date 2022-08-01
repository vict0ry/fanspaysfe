import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import CardActions from '@mui/material/CardActions'
import Button from '@mui/material/Button'
import React, { useEffect, useState } from 'react'
import Modal from '@mui/material/Modal'
import Payment from './payment'
import axios from 'axios'
import masterCard from './masterCard.svg'
import visa from './visa.svg'
import paypal from './paypal.svg'
import bitcoin from './bitcoin.svg'
import circleCheck from './circle-check.svg'
import { MenuItem, Select, TextField } from '@mui/material'
import {Icon} from '../messages/Icon'
import Withdrawal from './Withdrawal'
import Deposit from './Deposit'

export const NewFounds = ({ balance }) => {
  const [withdrawalOpen, setWithdrawalOpen] = useState(false);
  const [depositOpen, setDepositOpen] = useState(false);

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
      // mt: 5,
      ml: { xs: 0 },
      alignItems: {
        sm: 'center'
      },
      // height:{xs: '17%'},
      display: 'flex',
      flexDirection: { xs: 'column', sm: 'row' },
      justifyContent: 'space-between',
      marginTop: '24px'
    }}>
      <Box sx={{ flexGrow: 1, minWidth: '30%' }}>
        <Card
          sx={{
            borderRadius: '8px',
            padding: '24px',
            marginRight: {
              sm: '24px'
            },
            marginBottom: {
              xs: '24px',
              sm: 0
            }
          }}
        >
          <CardContent sx={{
            display: 'flex',
            alignItems: { md: 'center' },
            padding: 0,
            flexDirection: { md: 'row', sm: 'column' }
          }}>
            <Typography sx={{ fontSize: '20px', fontWeight: 700 }}>Balance:</Typography>
            <Typography
              sx={{
                ml: {
                  md: 1,
                  xs: 1,
                  sm: 0
                },
                background: 'linear-gradient(94.04deg, #4776E6 10.41%, #8E54E9 77.48%)',
                webkitBackgroundClip: 'text',
                webkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                textFillColor: 'transparent',
                fontWeight: 700,
                fontSize: '20px'
              }}
            >$ {balance}</Typography>
          </CardContent>
          <CardActions
            sx={{ padding: 0, marginTop: '16px', display: 'flex', justifyContent: 'start' }}>
            <Button
              sx={{
                background: '#4776E6',
                borderRadius: '8px',
                lineHeight: '20px',
                minWidth: 0,
                minHeight: 0,
                padding: '10px 24px',
                fontSize: '14px',
                fontWeight: 700
              }}
              variant={'contained'}
              onClick={() => setDepositOpen(true)}
            >Deposit</Button>
            {depositOpen && <Deposit setDepositOpen={setDepositOpen} />}
          </CardActions>
        </Card>
      </Box>

      <Box sx={{ width: { md: '65%', xs: '100%' }, flexGrow: 1 }}>
        <Card sx={{ borderRadius: '8px', padding: '24px' }}>
          <CardContent sx={{ display: 'flex', padding: 0, marginBottom: '16px' }}>
            <Typography sx={{ fontSize: '20px', fontWeight: 700 }} variant={'h6'}>You should to add the deposit
              method</Typography>
          </CardContent>
          <CardActions sx={{ padding: 0 }}>
            <Button
              onClick={() => setWithdrawalOpen(true)}
              sx={{
                minWidth: 0,
                minHeight: 0,
                borderRadius: '8px',
                padding: '10px 36px',
                background: '#E8EFFF',
                color: '#4776E6',
                textTransform: 'none',
                fontSize: '14px',
                fontWeight: 700,
                whiteSpace: 'nowrap',
                lineHeight: '20px'
              }}
            >Add method</Button>
            <Typography sx={{ ml: 1, fontSize: '12px', fontWeight: 600, color: '#5D5E65' }} variant={'caption'}>Funds
              are withdrawn automatically once a week if the balance is more than $ 50.
              The service takes a commission of 15%
            </Typography>
            {withdrawalOpen && <Withdrawal setWithdrawalOpen={setWithdrawalOpen} />}


            {/*<Modal*/}
            {/*  open={openPaymentModal}*/}
            {/*  onClose={handleClose}*/}
            {/*  aria-labelledby="modal-modal-title"*/}
            {/*  aria-describedby="modal-modal-description"*/}
            {/*>*/}
            {/*  <Box sx={style}>*/}
            {/*    <Button*/}
            {/*      sx={{textTransform: "none"}}*/}
            {/*      onClick={() => {*/}
            {/*        axios.post("/api/stripe/pay").then(res => {*/}
            {/*          return res;*/}
            {/*        })*/}
            {/*      }}*/}
            {/*    >Pay me</Button>*/}

            {/*    <Payment/>*/}
            {/*  </Box>*/}
            {/*</Modal>*/}
          </CardActions>
        </Card>
      </Box>
    </Box>
  )
}

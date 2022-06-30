import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import React from 'react'
import Checkbox from '@mui/material/Checkbox'
import FormControlLabel from '@mui/material/FormControlLabel'
import { t } from 'i18next'
import axios from 'axios'
import { Wish } from './Wish'

export const SubscriptionSettingsCard = () => {
  return (
    <div style={{
    height: '270px',
    padding: '20px', display: 'flex', flexDirection:'column',
      justifyContent: 'space-between', borderRadius: '20px', border: '1px solid #ECE9F1'}}>
      <div style={{display: 'flex',
        justifyAlign: 'center',
        alignItems: 'center',
        justifyContent: 'space-between',
        fontSize: '10px', color: '#5D5E65'}}><span>4 сентября 2021</span> <img
        src="/images/icons/edit-button.svg"
        alt="edit" /></div>
      <div style={{display: 'flex', flexDirection: 'column', textAlign: 'center'}}>
        <strong>Start level</strong>
        <span>5$ a month</span>
      </div>
      <div style={{textAlign: 'center'}}><span style={{color: '#4776E6', textAlign: 'center'}}>0 Subscribers</span></div>
  </div>
  );
}

export const UserPricesFormTab = () => {
  return (
    <div>
      <Box component="form" noValidate onSubmit={() => {
      }} sx={{ mt: 3 }}>
        <Grid container spacing={2}>
          <Grid item xs={4} sm={4}>
            <SubscriptionSettingsCard />
          </Grid>
          <Grid item xs={4} sm={4}>
            <SubscriptionSettingsCard />
          </Grid>
          <Grid item xs={4} sm={4}>
            <SubscriptionSettingsCard />
          </Grid>
          <div style={{background: '#E8EFFF',
            marginTop: '10px',
            marginLeft: '15px',
            padding: '5px 10px', borderRadius: '10px', border: '1px dashed #4776E6'}}>
            <img src="/images/icons/plus.svg" alt="add" />
            <span onClick={() => {
              debugger;
              axios.put('/api/users/subscribtionPrice', {
                price: 300
              });
            }} style={{color: '#4776E6', marginLeft: '5px'}}>Add new</span>
          </div>
          <Grid item xs={12} sm={12}>
            <Grid item xs={3} sm={3}>
              <Wish />
            </Grid>
            <Grid item xs={12} sm={12}>

              <FormControlLabel control={<Checkbox defaultChecked />}
                                label="Disable sending messages users without credit" />
            </Grid>
          </Grid>
        </Grid>
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
        >
          {t('COMMON.SAVE')}
        </Button>
      </Box>
    </div>
  )
}

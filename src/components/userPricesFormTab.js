import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import React, { useEffect, useState } from 'react'
import Checkbox from '@mui/material/Checkbox'
import FormControlLabel from '@mui/material/FormControlLabel'
import { t } from 'i18next'
import axios from 'axios'
import { Wish } from './Wish'
import { AddWishModal } from './AddWishModal'
import { Divider } from '@mui/material'
import { useSelector } from 'react-redux'

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
  const [wishes, setWishes] = useState();

  const user = useSelector(state => state.profile.profile)
  useEffect(() => {
    debugger;
    axios.get('/api/wish/' + user?.profileUser?._id).then(wishes => { setWishes(wishes.data) })}, [])
  return (
    <div>
      <Box component="form" noValidate onSubmit={() => {
      }} sx={{ mt: 3 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={12}><strong style={{padding: '30px 0'}}>{t('Subscriptions')}</strong></Grid>
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
            marginBottom: '40px',
            padding: '5px 10px', borderRadius: '10px', border: '1px dashed #4776E6'}}>
            <img src="/images/icons/plus.svg" alt="add" />
            <span onClick={() => {
              axios.put('/api/users/subscribtionPrice', {
                price: 300
              });
            }} style={{color: '#4776E6', marginLeft: '5px'}}>Add new</span>
          </div>
        </Grid>
        <Grid container spacing={2}>
              <Grid item xs={12} sm={12}><strong style={{padding: '30px 0'}}>{t('Wishes')}</strong></Grid>
              { wishes?.length ? wishes.map(wish => {
                return <Grid item xs={3} sm={3}>
                  <Wish title={wish.name} id={wish._id} from={300} to={wish.amount} style={{margin: '10px 0'}} />
                </Grid>
              }) : <div><p>
                У вас еще нет желаний. Откройте сбор на свою мечту 💫
              </p></div> }
            <Grid item xs={12} sm={12}>
              <AddWishModal></AddWishModal>
            </Grid>
          </Grid>
      </Box>
    </div>
  )
}

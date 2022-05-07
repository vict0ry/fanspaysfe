import Button from '@mui/material/Button'
import React from 'react'
import { useSelector } from 'react-redux'
import axios from 'axios'
import { t } from 'i18next'

export const SubscribeButton = () => {
  const userProfile = useSelector(state => state.profile.profile)
  const loggedUser = useSelector(state => state.user)
  const isSubscribed = () => {
    return userProfile?.profileUser?.followers?.includes(loggedUser.userData._id)
  }
  const insufficientBalance = () => {
    return true
  }

  function handleFollow() {
    axios.put(`/api/users/${userProfile.profileUser?._id}/follow`).then(res => {
      console.log(res)
    })
  }

  return <div style={{ display: 'flex' }}>
    {!isSubscribed() ?
      <Button onClick={handleFollow} variant='contained' style={{ marginTop: 10 }}>Subscribe for 7$ in a
        month</Button> :
      <Button onClick={handleFollow} variant='contained' style={{ marginTop: 10 }}>{t('COMMON.UNSUBSCRIBE')}</Button>}
  </div>
}

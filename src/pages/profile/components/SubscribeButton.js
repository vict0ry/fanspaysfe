import Button from '@mui/material/Button'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { t } from 'i18next'
import { toggleSubscribe } from '../../../redux/actions/profile.action'

export const SubscribeButton = () => {
  const dispatch = useDispatch()
  const userProfile = useSelector(state => {
    return state.profile.profile
  })
  const loggedUser = useSelector(state => state.user)
  const isSubscribed = () => {
    return userProfile?.profileUser?.followers?.includes(loggedUser.userData._id)
  }
  const insufficientBalance = () => {
    return true
  }

  function handleFollow() {
    dispatch(toggleSubscribe(userProfile.profileUser?._id))
  }

  return <div style={{ display: 'flex', justifyAlign: 'center' }}>
    {!isSubscribed() ?
      <Button onClick={handleFollow} variant="contained" style={{ marginTop: 10 }}>
        Subscribe for {userProfile?.profileUser.subscribtionPrice} in a
        month</Button> :
      <Button onClick={handleFollow} color="primary" variant="contained"
              style={{ marginTop: 10 }}>{t('COMMON.UNSUBSCRIBE')}</Button>}
  </div>
}

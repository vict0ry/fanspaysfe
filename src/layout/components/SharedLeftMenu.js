import Box from '@mui/material/Box'
import { MiniUser } from '../../pages/profile/components/MiniUser'
import { t } from 'i18next'
import { Link } from 'react-router-dom'
import React from 'react'
import { useSelector } from 'react-redux'

export const SharedLeftMenu = () => {
  const user = useSelector(state => state.user.userData)
  return <Box sx={{ display: 'flex', flexDirection: 'column', color: 'black' }}>
    <Box style={{ marginBottom: '10px' }}>
      <MiniUser user={user?.profileUser} />
      <span style={{ color: 'gray' }}> {t('COMMON.BALANCE')} : 100,-</span>
    </Box>
    <Link style={{ color: 'black', padding: '5px 0' }} to={'/'}>{t('USERMENU.MY_PAGE')}</Link>
    <Link style={{ color: 'black', padding: '5px 0' }} to={'/edit'}>{t('USERMENU.EDIT_PROFILE')}</Link>
    <Link style={{ color: 'black', padding: '5px 0' }} to={'/'}>{t('USERMENU.MESSAGES')}</Link>
    <Link style={{ color: 'black', padding: '5px 0' }} to={'/'}>{t('USERMENU.MARKETPLACE')}</Link>
    <Link style={{
      color: 'black', padding: '5px 0',
      ':hover': {
        background: 'red',
        display: 'none'
      }
    }} to={'/'}>{t('USERMENU.TRANSACTIONS')}</Link>
  </Box>
}

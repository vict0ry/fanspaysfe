import Box from '@mui/material/Box'
import { MiniUser } from '../../pages/profile/components/MiniUser'
import { t } from 'i18next'
import { Link } from 'react-router-dom'
import React from 'react'
import { useSelector } from 'react-redux'

export const SharedLeftMenu = () => {
  const linkStyles = { color: '#5D5E65', fontWeight: '600', padding: '5px 0', lineHeight: '24px'};
  const user = useSelector(state => state.user.userData)
  return <Box sx={{ display: 'flex', flexDirection: 'column', color: 'black' }}>
    <Box style={{ marginBottom: '10px' }}>
      <MiniUser user={user?.profileUser} />
      <span style={{ color: 'gray' }}> {t('COMMON.BALANCE')} : 100,-</span>
    </Box>
    <Link style={linkStyles} to={'/'}>{t('USERMENU.MY_PAGE')}</Link>
    <Link style={linkStyles} to={'/edit'}>{t('USERMENU.EDIT_PROFILE')}</Link>
    <Link style={linkStyles} to={'/'}>{t('USERMENU.MESSAGES')}</Link>
    <Link style={linkStyles} to={'/'}>{t('USERMENU.MARKETPLACE')}</Link>
    <Link style={linkStyles} to={'/'}>{t('USERMENU.TRANSACTIONS')}</Link>
  </Box>
}

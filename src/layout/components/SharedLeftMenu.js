import Box from '@mui/material/Box'
import { MiniUser } from '../../pages/profile/components/MiniUser'
import { t } from 'i18next'
import { Link } from 'react-router-dom'
import React from 'react'
import { useSelector } from 'react-redux'
const iconStyle = {
  marginRight: '10px'
}
import './sharedLeftMenuStyles.css';

export const SharedLeftMenu = () => {
  const linkStyles = { color: '#5D5E65', fontWeight: '600', padding: '5px 0', lineHeight: '24px'};
  const user = useSelector(state => state.user.userData)
  return <Box sx={{ display: { xs: 'none', md: 'flex' }, flexDirection: 'column', color: 'black' }}>
    <Box style={{ marginBottom: '10px' }}>
      <MiniUser user={user} />
      <div style={{ color: 'gray' }}>
        {t('COMMON.BALANCE')} :
        <span style={{color: '#8E54E9', background: 'white', padding: '5px', borderRadius: 10}}>
        $100
      </span>
      </div>
    </Box>
    <div className="link">
      <img style={iconStyle} src="/images/icons/user.svg" alt="my page" />
      <Link style={linkStyles} to={'/profile/'}>{t('USERMENU.MY_PAGE')}</Link>
    </div>
    <div className="link">
      <img style={iconStyle} src="/images/icons/wallet.svg" alt="my finance" />
      <Link style={linkStyles} to={'/'}>{t('USERMENU.FINANCE')}</Link>
    </div>
    <div className="link">
      <img style={iconStyle} src="/images/icons/chats-circle.svg" alt="" />
      <Link style={linkStyles} to={'/messages'}>{t('USERMENU.MESSAGES')}</Link>
    </div>
    <div className="link">
      <img style={iconStyle} src="/images/icons/chat-circle-dots.svg" alt="queries" />
      <Link style={linkStyles} to={'/'}>{t('USERMENU.QUERIES')}</Link>
    </div>
    <div className="link">
      <img style={iconStyle} src="/images/icons/speakerphone.svg" alt="feeds" />
      <Link style={linkStyles} to={'/'}>{t('USERMENU.FEEDS')}</Link>
    </div>
    {/*<div className="link">*/}
    {/*  <img style={iconStyle} src="/images/icons/pencil.svg" alt="" />*/}
    {/*  <Link style={linkStyles} to={'/edit'}>{t('USERMENU.EDIT_PROFILE')}</Link>*/}
    {/*</div>*/}
    <div className="link">
      <img style={iconStyle} src="/images/icons/shopping-cart.svg" alt="" />
      <Link style={linkStyles} to={'/'}>{t('USERMENU.MARKETPLACE')}</Link>
    </div>
    <div className="link">
      <img style={iconStyle} src="/images/icons/money.svg" alt="" />
      <Link style={linkStyles} to={'/customer'}>{t('USERMENU.TRANSACTIONS')}</Link>
    </div>
    <div className="link">
      <img style={iconStyle} src="/images/icons/bookmark.svg" alt="" />
      <Link style={linkStyles} to={'/'}>{t('USERMENU.BOOKMARKS')}</Link>
    </div>
    <div className="link">
      <img style={iconStyle} src="/images/icons/settings.svg" alt="" />
      <Link style={linkStyles} to={'/'}>{t('USERMENU.SETTINGS')}</Link>
    </div>
  </Box>
}

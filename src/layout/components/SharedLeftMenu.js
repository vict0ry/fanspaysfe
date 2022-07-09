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
import useWindowDimensions from '../../useWindowDimensions';

const sharedMenuStyles = {
  display: 'flex',
  flexDirection: 'column',
  color: '#5D5E65',
  width: 300
}

const balanceStyles = {
  background: 'white',
  padding: '5px',
  borderRadius: 10,
  fontSize: 18,
  fontWeight: 700
}

export const SharedLeftMenu = () => {
  const {width, height} = useWindowDimensions();

  const linkStyles = { color: '#5D5E65', fontWeight: '600', padding: '5px 0', lineHeight: '24px'};
  const user = useSelector(state => state.user.userData);

  if(width > 900) {
    return (
      <Box sx={sharedMenuStyles}>
        <Box style={{ marginBottom: '10px' }}>
          <MiniUser user={user} />
          <div style={{ color: 'gray' }}>
            {t('COMMON.BALANCE')} :
            <span style={balanceStyles}>
              <span className='balance'>100,-</span>
            </span>
          </div>
        </Box>
        <div className="link">
          <img style={iconStyle} src="/images/icons/user.svg" alt="my page" />
          <Link style={linkStyles} to={'/profile/'}>{t('USERMENU.MY_PAGE')}</Link>
        </div>
        <div className="link">
          <img style={iconStyle} src="/images/icons/pencil.svg" alt="" />
          <Link style={linkStyles} to={'/edit'}>{t('USERMENU.EDIT_PROFILE')}</Link>
        </div>
        <div className="link">
          <img style={iconStyle} src="/images/icons/chat-circle-dots.svg" alt="" />
          <Link style={linkStyles} to={'/messages'}>{t('USERMENU.MESSAGES')}</Link>
        </div>
        <div className="link">
          <img style={iconStyle} src="/images/icons/shopping-cart.svg" alt="" />
          <Link style={linkStyles} to={'/'}>{t('USERMENU.MARKETPLACE')}</Link>
        </div>
        <div className="link">
          <img style={iconStyle} src="/images/icons/wallet.svg" alt="" />
          <Link style={linkStyles} to={'/customer'}>{t('USERMENU.TRANSACTIONS')}</Link>
        </div>
      </Box>
    )
  }
}

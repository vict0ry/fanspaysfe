import * as React from 'react'
import { styled } from '@mui/material/styles'
import Card from '@mui/material/Card'
import CardMedia from '@mui/material/CardMedia'
import IconButton from '@mui/material/IconButton'
import CardActions from '@mui/material/CardActions'
import SendTipModal from '../pages/profile/modals/SendTipModal'
import Button from '@mui/material/Button'
import { t } from 'i18next'
import { Link } from 'react-router-dom'
import Box from '@mui/material/Box'
import Divider from '@mui/material/Divider'
import { beURL } from '../config'
import AddRemoveBalance from '../pages/profile/modals/AddRemoveBalance'
import { SubscribeButton } from '../pages/profile/components/SubscribeButton'

styled((props) => {
  const { expand, ...other } = props
  return <IconButton {...other} />
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest
  })
}))
const avatar = (image) => beURL + image
export default function ProfileCard({ profileUser, myProfile }) {

  const TextNumber = ({ number, text }) => {
    return <Box style={{ textAlign: 'center' }}>
      <Box sx={{ fontSize: '1.5rem', fontWeight: 'bold' }} className="number">
        {number}
      </Box>
      <Box className="descr">
        {text}
      </Box>
    </Box>
  }
  return (
    <Card sx={{ maxWidth: { xs: 500, md: 500 }, ml:{xs: 5, md: 0}, height: 'fit-content' }}>
      <CardMedia
        component="img"
        height="250"
        image={avatar(profileUser?.profilePic)}
        alt="Avatar"
      />
      <CardActions sx={{ justifyContent: ' space-around', display: ' flex', flexDirection: ' column' }} disableSpacing>
        <Box sx={{ marginTop: '5px' }}>
          <TextNumber number={profileUser?.followers?.length} text={t('COMMON.FOLLOWERS')} />
        </Box>
        {!myProfile ? <div><Box sx={{ marginTop: '15px' }}>
          <Link to={'/messages/' + profileUser?._id}>
            <Button
              sx={{width: 180}}
              variant="contained">{t('COMMON.SEND_MESSAGE')}
            </Button>
          </Link>
          <SubscribeButton />
        </Box>
          <AddRemoveBalance recipient={profileUser} />
          <Divider sx={{ pt: 2 }} />
          <Box sx={{ marginTop: '5px', color: '#626d7a' }}>
            <SendTipModal recipient={profileUser}>
              <Box sx={{ display: 'flex',
                justifyAlign: 'center',
                alignItems: 'center',
                cursor: 'pointer',
                width: 180,
                borderRadius: 8,
                border: '2px solid',
                borderImage: 'linear-gradient(to right, #4776E6, #8E54E9) 1',
                pl: 4,
                color: 'black',
                height: 40}}>
                <img src='/images/icons/copper-coin.svg'/> <span style={{marginLeft: 10}}>Send tip</span>
              </Box>
            </SendTipModal>
          </Box>
        </div>  : <Link to={'/edit'}><Button style={{marginTop: '10px'}} variant={'contained'}>{t('Edit profile')}</Button></Link> }

        <Box sx={{ width: 180, display: 'flex', justifyContent: 'space-between', mt: 2, pl: 2, pr: 2 }}>
          <img src='/images/icons/twitter.svg'/>
          <img src='/images/icons/instagram.svg'/>
          <img src='/images/icons/youtube.svg'/>
          <img src='/images/icons/facebook.svg'/>
        </Box>
      </CardActions>
    </Card>
  )
}

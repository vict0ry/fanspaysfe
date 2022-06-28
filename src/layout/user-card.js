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
export default function ProfileCard({ profileUser }) {

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
    <Card sx={{ maxWidth: { xs: 312, md: 250 }, ml:{xs: 5, md: 0}, height: 'fit-content' }}>
      <CardMedia
        component="img"
        height="250"
        image={avatar(profileUser?.profilePic)}
        alt="Avatar"
      />
      <CardActions sx={{ justifyContent: ' space-around', display: ' flex', flexDirection: ' column' }} disableSpacing>
        <Box sx={{ marginTop: '5px' }}>
          <TextNumber number={profileUser?.followers.length} text={t('COMMON.FOLLOWERS')} />
        </Box>
        <Box sx={{ marginTop: '15px' }}>
          <Link to={'/messages/' + profileUser?._id}>
            <Button
              sx={{width: 180}}
              variant="contained">{t('COMMON.BECAME_FUN')}
            </Button>
          </Link>
        </Box>
        <Divider sx={{ pt: 2 }} />
        <Box sx={{ marginTop: '5px', color: '#626d7a' }}>
          <SendTipModal recipient={profileUser}>SEND TIP</SendTipModal>
        </Box>
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

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
const avatar = (image) => beURL + '/' + image
export default function ProfileCard({ profileUser }) {

  return (
    <Card sx={{ maxWidth: 250, height: 'fit-content' }}>
      <CardMedia
        component="img"
        height="250"
        image={avatar(profileUser?.profilePic)}
        alt="Paella dish"
      />

      <CardActions sx={{ justifyContent: ' space-around', display: ' flex', flexDirection: ' column' }} disableSpacing>
        <Box sx={{ marginTop: '5px' }}>
          <Link to={'/messages/' + profileUser?._id}>
            <Button
              variant={'outlined'}>{t('COMMON.SEND_MESSAGE')}
            </Button>
          </Link>
        </Box>
        <Divider sx={{ pt: 2 }} />
        <Box sx={{ marginTop: '5px', color: '#626d7a' }}>
          <SendTipModal recipient={profileUser}>Send tip</SendTipModal>
        </Box>
        {/*<Box sx={{ marginTop: '5px', color: '#626d7a' }}>*/}
        {/*  <ContactSupportIcon /> Ask question*/}
        {/*</Box>*/}
        {/*<Box sx={{ marginTop: '5px', color: '#626d7a' }}>*/}
        {/*  <ReportGmailerrorredIcon /> Report user*/}
        {/*</Box>*/}
        {/*<Box sx={{ marginTop: '5px', color: '#626d7a' }}>*/}
        {/*  <ContactSupportIcon /> Ask question*/}
        {/*</Box>*/}
      </CardActions>
    </Card>
  )
}

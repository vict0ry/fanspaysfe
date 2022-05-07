import * as React from 'react'
import { styled } from '@mui/material/styles'
import Card from '@mui/material/Card'
import CardMedia from '@mui/material/CardMedia'
import IconButton from '@mui/material/IconButton'
import CardActions from '@mui/material/CardActions'
import SendTipModal from '../pages/profile/modals/SendTipModal'
import { SubscribeButton } from '../pages/profile/components/SubscribeButton'
import Button from '@mui/material/Button'
import Link from '@mui/material/Link'
import { t } from 'i18next'

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
const avatar = (image) => `http://localhost:3003` + image
export default function ProfileCard({ profileUser }) {

  return (
    <Card sx={{ maxWidth: 250, maxHeight: 420, height: 'fit-content' }}>
      <CardMedia
        component="img"
        height="250"
        image={avatar(profileUser?.profilePic)}
        alt="Paella dish"
      />

      <CardActions sx={{ justifyContent: ' space-around', display: ' flex', flexDirection: ' column' }} disableSpacing>
        <div>
          <Link to={'/messages/' + profileUser?._id}>
            <Button
              variant={'outlined'}>{t('COMMON.SEND_MESSAGE')}
            </Button>
          </Link>
          <SendTipModal recipient={profileUser} />
        </div>
        <SubscribeButton />
      </CardActions>
    </Card>
  )
}

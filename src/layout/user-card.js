import * as React from 'react'
import { styled } from '@mui/material/styles'
import Card from '@mui/material/Card'
import CardMedia from '@mui/material/CardMedia'
import CardActions from '@mui/material/CardActions'
import IconButton from '@mui/material/IconButton'
import Button from '@mui/material/Button'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

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
export default function ProfileCard({ profileUser }) {
  const loggedUser = useSelector(state => state.user)

  const isFollowing = () => {
    return profileUser?.followers?.includes(loggedUser?.userData._id)
  }

  return (
    <Card sx={{ maxWidth: 345, maxHeight: 420 }}>
      <CardMedia
        component="img"
        height="250"
        image="https://demo.youdate.website/content/cache/stock/men/conor-sexton-434549-unsplash.jpg/4ac4b30045e9ba84f647a3d1a98d6284.jpg"
        alt="Paella dish"
      />

      <CardActions sx={{ justifyContent: 'space-around', display: 'flex' }} disableSpacing>
        <Link to={'/messages/' + profileUser?._id}><Button variant={'outlined'}>Send message</Button></Link>
      </CardActions>
    </Card>
  )
}

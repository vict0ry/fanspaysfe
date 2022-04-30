import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import Toolbar from '@mui/material/Toolbar'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Paper from '@mui/material/Paper'
import CardActions from '@mui/material/CardActions'
import IconButton from '@mui/material/IconButton'
import FavoriteIcon from '@mui/icons-material/Favorite'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import CardMedia from '@mui/material/CardMedia'
import AddPostModel from './AddPostModal'

export const Posts = ({ userId }) => {
  useEffect(() => {
    axios.get('/api/posts?followingOnly=true').then(posts => {
      setPostMessages(posts.data)
    })
  }, [])

  function handleAddMessage() {
    return axios.post('/api/posts/', {
      content: postMessage
    }).then(i => {
      console.log(i)
    })
  }

  const [postMessage, setPostMessage] = useState('')
  const [postMessages, setPostMessages] = useState([])


  function handleMessageOnKeyDown(value) {
    setPostMessage(value)
  }

  return (
    <div>
      <Toolbar sx={{ display: 'flex' }}>
        <AddPostModel />
      </Toolbar>
      {postMessages.map(message => {
        return <div>
          <Paper style={{ padding: 5, marginTop: 10 }}>

            <div style={{ display: 'flex', alignItems: 'center' }}>
              <CardMedia
                component="img"
                style={{ width: 60, paddingRight: 5, borderRadius: 15 }}
                image="https://demo.youdate.website/content/cache/stock/men/conor-sexton-434549-unsplash.jpg/4ac4b30045e9ba84f647a3d1a98d6284.jpg"
              /> <span>
              {message.postedBy.firstName} {message.postedBy.lastName}
            </span>
            </div>
            <CardContent>
              <Typography variant="body1">
                {message.content}
              </Typography>
            </CardContent>

            <CardActions disableSpacing>
              <IconButton aria-label="add to favorites">
                <FavoriteIcon /> 15 likes
              </IconButton>
            </CardActions>
          </Paper>
        </div>
      })}
    </div>
  )
}

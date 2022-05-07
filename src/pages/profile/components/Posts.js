import React, { useEffect, useState } from 'react'
import Paper from '@mui/material/Paper'
import CardActions from '@mui/material/CardActions'
import IconButton from '@mui/material/IconButton'
import FavoriteIcon from '@mui/icons-material/Favorite'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import AddPostModal from '../modals/AddPostModal'
import { useDispatch, useSelector } from 'react-redux'
import { likePost, loadPosts, removePost } from '../../../redux/posts.action'
import DeleteIcon from '@mui/icons-material/Delete'
import { t } from 'i18next'
import CommentIcon from '@mui/icons-material/Comment'
import { useParams } from 'react-router'
import Divider from '@mui/material/Divider'
import TextField from '@mui/material/TextField'
import SendTipModal from '../modals/SendTipModal'
import { MiniUser } from './MiniUser'
import Box from '@mui/material/Box'

export const Posts = ({ profileUser }) => {
  const dispatch = useDispatch()
  const { username } = useParams()
  const loggedUser = useSelector(state => state.user)
  useEffect(() => {
    dispatch(loadPosts(username || loggedUser.userData._id))
  }, [])
  const posts = useSelector(state => state.posts)
  const [likedPosts, setLikedPosts] = useState([])


  const postMessages = posts.posts
  const avatar = (image) => `http://localhost:3003` + image
  const handlePostRemove = (postId) => {
    dispatch(removePost(postId))
  }
  const handleLikePost = (postId) => {
    const hasLike = likedPosts.includes(postId)
    const filteredLikedPosts = hasLike ? likedPosts.filter(i => i !== postId) : [...likedPosts, postId]
    setLikedPosts(filteredLikedPosts)
    dispatch(likePost(postId))
  }
  const [isHidden, setIsHidden] = useState(true)
  console.log(postMessages)
  return (
    <div>
      <AddPostModal />

      {!postMessages.length ? t('COMMON.NOTHING_HERE_YET') : postMessages?.map((message, index) => {
        function colorBasedLike(message) {
          return !message?.likes?.includes(loggedUser.userData._id) ? 'gray' : 'red'
        }

        return <div key={index}>
          <Paper sx={{
            ':hover': {
              boxShadow: 5
            }
          }}
                 style={{ padding: 5, marginTop: 10 }}>
            <DeleteIcon onClick={() => handlePostRemove(message._id)}
                        style={{ float: 'right', color: 'gray', cursor: 'pointer' }} />
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <MiniUser user={message.postedBy} />
            </div>
            <Divider />
            <CardContent>
              <Typography variant="body1">
                {message.content}
              </Typography>
              <div className="post-pictures">
                <Box sx={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 1 }}>
                  {message?.pictures?.map(i => {
                    const imgUrl = 'http://localhost:3003' + i
                    return <img style={{
                      maxHeight: '300px',
                      backgroundSize: 'cover',
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover'
                    }} src={imgUrl} alt="" />
                  })}
                </Box>
              </div>
            </CardContent>

            <CardActions disableSpacing>
              <div style={{ cursor: 'pointer' }} onClick={() => {
                const hasLike = message.likes.includes(loggedUser.userData._id)
                message.likes = hasLike ? message.likes.filter(i => i !== loggedUser.userData._id) : [...message.likes, loggedUser.userData._id]
                return handleLikePost(message._id)
              }}>
                <IconButton aria-label="like">
                  <FavoriteIcon style={{ color: colorBasedLike(message) }} />
                </IconButton>
              </div>
              <div style={{ cursor: 'pointer' }}>
                <IconButton onClick={() => {
                  setIsHidden(!isHidden)
                }} aria-label="comments">
                  <CommentIcon />
                </IconButton>
              </div>
              <div style={{ cursor: 'pointer' }}>
                <SendTipModal recipient={profileUser} />
              </div>
            </CardActions>
            <Divider />
            {!message?.likes?.length ? t('BE_THE_FIRST_ONE') : message?.likes?.length + ' likes'} - 0 comments - 100kč dýško
            <div style={{ marginTop: 5, display: isHidden ? 'none' : 'block' }}>
              Comments :
              <TextField style={{ width: '100%' }} multiline> </TextField>
            </div>
          </Paper>
        </div>
      })}
    </div>
  )
}

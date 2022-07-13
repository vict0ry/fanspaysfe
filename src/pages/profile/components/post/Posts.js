import React, { useState } from 'react'
import CardActions from '@mui/material/CardActions'
import IconButton from '@mui/material/IconButton'
import FavoriteIcon from '@mui/icons-material/Favorite'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import AddPostModal from '../../modals/AddPostModal'
import { useDispatch, useSelector } from 'react-redux'
import { commentPost, likePost } from '../../../../redux/actions/posts.action'
import { t } from 'i18next'
import CommentIcon from '@mui/icons-material/Comment'
import { useParams } from 'react-router'
import Divider from '@mui/material/Divider'
import TextField from '@mui/material/TextField'
import SendTipModal from '../../modals/SendTipModal'
import Box from '@mui/material/Box'
import SendIcon from '@mui/icons-material/Send'
import { Comment } from './Comment'
import FbImageLibrary from '../../../../components/react-fb-image-grid'
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import Avatar from '@mui/material/Avatar'
import red from '@mui/material/colors/red'
import PostMenu from './PostMenu'
import { beURL } from '../../../../config'
import { Link } from 'react-router-dom'
import { NotSubscribed } from '../../profile'


export const Posts = ({ profileUser, posts, disableAdd = false }) => {
  const dispatch = useDispatch()
  const loggedUser = useSelector(state => state.user)
  const [likedPosts, setLikedPosts] = useState([])


  const avatar = (image) => beURL + image
  const handleLikePost = (postId) => {
    const hasLike = likedPosts.includes(postId)
    const filteredLikedPosts = hasLike ? likedPosts.filter(i => i !== postId) : [...likedPosts, postId]
    setLikedPosts(filteredLikedPosts)
    dispatch(likePost(postId))
  }

  const [comment, setComment] = useState('')
  const handleCommentChange = (e) => {
    setComment(e.target.value)
  }
  const handleAddComment = (postId) => {
    dispatch(commentPost(postId, comment))
    setComment('')
  }
  const [isHidden, setIsHidden] = useState(false)
  return (
    <div>
      { !disableAdd ? <AddPostModal /> : '' }

      {!posts.length ? t('COMMON.NOTHING_HERE_YET') : posts?.map((message, index) => {
        function colorBasedLike(message) {
          return !message?.likes?.includes(loggedUser.userData._id) ? 'gray' : 'red'
        }
        if (!message) {
          return '';
        }
        if (!message.postedBy) {
          return '';
        }

        return <div key={index}>
          <Card sx={{
            ':hover': {
              boxShadow: 5
            },
            padding: '10px 20px', marginTop: 2
          }}>
            <CardHeader
              action={
                <IconButton aria-label="settings">
                  <PostMenu postId={message._id} legacyContent={message.content} legacyPictures={message.pictures}/>
                </IconButton>
              }
              avatar={
                <Avatar sx={{ width: '55px', height: '55px' }} aria-label="recipe">
                  <img style={{ width: '100%' }} src={beURL + message.postedBy?.profilePic} />
                </Avatar>
              }
              title={<Link to={'/profile/' + message.postedBy.username}>{message.postedBy.firstName + ' ' + message.postedBy.lastName}</Link>}
              subheader={message.postedBy.username}
            >
            </CardHeader>
            <CardContent>
              <Typography variant="body1">
                {message.content}
              </Typography>
              <div className="post-pictures">
                <Box>
                  { message.not_subscribed ? <NotSubscribed /> : <FbImageLibrary images={message?.pictures?.map(i => {
                    return beURL + i
                  })} /> }
                </Box>
              </div>
            </CardContent>

            { !message.not_subscribed ? <CardActions disableSpacing>
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
                <SendTipModal postModal={true} recipient={profileUser} >Send tip</SendTipModal>
              </div>
            </CardActions> : '' }
            {!message?.likes?.length ? t('BE_THE_FIRST_ONE') : message?.likes?.length + ' likes'} - {message?.comments?.length} comments
            - 100kč
            dýško
            { ! message.not_subscribed ? <div>
              <Box sx={{ marginTop: 5, display: isHidden ? 'none' : 'block', maxHeight: '300px', overflowY: 'scroll' }}>
              <Divider />
              {message?.comments?.map(comment => {
                return <Comment comment={comment} />
              })}
            </Box>
            <Divider />
            <Box sx={{ display: 'flex', mt: 2, justifyAlign: 'center', alignItems: 'center' }}>
              <img style={{ width: '40px', height: '40px', marginRight: '10px', borderRadius: '100%' }}
                   src={beURL + loggedUser.userData.profilePic} alt="" />
              <TextField
                value={comment}
                onChange={(e) => handleCommentChange(e)}
                style={{ width: '100%' }} multiline> </TextField>
              <SendIcon onClick={() => handleAddComment(message._id)} style={{ marginLeft: '10px' }} />
            </Box>
            </div> : '' }
          </Card>
        </div>
      })}
    </div>
  )
}

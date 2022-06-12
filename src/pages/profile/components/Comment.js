import Box from '@mui/material/Box'
import { MiniUser } from './MiniUser'
import IconButton from '@mui/material/IconButton'
import FavoriteIcon from '@mui/icons-material/Favorite'
import CommentIcon from '@mui/icons-material/Comment'
import React, { useState } from 'react'
import { Divider } from '@mui/material'
import TextField from '@mui/material/TextField'
import SendIcon from '@mui/icons-material/Send'
import { useDispatch, useSelector } from 'react-redux'
import { replyComment } from '../../../redux/posts.action'
import axios from 'axios'

export const Comment = ({ comment, isSubComment }) => {
  const dispatch = useDispatch()
  const user = useSelector(state => state.user.userData)

  const [showCommentBox, setShowCommentBox] = useState(false)
  const handleShowCommentBox = () => {
    setShowCommentBox(!showCommentBox)
  }
  const [commentMessage, setCommentMessage] = useState()
  const [commentState, setCommentState] = useState(comment)

  const handleCommentChange = (e) => {
    setCommentMessage(e.target.value)
  }

  const handleCommentLike = (c) => {
    axios.put('/api/comments/' + c._id + '/like').then(({ data }) => {
      const isLiked = c.likes.includes(user._id)
      setCommentState({
        ...commentState,
        likes: isLiked ? commentState.likes.filter(i => i !== user._id) : [...commentState.likes, user._id]
      })
    })
  }

  const handleAddComment = (id) => {
    dispatch(replyComment(id, commentMessage))
    setCommentMessage('')
    console.log('commentMessage', commentMessage)
  }
  return <Box sx={{
    display: 'flex',
    background: '#eeeeee',
    borderRadius: '10px',
    padding: '10px',
    flexDirection: 'column',
    marginTop: '10px'
  }}>
    <MiniUser user={commentState.sender} />
    {commentState.comment}
    <Divider sx={{ mt: 2 }} />
    <Box sx={{ display: 'flex' }}>
      <Box onClick={() => handleCommentLike(commentState)} sx={{ cursor: 'pointer' }} className="like-wrapper">
        <IconButton style={{ color: commentState.likes.includes(user._id) ? 'red' : 'gray' }} aria-label="like">
          <FavoriteIcon />
        </IconButton>{commentState.likes.length} Like
      </Box>
      <Box sx={{ cursor: 'pointer' }} className="comment-wrapper" onClick={() => handleShowCommentBox()}>
        <IconButton aria-label="comments">
          <CommentIcon />
        </IconButton>{!isSubComment ? 'Comment' : 'Reply'}
      </Box>
    </Box>
    <Box sx={{ marginLeft: '20px' }}>
      {!isSubComment && comment?.comments?.map(comment => {
        return <Comment isSubComment={true} comment={comment} />
      })}
    </Box>
    {showCommentBox ? <Box sx={{ display: 'flex', mt: 2, justifyAlign: 'center', alignItems: 'center' }}>
      <TextField
        onChange={(e) => handleCommentChange(e)}
        value={commentMessage}
        style={{ width: '100%' }} multiline> </TextField>
      <SendIcon onClick={() => handleAddComment(commentState._id)} style={{ marginLeft: '10px' }} />
    </Box> : ''}
  </Box>
}

import * as React from 'react'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import MoreVertIcon from '@mui/icons-material/MoreVert'
import { removePost } from '../../../../redux/actions/posts.action'
import { useDispatch } from 'react-redux'
import { useEffect, useState } from 'react'
import { PostMenuPopup} from './PostMenuPopup'

export default function PostMenu({ postId, legacyPictures, legacyContent }) {
  const [anchorEl, setAnchorEl] = React.useState(null)
  const open = Boolean(anchorEl)
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }
  const dispatch = useDispatch()
  const handleRemovePost = () => {
    dispatch(removePost(postId))
  }

  const [openPostEditor, setOpenPostEditor] = useState(false);

  return (
    <div>
      <MoreVertIcon id="basic-button"
                    aria-controls={open ? 'basic-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                    onClick={handleClick}
      />
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button'
        }}
      >
        <MenuItem onClick={handleRemovePost}>Remove Post</MenuItem>
        <MenuItem onClick={() => {
          handleClose();
          setOpenPostEditor(true);
        }}>Edit Post</MenuItem>
      </Menu>

      {openPostEditor &&
        <PostMenuPopup
          setOpenPostEditor={setOpenPostEditor}
          legacyPictures={legacyPictures}
          legacyContent={legacyContent}
          postId={postId}
        />
      }
    </div>
  )
}

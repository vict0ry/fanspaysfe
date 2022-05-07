import * as React from 'react'
import { useEffect, useState } from 'react'
import Modal from '@mui/material/Modal'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router'
import { useTranslation } from 'react-i18next'
import Paper from '@mui/material/Paper'
import Box from '@mui/material/Box'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import { TabPanel } from '../../../components/TabPanel'
import axios from 'axios'
import { MiniUser } from '../components/MiniUser'

const style = {
  position: 'absolute',
  top: '50%',
  borderRadius: '20px',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  maxHeight: 400,
  overflow: 'scroll',
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4
}

export default function FollowersModal({ profileUser }) {
  const dispatch = useDispatch()
  const [open, setOpen] = useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)
  const { username } = useParams()
  const loggedUser = useSelector(state => state.user)
  const { t } = useTranslation()
  const isAllowed = () => {
    return !!(!username || username === loggedUser?.userData?.username)
  }
  const [followersData, setFollowers] = useState([])
  useEffect(() => {
    axios.get(`/api/users/${profileUser?._id}/followers`).then(res => {
      setFollowers(res.data)
    })
  }, [])

  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`
    }
  }

  const [value, setValue] = React.useState(0)
  const handleChange = (event, newValue) => {
    setValue(newValue)
  }


  return (
    <div>
      {isAllowed() ? <div>
        <Paper onClick={handleOpen} style={{
          height: 50,
          cursor: 'pointer',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyAlign: 'center'
        }}>
          <div>
            {t('COMMON.FOLLOWERS')} : (<b>{followersData?.followers?.length}</b>)
          </div>
          <div>
            {t('COMMON.FOLLOWING')} : (<b>{followersData?.following?.length}</b>)s
          </div>
        </Paper>
      </div> : ''}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
              <Tab label={t('COMMON.FOLLOWERS')} {...a11yProps(0)} />
              <Tab label={t('COMMON.FOLLOWING')} {...a11yProps(1)} />
            </Tabs>
          </Box>
          <TabPanel value={value} index={0}>
            {followersData?.followers?.map((i, index) => {
              return <MiniUser key={index} user={i} />
            })}
          </TabPanel>
          <TabPanel value={value} index={1}>
            <div style={{ overflow: 'scroll' }}>
              {followersData?.following?.map((i, index) => {
                return <MiniUser key={index} user={i} />
              })}
            </div>
          </TabPanel>
        </Box>
      </Modal>
    </div>
  )
}

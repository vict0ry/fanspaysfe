import ProfileCard from '../../layout/user-card'
import Box from '@mui/material/Box'
import AboutCard from '../../layout/about-card'
import React, { useEffect } from 'react'
import { useParams } from 'react-router'
import { Posts } from './components/Posts'
import Paper from '@mui/material/Paper'
import { useDispatch, useSelector } from 'react-redux'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import AddProductModal from './modals/AddProductModal'
import { t } from 'i18next'
import { SubscribeButton } from './components/SubscribeButton'
import { loadProfile } from '../../redux/profile.action'
import FollowersModal from './modals/FollowersModal'
import { TabPanel } from '../../components/TabPanel'
import { MiniUser } from './components/MiniUser'

export const NotSubscribed = () => {
  return <Paper sx={{
    padding: '20px',
    ':hover': {
      boxShadow: 5
    }
  }}>
    <div>
      {t('COMMON.SUBSCRIBE_TO_SEE')}
    </div>
    <SubscribeButton />
  </Paper>
}


export function Profile(props) {
  const loggedUser = useSelector(state => state.user)
  const username = useParams().username || loggedUser?.userData?._id
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(loadProfile(username))
  }, [])
  const user = useSelector(state => state.profile.profile)

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }
  const isUserSubscribed = () => {
    return user?.profileUser?.followers?.includes(loggedUser.userData._id)
  }

  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`
    }
  }

  const [value, setValue] = React.useState(0)

  return <div>
    <Box sx={{ 'mt': 2 }}>
      <Box sx={{ display: 'grid', gridTemplateColumns: '1fr 2fr 1fr', gap: 2 }}>
        <ProfileCard profileUser={user?.profileUser} />
        <AboutCard user={user} />
        <div>
          <FollowersModal profileUser={user?.profileUser} />
          <Paper style={{
            padding: 5,
            justifyContent: 'center',
            marginTop: 10,
            display: 'flex',
            alignItems: 'center',
            justifyAlign: 'center'
          }}>
            <SubscribeButton />
          </Paper>
          <Paper style={{
            padding: 5,
            justifyContent: 'center',
            marginTop: 10,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyAlign: 'center'
          }}>
            <h3>You may also like :</h3>
            <div style={{ flexDirection: 'column', marginTop: 10 }}>
              <MiniUser user={loggedUser.userData} />
              <MiniUser user={loggedUser.userData} />
              <MiniUser user={loggedUser.userData} />
              <MiniUser user={loggedUser.userData} />
            </div>
          </Paper>
        </div>
        <div></div>
        <div>
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
              <Tab label={t('COMMON.STORIES')} {...a11yProps(0)} />
              <Tab label={t('COMMON.USER_PRODUCTS')} {...a11yProps(1)} />
            </Tabs>
          </Box>
          <TabPanel value={value} index={0}>
            {!isUserSubscribed() ? <NotSubscribed /> : <Posts profileUser={user?.profileUser} />}
          </TabPanel>
          <TabPanel value={value} index={1}>
            <AddProductModal />
          </TabPanel>
        </div>

      </Box>
    </Box>
  </div>
}

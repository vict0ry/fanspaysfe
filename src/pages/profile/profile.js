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
import { TabPanel } from '../../components/TabPanel'
import './profile.css'
import { Link } from 'react-router-dom'
import { MiniUser } from './components/MiniUser'
import FollowersModal from './modals/FollowersModal'
import { loadPosts } from '../../redux/posts.action'
import Alert from '@mui/material/Alert'


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
    dispatch(loadPosts(username || loggedUser.userData._id))
  }, [])
  const posts = useSelector(state => state.posts.posts)
  const user = useSelector(state => state.profile.profile)

  const handleChange = (event, newValue) => {
    setSelectedTab(newValue)
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

  const [selectedTab, setSelectedTab] = React.useState(0)

  return <div>
    <Alert severity="info" sx={{marginTop: '20px'}}>
      <div>This is an info alert — check it out!</div>
      <div>This is an info alert — check it out!</div>
      <div>This is an info alert — check it out!</div>
    </Alert>
    <Box sx={{ 'mt': 2 }}>
      <Box className="profileGrid" sx={{
        display: 'grid', gridTemplateColumns: {
          sm: '1fr 1fr 3fr',
          xs: '1fr'
        }, gap: 2
      }} xs={{
        display: 'none'
      }}>
        <Box sx={{ display: 'flex', flexDirection: 'column', color: 'black' }}>
          <Box style={{ marginBottom: '10px' }}>
            <MiniUser user={user?.profileUser} />
            <span style={{ color: 'gray' }}> {t('COMMON.BALANCE')} : 100,-</span>
          </Box>
          <Link style={{ color: 'black', padding: '5px 0' }} to={'/'}>{t('USERMENU.MY_PAGE')}</Link>
          <Link style={{ color: 'black', padding: '5px 0' }} to={'/edit'}>{t('USERMENU.EDIT_PROFILE')}</Link>
          <Link style={{ color: 'black', padding: '5px 0' }} to={'/'}>{t('USERMENU.MESSAGES')}</Link>
          <Link style={{ color: 'black', padding: '5px 0' }} to={'/'}>{t('USERMENU.MARKETPLACE')}</Link>
          <Link style={{
            color: 'black', padding: '5px 0',
            ':hover': {
              background: 'red',
              display: 'none'
            }
          }} to={'/'}>{t('USERMENU.TRANSACTIONS')}</Link>
        </Box>
        <div>
          <ProfileCard profileUser={user?.profileUser} />
          <div style={{ marginTop: '10px' }}>
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
          </div>
        </div>
        <div>
          <AboutCard user={user.profileUser} postsLength={posts.length} />
          <div>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
              <Tabs value={selectedTab} onChange={handleChange} aria-label="basic tabs example">
                <Tab label={t('COMMON.STORIES')} {...a11yProps(0)} />
                <Tab label={t('COMMON.USER_PRODUCTS')} {...a11yProps(1)} />
                <Tab label={t('COMMON.USER_VIDEOS')} {...a11yProps(1)} />
                <Tab label={t('COMMON.USER_DEMANDS')} {...a11yProps(1)} />
              </Tabs>
            </Box>
            <TabPanel value={selectedTab} index={0}>
              {!isUserSubscribed() ?
                <NotSubscribed /> :
                <Posts posts={posts} profileUser={user?.profileUser} />}
            </TabPanel>
            <TabPanel value={selectedTab} index={1}>
              <AddProductModal />
            </TabPanel>
          </div>
        </div>

      </Box>
    </Box>
  </div>
}

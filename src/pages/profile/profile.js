import ProfileCard from '../../layout/user-card'
import Box from '@mui/material/Box'
import AboutCard from '../../layout/about-card'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { Posts } from './components/post/Posts'
import Paper from '@mui/material/Paper'
import { useDispatch, useSelector } from 'react-redux'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import AddProductModal from './modals/AddProductModal'
import { t } from 'i18next'
import { SubscribeButton } from './components/SubscribeButton'
import { loadProfile } from '../../redux/actions/profile.action'
import { TabPanel } from '../../components/TabPanel'
import './profile.css'
import { SharedLeftMenu } from '../../layout/components/SharedLeftMenu'
import { Wish } from '../../components/Wish'
import { Divider } from '@mui/material'
import Card from '@mui/material/Card'
import axios from 'axios'
import { AddWishModal } from '../../components/AddWishModal'


export const NotSubscribed = () => {
  return <Box sx={{
    padding: '20px',
    textAlign: 'center',
    background: '#F7F5F9',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column'
  }}>
    <div style={{display: 'flex', alignItems: 'center', flexDirection: 'column'}}>
      <img src="/images/icons/lock.svg" alt="locked" />
      <br/>
      <div style={{maxWidth: '70%', textAlign: 'center'}}>{t('COMMON.SUBSCRIBE_TO_SEE')}</div>
    </div>
    <SubscribeButton />
  </Box>
}


export function Profile(props) {
  const loggedUser = useSelector(state => state.user)
  const username = useParams().username || loggedUser?.userData?._id
  const dispatch = useDispatch()
  const [wishes, setWishes] = useState();

  const posts = useSelector(state => state.posts.posts)
  const user = useSelector(state => state.profile.profile)

  const myProfile = () => {
    return !useParams().username || useParams().username === loggedUser?.userData?.username;

  }
  useEffect(() => {
    axios.get('/api/wish/' + user?.profileUser?._id).then(wishes => {
      setWishes(wishes.data);
    })
    dispatch(loadProfile(username))
  }, [])
  const handleChange = (event, newValue) => {
    setSelectedTab(newValue)
  }
  const isUserSubscribed = () => {
    return user?.profileUser?.followers?.includes(loggedUser?.userData?._id)
  }

  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`
    }
  }

  const [selectedTab, setSelectedTab] = React.useState(0)

  return <div>
    <Box sx={{ 'mt': 2 }}>
      <Box className="profileGrid" sx={{
        display: 'grid', gridTemplateColumns: {
          sm: '1fr 1.4fr 3fr',
          xs: '1fr'
        }, gap: 2
      }} xs={{
        display: 'none'
      }}>
        <SharedLeftMenu />
        <Box style={{margin: '10px 0'}}>
          <ProfileCard
            myProfile={myProfile()}
            profileUser={user?.profileUser} />
          <Card sx={{  p: {xs: 2},
            maxWidth: { xs: 400, md: 400 },
            ml:{xs: 5, md: 0},
            mt: {xs: 2}, height: 'fit-content' }}>
            <p style={{fontSize: '18px', margin:'0', fontWeight: 'bold'}}>Wishes</p>
            <Divider style={{marginBottom: '10px'}} />
            { wishes?.length ? wishes.map(wish => {
              return <div>
                <Wish
                  title={wish.name}
                  id={wish._id}
                  from={300}
                  myProfile={myProfile()}
                  to={wish.amount} style={{margin: '10px 0'}} />
                <Divider style={{margin: '10px 0'}} />
              </div>
            }) : <AddWishModal myProfile={myProfile()}></AddWishModal> }
          </Card>
        </Box>
        <Box>
          <AboutCard
            user={user?.profileUser}
            postsLength={posts.length} />
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
                <Posts posts={posts} profileUser={user?.profileUser} />
            </TabPanel>
            <TabPanel value={selectedTab} index={1}>
              <AddProductModal />
            </TabPanel>
          </div>
        </Box>

      </Box>
    </Box>
  </div>
}

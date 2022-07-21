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
import { Wish } from '../../components/Wish'
import { Divider } from '@mui/material'
import Card from '@mui/material/Card'
import axios from 'axios'
import { AddWishModal } from '../../components/AddWishModal'
import AddDemandModal from './modals/AddDemandModal'


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
  const loadWishes = () => {
    axios.get('/api/wish/' + user?.profileUser?._id).then(wishes => {
      setWishes(wishes.data);
    })
  }
  useEffect(() => {
    loadWishes();
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
    <Box sx={{
      // 'mt': 2
    }}>
      <Box className="profileGrid" sx={{
        // display: "flex",
        // width: "312px",
        display: 'grid',
        gridTemplateColumns: {
          sm: '2fr 1fr',
          xs: '1fr'
        },
        gap: 2
      }} xs={{
        display: 'none'
      }}>
        <Box sx={{
          width: "312px",
          display: "flex",
          flexDirection: "column"
        }}>
          <ProfileCard
            myProfile={myProfile()}
            profileUser={user?.profileUser}
          />
          { !wishes?.length && !myProfile() ? '' :
            <Card sx={{  p: {xs: 2},
            maxWidth: { xs: 500, md: 500 },
            ml:{xs: 5, md: 0},
            mt: {xs: 2}, height: 'fit-content' }}>
              <div style={{display: 'flex',
                marginBottom: '10px',
                justifyContent: "space-between", alignItems: 'center', alignContent: 'center'}}>
                <div style={{fontSize: '18px', margin:'0', fontWeight: 'bold'}}>
                  {t('Wishes')}
                </div>
                <div>
                  <img src="/images/icons/edit-button.svg" alt="" />
                </div>
              </div>
            <Divider style={{marginBottom: '10px'}} />
            { wishes?.length ? wishes.map((wish, i, wishes) => {
              return <div>
                <Wish
                  title={wish.name}
                  id={wish._id}
                  from={wish?.collected?.map(i => i.amount).reduce((a,b) => a+b,0)}
                  recipient={user?.profileUser}
                  myProfile={myProfile()}
                  to={wish.amount} style={{margin: '10px 0'}} />
                { i + 1 !== wishes.length ? <Divider style={{margin: '10px 0'}} /> : '' }
              </div>
            }) : '' }
              <AddWishModal change={() => loadWishes() } myProfile={myProfile()}></AddWishModal>
          </Card> }
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
                <Tab label={t('COMMON.USER_DEMANDS')} {...a11yProps(2)} />
              </Tabs>
            </Box>
            <TabPanel value={selectedTab} index={0}>
                <Posts posts={posts} profileUser={user?.profileUser} />
            </TabPanel>
            <TabPanel value={selectedTab} index={1}>
              <AddProductModal />
            </TabPanel>
            <TabPanel value={selectedTab} index={2}>
              <AddDemandModal />
            </TabPanel>
          </div>
        </Box>

      </Box>
    </Box>
  </div>
}

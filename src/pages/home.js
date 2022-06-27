import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import CardMedia from '@mui/material/CardMedia'
import CardContent from '@mui/material/CardContent'
import Box from '@mui/material/Box'
import { SearchInput } from '../components/SearchInput'
import { SharedLeftMenu } from '../layout/components/SharedLeftMenu'
import ProfileCard from '../layout/user-card'
import Paper from '@mui/material/Paper'
import { SubscribeButton } from './profile/components/SubscribeButton'
import FollowersModal from './profile/modals/FollowersModal'
import AboutCard from '../layout/about-card'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import { t } from 'i18next'
import { TabPanel } from '../components/TabPanel'
import { Posts } from './profile/components/post/Posts'
import AddProductModal from './profile/modals/AddProductModal'
import { NotSubscribed } from './profile/profile'
import axios from 'axios'
import { postsLoaded } from '../redux/posts.action'
import { useSelector } from 'react-redux'
import Button from '@mui/material/Button'

const UserCard = () => {
  return <Link to={'/'} style={{ cursor: 'pointer' }}>
    <CardContent>
      <CardMedia
        style={{borderRadius: '50%'}}
        component="img"
        image="https://demo.youdate.website/content/cache/stock/men/conor-sexton-434549-unsplash.jpg/4ac4b30045e9ba84f647a3d1a98d6284.jpg"
        alt="Paella dish"
      />
      <div style={{
        textAlign: 'center',
        color: 'black'
      }}>Victor<br/>Eliot
      </div>
    </CardContent>
  </Link>
}
export const Home = () => {
  const [posts, setPosts] = useState([]);
  const user = useSelector(state => state.profile.profile)
  useEffect(() => {
    const data = axios.get('/api/posts?followingOnly=true').then(posts => {
      setPosts(posts.data);
    })
  }, [])
  return <div>
    <Box sx={{ 'mt': 2 }}>
      <Box className="profileGrid" sx={{
        display: 'grid', gridTemplateColumns: {
          sm: '1fr 3fr',
          xs: '1fr 1fr'
        }, gap: 2
      }} xs={{
        display: 'none'
      }}>
        <SharedLeftMenu />
        <div>
          <div>
            <Paper style={{
            padding: 5,
            justifyContent: 'center',
            margin: '10px 0',
            display: 'flex',
            alignItems: 'center',
            justifyAlign: 'center'
          }}>
            <UserCard />
            <UserCard />
            <UserCard />
            <UserCard />
            <UserCard />
            <UserCard />
          </Paper>
            <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', margin: '10px 0'}}>
              <span>TOP autoru</span>
              <Button variant="contained">{t('Chci do topu')}</Button>
            </div>
          </div>
          <div>
            <Box className="profileGrid" sx={{
              display: 'grid', gridTemplateColumns: {
                sm: '3fr 1fr',
                xs: '3fr 1fr'
              }, gap: 2
            }} xs={{
              display: 'none'
            }}>
              <Posts disableAdd={true} posts={posts.slice(0,10)} profileUser={user?.profileUser} />
              <div>
                <Paper style={{
                  padding: 5,
                  justifyContent: 'center',
                  margin: '10px 0',
                  display: 'column',
                  maxWidth: '200px',
                  height: '100vh',
                  alignItems: 'center',
                  justifyAlign: 'center'
                }}>

                </Paper>
              </div>
            </Box>

          </div>
        </div>
      </Box>
    </Box>
  </div>
}

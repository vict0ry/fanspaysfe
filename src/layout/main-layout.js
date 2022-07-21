import SearchBar from './navbar'
import Container from '@mui/material/Container'
import { Outlet } from 'react-router-dom'
import StickyFooter from './sticky-footer'
import React from 'react'
import { connect } from 'react-redux'
import SuccessSnackbar from '../components/SuccessSnackbar'
import { SubscribeDialog } from '../components/SubscribeDialog'
import { SharedLeftMenu } from './components/SharedLeftMenu'
import Box from '@mui/material/Box'
import { Drawer } from '@material-ui/core'
const isLoggedIn = localStorage.getItem('user');
const MainLayout = ({ props }) => {
  return (
    <div>
    <SearchBar />
    <Container maxWidth="lg">
      <Box sx={{
        display: "flex",
        minHeight: 'calc(100vh - 176px)',
        gridTemplateColumns: {
          sm: '1fr 3fr',
          xs: '1fr'
        },
        width: '100%',
        marginTop: '40px'
      }}>
        {isLoggedIn ?  <Box  sx={{ display: { xs: 'none', md: 'block' } }}>
          <SharedLeftMenu />
        </Box> : ''}
        <Outlet />
      </Box>
    </Container>
      <div style={{marginTop: '20px'}}>
        <StickyFooter />
      </div>
      <SuccessSnackbar />
      <SubscribeDialog />
    </div>)
}
const mapStateToProps = state => {
  console.log(state.router.location)
  return state
}
export default connect(mapStateToProps)(MainLayout)

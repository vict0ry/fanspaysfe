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

const MainLayout = ({ props }) => {
  return (
    <div>
    <SearchBar />
    <Container maxWidth="lg">
      <Box sx={{
        // display: 'grid',
        display: "flex",
        minHeight: 'calc(100vh - 176px)',
        gridTemplateColumns: '1fr 3fr',
        width: '100%',
        marginTop: '40px'
      }}>
        <SharedLeftMenu />
        <Outlet />
      </Box>
    </Container>
    <StickyFooter />
      <SuccessSnackbar />
      <SubscribeDialog />
    </div>)
}
const mapStateToProps = state => {
  console.log(state.router.location)
  return state
}
export default connect(mapStateToProps)(MainLayout)

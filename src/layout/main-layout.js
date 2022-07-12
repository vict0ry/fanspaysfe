import SearchBar from './navbar'
import Container from '@mui/material/Container'
import { Outlet } from 'react-router-dom'
import StickyFooter from './sticky-footer'
import React from 'react'
import { connect } from 'react-redux'
import SuccessSnackbar from '../components/SuccessSnackbar'
import { SubscribeDialog } from '../components/SubscribeDialog'

const MainLayout = ({ props }) => {
  return (
    <div>
    <SearchBar />
    <Container maxWidth="sx">
      <Outlet />
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

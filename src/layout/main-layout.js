import SearchBar from './navbar'
import Container from '@mui/material/Container'
import { Outlet } from 'react-router-dom'
import StickyFooter from './sticky-footer'
import React from 'react'
import { connect } from 'react-redux'

const MainLayout = ({ props }) => {
  return (
    <div>
    <SearchBar />
    <Container maxWidth="lg">
      <Outlet />
    </Container>
    <StickyFooter />
  </div>)
}
const mapStateToProps = state => {
  console.log(state.router.location)
  return state
}
export default connect(mapStateToProps)(MainLayout)

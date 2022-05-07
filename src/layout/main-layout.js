import SearchBar from './navbar'
import Container from '@mui/material/Container'
import { Link, Outlet } from 'react-router-dom'
import StickyFooter from './sticky-footer'
import React from 'react'
import Breadcrumbs from '@mui/material/Breadcrumbs'
import Typography from '@mui/material/Typography'
import { connect } from 'react-redux'

const MainLayout = ({ props }) => {
  return (<div>
    <SearchBar />
    <Container maxWidth="lg">
      <Breadcrumbs aria-label="breadcrumb">
        <Link underline="hover" color="inherit" href="/" to={'/'}>
          MUI
        </Link>
        <Link
          underline="hover"
          to={'/'}
          color="inherit"
          href="/material-ui/getting-started/installation/"
        >
          Core
        </Link>
        <Typography color="text.primary">Breadcrumbs</Typography>
      </Breadcrumbs>
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

import PrimarySearchAppBar from './navbar'
import Container from '@mui/material/Container'
import { Outlet } from 'react-router-dom'
import StickyFooter from './sticky-footer'
import React from 'react'

export const MainLayout = ({ props }) => {
  return (<div>
    <PrimarySearchAppBar />
    <Container maxWidth="lg">
      <Outlet />
    </Container>
    <StickyFooter />
  </div>)
}

import SearchBar from './navbar'
import Container from '@mui/material/Container'
import { Outlet } from 'react-router-dom'
import StickyFooter from './sticky-footer'
import React, { useState } from 'react'
import { connect, useSelector } from 'react-redux'
import SuccessSnackbar from '../components/SuccessSnackbar'
import { SubscribeDialog } from '../components/SubscribeDialog'
import { SharedLeftMenu } from './components/SharedLeftMenu'
import Box from '@mui/material/Box'
import { decodeToken } from 'react-jwt'
import { Icon } from '../pages/messages/Icon'

const Helper = () => {
  const isEnabled = true;
  const [closed, setClosed] = useState(true);
  return isEnabled ? <div style={{
    minWidth: '40px',
    minHeight: '40px',
    position: 'absolute',
    top: '20px',
    left: '50%',
    maxWidth: '350px',
    background: 'white',
    maxHeight: '200px',
    overflow: 'scroll'
  }}>
    <div onClick={() => setClosed(!closed)} style={{position: 'absolute', right: '2px', top: '2px'}}>
      <Icon name="x" />
    </div>
    { !closed ? <div>
        <PrettyPrintJson data={decodeToken(isLoggedIn)}>
        </PrettyPrintJson>
      </div> : '' }
    </div> : ''
}

const isLoggedIn = localStorage.getItem('user')
class PrettyPrintJson extends React.Component {
  render() {
    // data could be a prop for example
    const { data } = this.props;
    return (<div><pre>{JSON.stringify(data, null, 2) }</pre></div>);
  }
}
const MainLayout = ({ props }) => {
  return (
    <div>
      <SearchBar />
      <Container maxWidth="lg">
        <Box sx={{
          display: 'flex',
          minHeight: 'calc(100vh - 176px)',
          gridTemplateColumns: {
            sm: '1fr 3fr',
            xs: '1fr'
          },
          width: '100%',
          marginTop: '40px'
        }}>
          {isLoggedIn ? <Box sx={{ display: { xs: 'none', md: 'block' } }}>
            <SharedLeftMenu />
          </Box> : ''}
          <Outlet />
        </Box>
      </Container>
      <div style={{ marginTop: '20px' }}>
        <StickyFooter />
      </div>
      <SuccessSnackbar />
      <SubscribeDialog />
      <Helper></Helper>
    </div>)
}
const mapStateToProps = state => {
  console.log(state.router.location)
  return state
}
export default connect(mapStateToProps)(MainLayout)

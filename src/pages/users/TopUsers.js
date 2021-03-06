import { Box, Grid } from '@mui/material'
import React from 'react'

const stylesTop = {
  padding: '16px',
  borderRadius: '8px',
  background: '#fff',
  display: 'flex',
  // justifyContent: "center"
  // justifyContent: "space-evenly",
  overflowX: 'auto',
  // maxWidth: "100%",
  '&::-webkit-scrollbar': {
    width: 0,
    height: 0
  }
  // width: "100%"
}
const stylesTopUsers = {
  user: {
    padding: '0 12px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  avatar: {
    width: 80,
    height: 80,
    overflow: 'hidden',
    borderRadius: '50%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8
  },
  name: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    fontSize: 14,
    fontWeight: 700,
    marginBottom: 8
  },
  role: {
    fontSize: 12,
    fontWeight: 400,
    color: '#5D5E65'
  }
}

const TopUsers = ({ users }) => {
  return (
    <Grid item sx={{
      // display: {
      //   xl: "block",
      //   xs: "flex"
      // },
      margin: {
        xs: '-32px -16px 12px -16px',
        sm: '0'
      }
    }}>
      <Box sx={{
        ...stylesTop,
        justifyContent: {
          xs: 'start',
          md: 'space-around'
        }
      }}>

        {users.slice(0, 8).map((user) => {
          return (
            <Box style={stylesTopUsers.user}>
              <Box style={stylesTopUsers.avatar}>
                <img style={{ width: '100%' }}
                     src="https://kinowar.com/wp-content/uploads/2021/01/%D0%90%D0%BD%D0%B0-%D0%B4%D0%B5-%D0%90%D1%80%D0%BC%D0%B0%D1%81-%D1%84%D0%BE%D1%82%D0%BE%D1%81%D0%B5%D1%81%D1%81%D0%B8%D1%8F-%D0%B4%D0%BB%D1%8F-%D0%B6%D1%83%D1%80%D0%BD%D0%B0%D0%BB%D0%B0-The-Sunday-Times-Style.jpg"
                     alt="" />
              </Box>
              <Box style={stylesTopUsers.name}>
                <span>{user.firstName}</span>
                <span>{user.lastName}</span>
              </Box>
              <Box style={stylesTopUsers.role}>
                {user.role}
              </Box>
            </Box>
          )
        })}

      </Box>
    </Grid>
  )
}

export { TopUsers }
import { Box, Button, Grid } from '@mui/material'
import { Icon } from '../messages/Icon'
import React from 'react'
import { Link } from 'react-router-dom'

const stylesGrid = {
  card: {
    display: "flex",
    flexDirection: "column",
    background: "#fff",
    padding: 8,
    borderRadius: 8,
    alignItems: "center",
    cursor: "pointer",
    overflow: "hidden",
    // maxWidth: "163px"
  },
  image: {
    width: 146,
    height: 156,
    borderRadius: 8,
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 8,
    overflow: "hidden"
  },
  subscribers: {
    position: "absolute",
    right: 4,
    top: 4,
    borderRadius: 50,
    background: "#fff",
    padding: 4,
    color: "#8E54E9",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: 8,
    fontWeight: 700
  },
  name: {
    fontSize: 16,
    fontWeight: 700,
    marginBottom: 4,
    color: "#000"
  },
  role: {
    color: "#5D5E65",
    fontSize: 10,
    fontWeight: 400,
    marginBottom: 8
  },
  button: {
    padding: "8px 16px",
    background: "#4776E6",
    color: "#fff",
    fontSize: 12,
    fontWeight: 700,
    borderRadius: 8,
    textTransform: "none"
  }
}

const User = ({users}) => {

  const compressionFollowers = (followers) => {
    if(followers >= 1000000){
      return Math.round(followers/1000000) + "M";
    } else if(followers >= 1000){
      return Math.round(followers/1000) + "K";
    } else {
      return followers;
    }
  }

  return(
    <Grid container rowSpacing={6} columnSpacing={2} sx={{justifyContent: "center"}}>

      {users.slice(0, 8).map((user) => {
        const profileLink = `/profile/${user.username}`
          // <Link to={profileLink} style={{ cursor: 'pointer' }}
        return(
          <Grid item xs={6} md={4} lg={3} >
            <Link to={profileLink} style={stylesGrid.card}>
              <Box style={stylesGrid.image}>
                <img style={{width: "100%"}} src="https://kinowar.com/wp-content/uploads/2021/01/%D0%90%D0%BD%D0%B0-%D0%B4%D0%B5-%D0%90%D1%80%D0%BC%D0%B0%D1%81-%D1%84%D0%BE%D1%82%D0%BE%D1%81%D0%B5%D1%81%D1%81%D0%B8%D1%8F-%D0%B4%D0%BB%D1%8F-%D0%B6%D1%83%D1%80%D0%BD%D0%B0%D0%BB%D0%B0-The-Sunday-Times-Style.jpg" alt="" />
                <div style={stylesGrid.subscribers}>
                  <div style={{width: 8, height: 8, marginRight: 2, display: "flex", justifyContent: "center", alignItems: "center"}}>
                    <Icon name="crown"></Icon>
                  </div>
                  {compressionFollowers(user.followers.length)}
                </div>
              </Box>

              <Box style={stylesGrid.name}>
                <span>{user.firstName} </span>
                <span>{user.lastName}</span>
              </Box>

              <Box style={stylesGrid.role}>
                Медитация · Йога · Пилатес
              </Box>

              <Button style={stylesGrid.button}>
                Перейти в блог
              </Button>
            </Link>
          </Grid>
        );
      })}
    </Grid>
  );
}

export {User};
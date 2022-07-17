import { Box, Button, Grid } from '@mui/material'
import { Icon } from '../messages/Icon'
import React from 'react'
import { Link } from 'react-router-dom'
import { t } from 'i18next'
import { beURL } from '../../config'

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
    <Grid container rowSpacing={{xs: 2, md: 6}} columnSpacing={2} sx={{justifyContent: "center"}}>

      {users?.data?.map((user) => {
        const profileLink = `/profile/${user.username}`
        return(
          <Grid item xs={6} md={4} lg={3} >
            <Link to={profileLink} style={stylesGrid.card}>
              <Box style={stylesGrid.image}>
                <img style={{width: "100%"}} src={beURL + user.profilePic} alt="" />
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
                {t("USERS.GO_TO_BLOG")}
              </Button>
            </Link>
          </Grid>
        );
      })}
    </Grid>
  );
}

export {User};
import React, { useEffect, useState } from 'react'
import CardContent from '@mui/material/CardContent'
// import { SearchInput } from '../components/SearchInput'
import CardMedia from '@mui/material/CardMedia'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { Button, Grid, ButtonBase, Box, InputBase } from '@mui/material'
import { SharedLeftMenu } from '../layout/components/SharedLeftMenu'
import { Icon } from './messages/Icon'
import { FormGroup, FormControlLabel, Checkbox } from '@mui/material'
import { SearchInput } from './messages/SearchInput'
import { ClickAwayListener } from '@mui/base'
import { LeftFilter } from './users/LeftFilter'
import { TopUsers } from './users/TopUsers'
import { TopFilter } from './users/TopFilter'
import { User } from './users/User'
import { PagesController } from './users/PagesController'
import useWindowDimensions from '../useWindowDimensions'

const wantToTop = {
  minWidth: 0,
  padding: "12px 24px",
  background: "linear-gradient(94.04deg, #4776E6 10.41%, #8E54E9 77.48%)",
  borderRadius: "8px",
  fontSize: 20,
  fontWeight: 700,
  color: "#fff",
  textTransform: "none",
  lineHeight: "30px"
};

const title = {
  display: "flex",
  justifyContent: "space-between",
  marginTop: "16px",
  marginBottom: "24px",
  alignItems: "center"
};

export function Users() {
  useEffect(() => {
    // axios.get('/api/users').then(res => setUsers(res.data))
  }, [])

  const [users, setUsers] = useState([
    {
      "profilePic": "/images/profilePic.jpeg",
      "likes": [
        "5ffdce4ed00c783334ad1a10"
      ],
      "comments": [],
      "credit": [],
      "retweets": [],
      "following": [
        "5ffdc68cc8c5920f603ea994"
      ],
      "followers": [
        "5ffdc68cc8c5920f603ea994",
        "625d7d7e3c5747542c72db68"
      ],
      "role": "user",
      "_id": "5ffdcd86d00c783334ad1a0f",
      "firstName": "Oliver",
      "lastName": "Murphy",
      "username": "oliver.murphy",
      "email": "oliver.murphy@gmail.com",
      "password": "$2b$10$0Zi9qGosDoENiYpn9rQ6eeH1Y4eTNsoDOEmsK1qrGl8jg0jYpxgfu",
      "createdAt": "2021-01-12T16:25:42.137Z",
      "updatedAt": "2022-04-18T15:19:54.614Z",
      "__v": 0,
      "coverPhoto": "/uploads/images/b778044d31a4c5ec2ba4269a3e9c1b03.png"
    },
    {
      "profilePic": "/uploads/images/6cee2f689ac6ea20f963387ab1ed8be8.png",
      "likes": [
        "62bb379a0f040eec764b2155",
        "62b9b4d272dbeba55f09d5a7",
        "62bcba59b0fd5b0e1164c457"
      ],
      "comments": [],
      "credit": [],
      "retweets": [],
      "following": [
        "5fff0e6b4d090d1488d580cc"
      ],
      "followers": [
        "6255811a5aadc81fd3081d5e",
        "626e8bdf7cceb4644895b4d4",
        "62b9b0df7f5d66a3cf3f5c1b",
        "62b9c6ff772e16ac2cb47d0f",
        "62baab04990135c315bde583",
        "62bb392257aa48eccb262b43",
        "5fff0e6b4d090d1488d580cc"
      ],
      "role": "user",
      "_id": "5fff0e6b4d090d1488d580cc",
      "firstName": "testtt",
      "lastName": "testerson",
      "username": "test",
      "email": "test@test.test",
      "password": "$2b$10$QoT8Aj5esTfObrF2wfDfJOGBAGhwOFdYJIfm0wgL5JzEPQ6Pkhsma",
      "createdAt": "2021-01-13T15:14:51.299Z",
      "updatedAt": "2022-07-10T07:45:57.034Z",
      "__v": 2,
      "birthDate": "1965-07-05T23:00:00.000Z",
      "description": "nejaky dlouhy poopossfkj dsak fskdjf kasdjf kasdjfk sajdfkj asdkf as",
      "subscribtionPrice": 300,
      "isBlocked": false,
      "stripeUserId": "cus_M0gsRk9aa1q8rT"
    },
    {
      "profilePic": "/images/profilePic.jpeg",
      "likes": [],
      "comments": [],
      "credit": [],
      "retweets": [],
      "following": [
        "60002e3998885b1dfcc40e28",
        "60003b9b083750283cc6175c"
      ],
      "followers": [
        "624224240235cb6ae441279d",
        "626e8bdf7cceb4644895b4d4"
      ],
      "role": "user",
      "_id": "60002d8d98885b1dfcc40e27",
      "firstName": "Char;es",
      "lastName": "Darwin",
      "username": "c.h",
      "email": "charles@gmail.com",
      "password": "$2b$10$W1S4vv90SLD7eDH6FOQOFedAyRjpfJTuKE0zulDcFYLmKrTUGTN0i",
      "createdAt": "2021-01-14T11:39:57.205Z",
      "updatedAt": "2022-05-01T18:13:55.457Z",
      "__v": 0,
      "coverPhoto": "/uploads/images/5f38f46b1f001e0ecfed2f4913cad3ad.png"
    },
    {
      "profilePic": "/images/profilePic.jpeg",
      "likes": [],
      "comments": [],
      "credit": [],
      "retweets": [],
      "following": [],
      "followers": [
        "60002d8d98885b1dfcc40e27",
        "6270569892e2b54938a7ca1d"
      ],
      "role": "user",
      "_id": "60002e3998885b1dfcc40e28",
      "firstName": "Oliver",
      "lastName": "Murphy",
      "username": "charles@outlook.com",
      "email": "charles@outlook.com",
      "password": "$2b$10$LvivNBGo2GGuJbK6LOdbk.QktVoc.62H6i9GO.vvuVNG6JQiWH1bO",
      "createdAt": "2021-01-14T11:42:49.142Z",
      "updatedAt": "2022-05-07T06:54:49.840Z",
      "__v": 0
    },
    {
      "profilePic": "/images/profilePic.jpeg",
      "likes": [],
      "comments": [],
      "credit": [],
      "retweets": [],
      "following": [],
      "followers": [
        "60002d8d98885b1dfcc40e27",
        "6255811a5aadc81fd3081d5e"
      ],
      "role": "user",
      "_id": "60003b9b083750283cc6175c",
      "firstName": "Test",
      "lastName": "Test",
      "username": "charlesd@gmail.com",
      "email": "charlesd@gmail.com",
      "password": "$2b$10$b53xlxSywZunGNSqx6ld7eQ1Otm/O6FpRbnlx2.Wg.4DIlEwjuF5e",
      "createdAt": "2021-01-14T12:39:55.691Z",
      "updatedAt": "2022-04-12T13:40:52.440Z",
      "__v": 0
    },
    {
      "profilePic": "/images/profilePic.jpeg",
      "likes": [],
      "comments": [],
      "credit": [],
      "retweets": [],
      "following": [],
      "followers": [
        "626e8bdf7cceb4644895b4d4"
      ],
      "role": "user",
      "_id": "600495d6cab8cd23902053d6",
      "firstName": "Samuel",
      "lastName": "Resin",
      "username": "samresin",
      "email": "samresin@gmail.com",
      "password": "$2b$10$oo.ugUwBY1KhCyXUmMTh7efag9Na5u51FDqwZ13yk6XpQ2nVld70G",
      "createdAt": "2021-01-17T19:53:58.608Z",
      "updatedAt": "2022-05-01T17:45:13.948Z",
      "__v": 0
    },
    {
      "profilePic": "/images/profilePic.jpeg",
      "likes": [],
      "comments": [],
      "credit": [],
      "retweets": [],
      "following": [],
      "followers": [],
      "role": "user",
      "_id": "600526710667871becd4a782",
      "firstName": "hgjfjh",
      "lastName": "n nm m",
      "username": "mb mb",
      "email": "s@s",
      "password": "$2b$10$lAkd7gJHLH0B.oJT0N7TauO5zMh/p9l1WvEA13PCs/3.GVkVCEBH.",
      "createdAt": "2021-01-18T06:10:57.353Z",
      "updatedAt": "2022-01-30T00:03:25.066Z",
      "__v": 1
    },
    {
      "profilePic": "/images/profilePic.jpeg",
      "likes": [],
      "comments": [],
      "credit": [],
      "retweets": [],
      "following": [],
      "followers": [
        "625d931bb442080f0851362b"
      ],
      "role": "user",
      "_id": "60053be428bacf25e4f4660e",
      "firstName": "satvik",
      "lastName": "aggarwal",
      "username": "sk001",
      "email": "sk@sk",
      "password": "$2b$10$UPzl/Qc6Piyc.P6P/d/Gz.CxOgWo9PkO1huUfpLpnmPaM63CCQJdm",
      "createdAt": "2021-01-18T07:42:28.495Z",
      "updatedAt": "2022-04-18T17:38:37.846Z",
      "__v": 1
    }
  ])

  const [fromAge, setFromAge] = useState(21)
  const [upToAge, setUpToAge] = useState(21)

  const [sortBy, setSortBy] = useState("По популярности ⭐");
  const [sortByOpen, setSortByOpen] = useState(false);
  const [checkedTags, setCheckedTags] = useState({});
  const [findNickname, setFindNickname] = useState("");

  const {width, height} = useWindowDimensions();

  const [leftMenuOpen, setLeftMenuOpen] = useState(false);

  console.log(width, leftMenuOpen)

  if(leftMenuOpen && width <= 900){
    document.body.style.overflow = "hidden"
  } else {
    document.body.style.overflow = "initial"
  }

  return (
    <Grid container style={{paddingTop: 40, justifyContent: "center"}}>
      <Grid
        items
        sx={{
          display: {
            xs: "none",
            lg: "flex"
          }
        }}
      >
        <SharedLeftMenu />
      </Grid>
      <Box sx={{maxWidth: "100%"}}>
        <TopUsers users={users} />
        <Grid item>
          <Box sx={{
            ...title,
            marginBottom: {
              xs: "36px",
              sm: "24px"
            }
          }}>
            <Box style={{fontSize: 24, fontWeight: 700}}>
              ТОП авторов
            </Box>
            <Button
              sx={{
                ...wantToTop,
                fontSize: {
                  xs: 16,
                  md: 20
                },
                padding: {
                  xs: "8px 12px",
                  md: "12px 24px"
                }
              }}
            >Хочу в ТОП</Button>
          </Box>

          <Grid container
            sx={{display: "flex", flexWrap: "nowrap", alignItems: "start"}}
          >
            {width <= 900 && leftMenuOpen &&
                <LeftFilter
                  fromAge={fromAge}
                  setFromAge={setFromAge}
                  upToAge={upToAge}
                  setUpToAge={setUpToAge}
                  checkedTags={checkedTags}
                  setCheckedTags={setCheckedTags}
                  setLeftMenuOpen={setLeftMenuOpen}
                  leftMenuOpen={leftMenuOpen}
                  findNickname={findNickname}
                  setFindNickname={setFindNickname}
                />
            }
            {width <= 900 && leftMenuOpen &&
              <Box sx={{
                position: "fixed",
                top: 0,
                right: 0,
                bottom: 0,
                left: 0,
                width: "100vw",
                height: "100vh",
                zIndex: 2,
                background: "rgba(93, 94, 101, 0.05);",
                backdropFilter: "blur(8px)"
              }}>

              </Box>
            }
            {width > 900 &&
              <LeftFilter
                fromAge={fromAge}
                setFromAge={setFromAge}
                upToAge={upToAge}
                setUpToAge={setUpToAge}
                checkedTags={checkedTags}
                setCheckedTags={setCheckedTags}
                setLeftMenuOpen={setLeftMenuOpen}
                leftMenuOpen={leftMenuOpen}
                findNickname={findNickname}
                setFindNickname={setFindNickname}
              />
            }
            <Grid item
              sx={{maxWidth: 700}}
            >
              <TopFilter
                sortByOpen={sortByOpen}
                setSortByOpen={setSortByOpen}
                setSortBy={setSortBy}
                sortBy={sortBy}
                checkedTags={checkedTags}
                setCheckedTags={setCheckedTags}
                setLeftMenuOpen={setLeftMenuOpen}
                leftMenuOpen={leftMenuOpen}
              />
              <User users={users} />
              <PagesController />
            </Grid>
          </Grid>
        </Grid>
      </Box>




      {/*<div>*/}
      {/*  <div style={{ 'paddingTop': '20px' }}>*/}
      {/*    <SearchInput style={{ width: '100%' }} />*/}
      {/*  </div>*/}
      {/*  <CardContent>*/}
      {/*    <Box sx={{ display: 'grid', gap: 1, gridTemplateColumns: 'repeat(6, 1fr)' }}>*/}
      {/*      {users.map(user => {*/}
      {/*        const profileLink = `/profile/${user.username}`*/}
      {/*        return (*/}
      {/*          <Link to={profileLink} style={{ cursor: 'pointer' }}>*/}
      {/*            <CardMedia*/}
      {/*              component="img"*/}
      {/*              image="https://kinowar.com/wp-content/uploads/2021/01/%D0%90%D0%BD%D0%B0-%D0%B4%D0%B5-%D0%90%D1%80%D0%BC%D0%B0%D1%81-%D1%84%D0%BE%D1%82%D0%BE%D1%81%D0%B5%D1%81%D1%81%D0%B8%D1%8F-%D0%B4%D0%BB%D1%8F-%D0%B6%D1%83%D1%80%D0%BD%D0%B0%D0%BB%D0%B0-The-Sunday-Times-Style.jpg"*/}
      {/*              alt="Paella dish"*/}
      {/*            />*/}
      {/*            <div style={{*/}
      {/*              textAlign: 'center',*/}
      {/*              textDecoration: 'underline',*/}
      {/*              color: 'blue'*/}
      {/*            }}>{user.firstName} {user.lastName}</div>*/}
      {/*          </Link>*/}
      {/*        )*/}
      {/*      })}*/}
      {/*    </Box>*/}
      {/*  </CardContent>*/}
      {/*</div>*/}

    </Grid>
    )
  }

import Box from '@mui/material/Box'
import React, { useEffect, useState } from 'react'
import Button from '@mui/material/Button'
import { t } from 'i18next'
import Card from '@mui/material/Card'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import { useSelector } from 'react-redux'
import { SharedLeftMenu } from '../layout/components/SharedLeftMenu'
import { MiniUser } from './profile/components/MiniUser'
import Rating from '@mui/material/Rating'
import { Grid } from '@mui/material'
import { LeftFilter } from './users/LeftFilter'
import { TopFilter } from './users/TopFilter'
import { User } from './users/User'
import { PagesController } from './users/PagesController'
import useWindowDimensions from '../useWindowDimensions'

const categories = [
  "Футболки",
  "Обувь",
  "Игрушки",
  "Техника",
  "Аксессуары",
  "Музыка",
  "Онлайн-услуги"
];

export const Shop = () => {
  const user = useSelector(state => state.user.userData)

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

  const [sortBy, setSortBy] = useState(t("USERS.BY_POPULARITY") + " ⭐");
  const [sortByOpen, setSortByOpen] = useState(false);
  const [checkedTags, setCheckedTags] = useState({});
  const [findNickname, setFindNickname] = useState("");
  const [findAuthors, setFindAuthors] = useState("");

  const {width, height} = useWindowDimensions();

  const [leftMenuOpen, setLeftMenuOpen] = useState(false);

  if(leftMenuOpen && width <= 900){
    document.body.style.overflow = "hidden"
  } else {
    document.body.style.overflow = "initial"
  }

  return(
    <Grid container sx={{paddingTop: "40px", justifyContent: "center"}}>
      <Grid
        items
        sx={{
          display: {
            xs: "none",
            lg: "flex"
          }
        }}
      >
      </Grid>

      <Box sx={{maxWidth: "100%"}}>
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
            findAuthors={findAuthors}
            sortBy={sortBy}
            categories={categories}
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
            findAuthors={findAuthors}
            sortBy={sortBy}
            categories={categories}
            isMarket={true}
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
              setFindAuthors={setFindAuthors}
              findAuthors={findAuthors}
              isMarket={true}
            />
            {/*<User users={users} />*/}
            <PagesController />
          </Grid>
        </Grid>
      </Box>
    </Grid>
  );

  // return <div>
  //   <Box sx={{ 'mt': 2 }}>
  //     <Box className="profileGrid" sx={{
  //       display: 'grid',
  //       gridTemplateColumns: {
  //         sm: '1fr 3fr',
  //         xs: '1fr'
  //       }, gap: 2
  //     }} xs={{
  //       display: 'none'
  //     }}>
  //       <SharedLeftMenu />
  //       <Box sx={{ 'mt': 2 }}>
  //         <Typography gutterBottom variant="h4" component="div">
  //           Product name
  //         </Typography>
  //         <Box sx={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: 1 }}>
  //           <Box>
  //             <Card sx={{ maxWidth: 345 }}>
  //               <CardMedia
  //                 component="img"
  //                 height="140"
  //                 image="https://demo.youdate.website/content/cache/stock/men/conor-sexton-434549-unsplash.jpg/4ac4b30045e9ba84f647a3d1a98d6284.jpg"
  //                 alt="green iguana"
  //               />
  //               <Box sx={{ display: 'grid', gridTemplateColumns: '1fr 1fr', marginTop: 1, gap: 1 }}>
  //                 <CardMedia
  //                   component="img"
  //                   height="140"
  //                   image="https://demo.youdate.website/content/cache/stock/men/conor-sexton-434549-unsplash.jpg/4ac4b30045e9ba84f647a3d1a98d6284.jpg"
  //                   alt="green iguana"
  //                 />
  //                 <CardMedia
  //                   component="img"
  //                   height="140"
  //                   image="https://demo.youdate.website/content/cache/stock/men/conor-sexton-434549-unsplash.jpg/4ac4b30045e9ba84f647a3d1a98d6284.jpg"
  //                   alt="green iguana"
  //                 />
  //               </Box>
  //             </Card>
  //           </Box>
  //           <Card sx={{ padding: 2, height: 'fit-content' }}>
  //             <Box sx={{ display: 'flex', justifyContent: 'right' }}>
  //               <div style={{ fontWeight: 'bold', color: 'green' }}>500 Kč</div>
  //               <Button variant='contained' style={{ marginTop: 10 }}>{t('COMMON.BUY')}</Button>
  //             </Box>
  //             <h3>{t('COMMON.DESCRIPTION')}:</h3>
  //             Pokud by se pro stejný účel použil smysluplný text, bylo by těžké hodnotit pouze
  //             vzhled, aniž by se
  //             pozorovatel nechal svést ke čtení obsahu. Pokud by byl naopak použit nesmyslný, ale pravidelný text (např.
  //             opakování „asdf asdf asdf…“), oko by při posuzování vzhledu bylo vyrušováno pravidelnou strukturou textu,
  //             která se od běžného textu liší. Text lorem ipsum na první pohled připomíná běžný text, slova jsou různě
  //             dlouhá, frekvence písmen je podobná běžné řeči, interpunkce vypadá přirozeně atd.
  //           </Card>
  //           <Box sx={{ marginTop: '10px' }}>
  //             Product owner :
  //             <MiniUser user={user} />
  //             <Box sx={{display: 'flex', justifyContent: 'center'}}><span style={{marginRight: '5px'}}>5 hodnoceni</span> <Rating rating={5} /></Box>
  //           </Box>
  //         </Box>
  //       </Box>
  //
  //     </Box>
  //   </Box>
  // </div>
}

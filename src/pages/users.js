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

const wantToTop = {
  minWidth: 0,
  padding: "12px 24px",
  background: "linear-gradient(94.04deg, #4776E6 10.41%, #8E54E9 77.48%)",
  borderRadius: 8,
  fontSize: 20,
  fontWeight: 700,
  color: "#fff",
  textTransform: "none",
  lineHeight: "30px"
};

const title = {
  display: "flex",
  justifyContent: "space-between",
  marginTop: 16,
  marginBottom: 24,
  alignItems: "center"
};

export function Users() {
  useEffect(() => {
    axios.get('/api/users').then(res => setUsers(res.data))
  }, [])

  const [users, setUsers] = useState([])

  const [fromAge, setFromAge] = useState(21)
  const [upToAge, setUpToAge] = useState(21)

  const [sortBy, setSortBy] = useState("По популярности ⭐");
  const [sortByOpen, setSortByOpen] = useState(false);
  const [checkedTags, setCheckedTags] = useState({});

  return (
    <Grid container style={{paddingTop: 40}}>
      <Grid item>
        <SharedLeftMenu />
      </Grid>
      <Box>
        <TopUsers users={users} />
        <Grid item>
          <Box style={title}>
            <Box style={{fontSize: 24, fontWeight: 700}}>
              ТОП авторов
            </Box>
            <Button
              style={wantToTop}
            >Хочу в ТОП</Button>
          </Box>

          <Grid container style={{display: "flex", alignItems: "start"}}>
            <LeftFilter
              fromAge={fromAge}
              setFromAge={setFromAge}
              upToAge={upToAge}
              setUpToAge={setUpToAge}
              checkedTags={checkedTags}
              setCheckedTags={setCheckedTags}
            />
            <Grid item style={{width: 700}}>
              <TopFilter
                sortByOpen={sortByOpen}
                setSortByOpen={setSortByOpen}
                setSortBy={setSortBy}
                sortBy={sortBy}
                checkedTags={checkedTags}
                setCheckedTags={setCheckedTags}
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

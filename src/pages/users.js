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

const stylesGrid = {
  card: {
    display: "flex",
    flexDirection: "column",
    background: "#fff",
    padding: 8,
    borderRadius: 8,
    alignItems: "center"
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
    marginBottom: 4
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

  console.log(checkedTags)

  return (
    <Grid container style={{paddingTop: 20}}>
      <Grid item>
        <SharedLeftMenu />
      </Grid>
      <Box>
        <TopUsers />
        <Grid item>
          <Box style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: 16,
            marginBottom: 24,
            alignItems: "center"
          }}>
            <Box style={{
              fontSize: 24,
              fontWeight: 700
            }}>
              ТОП авторов
            </Box>

            <Button
              style={{
                minWidth: 0,
                padding: "12px 24px",
                background: "linear-gradient(94.04deg, #4776E6 10.41%, #8E54E9 77.48%)",
                borderRadius: 8,
                fontSize: 20,
                fontWeight: 700,
                color: "#fff",
                textTransform: "none",
                lineHeight: "30px"
              }}
            >Хочу в ТОП</Button>
          </Box>

          <Grid container style={{
            display: "flex",
            alignItems: "start"
          }}>
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

              <Grid container rowSpacing={6} columnSpacing={2}>

                <Grid item xl={3}>
                  <Box style={stylesGrid.card}>
                    <Box style={stylesGrid.image}>
                      <img style={{width: "100%"}} src="https://kinowar.com/wp-content/uploads/2021/01/%D0%90%D0%BD%D0%B0-%D0%B4%D0%B5-%D0%90%D1%80%D0%BC%D0%B0%D1%81-%D1%84%D0%BE%D1%82%D0%BE%D1%81%D0%B5%D1%81%D1%81%D0%B8%D1%8F-%D0%B4%D0%BB%D1%8F-%D0%B6%D1%83%D1%80%D0%BD%D0%B0%D0%BB%D0%B0-The-Sunday-Times-Style.jpg" alt="" />
                      <div style={stylesGrid.subscribers}>
                        <div style={{width: 8, height: 8, marginRight: 2, display: "flex", justifyContent: "center", alignItems: "center"}}>
                          <Icon name="crown"></Icon>
                        </div>
                        100K
                      </div>
                    </Box>

                    <Box style={stylesGrid.name}>
                      <span>Аня </span>
                      <span>Кошкина</span>
                    </Box>

                    <Box style={stylesGrid.role}>
                      Медитация · Йога · Пилатес
                    </Box>

                    <Button style={stylesGrid.button}>
                      Перейти в блог
                    </Button>

                  </Box>
                </Grid>

                <Grid item xl={3}>
                  <Box style={stylesGrid.card}>
                    <Box style={stylesGrid.image}>
                      <img style={{width: "100%"}} src="https://kinowar.com/wp-content/uploads/2021/01/%D0%90%D0%BD%D0%B0-%D0%B4%D0%B5-%D0%90%D1%80%D0%BC%D0%B0%D1%81-%D1%84%D0%BE%D1%82%D0%BE%D1%81%D0%B5%D1%81%D1%81%D0%B8%D1%8F-%D0%B4%D0%BB%D1%8F-%D0%B6%D1%83%D1%80%D0%BD%D0%B0%D0%BB%D0%B0-The-Sunday-Times-Style.jpg" alt="" />
                      <div style={stylesGrid.subscribers}>
                        <div style={{width: 8, height: 8, marginRight: 2, display: "flex", justifyContent: "center", alignItems: "center"}}><Icon name="crown"></Icon></div>
                        100K
                      </div>
                    </Box>

                    <Box style={stylesGrid.name}>
                      <span>Аня </span>
                      <span>Кошкина</span>
                    </Box>

                    <Box style={stylesGrid.role}>
                      Медитация · Йога · Пилатес
                    </Box>

                    <Button style={stylesGrid.button}>
                      Перейти в блог
                    </Button>

                  </Box>
                </Grid>

                <Grid item xl={3}>
                  <Box style={stylesGrid.card}>
                    <Box style={stylesGrid.image}>
                      <img style={{width: "100%"}} src="https://kinowar.com/wp-content/uploads/2021/01/%D0%90%D0%BD%D0%B0-%D0%B4%D0%B5-%D0%90%D1%80%D0%BC%D0%B0%D1%81-%D1%84%D0%BE%D1%82%D0%BE%D1%81%D0%B5%D1%81%D1%81%D0%B8%D1%8F-%D0%B4%D0%BB%D1%8F-%D0%B6%D1%83%D1%80%D0%BD%D0%B0%D0%BB%D0%B0-The-Sunday-Times-Style.jpg" alt="" />
                      <div style={stylesGrid.subscribers}>
                        <div style={{width: 8, height: 8, marginRight: 2, display: "flex", justifyContent: "center", alignItems: "center"}}><Icon name="crown"></Icon></div>
                        100K
                      </div>
                    </Box>

                    <Box style={stylesGrid.name}>
                      <span>Аня </span>
                      <span>Кошкина</span>
                    </Box>

                    <Box style={stylesGrid.role}>
                      Медитация · Йога · Пилатес
                    </Box>

                    <Button style={stylesGrid.button}>
                      Перейти в блог
                    </Button>

                  </Box>
                </Grid>

                <Grid item xl={3}>
                  <Box style={stylesGrid.card}>
                    <Box style={stylesGrid.image}>
                      <img style={{width: "100%"}} src="https://kinowar.com/wp-content/uploads/2021/01/%D0%90%D0%BD%D0%B0-%D0%B4%D0%B5-%D0%90%D1%80%D0%BC%D0%B0%D1%81-%D1%84%D0%BE%D1%82%D0%BE%D1%81%D0%B5%D1%81%D1%81%D0%B8%D1%8F-%D0%B4%D0%BB%D1%8F-%D0%B6%D1%83%D1%80%D0%BD%D0%B0%D0%BB%D0%B0-The-Sunday-Times-Style.jpg" alt="" />
                      <div style={stylesGrid.subscribers}>
                        <div style={{width: 8, height: 8, marginRight: 2, display: "flex", justifyContent: "center", alignItems: "center"}}><Icon name="crown"></Icon></div>
                        100K
                      </div>
                    </Box>

                    <Box style={stylesGrid.name}>
                      <span>Аня </span>
                      <span>Кошкина</span>
                    </Box>

                    <Box style={stylesGrid.role}>
                      Медитация · Йога · Пилатес
                    </Box>

                    <Button style={stylesGrid.button}>
                      Перейти в блог
                    </Button>

                  </Box>
                </Grid>

                <Grid item xl={3}>
                  <Box style={stylesGrid.card}>
                    <Box style={stylesGrid.image}>
                      <img style={{width: "100%"}} src="https://kinowar.com/wp-content/uploads/2021/01/%D0%90%D0%BD%D0%B0-%D0%B4%D0%B5-%D0%90%D1%80%D0%BC%D0%B0%D1%81-%D1%84%D0%BE%D1%82%D0%BE%D1%81%D0%B5%D1%81%D1%81%D0%B8%D1%8F-%D0%B4%D0%BB%D1%8F-%D0%B6%D1%83%D1%80%D0%BD%D0%B0%D0%BB%D0%B0-The-Sunday-Times-Style.jpg" alt="" />
                      <div style={stylesGrid.subscribers}>
                        <div style={{width: 8, height: 8, marginRight: 2, display: "flex", justifyContent: "center", alignItems: "center"}}><Icon name="crown"></Icon></div>
                        100K
                      </div>
                    </Box>

                    <Box style={stylesGrid.name}>
                      <span>Аня </span>
                      <span>Кошкина</span>
                    </Box>

                    <Box style={stylesGrid.role}>
                      Медитация · Йога · Пилатес
                    </Box>

                    <Button style={stylesGrid.button}>
                      Перейти в блог
                    </Button>

                  </Box>
                </Grid>

                <Grid item xl={3}>
                  <Box style={stylesGrid.card}>
                    <Box style={stylesGrid.image}>
                      <img style={{width: "100%"}} src="https://kinowar.com/wp-content/uploads/2021/01/%D0%90%D0%BD%D0%B0-%D0%B4%D0%B5-%D0%90%D1%80%D0%BC%D0%B0%D1%81-%D1%84%D0%BE%D1%82%D0%BE%D1%81%D0%B5%D1%81%D1%81%D0%B8%D1%8F-%D0%B4%D0%BB%D1%8F-%D0%B6%D1%83%D1%80%D0%BD%D0%B0%D0%BB%D0%B0-The-Sunday-Times-Style.jpg" alt="" />
                      <div style={stylesGrid.subscribers}>
                        <div style={{width: 8, height: 8, marginRight: 2, display: "flex", justifyContent: "center", alignItems: "center"}}><Icon name="crown"></Icon></div>
                        100K
                      </div>
                    </Box>

                    <Box style={stylesGrid.name}>
                      <span>Аня </span>
                      <span>Кошкина</span>
                    </Box>

                    <Box style={stylesGrid.role}>
                      Медитация · Йога · Пилатес
                    </Box>

                    <Button style={stylesGrid.button}>
                      Перейти в блог
                    </Button>

                  </Box>
                </Grid>

                <Grid item xl={3}>
                  <Box style={stylesGrid.card}>
                    <Box style={stylesGrid.image}>
                      <img style={{width: "100%"}} src="https://kinowar.com/wp-content/uploads/2021/01/%D0%90%D0%BD%D0%B0-%D0%B4%D0%B5-%D0%90%D1%80%D0%BC%D0%B0%D1%81-%D1%84%D0%BE%D1%82%D0%BE%D1%81%D0%B5%D1%81%D1%81%D0%B8%D1%8F-%D0%B4%D0%BB%D1%8F-%D0%B6%D1%83%D1%80%D0%BD%D0%B0%D0%BB%D0%B0-The-Sunday-Times-Style.jpg" alt="" />
                      <div style={stylesGrid.subscribers}>
                        <div style={{width: 8, height: 8, marginRight: 2, display: "flex", justifyContent: "center", alignItems: "center"}}><Icon name="crown"></Icon></div>
                        100K
                      </div>
                    </Box>

                    <Box style={stylesGrid.name}>
                      <span>Аня </span>
                      <span>Кошкина</span>
                    </Box>

                    <Box style={stylesGrid.role}>
                      Медитация · Йога · Пилатес
                    </Box>

                    <Button style={stylesGrid.button}>
                      Перейти в блог
                    </Button>

                  </Box>
                </Grid>

                <Grid item xl={3}>
                  <Box style={stylesGrid.card}>
                    <Box style={stylesGrid.image}>
                      <img style={{width: "100%"}} src="https://kinowar.com/wp-content/uploads/2021/01/%D0%90%D0%BD%D0%B0-%D0%B4%D0%B5-%D0%90%D1%80%D0%BC%D0%B0%D1%81-%D1%84%D0%BE%D1%82%D0%BE%D1%81%D0%B5%D1%81%D1%81%D0%B8%D1%8F-%D0%B4%D0%BB%D1%8F-%D0%B6%D1%83%D1%80%D0%BD%D0%B0%D0%BB%D0%B0-The-Sunday-Times-Style.jpg" alt="" />
                      <div style={stylesGrid.subscribers}>
                        <div style={{width: 8, height: 8, marginRight: 2, display: "flex", justifyContent: "center", alignItems: "center"}}><Icon name="crown"></Icon></div>
                        100K
                      </div>
                    </Box>

                    <Box style={stylesGrid.name}>
                      <span>Аня </span>
                      <span>Кошкина</span>
                    </Box>

                    <Box style={stylesGrid.role}>
                      Медитация · Йога · Пилатес
                    </Box>

                    <Button style={stylesGrid.button}>
                      Перейти в блог
                    </Button>

                  </Box>
                </Grid>


              </Grid>

              <Box style={{display: "flex", justifyContent: "center"}}>
                <Box style={{
                  display: "flex",
                  alignItems: "center",
                  marginTop: 32,

                }}>
                  <Button style={{
                    minWidth: 0,
                    minHeight: 0,
                    margin: "0 6px",

                  }}>
                    <Icon name="arrowLeft" />
                  </Button>

                  <Button style={{
                    borderRadius: 8,
                    minWidth: 0,
                    minHeight: 0,
                    margin: "0 6px",
                    color: "#4776E6",
                    fontSize: 15,
                    fontWeight: 600,
                    width: 32,
                    height:32,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    background: "#fff"
                  }}>
                    1
                  </Button>
                  <Button style={{
                    borderRadius: 8,
                    minWidth: 0,
                    minHeight: 0,
                    margin: "0 6px",
                    color: "#4776E6",
                    fontSize: 15,
                    fontWeight: 600,
                    width: 32,
                    height:32,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    background: "#fff"
                  }}>
                    2
                  </Button>

                  <Button style={{
                    borderRadius: 8,
                    minWidth: 0,
                    minHeight: 0,
                    margin: "0 6px",
                    color: "#4776E6",
                    fontSize: 15,
                    fontWeight: 600,
                    width: 32,
                    height:32,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    background: "#fff"
                  }}>
                    ...
                  </Button>

                  <Button style={{
                    borderRadius: 8,
                    minWidth: 0,
                    minHeight: 0,
                    margin: "0 6px",
                    // color: "#4776E6",
                    fontSize: 15,
                    fontWeight: 600,
                    width: 32,
                    height:32,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    // background: "#fff",
                    background: "#4776E6",
                    color: "#fff",

                  }}>
                    6
                  </Button>
                  <Button style={{
                    borderRadius: 8,
                    minWidth: 0,
                    minHeight: 0,
                    margin: "0 6px",
                    color: "#4776E6",
                    fontSize: 15,
                    fontWeight: 600,
                    width: 32,
                    height:32,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    background: "#fff"
                  }}>
                    7
                  </Button>

                  <Button style={{
                    minWidth: 0,
                    minHeight: 0,
                    margin: "0 6px",

                  }}>
                    <Icon name="arrowRight" />
                  </Button>
                </Box>
              </Box>

            </Grid>
          </Grid>
        </Grid>
      </Box>








      {false && <div>
        <div style={{ 'paddingTop': '20px' }}>
          <SearchInput style={{ width: '100%' }} />
        </div>
        <CardContent>
          <Box sx={{ display: 'grid', gap: 1, gridTemplateColumns: 'repeat(6, 1fr)' }}>
            {users.map(user => {
              const profileLink = `/profile/${user.username}`
              return (
                <Link to={profileLink} style={{ cursor: 'pointer' }}>
                  <CardMedia
                    component="img"
                    image="https://kinowar.com/wp-content/uploads/2021/01/%D0%90%D0%BD%D0%B0-%D0%B4%D0%B5-%D0%90%D1%80%D0%BC%D0%B0%D1%81-%D1%84%D0%BE%D1%82%D0%BE%D1%81%D0%B5%D1%81%D1%81%D0%B8%D1%8F-%D0%B4%D0%BB%D1%8F-%D0%B6%D1%83%D1%80%D0%BD%D0%B0%D0%BB%D0%B0-The-Sunday-Times-Style.jpg"
                    alt="Paella dish"
                  />
                  <div style={{
                    textAlign: 'center',
                    textDecoration: 'underline',
                    color: 'blue'
                  }}>{user.firstName} {user.lastName}</div>
                </Link>
              )
            })}
          </Box>
        </CardContent>
      </div>}
    </Grid>
    )
  }

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

const stylesTop = {
  padding: 16,
  borderRadius: 8,
  background: "#fff",
  display: "flex",
  justifyContent: "center"
}
const stylesTopUsers = {
  user: {
    padding: "0 12px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    width: 80,
    height: 80,
    overflow: "hidden",
    borderRadius: "50%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 8
  },
  name: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    fontSize: 14,
    fontWeight: 700,
    marginBottom: 8
  },
  role: {
    fontSize: 12,
    fontWeight: 400,
    color: "#5D5E65"
  }

}

const stylesGrid = {
  card: {
    display: "flex",
    flexDirection: "column",
    background: "#fff",
    padding: 8,
    borderRadius: 8,
    alignItems: "center",

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
    overflow: "hidden",

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

const leftFilter = {
  ageCont: {
    display: "flex",
    flexDirection: "column",
    alignItems: "start",
    marginBottom: 24,

  },
  title: {
    marginBottom: 16,
    fontSize: 14,
    fontWeight: 700,
    color: "#5D5E65",

  },
  ageController: {
    display: "flex",
    alignItems: "center"
  },
  ageButton: {
    minWidth: 0,
    minHeight: 0,
    borderRadius: "50%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
    width: 16,
    height: 16,
    color: "#000",
    background: "#F7F5F9",
    padding: 2,
    fontWeight: 600
  },
  inputAge: {
    margin: "0 4px",
    borderRadius: 8,
    background: "#F7F5F9",
    padding: "4px 6px",
    fontSize: 12,
    fontWeight: 600,
    color: "#4776E6",
    width: 28,
    height: 24,
  },

  categories: {
    height: 150,
    width: "100%",
    overflowY: "scroll",
    '&::-webkit-scrollbar-track': {
      // boxShadow: 'inset 0 0 6px rgba(0,0,0,0.00)',
      // webkitBoxShadow: 'inset 0 0 6px rgba(0,0,0,0.00)'
      background: "#ECE9F1",
      border: "8px solid transparent",
      backgroundClip: "content-box",
      borderRadius: 3,

    },
    '&::-webkit-scrollbar-thumb': {
      backgroundColor: '#4776E6',
      borderRadius: 3,
      border: "8px solid transparent",
      backgroundClip: "content-box",
      // outline: '1px solid slategrey'
    },
    marginBottom: "24px",

  }
}

const BpIcon = () => {
  return(
    <span style={{
      borderRadius: 6,
      width: 16,
      height: 16,
      border: "1px solid #ECE9F1",
    }}>

    </span>
  )
};

const BpCheckedIcon = () => {
  return(
    <span style={{
      borderRadius: 6,
      width: 16,
      height: 16,
      border: "1px solid #ECE9F1",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      padding: 0
    }}>
      <Icon name="check" />
    </span>
  );
}

const FormControlLabelStyles = {
  margin: 0,
  marginBottom: "8px",
  '& .css-187hphe-MuiTypography-root': {
    fontSize: 12,
    fontWeight: 700
  },
  '& .css-12wnr2w-MuiButtonBase-root-MuiCheckbox-root': {
    padding: 0,
    marginRight: "8px",
    borderRadius: 6
  }
}

export function Users() {


  useEffect(() => {
    axios.get('/api/users').then(res => setUsers(res.data))
  }, [])

  const [users, setUsers] = useState([])

  const [fromAge, setFromAge] = useState(21)
  const [upToAge, setUpToAge] = useState(21)

  return (
    <Grid container style={{paddingTop: 20}}>
      <Grid item>
        <SharedLeftMenu />
      </Grid>

      <Box>

        <Grid item>
          <Grid container style={stylesTop}>

              <Box style={stylesTopUsers.user}>
                <Box style={stylesTopUsers.avatar}>
                  <img style={{width: "100%"}} src="https://kinowar.com/wp-content/uploads/2021/01/%D0%90%D0%BD%D0%B0-%D0%B4%D0%B5-%D0%90%D1%80%D0%BC%D0%B0%D1%81-%D1%84%D0%BE%D1%82%D0%BE%D1%81%D0%B5%D1%81%D1%81%D0%B8%D1%8F-%D0%B4%D0%BB%D1%8F-%D0%B6%D1%83%D1%80%D0%BD%D0%B0%D0%BB%D0%B0-The-Sunday-Times-Style.jpg" alt="" />
                </Box>
                <Box style={stylesTopUsers.name}>
                  <span>Михаил</span>
                  <span>Загородний</span>
                </Box>
                <Box style={stylesTopUsers.role}>
                  Дизайн
                </Box>
              </Box>

              <Box style={stylesTopUsers.user}>
                <Box style={stylesTopUsers.avatar}>
                  <img style={{width: "100%"}} src="https://kinowar.com/wp-content/uploads/2021/01/%D0%90%D0%BD%D0%B0-%D0%B4%D0%B5-%D0%90%D1%80%D0%BC%D0%B0%D1%81-%D1%84%D0%BE%D1%82%D0%BE%D1%81%D0%B5%D1%81%D1%81%D0%B8%D1%8F-%D0%B4%D0%BB%D1%8F-%D0%B6%D1%83%D1%80%D0%BD%D0%B0%D0%BB%D0%B0-The-Sunday-Times-Style.jpg" alt="" />
                </Box>
                <Box style={stylesTopUsers.name}>
                  <span>Михаил</span>
                  <span>Загородний</span>
                </Box>
                <Box style={stylesTopUsers.role}>
                  Дизайн
                </Box>
              </Box>

              <Box style={stylesTopUsers.user}>
                <Box style={stylesTopUsers.avatar}>
                  <img style={{width: "100%"}} src="https://kinowar.com/wp-content/uploads/2021/01/%D0%90%D0%BD%D0%B0-%D0%B4%D0%B5-%D0%90%D1%80%D0%BC%D0%B0%D1%81-%D1%84%D0%BE%D1%82%D0%BE%D1%81%D0%B5%D1%81%D1%81%D0%B8%D1%8F-%D0%B4%D0%BB%D1%8F-%D0%B6%D1%83%D1%80%D0%BD%D0%B0%D0%BB%D0%B0-The-Sunday-Times-Style.jpg" alt="" />
                </Box>
                <Box style={stylesTopUsers.name}>
                  <span>Михаил</span>
                  <span>Загородний</span>
                </Box>
                <Box style={stylesTopUsers.role}>
                  Дизайн
                </Box>
              </Box>

              <Box style={stylesTopUsers.user}>
                <Box style={stylesTopUsers.avatar}>
                  <img style={{width: "100%"}} src="https://kinowar.com/wp-content/uploads/2021/01/%D0%90%D0%BD%D0%B0-%D0%B4%D0%B5-%D0%90%D1%80%D0%BC%D0%B0%D1%81-%D1%84%D0%BE%D1%82%D0%BE%D1%81%D0%B5%D1%81%D1%81%D0%B8%D1%8F-%D0%B4%D0%BB%D1%8F-%D0%B6%D1%83%D1%80%D0%BD%D0%B0%D0%BB%D0%B0-The-Sunday-Times-Style.jpg" alt="" />
                </Box>
                <Box style={stylesTopUsers.name}>
                  <span>Михаил</span>
                  <span>Загородний</span>
                </Box>
                <Box style={stylesTopUsers.role}>
                  Дизайн
                </Box>
              </Box>

              <Box style={stylesTopUsers.user}>
                <Box style={stylesTopUsers.avatar}>
                  <img style={{width: "100%"}} src="https://kinowar.com/wp-content/uploads/2021/01/%D0%90%D0%BD%D0%B0-%D0%B4%D0%B5-%D0%90%D1%80%D0%BC%D0%B0%D1%81-%D1%84%D0%BE%D1%82%D0%BE%D1%81%D0%B5%D1%81%D1%81%D0%B8%D1%8F-%D0%B4%D0%BB%D1%8F-%D0%B6%D1%83%D1%80%D0%BD%D0%B0%D0%BB%D0%B0-The-Sunday-Times-Style.jpg" alt="" />
                </Box>
                <Box style={stylesTopUsers.name}>
                  <span>Михаил</span>
                  <span>Загородний</span>
                </Box>
                <Box style={stylesTopUsers.role}>
                  Дизайн
                </Box>
              </Box>

              <Box style={stylesTopUsers.user}>
                <Box style={stylesTopUsers.avatar}>
                  <img style={{width: "100%"}} src="https://kinowar.com/wp-content/uploads/2021/01/%D0%90%D0%BD%D0%B0-%D0%B4%D0%B5-%D0%90%D1%80%D0%BC%D0%B0%D1%81-%D1%84%D0%BE%D1%82%D0%BE%D1%81%D0%B5%D1%81%D1%81%D0%B8%D1%8F-%D0%B4%D0%BB%D1%8F-%D0%B6%D1%83%D1%80%D0%BD%D0%B0%D0%BB%D0%B0-The-Sunday-Times-Style.jpg" alt="" />
                </Box>
                <Box style={stylesTopUsers.name}>
                  <span>Михаил</span>
                  <span>Загородний</span>
                </Box>
                <Box style={stylesTopUsers.role}>
                  Дизайн
                </Box>
              </Box>

              <Box style={stylesTopUsers.user}>
                <Box style={stylesTopUsers.avatar}>
                  <img style={{width: "100%"}} src="https://kinowar.com/wp-content/uploads/2021/01/%D0%90%D0%BD%D0%B0-%D0%B4%D0%B5-%D0%90%D1%80%D0%BC%D0%B0%D1%81-%D1%84%D0%BE%D1%82%D0%BE%D1%81%D0%B5%D1%81%D1%81%D0%B8%D1%8F-%D0%B4%D0%BB%D1%8F-%D0%B6%D1%83%D1%80%D0%BD%D0%B0%D0%BB%D0%B0-The-Sunday-Times-Style.jpg" alt="" />
                </Box>
                <Box style={stylesTopUsers.name}>
                  <span>Михаил</span>
                  <span>Загородний</span>
                </Box>
                <Box style={stylesTopUsers.role}>
                  Дизайн
                </Box>
              </Box>

              <Box style={stylesTopUsers.user}>
                <Box style={stylesTopUsers.avatar}>
                  <img style={{width: "100%"}} src="https://kinowar.com/wp-content/uploads/2021/01/%D0%90%D0%BD%D0%B0-%D0%B4%D0%B5-%D0%90%D1%80%D0%BC%D0%B0%D1%81-%D1%84%D0%BE%D1%82%D0%BE%D1%81%D0%B5%D1%81%D1%81%D0%B8%D1%8F-%D0%B4%D0%BB%D1%8F-%D0%B6%D1%83%D1%80%D0%BD%D0%B0%D0%BB%D0%B0-The-Sunday-Times-Style.jpg" alt="" />
                </Box>
                <Box style={stylesTopUsers.name}>
                  <span>Михаил</span>
                  <span>Загородний</span>
                </Box>
                <Box style={stylesTopUsers.role}>
                  Дизайн
                </Box>
              </Box>
          </Grid>
        </Grid>

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
            <Grid item style={{
              padding: "24px 12px",
              borderRadius: 8,
              background: "#fff",
              display: "flex",
              flexDirection: "column",
              alignItems: "start",
              marginRight: 16,

            }}> {/*leftFilter*/}
              <Box style={leftFilter.ageCont}>
                <Box style={leftFilter.title}>ВОЗРАСТ</Box>
                <Box style={{marginBottom: 8, display: "flex", alignItems: "center"}}>
                  <span style={{fontSize: 12, fontWeight: 700, marginRight: 8, width: 20}}>От</span>
                  <Box style={leftFilter.ageController}>
                    <Button
                      style={leftFilter.ageButton}
                      onClick={() => {
                        if(fromAge > 0) {
                          setFromAge(fromAge - 1)
                        }
                      }}
                    >-</Button>
                    <InputBase
                      style={leftFilter.inputAge}
                      value={fromAge}
                      onChange={(e) => {
                        if(Number(e.target.value) <= upToAge && Number(e.target.value) > 0) {
                          setFromAge(Number(e.target.value));
                        }
                      }}
                    />
                    <Button
                      style={{
                        ...leftFilter.ageButton,
                        ...{paddingTop: 3},
                        ...fromAge===upToAge ? {color: "#C4C4C4"}: {}
                      }}
                      onClick={() => {
                        if(fromAge < upToAge) {
                          setFromAge(fromAge + 1)
                        }
                      }}
                    >+</Button>
                  </Box>
                </Box>


                <Box style={{marginBottom: 8, display: "flex", alignItems: "center"}}>
                  <span style={{fontSize: 12, fontWeight: 700, marginRight: 8, width: 20}}>До</span>
                  <Box style={leftFilter.ageController}>
                    <Button
                      style={{
                        ...leftFilter.ageButton,
                        ...fromAge===upToAge ? {color: "#C4C4C4"}: {}
                      }}
                      onClick={() => {
                        if(fromAge < upToAge) {
                          setUpToAge(upToAge-1)
                        }
                      }}
                    >-</Button>
                    <InputBase
                      style={leftFilter.inputAge}
                      value={upToAge}
                      onChange={(e) => {
                        if(fromAge <= Number(e.target.value) && Number(e.target.value) <= 100) {
                          setUpToAge(Number(e.target.value));
                        }
                      }}
                    />
                    <Button
                      style={{...leftFilter.ageButton, ...{paddingTop: 3}}}
                      onClick={() => {
                        if(Number(upToAge < 99))
                        setUpToAge(upToAge+1)
                      }}
                    >+</Button>
                  </Box>
                </Box>

              </Box>
              <Box style={{width: "100%"}}>
                <Box style={leftFilter.title}>КАТЕГОРИЯ</Box>

                <Box sx={leftFilter.categories}>
                  <FormGroup>
                    <FormControlLabel control={
                      <Checkbox
                        icon={<BpIcon />}
                        checkedIcon={<BpCheckedIcon />}
                      />
                    } label="Медитация" sx={FormControlLabelStyles} />
                    <FormControlLabel control={
                      <Checkbox
                        icon={<BpIcon />}
                        checkedIcon={<BpCheckedIcon />}
                      />
                    } label="Спорт" sx={FormControlLabelStyles} />
                    <FormControlLabel control={
                      <Checkbox
                        icon={<BpIcon />}
                        checkedIcon={<BpCheckedIcon />}
                      />
                    } label="Йога" sx={FormControlLabelStyles} />
                    <FormControlLabel control={
                      <Checkbox
                        icon={<BpIcon />}
                        checkedIcon={<BpCheckedIcon />}
                      />
                    } label="Рисование" sx={FormControlLabelStyles} />
                    <FormControlLabel control={
                      <Checkbox
                        icon={<BpIcon />}
                        checkedIcon={<BpCheckedIcon />}
                      />
                    } label="Видеоигры" sx={FormControlLabelStyles} />
                    <FormControlLabel control={
                      <Checkbox
                        icon={<BpIcon />}
                        checkedIcon={<BpCheckedIcon />}
                      />
                    } label="Музыка" sx={FormControlLabelStyles} />
                    <FormControlLabel control={
                      <Checkbox
                        icon={<BpIcon />}
                        checkedIcon={<BpCheckedIcon />}
                      />
                    } label="Мода и стиль" sx={FormControlLabelStyles} />
                  </FormGroup>
                </Box>

              </Box>
              <Box style={{width: 180, marginBottom: "24px"}}>
                <Box style={leftFilter.title}>ПОИСК ПО НИКУ</Box>
                <SearchInput name="at" placeholder="Введите ник" />
              </Box>
              <Box style={{display: "flex", }}>
                <Button
                  style={{
                    color: "#4776E6",
                    fontSize: 12,
                    fontWeight: 700,
                    textTransform: "none",
                    marginRight: 8,
                    background: "#E8EFFF",
                    borderRadius: 8,
                    padding: "10px 13px"
                  }}
                >
                  Применить фильтр
                </Button>

                <Button
                  style={{
                    width: 36,
                    height: 36,
                    background: "#F7F5F9",
                    borderRadius: 8,
                    minHeight: 0,
                    minWidth: 0,

                  }}
                >
                  <Icon name="delete" />
                </Button>
              </Box>
            </Grid>
            <Grid item style={{width: 700}}>
              <Box style={{
                marginBottom: 24,
                display: "flex"
              }}> {/*topFilter*/}
                <Box style={{flexGrow: 1, marginRight: "16px", background: "#fff"}}>
                  <SearchInput name="search" placeholder="Поиск авторов..." />
                </Box>

                <ButtonBase style={{
                  width: 238,
                  height: 40,
                  background: "#fff",
                  display: "flex",
                  borderRadius: 8,
                  border: "1px solid #ECE9F1",
                  justifyContent: "start",
                  // alignItems: "center"
                }}>
                  <Box
                    style={{
                      minWidth: 0,
                      minHeight: 0,
                      width: 40,
                      height: 40,
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      borderRight: "1px solid #ECE9F1",
                      borderRadius: 0,
                      marginRight: 8
                    }}
                  >
                    <Icon name="filter" />
                  </Box>

                  <Box style={{
                    fontSize: 12,
                    fontWeight: 700,
                    color: "#5D5E65"
                  }}>
                    По популярности
                  </Box>
                </ButtonBase>
              </Box>

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

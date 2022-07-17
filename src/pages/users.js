import React, { useEffect, useState } from 'react'
import { Button, Grid, ButtonBase, Box, InputBase } from '@mui/material'
import { SharedLeftMenu } from '../layout/components/SharedLeftMenu'
import { LeftFilter } from './users/LeftFilter'
import { TopUsers } from './users/TopUsers'
import { TopFilter } from './users/TopFilter'
import { User } from './users/User'
import { PagesController } from './users/PagesController'
import useWindowDimensions from '../useWindowDimensions'
import { t } from 'i18next'
import axios from 'axios'

const categories = [
  "Медитация",
  "Спорт",
  "Йога",
  "Рисование",
  "Видеоигры",
  "Музыка",
  "Мода и Стиль"
];

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
  const [currentPage, setCurrentPage] = useState(0);
  useEffect(() => {
    loadUsers(currentPage);
  }, []);

  const loadUsers = (page) => {
    return axios.get('/api/users', {
      params: {
        page
      }
    }).then(res => setUsers(res.data));
  }

  const [users, setUsers] = useState([])

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
        {/*<TopUsers users={users} />*/}
        <Grid item>
          {/*<Box sx={{*/}
          {/*  ...title,*/}
          {/*  marginBottom: {*/}
          {/*    xs: "36px",*/}
          {/*    sm: "24px"*/}
          {/*  }*/}
          {/*}}>*/}
          {/*  <Box style={{fontSize: 24, fontWeight: 700}}>*/}
          {/*    {t("USERS.TOP_AUTHORS")}*/}
          {/*  </Box>*/}
          {/*  <Button*/}
          {/*    sx={{*/}
          {/*      ...wantToTop,*/}
          {/*      fontSize: {*/}
          {/*        xs: 16,*/}
          {/*        md: 20*/}
          {/*      },*/}
          {/*      padding: {*/}
          {/*        xs: "8px 12px",*/}
          {/*        md: "12px 24px"*/}
          {/*      }*/}
          {/*    }}*/}
          {/*  >{t("USERS.WANT_TO_TOP")}</Button>*/}
          {/*</Box>*/}

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
              />
              <User users={users} />
              <PagesController count={users.pages} currentPageCallback={(currentPage) => {
                console.log('currentpageseted: ', currentPage);
                setCurrentPage(currentPage);
                loadUsers(currentPage);
              }} pages={users.pages} />
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </Grid>
    )
  }

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
import { ProductCart } from './profile/modals/ProductCart'
import axios from 'axios'

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
    loadShopData();
  }, [])

  const [shopItems, setShopItems] = useState([]);

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
  const [currentPage, setCurrentPage] = useState(0);
  const loadShopData = () => {
    axios.get('/api/shop').then(res => setShopItems(res.data));
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
            <div style={{ marginTop: 10 }}>
              {shopItems?.data?.length ? <div>
                <Grid container spacing={1}>
                  {shopItems.data.map(product => {
                    return <Grid item xs={12} sm={6}>
                      <ProductCart product={product}/>
                    </Grid>
                  })}
                </Grid>
              </div> : t('COMMON.NOTHING_HERE_YET')}
            </div>
            <PagesController count={shopItems.pages} currentPageCallback={(currentPage) => {
              setCurrentPage(currentPage);
              loadShopData(currentPage);
            }} pages={shopItems.pages} />
          </Grid>
        </Grid>
      </Box>
    </Grid>
  );
}

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
import { LeftFilter } from './shop/LeftFilter'
import { TopFilter } from './shop/TopFilter'
import { User } from './users/User'
import { PagesController } from './users/PagesController'
import useWindowDimensions from '../useWindowDimensions'
import { ProductCart } from './profile/modals/ProductCart'
import axios from 'axios'
import { beURL } from '../config'

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

  console.log(shopItems)

  const [fromAge, setFromAge] = useState(21)
  const [upToAge, setUpToAge] = useState(21)

  const [sortBy, setSortBy] = useState(t("SHOP.POPULAR") + " ⭐");
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
    debugger;
    axios.get('/api/shop').then(res => {
      debugger;
      setShopItems(res.data)
    });
    debugger;
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
              findNickname={findNickname}
              setFindNickname={setFindNickname}
            />



            <div style={{ marginTop: 10 }}>
              {shopItems.data?.length ? <div>
                <Grid container spacing={1}>
                  {shopItems.data.map(product => {
                    return <Grid item xs={6} md={4}>
                      {/*<ProductCart product={product}/>*/}

                      <Box sx={{
                        display: "flex",
                        flexDirection: "column",
                        background: "#fff",
                        padding: "8px",
                        borderRadius: "8px",
                        alignItems: "start",
                        cursor: "pointer",
                        overflow: "hidden",
                      }}>
                        <Box sx={{
                          width: "200px",
                          height: "156px",
                          borderRadius: "8px",
                          position: "relative",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          marginBottom: "8px",
                          overflow: "hidden"
                        }}>
                          <img style={{width: "100%"}} src={beURL + product?.pictures[0]} alt="" />
                        </Box>

                        <Box sx={{
                          fontSize: "14px",
                          fontWeight: 700,
                          color: "#1A051D",
                          textTransform: "uppercase"
                        }}>
                          {product.name}
                        </Box>

                        <Box sx={{
                          fontSize: "12px",
                          fontWeight: 400,
                          color: "#5D5E65"
                        }}>
                          {product.description}
                        </Box>

                        <Box sx={{
                          display: "flex",
                          justifyContent: "space-between",
                          width: "100%",
                          alignItems: "center",
                          marginTop: "16px"
                        }}>
                          <span style={{fontSize: "18px", fontWeight: 700, color: "#1A051D"}}>$ {product.price}</span>
                          <Button sx={{
                            minWidth: 0,
                            minHeight: 0,
                            color: "#fff",
                            fontSize: 14,
                            fontWeight: 700,
                            padding: "8px 24px",
                            borderRadius: "8px",
                            background: "linear-gradient(94.04deg, #4776E6 10.41%, #8E54E9 77.48%)",
                            textTransform: "none",
                          }}><span style={{lineHeight: "16px"}}>{t("SHOP.BUY")}</span></Button>
                        </Box>

                      </Box>

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

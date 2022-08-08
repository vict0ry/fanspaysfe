import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import { AddProduct } from './AddProduct'
import React, { useEffect, useRef, useState } from 'react'
import axios from 'axios'
import { beURL } from '../../../config'
import { t } from 'i18next'
import { Icon } from '../../messages/Icon'

export const Products = () => {
  const productsBox = useRef(null);

  const [addProductOpen, setAddProductOpen] = useState(false);
  const [products, setProducts] = useState([]);

  const [sliderNumber, setSliderNumber] = useState(0);

  console.log(products)
  console.log(sliderNumber)

  const loadShopData = () => {
    axios.get('/api/shop').then(res => {
      setProducts(res.data.data)
    });
  }

  useEffect(() => {
    // productsBox?.current?.scrollTo(304*sliderNumber, 0, {behavior: 'smooth'})
    productsBox?.current?.scrollTo({ left: 304*sliderNumber, behavior: 'smooth' })
  }, [sliderNumber])

  useEffect(() => {
    loadShopData();
  }, [])

  if(!addProductOpen && !products.length){
    return(
      <Box sx={{
        marginTop: "30%",
        fontSize: "18px",
        fontWeight: 700,
        lineHeight: "32px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        height: "100%",
        justifyContent: "center"
      }}>
        <Box>You have not added any products yet.</Box>
        <Box sx={{marginBottom: "40px"}}>Sell your merch or exclusive items</Box>

        <Button
          sx={{
            background: '#E8EFFF',
            padding: '10px 24px',
            borderRadius: '8px',
            border: '1px dashed #4776E6',
            textTransform: 'none',
            fontSize: "14px",
            fontWeight: 700,
            lineHeight: "20px"
          }}
          onClick={() => {
            setAddProductOpen(true);
          }}
        >
          <img style={{marginRight: "8px"}} src="/images/icons/plus.svg" alt="add" />
          <span style={{color: '#4776E6', marginLeft: '5px'}}>Add product</span>
        </Button>
      </Box>
    );
  } else if(addProductOpen){
    return(
      <AddProduct
        setAddProductOpen={setAddProductOpen}
      />
    )
  } else {
    return(
      <Box>
        <Box sx={{color: "#5D5E65", fontSize: "18px", fontWeight: 700, marginBottom: "16px"}}>{t("EDIT.PRODUCTS")}</Box>
        <Box
          ref={productsBox}
          sx={{
            display: "flex",
            columnGap: "24px",
            marginBottom: "24px",
            overflow: "hidden",
            // boxShadow: "inset -24px 0px 23px -10px #FFFFFF"
          }}
        >
          {products.map(product => {
            return (
              <Box sx={{
                padding: "12px",
              }}>
                <Box sx={{
                  width: "256px",
                  height: "200px",
                  borderRadius: "8px",
                  overflow: "hidden",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  marginBottom: "8px"
                }}>
                  <img src={beURL + product.pictures[0]} alt="" />
                </Box>
                <Box sx={{
                  fontSize: "18px",
                  fontWeight: 700,
                  // textTransform: "uppercase",
                  marginBottom: "4px",
                  color: "#1A051D",
                  // letterSpacing: "1px"
                }}>
                  {product.name}
                </Box>
                <Box sx={{color: "#5D5E65", fontSize: "14px", fontWeight: 400, marginBottom: "16px"}}>
                  {product.description}
                </Box>
                <Box sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center"
                }}>
                  <Box sx={{fontSize: "24px", fontWeight: 700}}>$ {product.price}</Box>
                  <Button sx={{
                    minHeight: 0,
                    minWidth: 0,
                    background: "linear-gradient(90deg, #4776E6, #8E54E9)",
                    borderRadius: "8px",
                    padding: "8px 24px",
                    color: "#fff",
                    fontSize: "16px",
                    fontWeight: 700,
                    lineHeight: "24px",
                    textTransform: "none"
                  }}>
                    {t("EDIT.BUY")}
                  </Button>
                </Box>
              </Box>
            );
          })}
        </Box>

        <Box sx={{display: "flex", marginBottom: "40px"}}>
          <Button
            sx={{
              minHeight: 0,
              minWidth: 0,
              marginRight: "8px"
            }}
            onClick={() => {
              if(sliderNumber > 0) {
                setSliderNumber(sliderNumber - 1);
              }
            }}
          >
            <Icon
              name="longLeft"
              color={sliderNumber === 0 ? "#E8EFFF" : "#4776E6"}
            />
          </Button>

          <Button
            sx={{
              minHeight: 0,
              minWidth: 0
            }}
            onClick={() => {
              if(sliderNumber < products.length-2){
                setSliderNumber(sliderNumber+1);
              }
            }}
          >
            <Icon
              name="longRight"
              color={sliderNumber === products.length-2 ? "#E8EFFF" : "#4776E6"}
            />
          </Button>
        </Box>

        <Button
          sx={{
            background: '#E8EFFF',
            padding: '10px 24px',
            borderRadius: '8px',
            border: '1px dashed #4776E6',
            textTransform: 'none',
            fontSize: "14px",
            fontWeight: 700,
            lineHeight: "20px"
          }}
          onClick={() => {
            setAddProductOpen(true);
          }}
        >
          <img style={{marginRight: "8px"}} src="/images/icons/plus.svg" alt="add" />
          <span style={{color: '#4776E6', marginLeft: '5px'}}>Add product</span>
        </Button>
      </Box>
    );
  }
}
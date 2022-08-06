import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import { AddProduct } from './AddProduct'
import React, { useEffect, useState } from 'react'
import axios from 'axios'

export const Products = () => {
  const [addProductOpen, setAddProductOpen] = useState(false);
  const [products, setProducts] = useState([]);

  console.log(products)

  const loadShopData = () => {
    axios.get('/api/shop').then(res => {
      setProducts(res.data.data)
    });
  }

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

      </Box>
    );
  }
}
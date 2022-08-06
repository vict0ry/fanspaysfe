import { Box } from '@material-ui/core'
import Button from '@mui/material/Button'
import { Icon } from '../../messages/Icon'
import { SearchInput } from './SearchInput'
import { t } from 'i18next'
import React, { useState } from 'react'

export const WishModal = ({setAddWishOpen}) => {
  const [nameWish, setNameWish] = useState("");
  const [amountWish, setAmountWish] = useState("");

  return(
    <Box
      onClick={e => {
        e.stopPropagation();
        setAddWishOpen(false);
      }}
      sx={{
        position: "fixed",
        width: "100vw",
        height: "100vh",
        backdropFilter: "blur(4px)",
        zIndex: 2,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        cursor: "initial",
        top: 0,
        left: 0,
        background: "rgba(0, 0, 255, 0.03)"
      }}
    >
      <Box
        onClick={e => {
          e.stopPropagation();
        }}
        sx={{
          background: "#fff",
          borderRadius: "8px",
          width: "500px",
          padding: "24px 48px",
          cursor: "initial",
          position: "relative"
        }}
      >
        <Button
          sx={{
            minWidth: 0,
            minHeight: 0,
            position: "absolute",
            right: "24px",
            top: "24px",
            padding: 0
          }}
          onClick={() => {
            setAddWishOpen(false);
          }}
        >
          <Icon name="X" />
        </Button>

        <Box sx={{ display: 'flex', justifyContent: 'center', marginBottom: '32px' }}>
          <Box sx={{
            // background: 'linear-gradient(94.04deg, #4776E6 10.41%, #8E54E9 77.48%)',
            // webkitBackgroundClip: 'text',
            // webkitTextFillColor: 'transparent',
            // backgroundClip: 'text',
            // textFillColor: 'transparent',
            color: "#8E54E9",
            fontSize: '24px',
            fontWeight: 700
          }}>
            Adding a wish
          </Box>
        </Box>

        <Box sx={{marginBottom: "24px"}}>
          <Box sx={{marginBottom: "8px", fontSize: "14px", fontWeight: 700, color: "#5D5E65", textAlign: "start"}}>Name</Box>
          <SearchInput
            value={nameWish}
            setValue={e => setNameWish(e.target.value)}
            other={{
              placeholder: "Name of fundraising goal"
            }}
          />
        </Box>

        <Box sx={{marginBottom: "24px"}}>
          <Box sx={{marginBottom: "8px", fontSize: "14px", fontWeight: 700, color: "#5D5E65", textAlign: "start"}}>Amount</Box>
          <SearchInput
            icon="dollar"
            value={amountWish}
            setValue={e => {
              if(e.target.value.length <= 7 && !isNaN(Number(e.target.value))){
                setAmountWish(e.target.value)
              }
            }}
            other={{
              placeholder: "1000"
            }}
          />
        </Box>

        <Box sx={{display: "flex", justifyContent: "center"}}>
          <Button
            sx={{
              minWidth: 0,
              minHeight: 0,
              background: "#E8EFFF",
              color: "#4776E6",
              fontSize: "14px",
              fontWeight: 700,
              lineHeight: "20px",
              borderRadius: "8px",
              padding: "10px 24px",
              textTransform: "none",
              marginRight: "24px"
            }}
            onClick={() => {
              setAddWishOpen(false);
            }}
          >
            {t("EDIT.CANCEL")}
          </Button>

          <Button
            variant="contained"
            sx={{
              minWidth: 0,
              minHeight: 0,
              background: "#4776E6",
              color: "#fff",
              fontSize: "14px",
              fontWeight: 700,
              lineHeight: "20px",
              borderRadius: "8px",
              padding: "10px 24px",
              textTransform: "none"
            }}
            onClick={() => {

            }}
          >
            {t("EDIT.ADD")}
          </Button>
        </Box>

      </Box>
    </Box>
  );
}
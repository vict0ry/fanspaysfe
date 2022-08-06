import { Box } from '@material-ui/core'
import Button from '@mui/material/Button'
import { Icon } from '../../messages/Icon'
import { SearchInput } from './SearchInput'
import { Select } from '@mui/material'
import Chip from '@mui/material/Chip'
import MenuItem from '@mui/material/MenuItem'
import { t } from 'i18next'
import React from 'react'

export const BenefitModal = ({setOpenBenefitModal, nameBenefit, setNameBenefit, benefits, categoryBenefit, setCategoryBenefit}) => {
  return (
    <Box
      onClick={e => {
        e.stopPropagation();
        setOpenBenefitModal(false);
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
            setOpenBenefitModal(false)
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
            Adding a benefit
          </Box>
        </Box>

        <Box sx={{marginBottom: "24px"}}>
          <Box sx={{marginBottom: "8px", fontSize: "14px", fontWeight: 700, color: "#5D5E65", textAlign: "start"}}>Name</Box>
          <SearchInput
            value={nameBenefit}
            setValue={e => setNameBenefit(e.target.value)}
            other={{
              placeholder: "Benefit name"
            }}
          />
        </Box>

        <Box sx={{marginBottom: "24px"}}>
          <Box sx={{marginBottom: "8px", fontSize: "14px", fontWeight: 700, color: "#5D5E65", textAlign: "start"}}>Category</Box>
          <Select
            fullWidth
            value={categoryBenefit}
            onChange={e => setCategoryBenefit(e.target.value)}
            sx={{
              width: '100%',
              // height: '38px',
              fontSize: "16px",
              fontWeight: 600,
              color: "#1A051D",
              borderRadius: "8px",
              border: "1px solid #ECE9F1",
              '& .css-11u53oe-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input': {
                padding: "10px"
              },
              '& .css-1d3z3hw-MuiOutlinedInput-notchedOutline': {
                border: "none"
              },
              textAlign: "start"
            }}
            MenuProps={{
              PaperProps: {
                style: {
                  maxHeight: "200px",
                  borderRadius: "8px",
                  overflowY: "auto",
                  padding: 0
                }
              }
            }}
            variant="outlined"
            renderValue={(selected) => {
              if (selected.length === 0) {
                return "View the options";
              }
              return <Box sx={{display: 'flex', flexWrap: 'wrap', gap: "5px"}}>
                {selected.map((value, i) => (
                  <Chip sx={{background: "#E8EFFF"}} key={value} label={benefits[value]} />
                ))}
              </Box>
            }}
            displayEmpty
            multiple
          >
            {benefits.map((benefit, i) => {
              return <MenuItem key={i} sx={{fontSize: "14px", fontWeight: 700, padding: "8px"}} value={i}>{benefit}</MenuItem>
            })}
          </Select>
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
              setOpenBenefitModal(false);
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
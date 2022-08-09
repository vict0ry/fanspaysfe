import Box from '@mui/material/Box'
import { t } from 'i18next'
import OutlinedInput from '@mui/material/OutlinedInput'
import InputAdornment from '@mui/material/InputAdornment'
import IconButton from '@mui/material/IconButton'
import VisibilityOff from '@mui/icons-material/VisibilityOff'
import Visibility from '@mui/icons-material/Visibility'
import Button from '@mui/material/Button'
import React, { useState } from 'react'

export const ChangePassword = ({newPassword, setNewPassword, confirmPassword, setConfirmPassword, setChangePasswordOpen}) => {
  const [showPassword, setShowPassword] = useState(false);

  return(
    <Box>
      <Box sx={{
        color: "#5D5E65",
        fontSize: "18px",
        fontWeight: 700,
        marginBottom: "32px"
      }}>
        {t("EDIT.PASSWORD_CHANGE")}
      </Box>

      <Box sx={{marginBottom: "16px"}}>
        <Box sx={{ color: "#5D5E65", fontSize: "14px", fontWeight: 700, marginBottom: "8px" }}>{t("EDIT.INPUT_NEW_PASSWORD")}</Box>
        <OutlinedInput
          sx={{
            borderRadius: "8px",
            '& .css-1d3z3hw-MuiOutlinedInput-notchedOutline': {
              border: "1px solid #ECE9F1"
            },
            '& .css-nxo287-MuiInputBase-input-MuiOutlinedInput-input': {
              padding: "12px"
            },
            '& svg:not([fill])': {
              fill: showPassword ? "#383838" : "#B3B3B3"
            },
            fontSize: "16px",
            fontWeight: 600
          }}
          placeholder={t("EDIT.PASSWORD")}
          type={showPassword ? 'text' : 'password'}
          value={newPassword}
          onChange={e => setNewPassword(e.target.value)}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={e => setShowPassword(!showPassword)}
                // onMouseDown={handleMouseDownPassword}
                edge="end"
              >
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          }
        />
      </Box>

      <Box sx={{marginBottom: "16px"}}>
        <Box sx={{ color: "#5D5E65", fontSize: "14px", fontWeight: 700, marginBottom: "8px" }}>{t("EDIT.CONFIRM_PASSWORD")}</Box>
        <OutlinedInput
          sx={{
            borderRadius: "8px",
            '& .css-1d3z3hw-MuiOutlinedInput-notchedOutline': {
              border: "1px solid #ECE9F1"
            },
            '& .css-nxo287-MuiInputBase-input-MuiOutlinedInput-input': {
              padding: "12px"
            },
            '& svg:not([fill])': {
              fill: showPassword ? "#383838" : "#B3B3B3"
            },
            fontSize: "16px",
            fontWeight: 600
          }}
          placeholder={t("EDIT.PASSWORD")}
          type={showPassword ? 'text' : 'password'}
          value={confirmPassword}
          onChange={e => setConfirmPassword(e.target.value)}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={e => setShowPassword(!showPassword)}
                // onMouseDown={handleMouseDownPassword}
                edge="end"
              >
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          }
        />
      </Box>

      <Box sx={{display: "flex", marginTop: "40px"}}>
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
            textTransform: "none",
            marginRight: "24px"
          }}
          onClick={() => {

          }}
        >
          {t("EDIT.SAVE")}
        </Button>

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
            textTransform: "none"
          }}
          onClick={() => {
            setChangePasswordOpen(false);
          }}
        >
          {t("EDIT.CANCEL")}
        </Button>
      </Box>

    </Box>
  );
}
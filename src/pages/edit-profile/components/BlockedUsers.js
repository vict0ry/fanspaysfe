import Box from '@mui/material/Box'
import { t } from 'i18next'
import Button from '@mui/material/Button'
import { Icon } from '../../messages/Icon'
import { beURL } from '../../../config'
import React from 'react'

const chooseColor = (user) => {
  if(!user.isPossible){
    return "#B3B3B3";
  }
  if(user.isMeBlockedRecently){
    return "#E64747";
  }
  if(user.isMeUnblockedRecently){
    return "#1FCC64";
  }

  return "#1A051D";
}

export const BlockedUsers = ({blackList, setBlackList, setBlackListOpen}) => {

  return(
    <Box>
      <Box sx={{
        color: "#5D5E65",
        fontSize: "18px",
        fontWeight: 700,
        marginBottom: "16px",
        display: "flex",
        justifyContent: "space-between"
      }}>
        {t("EDIT.BLACK_LIST")}

        <Button
          // onClick={setBlackListOpen(false)}
          sx={{
            display: "flex",
            alignItems: "center",
            fontSize: "14px",
            fontWeight: 700,
            lineHeight: "20px",
            padding: 0,
            color: "#4776E6"
          }}
        >
          <Icon name="longLeft" color="#4776E6" />
          <span style={{marginLeft: "8px"}}>{t("EDIT.BACK_TO_MENU")}</span>
        </Button>
      </Box>

      <Box sx={{display: "flex", flexDirection: "column", rowGap: "16px"}}>
        {blackList.map(blockedUser => {
          return(
            <Box sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center"
            }}>
              <Box sx={{display: "flex"}}>
                <Box sx={{
                  width: "48px",
                  height: "48px",
                  borderRadius: "50%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  overflow: "hidden",
                  marginRight: "10px"
                }}>
                  <img style={{width: "100%"}} src="https://upload.wikimedia.org/wikipedia/commons/b/b5/IMG-20190601-WA0004.jpg" alt="" />
                </Box>

                <Box sx={{display: "flex", justifyContent: "center", flexDirection: "column"}}>
                  <Box sx={{fontSize: "18px", fontWeight: 700}}>{blockedUser.firstName} {blockedUser.lastName}</Box>
                  <Box sx={{fontSize: "16px", fontWeight: 600, color: "#B3B3B3"}}>@{blockedUser.nickname}</Box>
                </Box>
              </Box>

              <Button sx={{
                display: "flex",
                alignItems: "center",
                textTransform: "none"
              }}>
                <Icon name="circle_forbid" color={chooseColor(blockedUser)} />
                <span
                  style={{
                    marginLeft: "4px",
                    fontSize: "14px",
                    fontWeight: 700,
                    color: chooseColor(blockedUser)
                  }}
                >
                    {t("EDIT.UNBLOCK")}</span>
              </Button>

            </Box>
          );
        })}
      </Box>
    </Box>
  );
}
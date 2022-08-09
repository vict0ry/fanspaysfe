import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import TextField from '@mui/material/TextField'
import FormControlLabel from '@mui/material/FormControlLabel'
import Checkbox from '@mui/material/Checkbox'
import Button from '@mui/material/Button'
import React, { useState } from 'react'
import { t } from 'i18next'
import axios from 'axios'
import { SearchInput } from '../pages/edit-profile/components/SearchInput'
import { FormGroup } from '@mui/material'
import { Icon } from '../pages/messages/Icon'
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { beURL } from '../config'
import { BlockedUsers } from '../pages/edit-profile/components/BlockedUsers'
import { ChangePassword } from '../pages/edit-profile/components/ChangePassword'

const email_notifications = {
  "news": false,
  "information": true,
  "personal": true
}


const push_notifications = {
  "new_messages": false,
  "information": true
}

const labelsCheckbox = {
  "news": t("EDIT.NEWS"),
  "information": t("EDIT.INFORMATION"),
  "personal": t("EDIT.PERSONAL"),
  "new_messages": t("EDIT.NEW_MESSAGES")
}

const FormControlLabelStyles = {
  margin: 0,
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

export const UserParametersTab = ({user,
                                    // email,
                                    // setEmail,
                                    checkboxes, setCheckboxes}) => {

  const [changePasswordOpen, setChangePasswordOpen] = useState(false);

  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [email, setEmail] = useState("");
  const [notifications, setNotifications] = useState(email_notifications);
  const [push, setPush] = useState(push_notifications);

  const [blackList, setBlackList] = useState([
    {firstName: "Настя", lastName: "Деркач", nickname: "derka", isMutually: false, isPossible: true, isMeUnblockedRecently: false, isMeBlockedRecently: false},
    {firstName: "Аня", lastName: "Кошкина", nickname: "derka", isMutually: false, isPossible: false, isMeUnblockedRecently: false, isMeBlockedRecently: false},
    {firstName: "Василий", lastName: "Ткаченко", nickname: "derka", isMutually: false, isPossible: true, isMeUnblockedRecently: true, isMeBlockedRecently: false},
    {firstName: "Лилия", lastName: "Набокова", nickname: "derka", isMutually: false, isPossible: true, isMeUnblockedRecently: false, isMeBlockedRecently: true},
    {firstName: "Johny", lastName: "Danel", nickname: "derka", isMutually: false, isPossible: true, isMeUnblockedRecently: false, isMeBlockedRecently: false},
    {firstName: "Ginger", lastName: "Bread", nickname: "derka", isMutually: false, isPossible: true, isMeUnblockedRecently: false, isMeBlockedRecently: false},
    {firstName: "Настя", lastName: "Деркач", nickname: "derka", isMutually: false, isPossible: true, isMeUnblockedRecently: false, isMeBlockedRecently: false},
    {firstName: "Настя", lastName: "Деркач", nickname: "derka", isMutually: false, isPossible: true, isMeUnblockedRecently: false, isMeBlockedRecently: false},
    {firstName: "Настя", lastName: "Деркач", nickname: "derka", isMutually: false, isPossible: true, isMeUnblockedRecently: false, isMeBlockedRecently: false},
    {firstName: "Настя", lastName: "Деркач", nickname: "derka", isMutually: false, isPossible: true, isMeUnblockedRecently: false, isMeBlockedRecently: false},
    {firstName: "Настя", lastName: "Деркач", nickname: "derka", isMutually: false, isPossible: true, isMeUnblockedRecently: false, isMeBlockedRecently: false},
    {firstName: "Настя", lastName: "Деркач", nickname: "derka", isMutually: false, isPossible: true, isMeUnblockedRecently: false, isMeBlockedRecently: false},
    {firstName: "Настя", lastName: "Деркач", nickname: "derka", isMutually: false, isPossible: true, isMeUnblockedRecently: false, isMeBlockedRecently: false},
    {firstName: "Настя", lastName: "Деркач", nickname: "derka", isMutually: false, isPossible: true, isMeUnblockedRecently: false, isMeBlockedRecently: false},
    {firstName: "Настя", lastName: "Деркач", nickname: "derka", isMutually: false, isPossible: true, isMeUnblockedRecently: false, isMeBlockedRecently: false},
    {firstName: "Настя", lastName: "Деркач", nickname: "derka", isMutually: false, isPossible: true, isMeUnblockedRecently: false, isMeBlockedRecently: false},
    {firstName: "Настя", lastName: "Деркач", nickname: "derka", isMutually: false, isPossible: true, isMeUnblockedRecently: false, isMeBlockedRecently: false},
    {firstName: "Настя", lastName: "Деркач", nickname: "derka", isMutually: false, isPossible: true, isMeUnblockedRecently: false, isMeBlockedRecently: false}
  ]);
  const [blackListOpen, setBlackListOpen] = useState(false);

  const [deactivationOpen, setDeactivationOpen] = useState(false);

  const changePassword = () => {
    const data = {
      oldPassword: oldPassword,
      newPassword: newPassword
    };

    return axios.put('/api/users/updatePassword', data).then((res) => {
      alert(res)
    })
  }

  // console.log(checkboxes)

  console.log(changePasswordOpen)
  console.log(user)

  return(
    <Box>
      {!blackListOpen && !changePasswordOpen && deactivationOpen &&
        <Box>
          <Box sx={{
            color: "#5D5E65",
            fontSize: "18px",
            fontWeight: 700,
            marginBottom: "24px"
          }}>
            {t("EDIT.DEACTIVATION.TITLE")}
          </Box>

          <Box sx={{
            display: "flex",
            alignItems: "center",
            marginBottom: "24px"
          }}>
            <Box sx={{
              overflow: "hidden",
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "80px",
              height: "80px",
              marginRight: "16px"
            }}>
              <img style={{width: "100%"}} src={beURL + user.profilePic} alt="" />
            </Box>
            <Box>
              <Box sx={{fontSize: "18px", fontWeight: 600}}>{user.firstName} {user.lastName}</Box>
              <Box sx={{fontSize: "18px", fontWeight: 700, color: "#5D5E65"}}>@{user.username}</Box>
            </Box>
          </Box>

          <Box sx={{
            fontSize: "18px",
            fontWeight: 700,
            marginBottom: "16px"
          }}>
            {t("EDIT.DEACTIVATION.HEADER")} 🚫
          </Box>
          <Box sx={{color: "#5D5E65", fontSize: "16px", fontWeight: 600, lineHeight: "24px", marginBottom: "16px"}}>
            {t("EDIT.DEACTIVATION.CONTENT")}
          </Box>

          <Box sx={{
            fontSize: "16px",
            fontWeight: 700,
            marginBottom: "8px"
          }}>
            {t("EDIT.DEACTIVATION.ADD_INFO")}
          </Box>
          <Box sx={{
            fontSize: "14px",
            fontWeight: 600,
            lineHeight: "20px",
            color: "#5D5E65",
            display: "flex",
            flexDirection: "column",
            rowGap: "16px",
            marginBottom: "32px"
          }}>
            <Box>{t("EDIT.DEACTIVATION.ADD_INFO1")}</Box>
            <Box>{t("EDIT.DEACTIVATION.ADD_INFO2")}</Box>
            <Box>{t("EDIT.DEACTIVATION.ADD_INFO3")}</Box>
          </Box>

          <Button
            sx={{
              padding: "10px 24px",
              borderRadius: "8px",
              color: "#E64747",
              background: "#FFEDED",
              fontSize: "14px",
              fontWeight: 700,
              lineHeight: "20px",
              textTransform: "none",
              display: "flex",
              alignItems: "center"
            }}
          >
            <Icon name="deactivate" />
            <span style={{ marginLeft: "10px" }}>{t("EDIT.DEACTIVATE")}</span>
          </Button>
        </Box>
      }

      {blackListOpen && !changePasswordOpen && !deactivationOpen &&
        <BlockedUsers
          blackList={blackList}
          setBlackList={setBlackList}
          setBlackListOpen={setBlackListOpen}
        />
      }

      {!blackListOpen && changePasswordOpen && !deactivationOpen &&
        <ChangePassword
          confirmPassword={confirmPassword}
          setConfirmPassword={setConfirmPassword}
          setNewPassword={setNewPassword}
          newPassword={newPassword}
          setChangePasswordOpen={setChangePasswordOpen}
        />
      }

      {!blackListOpen && !changePasswordOpen && !deactivationOpen &&
        <Box
          component="form"
          noValidate
          onSubmit={() => {

          }}
          sx={{}}
        >
          <Box sx={{
            color: "#5D5E65",
            fontSize: "18px",
            fontWeight: 700,
            marginBottom: "16px"
          }}>
            {t("EDIT.PARAMETERS")}
          </Box>

          <Button
            // variant={'blue'}
            // onClick={setChangePasswordOpen(true)}
            sx={{
              padding: "10px 24px",
              display: "flex",
              alignItems: "center",
              background: "#E8EFFF",
              borderRadius: "8px",
              color: "#4776E6",
              fontSize: "14px",
              fontWeight: 700,
              lineHeight: "20px",
              textTransform: "none",
              marginBottom: "24px"
            }}
          >
            <img style={{ paddingRight: '10px' }} src="/images/icons/key-alt.svg" alt="change pass" />
            Change password
          </Button>

          <Box sx={{ marginBottom: "24px" }}>
            <Box sx={{ color: "#5D5E65", fontSize: "14px", fontWeight: 700, marginBottom: "8px" }}>{t("EDIT.EMAIL")}</Box>
            <SearchInput
              value={email}
              setValue={(e) => {
                setEmail(e.target.value);
              }}
            />
          </Box>

          <Box sx={{ marginBottom: "24px" }}>
            <Box sx={{
              color: "#5D5E65",
              fontSize: "14px",
              fontWeight: 700,
              marginBottom: "8px"
            }}>{t("EDIT.EMAIL_NOTIFICATIONS")}</Box>
            <Box>
              <FormGroup sx={{ display: "flex", flexDirection: "column", rowGap: "8px" }}>
                {Object.keys(notifications).map((type, i) => {
                  return (
                    <FormControlLabel key={type}
                                      control={
                                        <Checkbox
                                          icon={<BpIcon />}
                                          checkedIcon={<BpCheckedIcon />}
                                          name={type}
                                          onChange={(e) => {
                                            const temp = { ...notifications }
                                            temp[type] = e.target.checked
                                            setNotifications(temp);
                                          }}
                                        />
                                      }
                                      checked={notifications[type]}
                                      label={t("EDIT." + type.toUpperCase())}
                                      sx={FormControlLabelStyles}
                    />
                  );
                })}
              </FormGroup>
            </Box>
          </Box>

          <Box sx={{ marginBottom: "24px" }}>
            <Box sx={{
              color: "#5D5E65",
              fontSize: "14px",
              fontWeight: 700,
              marginBottom: "8px"
            }}>{t("EDIT.PUSH_NOTIFICATIONS")}</Box>
            <Box>
              <FormGroup sx={{ display: "flex", flexDirection: "column", rowGap: "8px" }}>
                {Object.keys(push).map((type, i) => {
                  return (
                    <FormControlLabel
                      control={
                        <Checkbox
                          icon={<BpIcon />}
                          checkedIcon={<BpCheckedIcon />}
                          name={type}
                          onChange={(e) => {
                            const temp = { ...push }
                            temp[type] = e.target.checked
                            setPush(temp);
                          }}
                        />
                      }
                      checked={push[type]}
                      label={t("EDIT." + type.toUpperCase())}
                      sx={FormControlLabelStyles}
                    />
                  );
                })}
              </FormGroup>
            </Box>
          </Box>

          <Box sx={{ marginBottom: "32px" }}>
            <Box sx={{
              color: "#5D5E65",
              fontSize: "14px",
              fontWeight: 700,
              marginBottom: "8px"
            }}>{t("EDIT.BLACK_LIST")}</Box>
            <Button
              sx={{
                fontSize: "12px",
                fontWeight: 700,
                display: "flex",
                alignItems: "center",
                padding: 0
              }}
              // onClick={setBlackListOpen(true)}
            >
              <Icon name="circle_forbid" color="#1A051D" />
              <span style={{ margin: "0 8px" }}>{t("EDIT.BLOCKED_USERS")}</span>
              <Icon name="littleRight" />
            </Button>
          </Box>

          <Button
            sx={{
              padding: "10px 24px",
              borderRadius: "8px",
              color: "#E64747",
              background: "#FFEDED",
              fontSize: "14px",
              fontWeight: 700,
              lineHeight: "20px",
              textTransform: "none",
              display: "flex",
              alignItems: "center"
            }}
          >
            <Icon name="deactivate" />
            <span style={{ marginLeft: "10px" }}>{t("EDIT.DEACTIVATE")}</span>
          </Button>
        </Box>
      }
    </Box>
  );


  if(blackListOpen){
    return(
      <BlockedUsers
        blackList={blackList}
        setBlackList={setBlackList}
        setBlackListOpen={setBlackListOpen}
      />
    );
  } else if(changePasswordOpen){
    return(
      <ChangePassword
        confirmPassword={confirmPassword}
        setConfirmPassword={setConfirmPassword}
        setNewPassword={setNewPassword}
        newPassword={newPassword}
        setChangePasswordOpen={setChangePasswordOpen}
      />
    );
  } else {
    return (
      <Box
        component="form"
        noValidate
        onSubmit={() => {

        }}
        sx={{}}
      >
        <Box sx={{
          color: "#5D5E65",
          fontSize: "18px",
          fontWeight: 700,
          marginBottom: "16px"
        }}>{t("EDIT.PARAMETERS")}</Box>

        <Button
          // variant={'blue'}
          // onClick={setChangePasswordOpen(true)}
          sx={{
            padding: "10px 24px",
            display: "flex",
            alignItems: "center",
            background: "#E8EFFF",
            borderRadius: "8px",
            color: "#4776E6",
            fontSize: "14px",
            fontWeight: 700,
            lineHeight: "20px",
            textTransform: "none",
            marginBottom: "24px"
          }}
        >
          <img style={{ paddingRight: '10px' }} src="/images/icons/key-alt.svg" alt="change pass" />
          Change password
        </Button>

        <Box sx={{ marginBottom: "24px" }}>
          <Box sx={{ color: "#5D5E65", fontSize: "14px", fontWeight: 700, marginBottom: "8px" }}>{t("EDIT.EMAIL")}</Box>
          <SearchInput
            value={email}
            setValue={(e) => {
              setEmail(e.target.value);
            }}
          />
        </Box>

        <Box sx={{ marginBottom: "24px" }}>
          <Box sx={{
            color: "#5D5E65",
            fontSize: "14px",
            fontWeight: 700,
            marginBottom: "8px"
          }}>{t("EDIT.EMAIL_NOTIFICATIONS")}</Box>
          <Box>
            <FormGroup sx={{ display: "flex", flexDirection: "column", rowGap: "8px" }}>
              {Object.keys(notifications).map((type, i) => {
                return (
                  <FormControlLabel key={type}
                    control={
                      <Checkbox
                        icon={<BpIcon />}
                        checkedIcon={<BpCheckedIcon />}
                        name={type}
                        onChange={(e) => {
                          const temp = { ...notifications }
                          temp[type] = e.target.checked
                          setNotifications(temp);
                        }}
                      />
                    }
                    checked={notifications[type]}
                    label={t("EDIT." + type.toUpperCase())}
                    sx={FormControlLabelStyles}
                  />
                );
              })}
            </FormGroup>
          </Box>
        </Box>

        <Box sx={{ marginBottom: "24px" }}>
          <Box sx={{
            color: "#5D5E65",
            fontSize: "14px",
            fontWeight: 700,
            marginBottom: "8px"
          }}>{t("EDIT.PUSH_NOTIFICATIONS")}</Box>
          <Box>
            <FormGroup sx={{ display: "flex", flexDirection: "column", rowGap: "8px" }}>
              {Object.keys(push).map((type, i) => {
                return (
                  <FormControlLabel
                    control={
                      <Checkbox
                        icon={<BpIcon />}
                        checkedIcon={<BpCheckedIcon />}
                        name={type}
                        onChange={(e) => {
                          const temp = { ...push }
                          temp[type] = e.target.checked
                          setPush(temp);
                        }}
                      />
                    }
                    checked={push[type]}
                    label={t("EDIT." + type.toUpperCase())}
                    sx={FormControlLabelStyles}
                  />
                );
              })}
            </FormGroup>
          </Box>
        </Box>

        <Box sx={{ marginBottom: "32px" }}>
          <Box sx={{
            color: "#5D5E65",
            fontSize: "14px",
            fontWeight: 700,
            marginBottom: "8px"
          }}>{t("EDIT.BLACK_LIST")}</Box>
          <Button
            sx={{
              fontSize: "12px",
              fontWeight: 700,
              display: "flex",
              alignItems: "center",
              padding: 0,
              textTransform: "none",
              color: "#1A051D"
            }}
            onClick={setBlackListOpen(true)}
          >
            <Icon name="circle_forbid" color="#1A051D" />
            <span style={{ margin: "0 8px" }}>{t("EDIT.BLOCKED_USERS")}</span>
            <Icon name="littleRight" />
          </Button>
        </Box>

        <Button
          sx={{
            padding: "10px 24px",
            borderRadius: "8px",
            color: "#E64747",
            background: "#FFEDED",
            fontSize: "14px",
            fontWeight: 700,
            lineHeight: "20px",
            textTransform: "none",
            display: "flex",
            alignItems: "center"
          }}
        >
          <Icon name="deactivate" />
          <span style={{ marginLeft: "10px" }}>{t("EDIT.DEACTIVATE")}</span>
        </Button>





        {/*<Box>*/}
        {/*  <Box>*/}
        {/*    <TextField*/}
        {/*      sx={{*/}
        {/*        marginBottom: "8px"*/}
        {/*      }}*/}
        {/*      required*/}
        {/*      fullWidth*/}
        {/*      label="Old password"*/}
        {/*      type="password"*/}
        {/*      value={oldPassword}*/}
        {/*      onChange={(e) => {*/}
        {/*        setOldPassword(e.target.value);*/}
        {/*      }}*/}
        {/*    />*/}
        {/*    <TextField*/}
        {/*      sx={{*/}
        {/*        marginBottom: "8px"*/}
        {/*      }}*/}
        {/*      required*/}
        {/*      fullWidth*/}
        {/*      label="New password"*/}
        {/*      type="password"*/}
        {/*      value={newPassword}*/}
        {/*      onChange={(e) => {*/}
        {/*        setNewPassword(e.target.value);*/}
        {/*      }}*/}
        {/*    />*/}
        {/*    <Button*/}
        {/*      variant={'blue'}*/}
        {/*      onClick={changePassword}*/}
        {/*    >*/}
        {/*      <img style={{ paddingRight: '10px' }} src="/images/icons/key-alt.svg" alt="change pass" />*/}
        {/*      Change password*/}
        {/*    </Button>*/}
        {/*  </Box>*/}
        {/*  <Box>*/}
        {/*    <TextField*/}
        {/*      name="weight"*/}
        {/*      required*/}
        {/*      fullWidth*/}
        {/*      id="email"*/}
        {/*      label="E-mail"*/}
        {/*      type="email"*/}
        {/*      value={email}*/}
        {/*      onChange={(e) => {*/}
        {/*        setEmail(e.target.value);*/}
        {/*      }}*/}
        {/*    />*/}
        {/*  </Box>*/}

        {/*  <Box>*/}
        {/*    <div style={{ display: 'flex', flexDirection: 'column' }}>*/}
        {/*      <FormControlLabel*/}
        {/*        control={*/}
        {/*          <Checkbox*/}
        {/*            name="Service news"*/}
        {/*            onChange={(e) => {*/}
        {/*              setCheckboxes({*/}
        {/*                ...checkboxes,*/}
        {/*                [e.target.name]: e.target.checked*/}
        {/*              });*/}
        {/*            }}*/}
        {/*          />*/}
        {/*        }*/}
        {/*        label="Service news"*/}
        {/*      />*/}
        {/*      <FormControlLabel*/}
        {/*        control={*/}
        {/*          <Checkbox*/}
        {/*            name="Service news"*/}
        {/*            onChange={(e) => {*/}
        {/*              setCheckboxes({*/}
        {/*                ...checkboxes,*/}
        {/*                [e.target.name]: e.target.checked*/}
        {/*              });*/}
        {/*            }}*/}
        {/*          />*/}
        {/*        }*/}
        {/*        label="Information about the notifications"*/}
        {/*      />*/}
        {/*      <FormControlLabel*/}
        {/*        control={*/}
        {/*          <Checkbox*/}
        {/*            name="Service news"*/}
        {/*            onChange={(e) => {*/}
        {/*              setCheckboxes({*/}
        {/*                ...checkboxes,*/}
        {/*                [e.target.name]: e.target.checked*/}
        {/*              });*/}
        {/*            }}*/}
        {/*          />*/}
        {/*        }*/}
        {/*        label="New subscribers notification"*/}
        {/*      />*/}
        {/*    </div>*/}
        {/*  </Box>*/}
        {/*  <Box>*/}
        {/*    <Button variant={'red'}>*/}
        {/*      <img style={{ paddingRight: '10px' }} src="/images/icons/user-x.svg" alt="change pass" />*/}
        {/*      Deactivate profile*/}
        {/*    </Button>*/}
        {/*  </Box>*/}
        {/*</Box>*/}
        {/*<Button*/}
        {/*  type="submit"*/}
        {/*  fullWidth*/}
        {/*  variant="contained"*/}
        {/*  sx={{ mt: 3, mb: 2 }}*/}
        {/*>*/}
        {/*  {t('COMMON.SAVE')}*/}
        {/*</Button>*/}
      </Box>
    );
  }
}

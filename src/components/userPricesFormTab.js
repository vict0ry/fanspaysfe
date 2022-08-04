import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import React, { useEffect, useRef, useState } from 'react'
import { t } from 'i18next'
import axios from 'axios'
import { Wish } from './Wish'
import { AddWishModal } from './AddWishModal'
import { useSelector } from 'react-redux'
import { Icon } from '../pages/messages/Icon'
import { AddLevel } from '../pages/edit-profile/components/AddLevel'

export const SubscriptionSettingsCard = ({level, price, date, accesses, subscribers}) => {
  const editText = useRef(null);
  const [mouseOver, setMouseOver] = useState(false);

  return (
    <Box sx={{
      height: "100%",
      padding: '16px',
      display: 'flex',
      flexDirection:'column',
      justifyContent: 'space-between',
      borderRadius: '8px',
      border: '1px solid #ECE9F1',
      position: "relative"
    }}>
      <Box>
        <Box sx={{
          display: "flex",
          justifyContent: "space-between"
        }}>
          <Box sx={{
            fontSize: '12px',
            fontWeight: 600,
            lineHeight: "16px",
            color: '#5D5E65'
          }}>
            <span>{
              // new Date().getFullYear() === date.getFullYear() &&
              // new Date().getMonth() === date.getMonth() &&
              // new Date().getDate() === date.getDate() ?
              // date.toISOString().split('T')[1].substring(0, 5) :
              // date.toISOString().split('T')[0]

              date.toISOString().split('T')[0]
            }</span>
          </Box>
          <Button
            sx={{
              '&:hover': {
                background: '#E8EFFF'
              },
              padding: "4px",
              borderRadius: "8px",
              background: '#E8EFFF',
              minHeight: 0,
              minWidth: 0,
              // marginRight: "-4px",
              // marginTop: "-4px"
              position: "absolute",
              top: "12px",
              right: "12px"
            }}>
            <Box
              onMouseOver={e => {
                setMouseOver(true);
              }}
              onMouseOut={e => {
                setMouseOver(false)
              }}
              sx={{
                zIndex: 1,
                position: "relative",
                overflow: "hidden",
                display: "flex",
                justifyContent: "end",
                transition: "0.2s",
                width: mouseOver && editText.current ? (24 + editText.current.offsetWidth + 8) + "px" : "24px"
              }}
            >
              <Box
                ref={editText}
                sx={{
                  position: "absolute",
                  right: "32px",
                  top: 0,
                  fontSize: "14px",
                  fontWeight: 700,
                  // marginRight: "12px",
                  paddingLeft: "8px",
                  whiteSpace: "nowrap"
                }}
              >
                EDIT
              </Box>
              {/*<Box sx={{zIndex: 1}}>*/}
                <Icon name="edit" />
              {/*</Box>*/}
            </Box>
          </Button>
        </Box>
        <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: "24px", marginBottom: "16px"}}>
          <Box sx={{fontSize: "14px", fontWeight: 700}}>{level}</Box>
          <Box sx={{fontSize: "14px", fontWeight: 500, color: "#B3B3B3"}}>{price}$ a month</Box>

          <Box sx={{
            marginTop: "32px",
            width: "100%"
          }}>
            {accesses.map(access => {
              return(
                <Box sx={{
                  borderRadius: "8px",
                  background: "#F7F5F9",
                  display: "flex",
                  justifyContent: "center",
                  fontSize: "12px",
                  fontWeight: 700,
                  color: "#5D5E65",
                  padding: "8px",
                  textAlign: "center",
                  marginBottom: "8px"
                }}>
                  {access}
                </Box>
              );
            })}
          </Box>
        </Box>
      </Box>
      <Box sx={{textAlign: 'center', color: '#4776E6', fontSize: "12px", fontWeight: 700}}>
        {subscribers} subscribers
      </Box>
  </Box>
  );
}

export const UserPricesFormTab = () => {
  const [addLevelOpen, setAddLevelOpen] = useState(false);

  const [wishes, setWishes] = useState();

  const user = useSelector(state => state.profile.profile);
  const [subscriptionPrice, setSubscriptionPrice] = useState(0);
  const handleSubscriptionPrice = (value) => {
    setSubscriptionPrice(value);
  }
  useEffect(() => {
    setSubscriptionPrice(user?.profileUser?.subscribtionPrice || 0);
  }, [])

  useEffect(() => {
    axios.get('/api/wish/' + user?.profileUser?._id).then(wishes => { setWishes(wishes.data) })
  }, []);

  if(!addLevelOpen){
    return <Box component="form" noValidate onSubmit={() => {}}>
      <Box sx={{marginBottom: "24px"}}>
        <Box sx={{fontSize: "18px", fontWeight: 700, color: "#5D5E65", lineHeight: "32px", marginBottom: "24px"}}>{t('EDIT.SUBSCRIPTION_LEVELS')}</Box>
        {/*<Box>*/}
        {/*  <TextField*/}
        {/*    onChange={(e) => handleSubscriptionPrice(e.target.value)}*/}
        {/*    style={{maxWidth: '500px', marginBottom: '20px'}}*/}
        {/*    name="price"*/}
        {/*    required*/}
        {/*    fullWidth*/}
        {/*    id="price"*/}
        {/*    label="Your price"*/}
        {/*    type="number"*/}
        {/*    autoFocus*/}
        {/*    value={subscriptionPrice}*/}
        {/*  />*/}
        {/*  <br/>*/}
        {/*  <Button onClick={() => {*/}
        {/*    axios.put('/api/users/subscribtionPrice', {*/}
        {/*      price: subscriptionPrice*/}
        {/*    });*/}
        {/*  }} variant={'outlined'}>Save</Button>*/}
        {/*</Box>*/}
        <Grid container spacing={2}>
          <Grid item xs={4} sm={4}>
            <SubscriptionSettingsCard
              level="Start level"
              price={5}
              date={new Date()}
              accesses={["Access to publications"]}
              subscribers={0}
            />
          </Grid>
          <Grid item xs={4} sm={4}>
            <SubscriptionSettingsCard
              level="Advanced level"
              price={10}
              date={new Date()}
              accesses={["Access to publications", "Access to photos and videos"]}
              subscribers={52}
            />
          </Grid>
          <Grid item xs={4} sm={4}>
            <SubscriptionSettingsCard
              level="VIP level"
              price={15}
              date={new Date()}
              accesses={["Access to publications", "Access to photos and videos"]}
              subscribers={1}
            />
          </Grid>
        </Grid>
        <Button
          onClick={() => setAddLevelOpen(true)}
          sx={{
            background: '#E8EFFF',
            padding: '12px 24px',
            borderRadius: '8px',
            border: '1px dashed #4776E6',
            textTransform: 'none',
            fontSize: "14px",
            fontWeight: 700,
            lineHeight: "20px",
            marginTop: "24px"
          }}
        >
          <img style={{marginRight: "8px"}} src="/images/icons/plus.svg" alt="add" />
          <span style={{color: '#4776E6', marginLeft: '5px'}}>Add level</span>
        </Button>
      </Box>
      <Box>
        <Box sx={{fontSize: "18px", fontWeight: 700, color: "#5D5E65", lineHeight: "32px", marginBottom: "24px"}}>{t('EDIT.WISHES')}</Box>
          <Grid container spacing={2}>
            {
              wishes?.length ? wishes.map(wish => {
                return <Grid item xs={6} sm={6}>
                  <Box sx={{
                    padding: "16px 8px",
                    border: "1px solid #ECE9F1",
                    borderRadius: "8px",
                    position: "relative"
                  }}>
                    <Box sx={{
                      display: "flex",
                      justifyContent: "space-between"
                    }}>
                      <Box sx={{
                        fontSize: "16px",
                        fontWeight: 700,
                        color: "#5D5E65"
                      }}>
                        {300} of <span style={{color: "#1A051D"}}>$ {wish.amount}</span>
                      </Box>
                      <Button
                        sx={{
                          padding: "4px",
                          borderRadius: "8px",
                          background: '#E8EFFF',
                          minHeight: 0,
                          minWidth: 0,
                          marginRight: "-4px",
                          marginTop: "-4px"
                        }}>
                        <Icon name="edit" />
                      </Button>
                    </Box>
                    <Box sx={{
                      width: "100%",
                      height: "8px",
                      borderRadius: "8px",
                      background: "#ECE9F1",
                      marginTop: "12px",
                      position: "relative",
                      overflow: "hidden",
                      marginBottom: "12px"
                    }}>
                      <Box sx={{
                        borderRadius: "8px",
                        position: "absolute",
                        left: 0,
                        top: 0,
                        minWidth: 0,
                        minHeight: 0,
                        height: "100%",
                        width: 12000 / wish.amount * 100 + "%",
                        background: "linear-gradient(90deg, #4776E6, #8E54E9)"
                      }} />
                    </Box>
                    <Box sx={{
                      fontSize: "14px",
                      fontWeight: 600
                    }}>
                      {wish.name}
                    </Box>
                  </Box>
                </Grid>
              }) : <div><p>
                {t('CONFIG.SETUP_WISH')}
              </p></div>
            }
          {/*<Grid item xs={3} sm={3}>*/}
          {/*  <AddWishModal myProfile={true}/>*/}
          {/*</Grid>*/}
        </Grid>
        <Button sx={{
          background: '#E8EFFF',
          padding: '12px 24px',
          borderRadius: '8px',
          border: '1px dashed #4776E6',
          textTransform: 'none',
          fontSize: "14px",
          fontWeight: 700,
          lineHeight: "20px",
          marginTop: "24px"
        }}>
          <img style={{marginRight: "8px"}} src="/images/icons/plus.svg" alt="add" />
          <span style={{color: '#4776E6', marginLeft: '5px'}}>Add wish</span>
        </Button>
      </Box>
    </Box>
  } else {
    return <AddLevel setAddLevelOpen={setAddLevelOpen} />
  }
}

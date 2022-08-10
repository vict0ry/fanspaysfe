import React, { useState } from 'react'
import Cards from 'react-credit-cards'
import 'react-credit-cards/es/styles-compiled.css'
import TextField from '@mui/material/TextField'
import Modal from '@mui/material/Modal'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import { t } from 'i18next'
import Grid from '@mui/material/Grid'
import { SearchInput } from '../pages/edit-profile/components/SearchInput'
import circleCheck from '../pages/Finance/circle-check.svg'
import bitcoin from '../pages/Finance/bitcoin.svg'
import paypal from '../pages/Finance/paypal.svg'
import masterCard from '../pages/Finance/masterCard.svg'
import visa from '../pages/Finance/visa.svg'

const linkedCards = ["5645 6783 2571 0984"];

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 600,
  borderRadius: '20px',
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4
}

export const AddCreditCard = ({user}) => {
  const [linked, setLinked] = useState(linkedCards);
  const [cardNumber, setCardNumber] = useState("");

  const [withdrawMethod, setWithdrawMethod] = useState(["bank_card", "paypal", "bitcoin"])

  const getImageWithdraw = (withdrawMethod) => {
    switch(withdrawMethod){
      case "bank_card":
        return <Box sx={{
          width: '156px',
          height: '36px',
          overflow: 'hidden',
          borderRadius: '8px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          <img style={{ marginRight: '8px' }} src={masterCard} alt="" />
          <img src={visa} alt="" />
        </Box>
      case "paypal":
        return <Box sx={{
          width: '100%',
          height: '36px',
          overflow: 'hidden',
          borderRadius: '8px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          <img style={{width: "100%"}} src={paypal} alt="" />
        </Box>
      case "bitcoin":
        return <Box sx={{
          width: '100%',
          height: '36px',
          overflow: 'hidden',
          borderRadius: '8px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
          <img style={{width: "100%"}} src={bitcoin} alt="" />
        </Box>

      default:
        return ""
    }
  }

  const [state, setState] = useState({
    isOpen: false,
    cvc: '',
    expiry: '',
    focus: '',
    name: '',
    number: ''
  })


  const handleInputFocus = (e) => {
    setState({ ...state, focus: e.target.name, open: false })
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target

    setState({ ...state, [name]: value })
  }
  const handleAddNewCard = () => {
    setState({
      ...state,
      isOpen: !state.isOpen
    })
  }

  function handleClose() {
    setState({
      ...state,
      isOpen: false
    })
  }

  return (
    <Box>
      <Box sx={{
        color: "#5D5E65",
        fontSize: "18px",
        fontWeight: 700,
        marginBottom: "16px"
      }}>
        {t("EDIT.REPLENISHMENT")}
      </Box>
      <Box sx={{display: "flex", alignItems: "center", marginBottom: "16px"}}>
        <Box sx={{color: "#1A051D", fontWeight: 700, fontSize: "18px"}}>{t("EDIT.BALANCE")}: </Box>
        <Box
          sx={{
            fontSize: "24px",
            fontWeight: 700,
            lineHeight: "32px",
            marginLeft: '8px',
            background: "linear-gradient(94.04deg, #4776E6 10.41%, #8E54E9 77.48%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            textFillColor: "transparent"
          }}
        >
          $ {1037.65}
        </Box>
      </Box>

      <Box sx={{display: "flex"}}>
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
          {t("EDIT.TOP_UP")}
        </Button>

        {!linked.length && <Button
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

          }}
        >
          {t("EDIT.LINK_CARD")}
        </Button>}
      </Box>

      {linked.length &&
        <Box sx={{marginTop: "24px"}}>
          <Box sx={{fontSize: "14px", fontWeight: 700, color: "#5D5E65", marginBottom: "8px"}}>{t("EDIT.LINK_CARDS")}</Box>
          <SearchInput
            icon="bank_card"
            value={cardNumber}
            setValue={e => {
              const value = e.target.value;

              if (!isNaN(Number(value[value.length-1])) && value.length <= 19) {
                if((value.length - value.split(" ").length-1) % 4 === 2 && value.split(" ").length-1 < 3 && value.length > cardNumber.length){
                  setCardNumber(value + " ")
                } else {
                  setCardNumber(value)
                }

              }
              if (value === '') {
                setCardNumber('')
              }
            }}
            other={{
              placeholder: "5645 6783 2571 0984"
            }}
          />
          <Button
            sx={{
              marginTop: "8px",
              fontSize: "16px",
              fontWeight: 700,
              lineHeight: "24px",
              color: "#4776E6",
              padding: "8px 0",
              textDecoration: "underline",
              textTransform: "none"
            }}
          >
            {t("EDIT.LINK_MORE")}
          </Button>

        </Box>
      }

      <Box sx={{
        marginTop: "40px",
        color: "#5D5E65",
        fontSize: "18px",
        fontWeight: 700,
        marginBottom: "24px"
      }}>
        {t("EDIT.REPLENISHMENT")}
      </Box>
      {!withdrawMethod.length &&
        <Box sx={{fontSize: "16px", fontWeight: 600, marginBottom: "16px"}}>
          {t("EDIT.NO_OUTPUT_METHOD")}
        </Box>
      }
      <Box sx={{
        display: "flex",
        alignItems: {
          sm: "center"
        },
        flexDirection: {
          xs: "column",
          sm: "row"
        },
        rowGap: {
          xs: "8px",
          sm: "0"
        }
      }}>
        {!withdrawMethod.length &&
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
              whiteSpace: "nowrap",
              marginRight: "16px"
            }}
            onClick={() => {

            }}
          >
            {t("EDIT.ADD_METHOD")}
          </Button>
        }
        {/*{withdrawMethod.length &&*/}
          <Box sx={{
            display: "flex",
            flexDirection: "column",
            rowGap: "8px"
          }}>
            {withdrawMethod.map(method => {
              return(
                <Box key={method}
                  sx={{
                    minWidth: 0,
                    minHeight: 0,
                    padding: 0,
                    width: '160px',
                    height: '40px',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: '8px',
                    cursor: 'pointer',
                    border: '1px solid #ece9f1',
                    marginRight: "16px"
                  }}
                >
                  {getImageWithdraw(method)}
                </Box>
              );
            })}
          </Box>
        {/*}*/}

        <Box
          sx={{
            fontSize: "12px",
            fontWeight: 600,
            color: "#5D5E65",
            lineHeight: "16px",
            flexGrow: 1,
            width: "340px",
            maxWidth: "100%"
          }}
        >
          {t("EDIT.ADD_METHOD_PROMPT")}
        </Box>

      </Box>

      <Button
        sx={{
          marginTop: "8px",
          fontSize: "16px",
          fontWeight: 700,
          lineHeight: "24px",
          color: "#4776E6",
          padding: "8px 0",
          textDecoration: "underline",
          textTransform: "none"
        }}
      >
        {t("EDIT.SET_UP_WITHDRAWAL")}
      </Button>

    </Box>
  );

  // return <div>
  //   <Button variant="contained" onClick={handleAddNewCard}>{t('COMMON.ADD_CARD')}</Button>
  //   <Modal
  //     open={state.isOpen}
  //     onClose={handleClose}
  //     aria-labelledby="modal-modal-title"
  //     aria-describedby="modal-modal-description"
  //   >
  //     <Box component="form" noValidate onSubmit={() => {
  //     }} sx={style}>
  //       <div>
  //         <Cards
  //           cvc={state.cvc}
  //           expiry={state.expiry}
  //           focused={state.focus}
  //           name={state.name}
  //           number={state.number}
  //         /></div>
  //       <div style={{ marginTop: 10 }}>
  //         <Grid item xs={{ marginTop: 10, width: '100%' }}>
  //           <TextField
  //             type="text"
  //             name="name"
  //             fullWidth
  //             label="Card holder name"
  //             onChange={(e) => handleInputChange(e)}
  //             onFocus={(e) => handleInputFocus(e)}
  //           />
  //         </Grid>
  //         <Grid item xs={{ marginTop: 10, width: '100%' }}>
  //           <TextField
  //             xs={12}
  //             type="tel"
  //             name="number"
  //             fullWidth
  //             label="Card Number"
  //             onChange={(e) => handleInputChange(e)}
  //             onFocus={(e) => handleInputFocus(e)}
  //           />
  //         </Grid>
  //         <Grid item xs={{ marginTop: 10, width: '100%' }}>
  //           <TextField
  //             type="number"
  //             name="cvc"
  //             fullWidth
  //             label="CVC code"
  //             maxLength="3"
  //             onChange={(e) => handleInputChange(e)}
  //             onFocus={(e) => handleInputFocus(e)}
  //           />
  //         </Grid>
  //         <Grid item xs={{ marginTop: 10, width: '100%' }}>
  //           <TextField
  //             type="tel"
  //             name="expiry"
  //             label="Card expires"
  //             onChange={(e) => handleInputChange(e)}
  //             onFocus={(e) => handleInputFocus(e)}
  //           />
  //         </Grid>
  //       </div>
  //       <Button variant="contained" onClick={handleAddNewCard}>{t('COMMON.SAVE')}</Button>
  //     </Box>
  //   </Modal>
  // </div>
}

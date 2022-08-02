import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import { Icon } from '../messages/Icon'
import circleCheck from './circle-check.svg'
import masterCard from './masterCard.svg'
import visa from './visa.svg'
import paypal from './paypal.svg'
import bitcoin from './bitcoin.svg'
import { MenuItem, Select, TextField } from '@mui/material'
import React, { useEffect, useState } from 'react'

const Withdrawal = ({setWithdrawalOpen}) => {
  const [withdrawalMethod, setWithdrawalMethod] = useState(0)
  const [expireDate, setExpireDate] = useState([Number(new Date().getMonth()), Number(new Date().getFullYear().toString().substring(2, 4))])
  const [nameReceiver, setNameReceiver] = useState('')
  const [cardNumber, setCardNumber] = useState('')
  const [CVV, setCVV] = useState('')

  const [years, setYears] = useState([])
  const [months, setMonths] = useState([])

  useEffect(() => {
    const tempYears = []
    const tempMonths = []
    for (let i = expireDate[1]; i <= expireDate[1] + 6; i++) {
      tempYears.push(i)
    }
    for (let i = expireDate[0] + 1; i <= 12; i++) {
      tempMonths.push(i)
    }

    setYears(tempYears)
    setMonths(tempMonths)
  }, [])

  return(
    <Box sx={{
      position: 'fixed',
      left: 0,
      top: 0,
      width: '100vw',
      height: '100vh',
      backdropFilter: 'blur(4px)',
      zIndex: 2,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      padding: "8px"
    }}
         onClick={() => {
           setWithdrawalOpen(false)
         }}
    >
      <Box sx={{
        borderRadius: '8px',
        background: '#fff',
        maxWidth: '700px',
        width: "100%",
        display: 'flex',
        flexDirection: 'column',
        padding: '24px 36px 32px 36px',
        position: "relative"
      }}
           onClick={(e) => {
             e.stopPropagation()
           }}
      >
        <Button sx={{
          minWidth: 0,
          minHeight: 0,
          position: "absolute",
          right: "24px",
          top: "24px",
          padding: 0
        }}
                onClick={() => {
                  setWithdrawalOpen(false)
                }}
        >
          <Icon name="X" />
        </Button>
        <Box sx={{ display: 'flex', justifyContent: 'center', marginBottom: '16px' }}>
          <Box sx={{
            background: 'linear-gradient(94.04deg, #4776E6 10.41%, #8E54E9 77.48%)',
            webkitBackgroundClip: 'text',
            webkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            textFillColor: 'transparent',
            fontSize: '24px',
            fontWeight: 700
          }}>
            Withdrawals
          </Box>
        </Box>

        <Box>
          <Box sx={{
            fontSize: '18px',
            fontWeight: 600,
            marginBottom: {
              sm: '28px',
              xs: "16px"
            }
          }}>
            Choose a withdrawal method
          </Box>
          <Box sx={{
            display: 'flex',
            marginBottom: {
              sm: '36px',
              xs: "16px"
            }
          }}>
            <Button
              sx={{
                ...{
                  minWidth: 0,
                  minHeight: 0,
                  padding: 0,
                  width: '160px',
                  height: '40px',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderRadius: '8px',
                  position: 'relative',
                  cursor: 'pointer'
                },
                ...{ border: withdrawalMethod === 0 ? '2px solid #4b75e7' : '1px solid #ece9f1' }
              }}
              onClick={() => {
                setWithdrawalMethod(0)
              }}
            >
              {withdrawalMethod === 0 &&
              <img style={{
                position: 'absolute',
                right: '-12px',
                top: '-12px'
              }} src={circleCheck} alt="" />
              }
              <Box sx={{
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
            </Button>

            <Button
              sx={{
                ...{
                  minWidth: 0,
                  minHeight: 0,
                  padding: 0,
                  width: '160px',
                  height: '40px',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderRadius: '8px',
                  position: 'relative',
                  cursor: 'pointer',
                  margin: {
                    sm: '0 36px',
                    xs: "0 8px"
                  },
                  transition: '25ms'
                },
                ...{ border: withdrawalMethod === 1 ? '2px solid #4b75e7' : '1px solid #ece9f1' }
              }}
              onClick={() => {
                setWithdrawalMethod(1)
              }}
            >
              {withdrawalMethod === 1 &&
              <img style={{
                position: 'absolute',
                right: '-12px',
                top: '-12px'
              }} src={circleCheck} alt="" />
              }
              <Box sx={{
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
            </Button>

            <Button
              sx={{
                ...{
                  minWidth: 0,
                  minHeight: 0,
                  padding: 0,
                  width: '160px',
                  height: '40px',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderRadius: '8px',
                  position: 'relative',
                  cursor: 'pointer'
                },
                ...{ border: withdrawalMethod === 2 ? '2px solid #4b75e7' : '1px solid #ece9f1' }
              }}
              onClick={() => {
                setWithdrawalMethod(2)
              }}
            >
              {withdrawalMethod === 2 &&
              <img style={{
                position: 'absolute',
                right: '-12px',
                top: '-12px'
              }} src={circleCheck} alt="" />
              }
              <Box sx={{
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
            </Button>
          </Box>

          <Box sx={{
            fontSize: '18px',
            fontWeight: 600,
            marginBottom: '16px'
          }}>
            Payment datails
          </Box>
          <Box sx={{
            display: 'flex',
            justifyContent: 'space-between',
            flexDirection: {
              sm: "row",
              xs: "column"
            }
          }}>
            <Box sx={{
              marginRight: {
                sm: '36px'
              },
              marginBottom: {
                xs: "8px",
                sm: 0
              },
              flexGrow: 1
            }}>
              <Box sx={{ color: '#5D5E65', fontSize: '14px', fontWeight: 700, marginBottom: '8px' }}>RECEIVER NAME</Box>
              <Box sx={{ height: '40px' }}>
                <TextField
                  fullWidth
                  sx={{
                    '& .MuiInputBase-input': {
                      padding: '0 12px',
                      height: '40px'
                    }
                  }}
                  value={nameReceiver}
                  onChange={e => setNameReceiver(e.target.value)}
                />
              </Box>
            </Box>
            <Box sx={{
              flexGrow: 1
            }}>
              <Box sx={{ color: '#5D5E65', fontSize: '14px', fontWeight: 700, marginBottom: '8px' }}>CARD NUMBER</Box>
              <Box sx={{ height: '40px' }}>
                <TextField
                  placeholder="5645 6783 2571 0984"
                  fullWidth
                  sx={{
                    '& .MuiInputBase-input': {
                      padding: '0 12px',
                      height: '40px'
                    }
                  }}
                  value={cardNumber}
                  onChange={e => {
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
                />
              </Box>
            </Box>
          </Box>

          <Box sx={{
            display: 'flex',
            marginTop: {
              sm: '24px',
              xs: "16px"
            },
            marginBottom: {
              sm: "24px",
              xs: "16px"
            }
          }}>
            <Box sx={{
              marginRight: '16px'
            }}>
              <Box sx={{ color: '#5D5E65', fontSize: '14px', fontWeight: 700, marginBottom: '8px' }}>EXPIRE
                DATE</Box>
              <Box sx={{ display: 'flex' }}>
                <Box sx={{
                  width: '80px',
                  height: '48px',
                  borderRadius: '8px',
                  overflow: 'hidden',
                  border: '1px solid #ECE9F1',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginRight: '8px'
                }}>
                  <Select
                    variant="outlined"
                    value={expireDate[0]}
                    onChange={e => setExpireDate([e.target.value, expireDate[1]])}
                    sx={{
                      width: '80px',
                      height: '50px',
                      '& .css-1d3z3hw-MuiOutlinedInput-notchedOutline': {
                        border: "none"
                      }
                    }}
                  >
                    {months.map(month => {
                      return <MenuItem key={month} value={month - 1}>{month}</MenuItem>
                    })}
                  </Select>
                </Box>

                <Box sx={{
                  width: '80px',
                  height: '48px',
                  borderRadius: '8px',
                  overflow: 'hidden',
                  border: '1px solid #ECE9F1',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center'
                }}>
                  <Select
                    variant="outlined"
                    value={expireDate[1]}
                    onChange={e => setExpireDate([expireDate[0], e.target.value])}
                    sx={{
                      width: '80px',
                      height: '50px',
                      '& .css-1d3z3hw-MuiOutlinedInput-notchedOutline': {
                        border: "none"
                      }
                    }}
                  >
                    {years.map(year => {
                      return <MenuItem key={year} value={year}>{year}</MenuItem>
                    })}
                  </Select>
                </Box>
              </Box>
            </Box>

            <Box>
              <Box
                sx={{ color: '#5D5E65', fontSize: '14px', fontWeight: 700, marginBottom: '8px' }}>CVV/CVC</Box>
              <Box sx={{
                height: '48px',
                width: '80px',
                borderRadius: '8px',
                border: '1px solid #ECE9F1'
              }}>
                <TextField
                  sx={{
                    '& .css-1t8l2tu-MuiInputBase-input-MuiOutlinedInput-input': {
                      padding: '12px 12px'
                    },
                    '& .css-1d3z3hw-MuiOutlinedInput-notchedOutline': {
                      border: 'none'
                    }
                  }}
                  placeholder="468"
                  value={CVV}
                  onChange={e => {
                    if (!isNaN(Number(e.target.value)) && e.target.value.length <= 3) {
                      setCVV(Number(e.target.value))
                    }
                    if (e.target.value === '') {
                      setCVV('')
                    }
                  }}
                />
              </Box>
            </Box>
          </Box>

          <Box sx={{
            display: "flex",
            justifyContent: "end"
          }}>
            <Button
              sx={{
                minWidth: 0,
                minHeight: 0,
                background: "#4776E6",
                width: "160px",
                height: "40px",
                color: "#fff",
                textTransform: "none",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                fontSize: "14px",
                fontWeight: 700,
                borderRadius: '8px',
                lineHeight: '20px'
              }}
              variant="contained"
            >
              Add method
            </Button>
          </Box>

        </Box>
      </Box>
    </Box>
  );
}

export default Withdrawal;
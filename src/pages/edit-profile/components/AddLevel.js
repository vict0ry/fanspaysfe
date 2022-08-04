import React, {useState, useRef} from 'react'
import { Box } from '@material-ui/core';
import Button from '@mui/material/Button'
import { t } from 'i18next'
import {SearchInput} from './SearchInput'
import { beURL } from '../../../config'
import { Icon } from '../../messages/Icon'
import {Select} from '@mui/material'
import MenuItem from '@mui/material/MenuItem'

export const AddLevel = ({setAddLevelOpen, isEdit=false}) => {
  const file = useRef(null);

  const [subPrice, setSubPrice] = useState("");
  const [avatar, setAvatar] = useState({img: ""});
  const [fileAvatar, setFileAvatar] = useState([]);
  const [header, setHeader] = useState("");
  const [description, setDescription] = useState("");

  const [openBenefitModal, setOpenBenefitModal] = useState(true);
  const [nameBenefit, setNameBenefit] = useState("");
  const [categoryBenefit, setCategoryBenefit] = useState("");



  return (
    <Box>
      <Box sx={{
        marginBottom: "24px"
      }}>
        <Box sx={{fontSize: "18px", fontWeight: 700, color: "#5D5E65", lineHeight: "32px", marginBottom: "8px"}}>{t('EDIT.SUB_PRICE')}</Box>
        <SearchInput
          value={subPrice}
          setValue={(e) => {
            if(!isNaN(Number(e.target.value))){
              setSubPrice(e.target.value)
            }
          }}
          icon="dollar"
          other={{
            placeholder: "5"
          }}
        />
      </Box>

      <Box sx={{
        marginBottom: "24px"
      }}>
        <Box sx={{fontSize: "18px", fontWeight: 700, color: "#5D5E65", lineHeight: "32px", marginBottom: "8px"}}>{t('EDIT.COVER')}</Box>
        <Box sx={{
          display: "flex",
          alignItems: "center",
          marginBottom: "24px"
        }}>
          {avatar.img && <Box sx={{
            width: "112px",
            height: "128px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            overflow: "hidden",
            borderRadius: "8px",
            marginRight: "32px",
            background: "#E8EFFF"
          }}>
            <img style={{
              width: "100%"
            }} src={avatar.img} alt="" />
          </Box>}

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
              if(file){
                file.current.click();
              }
            }}
          >
            Upload a photo
            <input
              ref={file}
              style={{
                display: "none"
              }}
              type="file"
              accept=".jpg,.gpeg,.png"
              onChange={(e) => {
                setAvatar({img: URL.createObjectURL(e.target.files[0])});
                setFileAvatar(e.target.files);
              }}
            />
          </Button>
        </Box>
      </Box>

      <Box sx={{
        marginBottom: "24px"
      }}>
        <Box sx={{fontSize: "18px", fontWeight: 700, color: "#5D5E65", lineHeight: "32px", marginBottom: "8px"}}>{t('EDIT.HEADER')}</Box>
        <SearchInput
          value={header}
          setValue={(e) => {
            setHeader(e.target.value);
          }}
          other={{
            placeholder: "Start level"
          }}
        />
      </Box>

      <Box sx={{
        marginBottom: "24px"
      }}>
        <Box sx={{fontSize: "18px", fontWeight: 700, color: "#5D5E65", lineHeight: "32px", marginBottom: "8px"}}>{t('EDIT.BENEFITS')}</Box>
        <Button
          onClick={() => {
            setOpenBenefitModal(true)
          }}
          sx={{
            background: '#E8EFFF',
            padding: '12px 24px',
            borderRadius: '8px',
            border: '1px dashed #4776E6',
            textTransform: 'none',
            fontSize: "14px",
            fontWeight: 700,
            lineHeight: "20px"
          }}
        >
          <Box sx={{marginRight: "8px"}}>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8 4V12" stroke="#4776E6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M4 8L12 8" stroke="#4776E6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Box>
          <span style={{color: '#4776E6', marginLeft: '5px'}}>Add benefit</span>

          {/*modal*/}
          {openBenefitModal &&
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
                left: 0
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
                  height: "350px",
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
                  <Box sx={{marginBottom: "8px", fontSize: "14px", fontWeight: 700, color: "#5D5E65"}}>Name</Box>
                  <SearchInput
                    value={nameBenefit}
                    setValue={e => setNameBenefit(e.target.value)}
                    other={{
                      placeholder: "Benefit name"
                    }}
                  />
                </Box>

                <Box sx={{marginBottom: "24px"}}>
                  <Box sx={{marginBottom: "8px", fontSize: "14px", fontWeight: 700, color: "#5D5E65"}}>Category</Box>
                  <Select
                    fullWidth
                    value={categoryBenefit}
                    onChange={e => setCategoryBenefit(e.target.value)}
                    sx={{
                      width: '100%',
                      height: '38px',
                      fontSize: "16px",
                      fontWeight: 600,
                      color: "#1A051D",
                      borderRadius: "8px",
                      border: "1px solid #ECE9F1",
                      '& .css-1d3z3hw-MuiOutlinedInput-notchedOutline': {
                        border: "none"
                      }
                    }}
                    MenuProps={{
                      PaperProps: {
                        style: {
                          maxHeight: "128px",
                          borderRadius: "8px",
                          overflowY: "auto",
                          padding: 0
                        }
                      }
                    }}
                    variant="outlined"
                  >
                    <MenuItem sx={{fontSize: "14px", fontWeight: 700, padding: "8px"}} value="Female">Доступ к публикациям</MenuItem>
                    <MenuItem sx={{fontSize: "14px", fontWeight: 700, padding: "8px"}} value="Male">Доступ к фото и видео</MenuItem>
                    <MenuItem sx={{fontSize: "14px", fontWeight: 700, padding: "8px"}} value="Other">Онлайн-общение</MenuItem>
                  </Select>
                </Box>

              </Box>
            </Box>
          }
        </Button>
      </Box>

      <Box sx={{marginBottom: "40px"}}>
        <Box sx={{display: "flex", alignItems: "center", justifyContent: "space-between"}}>
          <Box sx={{fontSize: "18px", fontWeight: 700, color: "#5D5E65", lineHeight: "32px", marginBottom: "8px"}}>{t('EDIT.DESCRIPTION')}</Box>
          <Box sx={{color: "#B3B3B3", fontSize: "14px", fontWeight: 500}}>{description.length}/200</Box>
        </Box>
        <SearchInput
          setValue={(e) => {
            e.target.value.length <= 200 ? setDescription(e.target.value) : null
          }}
          value={description}
          other={{
            multiline: true,
            minRows:3,
            autoComplete: "description",
            placeholder: "A short captivating description of the subscription level"
          }}
        />
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
            setAddLevelOpen(false);
          }}
        >
          {t("EDIT.CANCEL")}
        </Button>
      </Box>
    </Box>
  );
}
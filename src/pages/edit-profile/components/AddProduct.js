import { Box } from '@material-ui/core'
import { t } from 'i18next'
import { SearchInput } from './SearchInput'
import Button from '@mui/material/Button'
import React, { useRef, useState } from 'react'
import { Icon } from '../../messages/Icon'
import { ButtonBase } from '@mui/material'
import TextField from '@mui/material/TextField'

export const AddProduct = ({setAddProductOpen}) => {
  const file = useRef(null);

  const [price, setPrice] = useState("");
  const [avatar, setAvatar] = useState({img: ""});
  const [fileAvatar, setFileAvatar] = useState([]);
  const [header, setHeader] = useState("");
  const [description, setDescription] = useState("");

  const [tags, setTags] = useState(["shoes", "merch", "exclusive"]);
  const [tagsText, setTagsText] = useState("");


  return (
    <Box>
      <Box sx={{
        marginBottom: "24px"
      }}>
        <Box sx={{fontSize: "18px", fontWeight: 700, color: "#5D5E65", lineHeight: "32px", marginBottom: "8px"}}>{t('EDIT.PRICE')}</Box>
        <SearchInput
          value={price}
          setValue={(e) => {
            if(!isNaN(Number(e.target.value))){
              setPrice(e.target.value)
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
            placeholder: "Product name"
          }}
        />
      </Box>

      <Box sx={{marginBottom: "24px"}}>
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
            placeholder: "A short captivating description of your product"
          }}
        />
      </Box>

      <Box sx={{
        marginBottom: "24px"
      }}>
        <Box sx={{display: "flex", alignItems: "center", justifyContent: "space-between"}}>
          <Box sx={{fontSize: "18px", fontWeight: 700, color: "#5D5E65", lineHeight: "32px", marginBottom: "8px"}}>{t('EDIT.TAGS')}</Box>
          <Box sx={{color: "#B3B3B3", fontSize: "14px", fontWeight: 500}}>{tags.length}/12</Box>
        </Box>
        {/*<SearchInput*/}
        {/*  icon="hashtag"*/}
        {/*  value={tagsText}*/}
        {/*  setValue={(e) => {*/}
        {/*    setTagsText(e.target.value);*/}
        {/*  }}*/}
        {/*  other={{*/}
        {/*    placeholder: "Enter tags separated by commas"*/}
        {/*  }}*/}
        {/*  tags={tags}*/}
        {/*/>*/}

        <Box sx={{
          position: "relative",
          display: "flex",
          alignItems: "center",
          border: "1px solid #ECE9F1",
          borderRadius: "8px"
        }}>
          <Box sx={{
            position: "absolute",
            display: "flex",
            justifyContent: "end",
            alignItems: "center",
            height: "100%",
            top: 0,
            left: 0,
            width: "36px"
          }}>
            <Icon name="hashtag" />
          </Box>

          <Box sx={{padding: "8px", paddingLeft: "44px", display: "flex", alignItems: "center", gap: "4px", flexWrap: "wrap", width: "100%"}}>
            {tags?.map((tag, i) => {
              return (
                <Box sx={{
                  padding: "4px 8px",
                  background: "#E8EFFF",
                  borderRadius: "4px",
                  // marginRight: "4px",
                  color: "#4776E6",
                  fontSize: "12px",
                  fontWeight: 600,
                  display: "flex",
                  // marginBottom: "8px"
                }}>
              <span style={{marginRight: 2, whiteSpace: "nowrap"}}>
                {tag}
              </span>
                  <ButtonBase
                    onClick={() => {
                      const temp = tags;
                      temp.splice(i, 1);
                      setTags([...temp]);
                    }}
                  >
                    <Icon name="x" />
                  </ButtonBase>
                </Box>
              );
            })}

            <Box sx={{flexGrow: 1}}>
              <TextField
                sx={{
                  '.css-1d3z3hw-MuiOutlinedInput-notchedOutline': {
                    // border: "1px solid #ECE9F1",
                    // borderRadius: "8px",
                    border: "none"
                  },
                  '& .css-jx703g-MuiInputBase-root-MuiOutlinedInput-root': {
                      fontSize: "16px",
                      fontWeight: 600,
                      // paddingLeft: "32px"
                  },
                  '& .css-1t8l2tu-MuiInputBase-input-MuiOutlinedInput-input': {
                    // padding: "10px 12px"
                    padding: 0
                  },
                  // '& .css-1cicz4d-MuiInputBase-root-MuiOutlinedInput-root': {
                  //   fontSize: "16px",
                  //   fontWeight: 600,
                  //   padding: "10px 12px"
                  // }
                }}
                required
                fullWidth
                value={tagsText}
                onChange={e => {
                  if(tags.length < 12){
                    if(e.target.value[e.target.value.length-1] === "," && e.target.value.length > 2) {
                      setTags([...tags, e.target.value.slice(0, e.target.value.length-1)]);
                      setTagsText("");
                    } else {
                      if(e.target.value[e.target.value.length-1] != ","){
                        setTagsText(e.target.value);
                      }
                    }
                  }
                }}
                placeholder={!tags.length && "Enter tags separated by commas"}
              />
            </Box>
          </Box>
        </Box>

        <Box sx={{display: "flex", width: "100%", marginTop: "40px"}}>
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
            {t("EDIT.ADD_PRODUCT")}
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
              setAddProductOpen(false);
            }}
          >
            {t("EDIT.CANCEL")}
          </Button>
        </Box>

      </Box>

    </Box>
  );
}
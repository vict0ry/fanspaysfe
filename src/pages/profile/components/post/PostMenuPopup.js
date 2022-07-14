import { Box, Button, Grid, TextField } from '@mui/material'
import { Icon } from '../../../messages/Icon'
import { beURL } from '../../../../config'
import * as React from 'react'
import { useState, useEffect, useRef } from 'react'
import { changePost } from '../../../../redux/actions/posts.action'
import { useDispatch } from 'react-redux'
import ImageIcon from '@mui/icons-material/Image'

const PostMenuPopup = ({postId, setOpenPostEditor, legacyPictures, legacyContent}) => {
  const [content, setContent] = useState("");
  const [pictures, setPictures] = useState([]);

  const inputFile = useRef(null);

  const dispatch = useDispatch();
  const handleChangePost = () => {
    let formData = new FormData();

    formData.append('content', content)
    pictures.forEach(file => {
      formData.append('images[]', file.src)
    })

    for(let pair of formData.entries()) {
      console.log(pair[0]+ ', ' + pair[1]);
    }

    dispatch(changePost(postId, formData));
  }

  useEffect(() => {
      setContent(legacyContent);
      setPictures(legacyPictures.map((picture) => {
        return({
          src: picture,
          isExist: true
        });
      }));
    }, [])

  console.log(pictures)

  return(
    <Box
      sx={{
        position: "fixed",
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        backdropFilter: "blur(8px)",
        zIndex: 1,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        cursor: "default"
      }}
      onClick={() => {
        setOpenPostEditor(false)
      }}
    >
      <Box
        sx={{
          padding: "16px",
          position: "relative",
          background: "#fff",
          boxShadow: "0px 2px 8px rgba(26, 5, 29, 0.1)",
          borderRadius: "8px",
          width: "80vw"
        }}
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <Button
          sx={{
            minWidth: 0,
            minHeight: 0,
            position: "absolute",
            right: "8px",
            top: "8px"
          }}
          onClick={() => {
            setOpenPostEditor(false);
            // setContent(legacyContent)
            // setPictures(legacyPictures)
          }}
        >
          <Icon name="X" />
        </Button>

        <Box sx={{
          paddingTop: "50px"
        }}>
          <Box sx={{
            marginBottom: "16px",
            fontSize: 14,
            fontWeight: 700,
            color: "#5D5E65"
          }}>
            Edit post
          </Box>
          <Grid
            container
            spacing={1}
            sx={{ maxHeight: '500px', overflowY: 'scroll', marginTop: '20px' }}
          >
            {pictures.map((picture, index) => {
              return (
                <Grid item key={index} sx={{
                  border: "1px solid #ECE9F1",
                  position: "relative"
                }} xs={4} sm={4}>
                  <img src={
                    picture.isExist ? beURL + picture.src : picture.src
                  } alt={index} style={{maxWidth: "100%"}}/>
                  <Button
                    sx={{
                      minWidth: 0,
                      minHeight: 0,
                      position: "absolute",
                      right: "0",
                      top: "0",
                      background: "#fff",
                      zIndex: 1,
                      "&:hover": {
                        backgroundColor: "#E7E7E7"
                      }
                    }}
                    onClick={() => {
                      setPictures([...pictures.slice(0, index), ...pictures.slice(index+1, pictures.length)])
                    }}
                  >
                    <Icon name="x" />
                  </Button>
                </Grid>
              );
            })}
          </Grid>
          <TextField
            InputProps={{disableUnderline: true}}
            sx={{ width: '100%', padding: '0', marginLeft: 0}}
            multiline
            maxRows={10}
            onChange={(e) => {
              setContent(e.target.value)
            }}
            value={content}
          />

          <Box sx={{display: "flex", justifyContent: "start"}}>
            <ImageIcon onClick={() => {
              inputFile.current.click();
            }} style={{ color: '#5c9edf', cursor: 'pointer' }}>

            </ImageIcon>
            <input
              type="file"
              multiple
              accept='.png,.jpg,.jpeg'
              onChange={(e) => {
                setPictures([...pictures, ...[...e.target.files].map((file) => {
                  console.log(URL.createObjectURL(file))
                  return({
                    src: URL.createObjectURL(file),
                    isExist: false
                  });
                })]);
              }}
              ref={inputFile}
              style={{ display: 'none' }}
            />
          </Box>

          <Box sx={{
            display: "flex",
            justifyContent: "center"
          }}>
            <Button
              sx={{
                padding: "8px",
                marginRight: "8px"
              }}
              onClick={handleChangePost}
            >Change Post</Button>

            <Button
              sx={{
                padding: "8px"
              }}
              onClick={() => {
                setOpenPostEditor(false)
              }}
            >Cancel</Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export {PostMenuPopup}
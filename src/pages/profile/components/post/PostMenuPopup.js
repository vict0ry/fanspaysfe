import { Box, Button, Grid, TextField } from '@mui/material'
import { Icon } from '../../../messages/Icon'
import { beURL } from '../../../../config'
import * as React from 'react'
import { useState, useEffect } from 'react'
import { changePost } from '../../../../redux/actions/posts.action'
import { useDispatch } from 'react-redux'

const PostMenuPopup = ({postId, setOpenPostEditor, legacyPictures, legacyContent}) => {
  const [content, setContent] = useState("");
  const [pictures, setPictures] = useState([]);

  const dispatch = useDispatch();
  const handleChangePost = () => {
    dispatch(changePost(postId, content, pictures));
  }

  useEffect(() => {
      setContent(legacyContent);
      setPictures([...legacyPictures, ...legacyPictures]);
    }, [])

  return(
    <Box sx={{
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

    }}>
      <Box sx={{
        padding: "16px",
        position: "relative",
        background: "#fff",
        boxShadow: "0px 2px 8px rgba(26, 5, 29, 0.1)",
        borderRadius: "8px",
        width: "80vw"
      }}>
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
            spacing={2}
            sx={{
              justifyContent: "space-around",
            }}
          >
            {pictures.map((picture, index) => {
              return (
                <Grid item key={index} sx={{
                  border: "1px solid #ECE9F1",
                  position: "relative"
                }}>
                  <img src={beURL + picture} alt={index} />
                  <Button
                    sx={{
                      minWidth: 0,
                      minHeight: 0,
                      position: "absolute",
                      right: "0",
                      top: "0"
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

          <Box sx={{
            display: "flex",
            justifyContent: "center",

          }}>
            <Button
              sx={{
                padding: "8px",
                marginRight: "8px"
              }}
              onClick={handleChangePost}
            >Change Post</Button>

            <Button sx={{
              padding: "8px"
            }}>Cancel</Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export {PostMenuPopup}
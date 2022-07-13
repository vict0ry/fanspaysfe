import { Box, Button } from '@mui/material'
import { Icon } from '../messages/Icon'
import React from 'react'


const currentPage = 6;


const styles = {
  switchPageBtn: {
    borderRadius: 8,
    minWidth: 0,
    minHeight: 0,
    margin: "0 6px",
    color: "#4776E6",
    fontSize: 15,
    fontWeight: 600,
    width: 32,
    height:32,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "#fff"
  },
  switchArrowBtn: {
    minWidth: 0,
    minHeight: 0,
    margin: "0 6px"
  },
  wrapper: {
    display: "flex",
    justifyContent: "center",
    marginTop: 32,
    marginBottom: 96
  },
};

const PagesController = () => {
  return(
    <Box style={styles.wrapper}>
      <Box style={{display: "flex", alignItems: "center"}}>
        <Button style={styles.switchArrowBtn}>
          <Icon name="arrowLeft" />
        </Button>

        <Button style={styles.switchPageBtn}>
          1
        </Button>
        <Button style={styles.switchPageBtn}>
          2
        </Button>

        <Button style={styles.switchPageBtn}>
          ...
        </Button>

        <Button style={{
          ...styles.switchPageBtn,
          ...{ background: "#4776E6", color: "#fff" }
        }}>
          6
        </Button>
        <Button style={styles.switchPageBtn}>
          7
        </Button>

        <Button style={styles.switchArrowBtn}>
          <Icon name="arrowRight" />
        </Button>
      </Box>
    </Box>
  );
}

export {PagesController};
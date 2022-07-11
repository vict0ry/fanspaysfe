import React from 'react'
import { Box, Button, Checkbox, FormControlLabel, FormGroup, Grid, InputBase } from '@mui/material'
import { SearchInput } from '../messages/SearchInput'
import { Icon } from '../messages/Icon'



const categories = [
  "Медитация",
  "Спорт",
  "Йога",
  "Рисование",
  "Видеоигры",
  "Музыка",
  "Мода и Стиль"
];



const leftFilterStyles = {
  cont: {
    padding: "24px 12px",
    borderRadius: 8,
    background: "#fff",
    display: "flex",
    flexDirection: "column",
    alignItems: "start",
    marginRight: 16
  },
  ageCont: {
    display: "flex",
    flexDirection: "column",
    alignItems: "start",
    marginBottom: 24
  },
  ageContItem: {
    marginBottom: 8,
    display: "flex",
    alignItems: "center"
  },
  title: {
    marginBottom: 16,
    fontSize: 14,
    fontWeight: 700,
    color: "#5D5E65",

  },
  ageTitle: {
    fontSize: 12,
    fontWeight: 700,
    marginRight: 8,
    width: 20
  },
  ageController: {
    display: "flex",
    alignItems: "center"
  },
  ageButton: {
    minWidth: 0,
    minHeight: 0,
    borderRadius: "50%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
    width: 16,
    height: 16,
    color: "#000",
    background: "#F7F5F9",
    padding: 2,
    fontWeight: 600
  },
  inputAge: {
    margin: "0 4px",
    borderRadius: 8,
    background: "#F7F5F9",
    padding: "4px 6px",
    fontSize: 12,
    fontWeight: 600,
    color: "#4776E6",
    width: 28,
    height: 24,
  },

  categories: {
    height: 150,
    width: "100%",
    overflowY: "scroll",
    '&::-webkit-scrollbar-track': {
      // boxShadow: 'inset 0 0 6px rgba(0,0,0,0.00)',
      // webkitBoxShadow: 'inset 0 0 6px rgba(0,0,0,0.00)'
      background: "#ECE9F1",
      border: "8px solid transparent",
      backgroundClip: "content-box",
      borderRadius: 3,

    },
    '&::-webkit-scrollbar-thumb': {
      backgroundColor: '#4776E6',
      borderRadius: 3,
      border: "8px solid transparent",
      backgroundClip: "content-box",
      // outline: '1px solid slategrey'
    },
    marginBottom: "24px",

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

const FormControlLabelStyles = {
  margin: 0,
  marginBottom: "8px",
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

const LeftFilter = ({fromAge, setFromAge, upToAge, setUpToAge, checkedTags, setCheckedTags}) => {
  return(
    <Grid item style={leftFilterStyles.cont}>
      <Box style={leftFilterStyles.ageCont}>
        <Box style={leftFilterStyles.title}>ВОЗРАСТ</Box>
        <Box style={leftFilterStyles.ageContItem}>
          <span style={leftFilterStyles.ageTitle}>От</span>
          <Box style={leftFilterStyles.ageController}>
            <Button
              style={leftFilterStyles.ageButton}
              onClick={() => {
                if(fromAge > 0) {
                  setFromAge(fromAge - 1)
                }
              }}
            >-</Button>
            <InputBase
              style={leftFilterStyles.inputAge}
              value={fromAge}
              onChange={(e) => {
                if(Number(e.target.value) <= upToAge && Number(e.target.value) > 0) {
                  setFromAge(Number(e.target.value));
                }
              }}
            />
            <Button
              style={{
                ...leftFilterStyles.ageButton,
                ...{paddingTop: 3},
                ...fromAge===upToAge ? {color: "#C4C4C4"}: {}
              }}
              onClick={() => {
                if(fromAge < upToAge) {
                  setFromAge(fromAge + 1)
                }
              }}
            >+</Button>
          </Box>
        </Box>

        <Box style={leftFilterStyles.ageContItem}>
          <span style={leftFilterStyles.ageTitle}>До</span>
          <Box style={leftFilterStyles.ageController}>
            <Button
              style={{
                ...leftFilterStyles.ageButton,
                ...fromAge===upToAge ? {color: "#C4C4C4"}: {}
              }}
              onClick={() => {
                if(fromAge < upToAge) {
                  setUpToAge(upToAge-1)
                }
              }}
            >-</Button>
            <InputBase
              style={leftFilterStyles.inputAge}
              value={upToAge}
              onChange={(e) => {
                if(fromAge <= Number(e.target.value) && Number(e.target.value) <= 100) {
                  setUpToAge(Number(e.target.value));
                }
              }}
            />
            <Button
              style={{...leftFilterStyles.ageButton, ...{paddingTop: 3}}}
              onClick={() => {
                if(Number(upToAge < 99))
                  setUpToAge(upToAge+1)
              }}
            >+</Button>
          </Box>
        </Box>
      </Box>


      <Box style={{width: "100%"}}>
        <Box style={leftFilterStyles.title}>КАТЕГОРИЯ</Box>
        <Box sx={leftFilterStyles.categories}>
          <FormGroup>
            {categories.map((category) => {
              return(
                <FormControlLabel
                  control={
                    <Checkbox
                      icon={<BpIcon />}
                      checkedIcon={<BpCheckedIcon />}
                      name={category}
                      onChange={(e) => {
                        setCheckedTags({
                          ...checkedTags,
                          [e.target.name]: e.target.checked
                        });
                      }}
                    />
                  }
                  label={category}
                  sx={FormControlLabelStyles}
                />
              );
            })}
          </FormGroup>
        </Box>
      </Box>


      <Box style={{width: 180, marginBottom: "24px"}}>
        <Box style={leftFilterStyles.title}>ПОИСК ПО НИКУ</Box>
        <SearchInput name="at" placeholder="Введите ник" />
      </Box>
      <Box style={{display: "flex", }}>
        <Button
          style={{
            color: "#4776E6",
            fontSize: 12,
            fontWeight: 700,
            textTransform: "none",
            marginRight: 8,
            background: "#E8EFFF",
            borderRadius: 8,
            padding: "10px 13px"
          }}
        >
          Применить фильтр
        </Button>

        <Button
          style={{
            width: 36,
            height: 36,
            background: "#F7F5F9",
            borderRadius: 8,
            minHeight: 0,
            minWidth: 0,

          }}
        >
          <Icon name="delete" />
        </Button>
      </Box>
    </Grid>
  );
}

export { LeftFilter };
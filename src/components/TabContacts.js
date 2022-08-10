import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import { t } from 'i18next'
import React, { useEffect, useState } from 'react'
import { City, Country, State } from 'country-state-city'
import InputLabel from '@mui/material/InputLabel'
import FormControl from '@mui/material/FormControl'
import Autocomplete from '@mui/material/Autocomplete'
import TextField from '@mui/material/TextField'
import { Icon } from '../pages/messages/Icon'
import { SearchInput } from '../pages/edit-profile/components/SearchInput'
import { EasyDatePicker } from '../pages/edit-profile/components/easyDatePicker'
import { useParams } from 'react-router'
import { loadProfile } from '../redux/actions/profile.action'
import { useDispatch, useSelector } from 'react-redux'


export const TabContacts = () => {
  const countries = Country.getAllCountries()

  const updatedCountries = countries.map((country) => ({
    label: country.name,
    value: country.id,
    ...country
  }))
  const updatedStates = (countryId) =>
    State.getStatesOfCountry(countryId)
      .map((state) => ({ label: state.name, value: state.id, ...state }))
  const updatedCities = (stateId) => {
    const getCitiesById = City.getCitiesOfCountry
    const cities = [...new Set(getCitiesById(stateId))]
      .map((city) => ({ label: city.name, value: city.id, ...city }))
    return cities
  }

  const [country, setCountry] = useState('')
  const [city, setCity] = useState('')
  const [cities, setCities] = useState([])

  const handleCountryChange = (newValue) => {
    setCountry(newValue)
    setCities(updatedCities(newValue.isoCode))
  }
  const handleCityChange = (newValue) => {
    setCity(newValue)
  }



  const loggedUser = useSelector(state => state.user)

  const username = useParams().username || loggedUser?.userData?._id
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(loadProfile(username))
  }, []);
  const { profileUser } = useSelector(state => state.profile.profile)

  console.log(profileUser)

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [location, setLocation] = useState("Praha, Czech");
  const [birthDate, setBirthDate] = useState(0);

  console.log(birthDate)

  const chosenAgeCallback = (dateIsoString) => {
    setBirthDate(dateIsoString)
  }

  return (
    <Box>
      <Box sx={{
        color: "#5D5E65",
        fontSize: "18px",
        fontWeight: 700,
        marginBottom: "16px"
      }}>
        <Box>{t("EDIT.CONTACT_INFO.TITLE")}</Box>
        <Box sx={{
          fontSize: "12px",
          fontWeight: 600,
          color: "#1FCC64",
          display: "flex",
          alignItems: "center"
        }}>
          <Icon name="little_info" />
          <span style={{marginLeft: "4px"}}>{t("EDIT.CONTACT_INFO.PROMPT")}</span>
        </Box>
      </Box>

      <Box sx={{marginBottom: "24px"}}>
        <Box sx={{fontSize: "14px", fontWeight: 700, color: "#5D5E65", marginBottom: "8px"}}>
          {t("EDIT.CONTACT_INFO.FIRST_NAME")}
        </Box>
        <SearchInput
          value={firstName}
          setValue={e => setFirstName(e.target.value)}
        />
      </Box>

      <Box sx={{marginBottom: "24px"}}>
        <Box sx={{fontSize: "14px", fontWeight: 700, color: "#5D5E65", marginBottom: "8px"}}>
          {t("EDIT.CONTACT_INFO.LAST_NAME")}
        </Box>
        <SearchInput
          value={lastName}
          setValue={e => setLastName(e.target.value)}
        />
      </Box>

      <Box sx={{marginBottom: "24px"}}>
        <Box sx={{fontSize: "14px", fontWeight: 700, color: "#5D5E65", marginBottom: "8px"}}>
          {t("EDIT.CONTACT_INFO.LOCATION")}
        </Box>
        <SearchInput
          value={location}
          setValue={e => setLocation(e.target.value)}
          icon="location"
        />
      </Box>

      <Box sx={{marginBottom: "24px"}}>
        <Box sx={{fontSize: "14px", fontWeight: 700, color: "#5D5E65", marginBottom: "8px"}}>
          {t("EDIT.CONTACT_INFO.BIRTH_DATE")}
        </Box>
        <EasyDatePicker
          valueDate={profileUser.birthDate}
          chosenAgeCallback={chosenAgeCallback.bind(this)}
        />

      </Box>

    </Box>
  );

  // return <div>
  //   <Box component="form" noValidate onSubmit={() => {
  //   }} sx={{ mt: 3 }}>
  //     <Grid container spacing={2}>
  //       <Grid item xs={12}>
  //         <InputLabel id="select-state-label">Country</InputLabel>
  //         <FormControl fullWidth>
  //           <Autocomplete
  //             labelId="select-state-label"
  //             label="country"
  //             onChange={(event, newValue) => {
  //               handleCountryChange(newValue)
  //             }}
  //             options={updatedCountries}
  //             renderInput={(params) => <TextField {...params} label="Country" />}
  //           >
  //           </Autocomplete>
  //         </FormControl>
  //       </Grid>
  //       <Grid item xs={12}>
  //         <InputLabel id="select-city-label">City</InputLabel>
  //         <FormControl fullWidth>
  //           <Autocomplete
  //             options={cities}
  //             labelId="select-city-label"
  //             renderInput={(params) => <TextField {...params} label="City" />}
  //             label="country"
  //             onChange={(event, newValue) => {
  //               handleCityChange(newValue)
  //             }}
  //           >
  //           </Autocomplete>
  //         </FormControl>
  //       </Grid>
  //       <Grid item xs={12}>
  //         <InputLabel id="select-phonenumber-label">Phone number</InputLabel>
  //         <FormControl fullWidth>
  //           <TextField
  //             labelId="select-phonenumber-label"
  //             label="phone number"
  //           >
  //           </TextField>
  //         </FormControl>
  //       </Grid>
  //       <Grid item xs={12}>
  //         <InputLabel id="select-phonenumber-label">Instagram</InputLabel>
  //         <FormControl fullWidth>
  //           <TextField
  //             labelId="select-instagram-label"
  //             label="Your instagram"
  //           >
  //           </TextField>
  //         </FormControl>
  //       </Grid>
  //       <Grid item xs={12}>
  //         <InputLabel id="select-personalweb-label">Your personal website</InputLabel>
  //         <FormControl fullWidth>
  //           <TextField
  //             labelId="select-personalweb-label"
  //             label="Your website"
  //           >
  //           </TextField>
  //         </FormControl>
  //       </Grid>
  //     </Grid>
  //     <Button
  //       type="submit"
  //       fullWidth
  //       variant="contained"
  //       sx={{ mt: 3, mb: 2 }}
  //     >
  //       {t('COMMON.SAVE')}
  //     </Button>
  //   </Box>
  // </div>
}

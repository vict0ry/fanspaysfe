export const getZodiac = (day, month) => {
  month = month.toLowerCase();
  {
    let astro_sign = ''
    if (month === 'december') {

      if (day < 22)
        astro_sign = 'Sagittarius'
      else
        astro_sign = 'Capricorn'
    } else if (month === 'january') {
      if (day < 20)
        astro_sign = 'Capricorn'
      else
        astro_sign = 'Aquarius'
    } else if (month === 'february') {
      if (day < 19)
        astro_sign = 'Aquarius'
      else
        astro_sign = 'pisces'
    } else if (month === 'march') {
      if (day < 21)
        astro_sign = 'Pisces'
      else
        astro_sign = 'aries'
    } else if (month === 'april') {
      if (day < 20)
        astro_sign = 'Aries'
      else
        astro_sign = 'ZODIAC.TAURUS'
    } else if (month === 'may') {
      if (day < 21)
        astro_sign = 'ZODIAC.TAURUS'
      else
        astro_sign = 'gemini'
    } else if (month === 'june') {
      if (day < 21)
        astro_sign = 'Gemini'
      else
        astro_sign = 'cancer'
    } else if (month === 'july') {
      if (day < 23)
        astro_sign = 'Cancer'
      else
        astro_sign = 'leo'
    } else if (month === 'august') {
      if (day < 23)
        astro_sign = 'Leo'
      else
        astro_sign = 'virgo'
    } else if (month === 'september') {
      if (day < 23)
        astro_sign = 'Virgo'
      else
        astro_sign = 'libra'
    } else if (month === 'october') {
      if (day < 23)
        astro_sign = 'Libra'
      else
        astro_sign = 'Scorpio'
    } else if (month === 'november') {
      if (day < 22)
        astro_sign = 'Scorpio'
      else
        astro_sign = 'Sagittarius'
    }
    return astro_sign
  }
}

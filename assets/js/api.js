"use strict"
const api_key = "5a4517643e3321ce293c70b467dd0aaa"

/**
 *Fetch data from server
 * @param {string} URL - API URL.
 * @param {Function} callback - a callback function to recieve the data.
 */
export const fetchData = (URL, callback) => {
  fetch(`${URL}&appid=${api_key}`)
    .then(res => res.json())
    .then(data => callback(data))
}

export const url = {
  currentWeather(lat, lon) {
    return `https://api.openweathermap.org/data/2.5/weather?${lat}&${lon}&units=metric`
  },
  forecast(lat, lon) {
    return `https://api.openweathermap.org/data/2.5/forecast?${lat}&${lon}&units=metric`
  },
  airPollution(lat, lon) {
    return `https://api.openweathermap.org/data/2.5/air_pollution?${lat}&${lon}`
  },
  reverseGeo(lat, lon) {
    return `https://api.openweathermap.org/geo/1.0/reverse?${lat}&${lon}&limit=5`
  },
  /**
   *
   * @param {string} query - Search query, e.g.: "New Delhi".
   * @returns
   */
  geoCoding(query) {
    return `https://api.openweathermap.org/geo/1.0/direct?q=${query}&limit=5`
  },
}

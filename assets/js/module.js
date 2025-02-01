"use strict"

export const daysOfTheWeek = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
]

export const nameOfTheMonths = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
]

/**
 *
 * @param {number} dateUnix - Unix date in seconds.
 * @param {number} timezone - Timezone shift from UTC in seconds.
 * @returns {String} Date String. format: "Sunday 10, January"
 */
export const getDate = (dateUnix, timezone) => {
  const date = new Date((dateUnix + timezone) * 1000)
  const nameOfTheDay = daysOfTheWeek[date.getUTCDay()]
  const nameOfTheMonth = nameOfTheMonths[date.getUTCMonth()]

  return `${nameOfTheDay} ${date.getUTCDate()}, ${nameOfTheMonth}`
}

/**
 *
 * @param {number} timeUnix - Unix date in seconds.
 * @param {number} timezone - Timezone shift from UTC in seconds.
 * @returns {string} Time string. format : "HH:MM AM/PM"
 */
export const getTime = (timeUnix, timezone) => {
  const date = new Date((timeUnix + timezone) * 1000)
  const hours = date.getUTCHours()
  const minutes = date.getUTCMinutes()
  const period = hours >= 12 ? "PM" : "AM"

  return `${hours % 12 || 12}:${minutes} ${period}`
}

/**
 *
 * @param {number} timeUnix - Unix date in seconds.
 * @param {number} timezone - Timezone shift from UTC in seconds.
 * @returns {string} Time string. format : "HH AM/PM"
 */
export const getHours = (timeUnix, timezone) => {
  const date = new Date((timeUnix + timezone) * 1000)
  const hours = date.getUTCHours()
  const period = hours >= 12 ? "PM" : "AM"

  return `${hours % 12 || 12} ${period}`
}

/**
 *
 * @param {number} mps - wind speed in meter per seconds.
 * @returns {number} wind speed in kilometers per hour.
 */
export const mpsTokmph = mps => {
  const mph = mps * 3600
  return mph / 1000
}

export const airQualityIndexText = {
  1: {
    level: "Good",
    message:
      "Congratulations! The air quality is excellent (AQI 0-50), and the air poses little or no risk to your health. Enjoy the fresh and clean air, and make the most of your day!",
  },
  2: {
    level: "Fair",
    message:
      " Air quality is fair (AQI 51-100), posing a moderate health concern for some sensitive individuals. For the majority, it's acceptable. Stay informed, take precautions if sensitive to air pollution.",
  },
  3: {
    level: "Moderate",
    message:
      "Sensitive individuals may experience health effects (AQI 101-150), but the general public is unlikely to be affected. Limit prolonged outdoor activities, especially if you have respiratory or heart conditions. Stay informed for updates.",
  },
  4: {
    level: "Poor",
    message:
      "Air quality is poor (AQI 151-200). Health effects for everyone are possible, with more serious impacts on sensitive groups. Minimize outdoor exertion, especially if you're sensitive. Stay updated on air quality changes.",
  },
  5: {
    level: "Ver Poor",
    message:
      "Air quality is very poor (AQI 201-300). Health alert: everyone may experience more serious health effects. Sensitive groups should avoid outdoor activities. Take necessary precautions and stay informed about air quality updates.",
  },
}

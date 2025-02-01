"use strict"

import { updateWeather, error404 } from "./app.js"
const defaultLocation = "#/weather?lat=28.61389&lon=77.20889" //New Delhi, India

const currentLocation = () => {
  window.navigator.geolocation.getCurrentPosition(
    res => {
      const { latitude, longitude } = res.coords

      updateWeather(`lat=${latitude}`, `lon=${longitude}`)
    },
    err => {
      window.location.hash = defaultLocation
    }
  )
}

/**
 *
 * @param {string} query - Searched City query
 */
const locationSearch = query => updateWeather(...query.split("&"))
// updateWeather("lat=28.61389", "lon=77.20889")

const routes = new Map([
  ["/current-location", currentLocation],
  ["/weather", locationSearch],
])

const checkHash = () => {
  const requestURL = window.location.hash.slice(1)
  const [route, query] = requestURL.includes
    ? requestURL.split("?")
    : [requestURL]

  routes.get(route) ? routes.get(route)(query) : error404()
}

window.addEventListener("hashchange", checkHash)
window.addEventListener("load", () => {
  if (!window.location.hash) {
    window.location.hash = "#/current-location"
  } else {
    checkHash()
  }
})

const axios = require('axios')
const {Airline, Airport} = require('../db/models')

const baseURI = `https://api.flightstats.com/flex/`

const APInames = {
  activeAirlines: 'airlines/rest/v1/json/active?'
}

const appId = `&appKey=${process.env.FLIGHT_STATS_APP_ID}`
const appKey = `&appKey=${process.env.FLIGHT_STATS_APP_KEY}`

const url = `${baseURI}${APInames.activeAirlines}${appId}${appKey}`

const getAirlines = async url => {
  try {
    const {data} = await axios.get(url)
    const {airlines} = data
    console.log('airlines', airlines)
    // const { airlines } = response
    console.log('airlines: ', airlines)
    airlines.forEach(element => {
      Airline.create({
        fs: element.fs,
        iata: element.iata,
        icao: element.icao,
        name: element.name,
        active: element.active
      })
    })
  } catch (err) {
    console.error(err)
  }
}

const getAirports = async url => {
  try {
    const {data} = await axios.get(url)
    const {airports} = data
    airports.forEach(element => {
      Airport.create({
        fs: element.fs,
        faa: element.faa,
        name: element.name,
        city: element.city,
        stateCode: element.stateCode,
        countryCode: element.countryCode,
        countryName: element.countryName,
        regionName: element.regionName,
        timeZoneRegionName: element.timeZoneRegionName,
        localTime: element.localTime,
        utcOffsetHours: element.utcOffsetHours,
        latitude: element.latitude,
        longitude: element.longitude,
        elevationFeet: element.elevationFeet,
        classification: element.classification,
        active: element.active,
        weatherUrl: element.weatherUrl,
        delayIndexUrl: element.delayIndexUrl
      })
    })
  } catch (err) {
    console.error(err)
  }
}

// getAirlines(urlTwo)
getAirports(urlAirports)
console.log(urlAirports)

module.exports = {
  getAirlines,
  getAirports
}

// "https://api.flightstats.com/flex/airlines/rest/v1/json/active?appId=5afd7597&appKey=e3b43b26a47849b0c11b5477b4d543d6"
// "https://api.flightstats.com/flex/airlines/rest/v1/json/active?appId=5afd7597&appKey=e3b43b26a47849b0c11b5477b4d543d6%09"
// "https://api.flightstats.com/flex/airlines/rest/v1/json/active?appId=5afd7597&appKey=e3b43b26a47849b0c11b5477b4d543d6"
// "https://api.flightstats.com/flex/airlines/rest/v1/json/active?appId=5afd7597&appKey=e3b43b26a47849b0c11b5477b4d543d6%09&extendedOptions=useHttpErrors"

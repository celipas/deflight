const Sequelize = require('sequelize')
const db = require('../db')

const Airport = db.define('airport', {
  fs: {
    type: Sequelize.STRING
  },
  faa: {
    type: Sequelize.STRING
  },
  name: {
    type: Sequelize.STRING
  },
  city: {
    type: Sequelize.STRING
  },
  stateCode: {
    type: Sequelize.STRING
  },
  countryCode: {
    type: Sequelize.STRING
  },
  countryName: {
    type: Sequelize.STRING
  },
  regionName: {
    type: Sequelize.STRING
  },
  timeZoneRegionName: {
    type: Sequelize.STRING
  },
  localTime: {
    type: Sequelize.STRING
  },
  utcOffsetHours: {
    type: Sequelize.INTEGER
  },
  latitude: {
    type: Sequelize.FLOAT
  },
  longitude: {
    type: Sequelize.FLOAT
  },
  elevationFeet: {
    type: Sequelize.INTEGER
  },
  classification: {
    type: Sequelize.INTEGER
  },
  active: {
    type: Sequelize.BOOLEAN
  },
  weatherUrl: {
    type: Sequelize.STRING
  },
  delayIndexUrl: {
    type: Sequelize.STRING
  }
})

module.exports = Airport

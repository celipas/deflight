const Sequelize = require('sequelize')
const db = require('../db')

const Airline = db.define('airline', {
  name: {
    type: Sequelize.STRING
  },
  fs: {
    type: Sequelize.STRING
  },
  iata: {
    type: Sequelize.STRING
  },
  icao: {
    type: Sequelize.STRING
  },
  active: {
    type: Sequelize.BOOLEAN
  }
})

module.exports = Airline

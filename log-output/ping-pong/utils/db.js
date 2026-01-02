const Sequelize = require('sequelize')
const config = require('./config')
const logger = require('./logger')

const sequelize = new Sequelize(config.DATABASE_URL)

const connectToDatabase = () => {
  connect()
}

const connect = async () => {
  try {
    await sequelize.authenticate()
    connected = true
    logger.info('Successfully connected to the database')
  } catch (error) {
    logger.error('Unable to connect to the database: ', error)
    return process.exit(1)
  }

  return null
}

const checkConnection = async () => {
  try {
    await sequelize.authenticate()
    return true
  } catch (error) {
    return false
  }
}

module.exports = { connectToDatabase, checkConnection, sequelize }

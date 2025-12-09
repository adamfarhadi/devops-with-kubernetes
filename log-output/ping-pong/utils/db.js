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
    logger.info('Successfully connected to the database')
  } catch (error) {
    logger.error('Unable to connect to the database: ', error)
    return process.exit(1)
  }

  return null
}

module.exports = { connectToDatabase, sequelize }

const express = require('express')
const axios = require('axios')
const app = express()
const config = require('./utils/config')

const fs = require('fs')
const crypto = require('crypto')

const log_file_path =
  process.env.NODE_ENV === 'production'
    ? '/usr/src/app/files/log.txt'
    : '/tmp/log.txt'
const pingPongBaseUrl =
  process.env.NODE_ENV === 'production'
    ? 'http://ping-pong-svc:80'
    : 'http://localhost:3001'

const information_file_path =
  process.env.NODE_ENV === 'production'
    ? '/etc/information/information.txt'
    : '../local-dev-files/information.txt'

const readInformationFile = async () => {
  try {
    const informationFileData = await fs.promises.readFile(
      information_file_path,
      'utf8'
    )
    return informationFileData
  } catch (error) {
    console.error('Error reading file: ', error)
    return null
  }
}

const writeLogFile = () => {
  const line = new Date() + ': ' + crypto.randomUUID()

  fs.writeFile(log_file_path, line, (error) => {
    if (error) {
      console.error('Error writing to file: ', error)
    } else {
      console.log('Wrote: ', line.trim())
    }
  })
}

writeLogFile()

setInterval(writeLogFile, 5000)

const getLogContent = async () => {
  try {
    const data = await fs.promises.readFile(log_file_path, 'utf8')
    return data
  } catch (error) {
    console.error('Error reading file: ', error)
    return null
  }
}

const getPingPongContent = async () => {
  const response = await axios.get(`${pingPongBaseUrl}/pings`)
  return response.data.toString()
}

app.get('/', async (req, res) => {
  const logData = await getLogContent()
  console.log('Read: ', logData)

  const informationData = await readInformationFile()
  console.log('Read: ', informationData)

  const pingPongData = await getPingPongContent()

  if (!logData || !pingPongData || !informationData || !config.MESSAGE) {
    return res.status(500).end()
  }

  res.send(
    `
      <p>file content: ${informationData}</p>
      <p>env variable: MESSAGE=${config.MESSAGE}</p>
      <p>${logData}</p>
      <p>Ping / Pongs: ${pingPongData}</p>
    `
  )
})

app.listen(config.PORT, () => {
  console.log(`Server started in port ${config.PORT}`)
})

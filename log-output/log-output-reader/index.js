const express = require('express')
const app = express()
const port = process.env.PORT || 3000

const fs = require('fs')
const path = require('path')

const log_file_path = path.join('/usr/src/app/files/log.txt')
const pingpong_file_path = path.join('/usr/src/app/files/pingpong.txt')

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
  try {
    const data = await fs.promises.readFile(pingpong_file_path, 'utf8')
    return data
  } catch (error) {
    console.error('Error reading file: ', error)
    return null
  }
}

app.get('/status', async (req, res) => {
  const logData = await getLogContent()
  console.log('Read: ', logData)
  const pingPongData = await getPingPongContent()
  console.log('Read: ', pingPongData)

  if (!logData || !pingPongData) {
    res.status(500).end()
  }
  
  res.send(`<p>${logData}</p><p>Ping / Pongs: ${pingPongData}</p>`)
})

app.listen(port, () => {
  console.log(`Server started in port ${port}`)
})
const express = require('express')
const app = express()
const port = process.env.PORT || 3000

const fs = require('fs')
const path = require('path')

const file_path = path.join('/tmp/content.txt')

const getContent = async () => {
  try {
    const data = await fs.promises.readFile(file_path, 'utf8')
    return data
  } catch (error) {
    console.error('Error reading file: ', error)
    return null
  }
}

app.get('/status', async (req, res) => {
  const data = await getContent()

  if (!data) {
    res.status(500).end()
  }
  
  console.log('Read: ', data)
  res.send(data)
})

app.listen(port, () => {
  console.log(`Server started in port ${port}`)
})
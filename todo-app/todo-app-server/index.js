const express = require('express')
const fs = require('fs')

const app = express()
const port = process.env.PORT || 3001
const image_file_path = '/usr/src/app/files/image.jpg'

app.get('/', (req, res) => {
  const image_data = fs.readFileSync(image_file_path).toString('base64')
  console.log(`[${new Date().toISOString()}] Fetching image from ${image_file_path}`)

  if (!image_data) {
    res.status(500).end()
  }

  const html = `
  <!DOCTYPE html>
  <html>
    <body>
      <h1>The Project App</h1>
      <img src="data:image/jpeg;base64,${image_data}"/>
      <p>DevOps with Kubernetes 2025</p>
    </body>
  </html>
  `
  res.send(html)
})

app.listen(port, () => {
  console.log(`[${new Date().toISOString()}] Server started in port ${port}`)
})

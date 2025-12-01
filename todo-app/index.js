const express = require('express')
const app = express()
const port = process.env.PORT

app.get('/', (req, res) => {
  res.send('<p>Hello World!</p>')
})

app.listen(port, () => {
  console.log(`Server started in port ${port}`)
})

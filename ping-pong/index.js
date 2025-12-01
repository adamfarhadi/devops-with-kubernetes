const express = require('express')
const pingpongRouter = require('./pingpong')
const port = process.env.PORT

const app = express()
app.use('/pingpong', pingpongRouter)

app.listen(port, () => {
  console.log(`Server started in port ${port}`)
})
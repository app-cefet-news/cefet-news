const express = require('express')
const bodyParser = require('body-parser')
// #####
const adminRoutes = require('./routes/admin.js')
const commonRoutes = require('./routes/common.js')
// #####

const server = express()

const port = 4000

// server.use(bodyParser.urlencoded({ extended: false }))
server.use(bodyParser.json())

server.use('/admin', adminRoutes)
server.use(commonRoutes)

// 404 Page
server.use((req, res) => {

  res.status(404).send({ message: "Route not found" })

})

server.listen(port, () => console.log(`Server running on port ${port}`))
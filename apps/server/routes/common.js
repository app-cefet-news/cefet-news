const express = require('express')

const { PrismaClient } = require('@prisma/client')

const rootDir = require('../util/path')

const prisma = new PrismaClient({
  log: ['query'],
})

const Router = express.Router()

// CREATE USER
Router.post('/users', async (req, res) => { 

  const { name, email, username, password } = req.body

  const user = await prisma.user.create({
    data: {
      name: name,
      email: email,
      username: username,
      password: password
    }
  })

  res.status(200).json({ data: user })
})


Router.get('/', (req, res) => {

  // res.status(200).send({ message: rootDir })
  res.status(200).json({ message: "Welcome!" })

})

module.exports = Router
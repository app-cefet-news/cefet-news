const express = require('express')

const { PrismaClient } = require('@prisma/client')

const rootDir = require('../util/path')

const prisma = new PrismaClient({
  log: ['query'],
})

const Router = express.Router()

Router.post('/users', async (req, res) => { // CREATE USER

  const { name, email, password } = req.body

  const users = await prisma.user.create({
    data: {
      name: name,
      email: email,
      password: password
    }
  })

  res.status(200).json({ data: users })
})

Router.get('/', (req, res) => {

  // res.status(200).send({ message: rootDir })
  res.status(200).json({ message: "Welcome!" })

})

module.exports = Router
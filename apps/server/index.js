const express = require('express')

const { PrismaClient, Prisma } = require('@prisma/client')

const server = express()

const port = 4000

const prisma = new PrismaClient({
  log: ['query'],
})



server.use('/users', async (req, res, next) => {

  const users = await prisma.user.findMany()

  res.send({ data: users })
})

server.use('/', (req, res, next) => {

  res.send({ message: "Working!" })
})

server.listen(port, () => console.log(`Server running on port ${port}`))
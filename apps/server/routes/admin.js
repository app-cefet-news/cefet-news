const express = require('express')
const { PrismaClient } = require('@prisma/client')


const prisma = new PrismaClient({
  log: ['query'],
})

const Router = express.Router()

Router.get('/users', async (req, res, next) => { // READ ALL USERS

  const users = await prisma.user.findMany()

  res.json({ data: users })
})

module.exports = Router
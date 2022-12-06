const express = require('express')
const { PrismaClient } = require('@prisma/client')


const prisma = new PrismaClient({
  log: ['query'],
})

const Router = express.Router()

// READ ALL USERS
Router.get('/users', async (req, res) => { 

  const users = await prisma.user.findMany()

  res.status(200).json({ data: users })
})

// CREATE POST
Router.post('/users', async(req, res) => {

  const {userId, title, subtitle, body } = req.body

  const post = prisma.post.create({
    data: {
      userId,
      title,
      subtitle,
      body
    }
  }) 

  res.status(200).json({data: post})
})

module.exports = Router
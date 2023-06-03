const express = require('express')
// Create app instance
const app = express()

// Define JSON as return type
app.use(express.json())
app.use(express.urlencoded({ extended: true }))



module.exports = {
  path: '/api',
  handler: app,
}
import express from 'express'
import dotenv from 'dotenv'
import http from 'node:http'
import router from '@/router'
import path from 'path'

dotenv.config()
const app = express()
const port = process.env.PORT || 3000

// Serve the API
app.use(router())

// Serve the frontend
app.use(express.static(path.join(__dirname, '../frontend/dist')))
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/dist/index.html'))
})

// Start the server
http.createServer(app).listen(port, () => {
  console.log(`Server listening on port http://localhost:${port}`)
})

import express from 'express'
import routes from './routes/index.js'
import cors from 'cors'
const app = express()

// middleware
app.use(cors())
app.use(express.json())
app.use('/api', routes)

// listening to port
app.listen('3001', () => console.log('Server Running at port: 3001'))

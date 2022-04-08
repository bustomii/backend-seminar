import express from 'express'
import { signin } from '../controllers/loginController.js'
import { DataSeminar } from '../controllers/seminarController.js'

const router = express.Router()

router.post('/login', signin)
router.get('/data-seminar', DataSeminar)

export default router

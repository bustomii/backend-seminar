import express from 'express'
import { DataSeminar } from '../controllers/seminarController.js'

const router = express.Router()

router.get('/data-seminar', DataSeminar)

export default router

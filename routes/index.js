import express from 'express'
import { ImportData } from '../controllers/importController.js'
import { signin, signup  } from '../controllers/loginController.js'
import { DataSeminar } from '../controllers/seminarController.js'
import authJwt from '../middleware/authJWT.js'
const router = express.Router()

// router.post('/signup', signup)
router.post('/login', signin)
router.get('/data-seminar', authJwt.verifyToken, DataSeminar)
router.post('/import-data',  authJwt.verifyToken, ImportData)

export default router

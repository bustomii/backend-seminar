import express from 'express'
import { dataApprove } from '../controllers/dataApprove.js'
import { ExportData } from '../controllers/exportController.js'
import { ImportData } from '../controllers/importController.js'
import { signin, signup  } from '../controllers/loginController.js'
import { DataSeminar, DeleteAll } from '../controllers/seminarController.js'
import authJwt from '../middleware/authJWT.js'
const router = express.Router()

// router.post('/signup', signup)
router.post('/login', signin)
router.get('/data-seminar', authJwt.verifyToken, DataSeminar)
router.post('/import-data',  authJwt.verifyToken, ImportData)
router.post('/export-data',  authJwt.verifyToken, ExportData)
router.post('/approve', authJwt.verifyToken, dataApprove)
router.post('/delete-all', authJwt.verifyToken, DeleteAll)


export default router

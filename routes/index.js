import express from 'express'
import { dataApprove, resetPasswordApprove } from '../controllers/dataApprove.js'
import { ExportData } from '../controllers/exportController.js'
import { ImportData } from '../controllers/importController.js'
import { changePassword, requestReset, signin  } from '../controllers/loginController.js'
import { DataSeminar, DeleteAll } from '../controllers/seminarController.js'
import { cekUsername, deleteAllUser, deleteUser, signup } from '../controllers/signupController.js'
import authJwt from '../middleware/authJWT.js'
const router = express.Router()

router.post('/signup', signup)
router.post('/username', authJwt.verifyToken, cekUsername)
router.post('/login', signin)
router.get('/data-seminar', authJwt.verifyToken, DataSeminar)
router.post('/import-data',  authJwt.verifyToken, ImportData)
router.post('/export-data',  authJwt.verifyToken, ExportData)
router.post('/approve', authJwt.verifyToken, dataApprove)
router.post('/delete-all', authJwt.verifyToken, DeleteAll)
router.post('/delete-all-user', authJwt.verifyToken, deleteAllUser)
router.post('/delete-user', authJwt.verifyToken, deleteUser)
router.post('/reset-password', requestReset)
router.post('/reset-password-approve', authJwt.verifyToken,  resetPasswordApprove)
router.post('/change-password', authJwt.verifyToken,  changePassword)



export default router

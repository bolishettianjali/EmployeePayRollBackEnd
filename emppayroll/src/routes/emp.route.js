import express from 'express'
import * as empController from '../controllers/emp.controllers'
import { newUserValidator } from '../validators/user.validator'
import {userAuth} from '../middlewares/auth.middleware'
import { updatedetail } from '../services/emp.service'
const router = express.Router()
//add new employee
router.post('/addemployee', userAuth,  empController.addNewEmp);
router.get('/getemployee',userAuth,empController.getEmpDetails);
router.delete('/deleteemployee',userAuth,empController.deleteEmp);
router.put('/updatedetails',userAuth,empController.updatedetails);
export default router;
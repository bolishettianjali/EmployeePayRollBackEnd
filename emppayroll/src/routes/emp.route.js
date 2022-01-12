import express from 'express'
import * as empController from '../controllers/emp.controllers'
import { newUserValidator } from '../validators/user.validator'
import {userAuth} from '../middlewares/auth.middleware'
const router = express.Router()
//add new employee
router.post('/addemployee', userAuth,  empController.addNewEmp);
router.get('/getemployee',userAuth,empController.getEmpDetails);
export default router;
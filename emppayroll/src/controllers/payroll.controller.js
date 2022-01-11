import HttpStatus from 'http-status-codes';
import * as EmployeeService from '../services/payroll.service';

export const addEmployee=async(req,res,next)=>{
    try{
        const data=await EmployeeService.addEmployee(req.body,res);
        if(data){
            res.status(HttpStatus.OK).json({
                code:HttpStatus.OK,
                data:data,
                message:'Employee is added Successfully'
            })
        }
    }
    catch(error){
        next(error);
    }
}
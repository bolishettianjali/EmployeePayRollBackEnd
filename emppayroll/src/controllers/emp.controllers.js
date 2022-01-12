import HttpStatus from 'http-status-codes'
import * as EmpService from '../services/emp.service'
/**
 * Controller to Add New Employee
 * @param  {object} req - request object
 * @param {object} res - response object
 * @param {Function} next
 */

 export const addNewEmp= async (req,res,next)=>{
      try{
           const addnewempdata = await EmpService.addNewEmps(req.body, res)
           if(addnewempdata){
               res.status(HttpStatus.OK).json({
                    code: HttpStatus.OK,
                    data: addnewempdata,
                    message: 'new employee is added successfully'
               })
           }
           else{
            res.status(HttpStatus.FORBIDDEN).json({
              code:HttpStatus.FORBIDDEN,
              data: "no data",
              message:' already added'
            })
          }


      }catch(error){
           next(error)

      }
 }
 /**
 * Controller to get Employees
 * @param  {object} req - request object
 * @param {object} res - response object
 * @param {Function} next
 */

  export const getEmpDetails = async (req,res,next)=>{
     try{
          const getempdata = await EmpService.getempdata(req.body,res)
          if(getempdata){
              res.status(HttpStatus.OK).json({
                   code: HttpStatus.OK,
                   data: getempdata,
                   message: 'Employee details'
              })  
         }
         else {
              res.status(HttpStatus.NOT_FOUND).json({
                code: HttpStatus.NOT_FOUND,
                data: "",
                message: ' Employee details not found '
              });
            }
          } catch (error) {
            next(error);
          }
     }
         /**
 * Controller to delete Employees
 * @param  {object} req - request object
 * @param {object} res - response object
 * @param {Function} next
 */

      export const deleteEmp = async (req,res,next)=>{
           try{
                const dltempdata = await EmpService.deleteEmps(req.body,res)
                if(dltempdata){
                    res.status(HttpStatus.OK).json({
                          code: HttpStatus.OK,
                          data: dltempdata,
                          message: ' Employee records Deleted'
                     });
                }
                else if(!dltempdata){
                     res.status(HttpStatus.NOT_FOUND).json({
                         code: HttpStatus.NOT_FOUND,
                         data: "",
                         message: ' Employee details not found '
                       });
                     }
                }
             catch (error) {
     
                next(error);
           }
      }
  
  
    
         /**
 * Controller to delete Employees
 * @param  {object} req - request object
 * @param {object} res - response object
 * @param {Function} next
 */
export const updatedetails=async(req,res,next)=>{
     try{
          const updatedData=await EmpService.updatedetail(req.body,res);
          if(updatedData){
               res.status(HttpStatus.OK).json({
                    code:HttpStatus.OK,
                    data:updatedData,
                    message:'Employee data are Updated'
               });
          }
     
     else {
          res.status(HttpStatus.NOT_FOUND).json({
            code: HttpStatus.NOT_FOUND,
            data: "",
            message: ' Employee details not found '
          });
        }
      } catch (error) {
        next(error);
      }
    };
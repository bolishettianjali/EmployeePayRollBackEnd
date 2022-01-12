import HttpStatus from 'http-status-codes';
import * as UserService from '../services/user.service';

/**
 * Controller to Rigister User
 * @param  {object} req - request object
 * @param {object} res - response object
 * @param {Function} next
 */

export const registerUser = async (req)=>{
  try{
    const data = await UserService.registerUserService(req.body);
    console.log(data)
    if (data){
      res.status(HttpStatus.OK).json({
        code: HttpStatus.OK,
        data: data,
        message: 'register successfully'
      })
    }
    else{
      res.status(HttpStatus.FORBIDDEN).json({
        code:HttpStatus.FORBIDDEN,
        data: "no data",
        message:'email already registered'
      })
    }
  }
  catch(error){
    next(error)
  }
}


/**
 * Controller to login User
 * @param  {object} req - request object
 * @param {object} res - response object
 * @param {Function} next
 * 
 */


 export const login = async (req,res,next)=>{
  try{
    const data = await UserService.loginUserService(req.body)
    if (data.success == true) {
      res.status(HttpStatus.OK).json({
        code: HttpStatus.OK,
        data: data,
        message: ' User Login successfully'
      });
    }
    else {
      res.status(HttpStatus.FORBIDDEN).json({
        code: HttpStatus.FORBIDDEN,
        data: "",
        message: ' Invalid Details'
      });
    }
  } catch (error) {
    next(error);
  }

};
  
 



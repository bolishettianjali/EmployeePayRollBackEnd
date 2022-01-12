import User from '../models/user.model';
import bcrypt from 'bcrypt'
import * as jwt from 'jsonwebtoken';



//register
export const registerUserService = async (req,res)=>{
 // let loginData= await User.find({email:req.email})
 if (!loginData){
       const HashedPassword = await bcrypt.hash(req.password,8)
       let newUser = new User({
        firstName: req.firstName,
        lastName: req.lastName,
        email: req.email,
        password: HashedPassword

       })
       //return await newUser.save()
       const user = newUser.save()
       return user;
 }
}
//login
export const loginUserService = async (req,res)=>{
  let loginData = await User.findOne({email: req.email})
  if(loginData){
    let verifyPassword = await bcrypt.compare(req.password, loginData.password)
    if (verifyPassword){
      const payload = {id: loginData._id, email: loginData.email}
      const token = jwt.sign(payload, process.env.TOKEN_SECRET,{ expiresIn: "1d" })
      return new Promise((resolve,reject)=>{
        resolve({
          message: "Login success",
          userId: loginData._id,
          firstname: loginData.firstName,
          lastname: loginData.lastName,
          email: loginData.email,
          createdAt: loginData.createdAt,
          success: true,
          token: token,
          status: 200
        
        })
          
        
      
      })
      
    }
    else {
      return new Promise((resolve, reject) => {
        resolve({
          success: false,
        })
      })
    }
    
  }
  else {
    return new Promise((resolve, reject) => {
      resolve({
        success: false,
      })
    })
  }
}




//get all users
export const getAllUsers = async () => {
  const data = await User.find();
  return data;
};

//create new user
export const newUser = async (body) => {
  const data = await User.create(body);
  return data;
};

//update single user
export const updateUser = async (_id, body) => {
  const data = await User.findByIdAndUpdate(
    {
      _id
    },
    body,
    {
      new: true
    }
  );
  return data;
};

//delete single user
export const deleteUser = async (id) => {
  await User.findByIdAndDelete(id);
  return '';
};

//get single user
export const getUser = async (id) => {
  const data = await User.findById(id);
  return data;
};
import empModel from '../models/emp.model'
import EmpModel from '../models/emp.model'

export const addNewEmps = async (req,res)=>{
     var newEmployee = new EmpModel({
          firstName:req.firstName,
          lastName:req.lastName,
          gender:req.gender,
          department:req.department,
          salary:req.salary,
          company:req.company
     })
     return await newEmployee.save()
}
export const getempdata = async (req, res) => {
     let employeeData = await empModel.findById({ _id: req._id});
     return employeeData;
 };
  export const deleteEmps = async (req, res) => {
      let employeeData = await empModel.deleteOne({  _id: req.i_d });
      return employeeData;
  };
  export const  updatedetail= async (req,res)=>{
     let employeeData = await empModel.findById({_id: req._id})
     if(employeeData){
          let model = {
              firstName: req.firstName ? req.firstName : employeeData.firstName,
              lastName: req.lastName ? req.lastName : employeeData.lastName,
              gender: req.gender ? req.gender : employeeData.gender,
              department: req.department ? req.department : employeeData.department,
              salary: req.salary ? req.salary : employeeData.salary,
              company:req.company ? req.company :employeeData.company,
              startdate: req.startdate ? req.startdate : employeeData.startdate,
              notes: req.notes ? req.notes : employeeData.notes,
         }
         return EmpModel.updateOne({_id: req._id},model)
     }
     else{
          return employeeData
     }
}
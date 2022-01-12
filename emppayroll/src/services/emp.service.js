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
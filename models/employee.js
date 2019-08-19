const mongoose = require('./connection.js')
const ObjectId = mongoose.ObjectId;

const EmployeeSchema = mongoose.Schema({
shopId: ObjectId,
name: String,
role: String,
pay: Number,
hireDate: Date
})

const EmployeeCollection = mongoose.model('Employee',EmployeeSchema)

createEmployee = (shopId) =>{
return EmployeeCollection.create({
    name: "",
    role: "",
    pay: 0,
    hireDate: new Date(),
    shopId
})
}

getEmployee = (id) => {
    return EmployeeCollection.findById(id)
    }

getEmployees = () =>{
return EmployeeCollection.find()
}

getEmployeesByShopId = (shopId) =>{
    return EmployeeCollection.find({
        shopId
    })
}

deleteEmployeeById = (id) =>{
    EmployeeCollection.findOneAndDelete({_id:id})
}

module.exports = {
    createEmployee,
    getEmployee,
    getEmployees,
    getEmployeesByShopId,
    deleteEmployeeById
}
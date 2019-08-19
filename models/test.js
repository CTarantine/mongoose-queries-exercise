const shopAPI = require('./shop.js')

// shopAPI.createShop().then((newShopDocument)=>{
//     console.log(newShopDocument)
// })

shopAPI.getShops().then((allShopsInDB) =>{
    console.log("all documents")
    console.log(allShopsInDB)
})

shopAPI.getShop("5d56f8769148a20a0f30e55a").then((foundDoc)=>{
    console.log("single document by _id")
    console.log(foundDoc)
})


const employeeAPI = require('./employee.js')

employeeAPI.createEmployee("5d56f8769148a20a0f30e55a").then((newEmployee)=>{
    console.log(newEmployee)
})

employeeAPI.getEmployeesByShopId("5d56f8769148a20a0f30e55a").then((shopsEmployees) =>{
    console.log("SHOPS EMPLOYEES")
    console.log(shopsEmployees)
})

employeeAPI.deleteEmployeeById("5d56f8769148a20a0f30e55a").then((removedEmployee)=>{
console.log("REMOVED EMPLOYEE")
console.log(removedEmployee)
})
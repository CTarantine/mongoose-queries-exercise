/* 
 * Place all functions, classes, and/or DB schemas here for a single 
 * model.
 */
// global.shops = [];
const mongoose = require('./connection.js')


const shopSchema = mongoose.Schema(
  {
    name: String,
    employees: Number,
    currentlyOpen: Boolean
  }
)

const shopCollection = mongoose.model('shop',shopSchema)


//returns a promise containing the new shop document in our database
createShop = () => {
  return shopCollection.create({
    name: "",
    employees: 0,
    currentlyOpen: false
  // return {
  //   name: "",
  //   employees: 0,
  //   currentlyOpen: false
  // };
})
}

getShops = () =>  {
return shopCollection.find()
  // return global.shops;
}

getShop = (id) => {
  return shopCollection.findById(id)
  // return shopCollection.find({
  //   _id:id
  // })

  // return global.shops[i];
}

addShop = (newShop) => {
  return shopCollection.create(newShop);
}

updateShop = (shopId,updatedShop)=> {
  return shopCollection.findByIdAndUpdate(shopId,updatedShop)
}

deleteShopById = (id) =>{
  return shopCollection.findOneAndDelete({_id:id})
}

/* Step 1
 *
 * TODO: export all functions from this file by adding their names as keys to this
 * object
 */
module.exports = {
  addShop,
  createShop,
  deleteShop,
  getShop,
  getShops,
  updateShop,
};

const Clothing = require("../models/Clothing")
const User = require("../models/User")

async function getAllClothes() {
    // const user = await User.findById(userId)
    // clothes =  (await Clothing.find({})).filter(c => user.boughtClothing.includes(c._id) == false )
    // return clothes

    return Clothing.find({bought : false})
}
async function createClothing(newClothing) {
    return Clothing.create(newClothing)
}
async function getClothing(clothingId) {
    return Clothing.findById(clothingId)
}
async function editClothing(clothingId, clothing) {
    const editetClothing = await Clothing.findById(clothingId)

    editetClothing.type = clothing.type
    editetClothing.brand = clothing.brand
    editetClothing.price = clothing.price
    editetClothing.sizeClothing = clothing.sizeClothing
    editetClothing.color = clothing.color
    editetClothing.description = clothing.description
    editetClothing.contactInfo = clothing.contactInfo
    editetClothing.adress = clothing.adress
    editetClothing.imageUrl = clothing.imageUrl

    return editetClothing.save()
}
async function deleteClothing(clothingId) {
    return Clothing.findOneAndDelete(clothingId)
}

async function getClothesByUser(userId) {
    return Clothing.find({ creator: userId })
}

async function buyClothing(clothingId, userId) {
    const clothing = await Clothing.findById(clothingId)
    const user = await User.findById(userId)

    user.boughtClothing.push(clothing)
    clothing.bought = true

    clothing.save()
    user.save()
    return
}


module.exports = {
    getAllClothes,
    createClothing,
    getClothing,
    editClothing,
    deleteClothing,
    getClothesByUser,
    buyClothing,
}
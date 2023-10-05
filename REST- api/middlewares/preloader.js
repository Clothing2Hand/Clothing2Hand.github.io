const { getClothing, getAllClothes } = require("../services/clothesService")


module.exports = () => async (req, res, next) => {

    if (req.params.id) {
        const data = await getClothing(req.params.id)
        req.clothing = data
    } else {
        const data = await getAllClothes()
        req.clothes = data
    }

    next()
}
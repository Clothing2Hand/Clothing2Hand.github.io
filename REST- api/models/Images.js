const { model, Schema, Types} = require('mongoose')

const ImageSchema = new Schema({
    // imageName: { type : String}
})

const Images = model('Images', ImageSchema)

module.exports = Images
const { model, Schema, Types } = require('mongoose')

const httpRegex = /https?:\/\/.*/

const clothingSchema = new Schema({
    type: { type: String, required: true },
    brand: { type: String, required: true },
    price: { type: Number, required: true, min: [0.1, 'The clothing must be with price above 0'], max: [1000, 'The clothing must be with price under 1000'] },
    sizeClothing: { type: String, required: true, enum: ['S', 'M', 'L'] },
    color: { type: String, required: true },
    imageUrl: { type: String, required: true, validate: {
        validator: (v) => httpRegex.test(v),
        message : 'URL must start with http:// or https://'
    }},
    description: { type: String, required: true, minLength: [10, 'Description must be at least 10 symbols'] },
    contactInfo: { type: Number, required: true },
    adress: { type: String, required: true },
    createdAt: { type: String },
    bought: { type: Boolean, default: false },
    owner: { type: Types.ObjectId, ref: 'User', required: true },
})

const Clothing = model('Clothing', clothingSchema)

module.exports = Clothing
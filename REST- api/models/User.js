const { model, Schema, Types } = require('mongoose')

const matchUsernameRegex = /^(?=.*\d).{6,}$/

const userSchema = new Schema({
    username: {
        type: String, required: true, validate: {
            validator: (val) => matchUsernameRegex.test(val),
            message: 'Username must be at least 6 characters long and must include at least one digit'
        }, unique: true
    },
    firstName: { type: String, required: true, minLength: [2, 'Username must be at least 2 symbols'] },
    lastName: { type: String, required: true, minLength: [2, 'Username must be at least 2 symbols'] },
    email: { type: String, required: true },
    password: { type: String, required: true },
    boughtClothing: { type: [Types.ObjectId], required: true, default: [], ref: 'Clothing'}
})

userSchema.index({ username: 1 }, {
    collation: {
        locale: 'en',
        strength: 2
    }
})

const User = model('User', userSchema)

module.exports = User



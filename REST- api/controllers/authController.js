const { login, register, logout, getProfileInfo, getBoughtClothes, updateProfile } = require('../services/userService')
const { body, validationResult } = require('express-validator')
const parseError = require('../util/parserError')

const authController = require('express').Router()

authController.post('/register',
    body('email').isEmail().withMessage('Email must be valid'),
    body('password').isLength({ min: 3 }).withMessage('Password must be at least 3 characters long'), //??
    async (req, res) => {
        try {
            const { errors } = validationResult(req)
            if (errors.length > 0) {
                throw errors
            }
            const body = req.body
            const user = await register(body.username, body.firstName, body.lastName, body.email, body.password)
            res.cookie('auth-cookie', user.token, { httpOnly: true, sameSite: 'none', secure: true })
            res.json(user)
        } catch (err) {
            const message = parseError(err)
            res.status(403).json({ message }) // TODO
        }
    })

authController.post('/login', async (req, res) => {
    try {
        const body = req.body
        const user = await login(body.username, body.password)
        res.cookie('auth-cookie', user.token, { httpOnly: true, sameSite: 'none', secure: true })
        res.json(user)
    } catch (err) {
        console.log(err)
        const message = parseError(err)
        res.status(401).json({ message })// TODO 401-UNAUTHORISED
    }
})

authController.get('/logout', async (req, res) => {
    const token = req.token
    res.clearCookie('auth-cookie')

    await logout(token)
    res.status(204).end()
})

authController.get('/getUser', async (req, res) => {

    try {
        if (req.user) {
            const user = await getProfileInfo(req.user._id)
            res.json(user)
        } else {
            res.status(204).json({ message: 'No User' })
        }
    } catch (err) {
        console.log(err)
        const message = parseError(err)
        res.status(204).json({ message })
    }
})

authController.put('/profile/edit', async (req, res) => {

    try {
        const user = await updateProfile(req.user._id, req.body)
        res.json(user)
    } catch (err) {
        console.log(err)
        const message = parseError(err)
        res.status(204).json({ message })
    }
})


module.exports = authController
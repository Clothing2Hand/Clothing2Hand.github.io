const { hasUser, isOwner } = require('../middlewares/guards')
const preloader = require('../middlewares/preloader')
const { getAllClothes, createClothing, getClothing, editClothing, deleteClothing, buyClothing } = require('../services/clothesService')
const parseError = require('../util/parserError')

const clothesController = require('express').Router()

clothesController.get('/', async (req, res) => {
    try {
        let clothes = []

        // if (req.query.where) {
        //     const userId = JSON.parse(req.query.where.split('=')[1]) // ZA DA MAHNEM ""
        //     items = await getAllByUserId(userId)
        // } else {
        clothes = await getAllClothes()

        // }
        res.json(clothes)
    } catch (error) {
        const message = parseError(error)
        res.status(400).json({ message })
    }
})

clothesController.post('/create', hasUser(), async (req, res) => {
    try {
        const body = req.body

        const item = {  //TODO TOVA SHTE GO NAPRAVI CLIENTA
            type: body.type,
            brand: body.brand,
            price: body.price,
            sizeClothing: body.sizeClothing,
            color: body.color,
            description: body.description,
            contactInfo: body.contactInfo,
            adress: body.adress,
            imageUrl: body.imageUrl,
            createdAt: new Date(),
            owner: req.user._id
        }
        const clothing = await createClothing(item)
        res.json(clothing)
    } catch (error) {
        const message = parseError(error)
        res.status(400).json({ message })
    }
})
clothesController.get('/:id', async (req, res) => {
    try {
        const clothing = await getClothing(req.params.id)
        res.json(clothing)
    } catch (error) {
        const message = parseError(error)
        res.status(400).json({ message })
    }
})

clothesController.put('/:id', hasUser(), preloader(), isOwner(), async (req, res) => {

    try {
        const clothing = await editClothing(req.params.id, req.body)
        res.json(clothing)
    } catch (error) {
        const message = parseError(error)
        res.status(400).json({ message })
    }
})

clothesController.delete('/:id', hasUser(), preloader(), isOwner(), async (req, res) => {

    try {
        await deleteClothing(req.params.id)
        res.status(204).end()
    } catch (error) {
        const message = parseError(error)
        res.status(400).json({ message })
    }
})

clothesController.post('/getClothingInfo', preloader(), async (req, res) => {
    try {
        if (req.body.id !== undefined) {
            const clothing = await getClothing(req.body.id)
            res.json(clothing)
        } else {
            res.status(204).json({ message: 'No Clothes' })
        }
    } catch (err) {
        console.log(err)
        const message = parseError(err)
        res.status(204).json({ message })
    }
})

clothesController.get('/buy/:id', hasUser(), async (req, res) => {
    try {
        await buyClothing(req.params.id, req.user._id)
        res.status(200).end()
    } catch (error) {
        const message = parseError(error)
        res.status(400).json({ message })
    }
})
module.exports = clothesController
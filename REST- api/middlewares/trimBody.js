module.exports = () => (req, res, next) => {
    for (let key in req.body) {
        if (typeof req.body[key] == 'string') { //zashtoto bodyto e v json format (chislata sa si chisla)
            req.body[key] = req.body[key].trim()
        }
    }
    next()
}
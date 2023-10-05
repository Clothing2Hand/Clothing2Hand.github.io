const { parseToken, getProfileInfo } = require("../services/userService")

module.exports = () => async (req, res, next) => {
    const token = req.cookies['auth-cookie'] || '';

    if (token) {
        try {
            const payload = parseToken(token)
            req.user = await getProfileInfo(payload._id)
        } catch (error) {
            console.log(error)
            return res.status(401).json({ message: 'Invalid authorization token' }) //pri kakvato i da e greshka vrushtame tozi message
        }
    }

    next()
}
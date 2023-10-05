function hasUser() {
    return (req, res, next) => {
        
        if (!req.user) {
            return res.status(401).json({ message: 'Please login' })
        }
        next()
    }
}

function isGuest() {
    return (req, res, next) => {
        if (req.user) {
            return res.status(400).json({ message: 'You are already logged in' })
        }
        next()
    }
}

function isOwner() {
    return (req, res, next) => {
        if ((req.user._id).toString() !== (req.clothing.owner).toString()) {
            return res.status(400).json({ message: 'You are not the owner' })
        }
        next()
    }
}

module.exports = {
    hasUser,
    isGuest,
    isOwner
}
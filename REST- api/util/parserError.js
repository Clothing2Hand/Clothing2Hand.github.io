function parseError(err) {
    if (Array.isArray(err)) { //express-validator
        return err.map(e => e.msg).join('\n')
    } else if (err.name == 'ValidationError') {
        return Object.values(err.errors).map(v => v.message).join('\n')
    } else {
        return err.message
    }
}

module.exports = parseError
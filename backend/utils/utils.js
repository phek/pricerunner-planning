const jwt = require('jsonwebtoken')
const { appSecret } = require('../config/auth');

function getUserId(context) {
    const Authorization = context.request.get('Authorization')
    if (Authorization) {
        const token = Authorization.replace('Bearer ', '')
        const { userId } = jwt.verify(token, appSecret)
        return userId
    }

    throw new Error('Not authenticated')
}

module.exports = {
    appSecret,
    getUserId,
}
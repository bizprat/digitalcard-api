'use strict'

const usersController = require('../controllers/usersController')

const routes = [
    {
        method: 'POST',
        url: '/users',
        handler: usersController.addUser
    }
]

module.exports = async function (fastify, options, next) {
    routes.forEach((route, index) => {
        fastify.route(route)        
    })
    next()
}
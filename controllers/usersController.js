'use strict'

const Users = require('../models/Users')

exports.addUser = async (request, reply) => {
    try {
        // const firstName = req
        
        const user = new Users(request.body)
        // user.save()
        //     .then(result => {
        //         reply.send('data saved')
        //     })
        //     .catch(err => console.log(err))
        // reply.send({ status: 200 })

        const result = await user.save()
        reply.status(201).send(result)
    } catch (error) {
        throw error
    }
}
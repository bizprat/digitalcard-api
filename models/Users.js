'use strict'

const mongoose = require('mongoose')

const UsersSchema = new mongoose.Schema(
    {
        firstName: { type: String, required: true, minLength: 3, maxLength: 50, trim: true },
        midName: { type: String, required: false, minLength: 3, maxLength: 50, trim: true },
        lastName: { type: String, required: false, minLength: 3, maxLength: 50, trim: true },
        email: { type: String, required: true, minLength: 3, maxLength: 50, trim: true, unique: true },
        password: { type: String, required: true, minLength: 3, maxLength: 100, trim: true }
    },
    {
        timestamps: true
    }
)

// {
//     contact: [
//         { 
//             phone: [
//                 { country: '91', number: '9876543210' },
//                 { country: '62', number: '9876543210' }
//             ] 
//         },
//         { email: ['bizprat@gmail.com'] },

//     ]
//     social: [
//         { name: 'facebook', url: '', username: '' },
//     ]
// }

module.exports = mongoose.model('Users', UsersSchema)
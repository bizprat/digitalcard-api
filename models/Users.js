'use strict'

const mongoose = require('mongoose')
const { true } = require('tap')

const UsersSchema = new mongoose.Schema(
    {
        firstName: { type: String, required: true, minLength: 3, maxLength: 50, trim: true },
        midName: { type: String, required: false, minLength: 3, maxLength: 50, trim: true },
        lastName: { type: String, required: false, minLength: 3, maxLength: 50, trim: true },
        logins: {
            username: {
                type: String,
                required: true,
                trim: true
            }
        },
        contacts: [
            {
                phone: [
                    { 
                        country: { type: Number, trim: true },
                        number: { type: Number, trim: true }
                    },
                ],
                email: [
                    {
                        email: { type: String, trim: true, maxLength: 150 },
                        type: { type: String, trim: true, maxLength: 150 }
                    }
                ]
            }
        ]
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
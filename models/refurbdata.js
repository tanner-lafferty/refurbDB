const mongoose = require('mongoose')


const Schema = mongoose.Schema

const refurbSchema = new Schema({
    customerName: {
        type: String,
        required: true
    },
    returnDate: {
        type: Date,
    },
    nodeId: {
        type: String,
        required: true
    },
    failure: {
        type: string,
    }
})

module.exports = mongoose.model('refurbData', refurbSchema)
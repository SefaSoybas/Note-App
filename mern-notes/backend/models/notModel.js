const mongoose = require('mongoose')

const Sema = mongoose.Schema

const notSema= Sema({
    title: {type: String, required: [true, 'Başlık girmek zorunludur!']},
    explain: {type: String}
},
{
    timestamps: true
})

module.exports = mongoose.model('Not', notSema)
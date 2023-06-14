const mongoose = require('mongoose')

const notesSchema = new mongoose.Schema({
    title:{type:String, require:true},
    description:{type:String, require:true},
    completed:{type:Boolean, default:false}
})

const Note = mongoose.model('note',notesSchema)

module.exports = Note
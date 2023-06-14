const Note = require('../models/note')


exports.showAllNotes = async (req,res) =>{
    try {
        const allNotes =  await Note.find({})
        res.render('../views/notes/Index', {
            notes:allNotes
        })
    } catch (error) {
        res.json({message: error.message})
    }
}



exports.createANewNote =  async (req,res) =>{
    try {
        const newNote =  new Note(req.body)
        await newNote.save()
        res.redirect('/notes/new')
        

    } catch (error) {
        res.json({message: message.error})        
    }
}




exports.showANote = async (req,res) =>{
    try {
        const foundNote = await Note.findById(req.params.id)
        res.json(foundNote)
    } catch (error) {
        res.json({message: error.message})
    }
}

exports.deleteNote = async (req,res) =>{
    try {
        const foundNote = await Note.findByIdAndDelete(req.params.id)
        res.json({message:`${foundNote.title} note has been deleted`})

    } catch (error) {
        res.json({message:error.message})
    }
}

exports.editNote = async (req,res) =>{
    try {
        const foundNote =  await Note.findOneAndUpdate({'_id':req.params.id}, req.body, {new:true})
        res.json({message:`${foundNote.title} as been updated: Title: ${foundNote.title}, Description: ${foundNote.description}, Completion: ${foundNote.completed}`})
    } catch (error) {
        
    }
}
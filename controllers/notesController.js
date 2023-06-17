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
    if(req.body.completed === 'on'){ // we're gonna use a checkbox
        req.body.completed = true
    }else{
        req.body.completed = false
    }
    try {
        const createdNote = await Note.create(req.body)
        res.redirect(`/notes/${createdNote._id}`)
    } catch (error) {
        res.status(400).send({message: error.message})
    }
}

exports.newNotePage = async (req,res) =>{
    try {

        res.render('../views/notes/New')
    } catch (error) {
        res.json({message: message.error}) 
    }
}

exports.showANote = async (req,res) =>{
    try {
        const foundNote = await Note.findOne({'_id':req.params.id})
        res.render('../views/notes/Show',{
            note:foundNote
        })
    } catch (error) {
        res.json({message: error.message})
    }
}

exports.deleteNote = async (req,res) =>{
    try {
        const foundNote = await Note.findOneAndDelete({'_id':req.params.id})
        res.redirect('/notes')
        

    } catch (error) {
        res.json({message:error.message})
    }
}

exports.editNotePage =  async (req,res)=>{

    try {
        const foundNote  = await Note.findOne({'_id':req.params.id})
        res.render('../views/notes/Edit', {
            note:foundNote
        })
    } catch (error) {
        res.json({message:error.message})   
    }

}

exports.editNote = async (req,res) =>{
    if(req.body.completed === 'on'){
        req.body.completed = true
    } else{
        req.body.completed =false
    }
    try {
        const foundNote =  await Note.findOneAndUpdate({'_id':req.params.id}, req.body, {new: true})
        //res.json({message:`${foundNote.title} as been updated: Title: ${foundNote.title}, Description: ${foundNote.description}, Completion: ${foundNote.completed}`})
        .then(()=>{
            res.redirect(`/notes/${req.params.id}`)
        })
    } catch (error) {
        res.status(400).send({message:error.message}) 
    }
}

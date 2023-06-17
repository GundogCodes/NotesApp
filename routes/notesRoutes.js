const express = require('express')
const router = express.Router()
const notesController  = require('../controllers/notesController')

//INDUCES

//INDEX
router.get('/notes', notesController.showAllNotes) //done

//CREATE
router.post('/notes', notesController.createANewNote) //creates a doc in mongo
//NEW
router.get('/notes/new', notesController.newNotePage) // view for them to make a note

//DELETE
router.delete('/notes/:id', notesController.deleteNote) //done

//UPDATE
router.put('/notes/:id', notesController.editNote) //actually updating the data
//EDIT
router.get('/notes/edit/:id', notesController.editNotePage) // update data page

//SHOW
router.get('/notes/:id', notesController.showANote) //done

module.exports = router
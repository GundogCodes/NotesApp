const express = require('express')
const router = express.Router()
const notesController  = require('../controllers/notesController')

//INDUCES

router.get('/notes', notesController.showAllNotes) //done

router.post('/notes', notesController.createANewNote) //creates a doc in mongo
router.get('/notes/new', notesController.newNotePage) // view for them to make a note

router.delete('/notes/:id', notesController.deleteNote) //done

router.put('/notes/:id', notesController.editNote)
router.get('/notes/edit/:id', notesController.editNotePage)

router.get('/notes/:id', notesController.showANote) //done

module.exports = router
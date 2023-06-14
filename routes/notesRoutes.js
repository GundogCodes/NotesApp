const express = require('express')
const router = express.Router()
const notesController  = require('../controllers/notesController')

//INDUCES

router.get('/notes', notesController.showAllNotes) //done

router.post('/notes', notesController.createANewNote) //done
router.get('/notes/new', notesController.newNotePage)

router.delete('/notes/:id', notesController.deleteNote) //done
router.put('/notes/edit/:id', notesController.editNote)
router.get('/notes/:id', notesController.showANote) //done

module.exports = router
const express = require('express')
const router = express.Router()
const notesController  = require('../controllers/notesController')

//INDUCES

router.get('/notes', notesController.showAllNotes) //done
router.post('/notes', notesController.makeNewNote) //done
router.delete('/notes/:id', notesController.deleteNote) //done
router.put('/notes/:id', notesController.editNote)
router.get('/notes/:id', notesController.showANote) //done

module.exports = router
const express = require('express')
const {createNote, getAllNotes, getNoteById, deleteNote, updateNote} = require('../controllers/notController')

const router= express.Router()


router.get('/', getAllNotes)

router.get('/:id', getNoteById)

router.post('/',createNote)

router.delete('/:id', deleteNote)

router.patch('/:id', updateNote)

module.exports = router;
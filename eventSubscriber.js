import { addNewNoteInput, closeNewNoteInput, selectNote, addNote } from './notemanager.js'

export default function subscribeEvents() {
    document.getElementById('newButton').addEventListener('click', addNewNoteInput)
    document.getElementById('closeNewButton').addEventListener('click', closeNewNoteInput)

    document.querySelectorAll('.note').forEach(note => note.addEventListener('click', selectNote))

    if (document.getElementById('newNoteInput')) {
        document.getElementById('newNoteInput').addEventListener('keydown', addNote)
    }
}
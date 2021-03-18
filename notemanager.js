import noteItem from './components/noteSelector.js'
import noteInput from './components/NoteInput.js'
import { setContent } from './contentmanager.js'
import { loadStorage } from './helpers/localStorageHelpers.js'
import subscribeEvents from './eventSubscriber.js'


//Event binding and storage loader
subscribeEvents()
const noteManagerLoaded = loadStorage(getCurrentState())
setState(noteManagerLoaded)
//---------------------------------------------------------------------


function getCurrentState() {
    const newNoteManager = document.querySelector('.notemanager').cloneNode(true)


    return newNoteManager
}

function setState(newNoteManager) {


    const noteManager = document.querySelector('.notemanager')

    while (noteManager.firstChild) {
        noteManager.removeChild(noteManager.firstChild)
    }

    while (newNoteManager.firstChild) {
        noteManager.appendChild(newNoteManager.firstChild)
    }

    const input = document.getElementById('newNoteInput');

    if (input) {
        input.focus()
    }

    subscribeEvents()
}




function addNewNoteInput() {

    const newNoteManager = getCurrentState()

    const utils = newNoteManager.children[0]
    const newNoteList = newNoteManager.children[1]

    const closeButton = utils.children[1]
    const newNoteInput = noteInput()

    if (newNoteList.lastElementChild == null || newNoteList.lastElementChild.nodeName != newNoteInput.nodeName) {

        newNoteList.appendChild(newNoteInput)
        closeButton.classList.toggle('active')

    }

    setState(newNoteManager)

}

function closeNewNoteInput() {

    const newNoteManager = getCurrentState()


    const utils = newNoteManager.children[0]
    const newNoteList = newNoteManager.children[1]

    const closeButton = utils.children[1]
    const noteInput = newNoteList.lastElementChild


    noteInput.remove()
    closeButton.classList.toggle('active')

    setState(newNoteManager)
}

function addNote(e) {
    if (e.key == 'Enter') {

        let noteManager = getCurrentState()
        const NoteList = noteManager.children[1]
        const NoteInput = NoteList.lastElementChild


        closeNewNoteInput()

        noteManager = getCurrentState()

        const newNoteList = noteManager.children[1]
        const newNoteItem = noteItem(NoteInput.value)

        const newNote = { id: newNoteItem.id, name: NoteInput.value, currentNoteContent: '', index: localStorage.length }

        localStorage.setItem(newNote.id, JSON.stringify(newNote))

        newNoteList.appendChild(newNoteItem)

        setState(noteManager)

    }

}

function selectNote(e) {

    const noteId = CSS.escape(e.target.id)
    const noteManager = getCurrentState()

    const currentSelectedNote = noteManager.querySelector('.selected')

    if (currentSelectedNote) {

        currentSelectedNote.classList.toggle('selected')
    }

    const noteList = noteManager.children[1]
    const newSelectedNote = noteList.querySelector(`#${noteId}`)


    newSelectedNote.classList.toggle('selected')

    setState(noteManager)

    const selectedNote = JSON.parse(localStorage.getItem(e.target.id))


    const currentContent = selectedNote.currentNoteContent || ''

    setContent(currentContent)

}

function getSelectedNote() {
    const noteManager = getCurrentState()

    const currentSelectedNote = noteManager.querySelector('.selected')

    if (!currentSelectedNote) {
        return null
    }


    const note = JSON.parse(localStorage.getItem(currentSelectedNote.id))

    return note
}


export { getSelectedNote, addNewNoteInput, closeNewNoteInput, selectNote, addNote }


import { getSelectedNote } from './notemanager.js'
import * as storage from './helpers/localStorageHelpers.js'
const content = document.querySelector('.noteContent')

content.addEventListener('keydown', (e) => {
    const note = getSelectedNote()

    if (!note) {
        return
    }

    const newContent = modifyNoteContent(note.currentNoteContent, e.key)

    note.currentNoteContent = newContent

    localStorage.setItem(note.id, JSON.stringify(note))

})


function setContent(value) {
    content.textContent = value;
}

function modifyNoteContent(noteContent, value) {
    if (value === 'Backspace') {

        const currentContent = noteContent
        const newContent = currentContent.slice(0, -1)
        noteContent = newContent


    }
    else if (value === 'Enter') {
        noteContent += '\n'
    }
    else if (value.length > 1) {
        return
    }
    else {
        noteContent += value
    }

    return noteContent

}

export { setContent }
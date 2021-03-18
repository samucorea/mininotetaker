
import { getSelectedNote } from './notemanager.js'
import * as storage from './helpers/localStorageHelpers.js'
const content = document.querySelector('.noteContent')

content.addEventListener('keydown', (e) => {
    const note = getSelectedNote()

    if (!note) {
        return
    }


    if (e.key === 'Backspace') {

        const currentContent = note.currentNoteContent
        const newContent = currentContent.slice(0, -1)
        note.currentNoteContent = newContent


    }
    else if (e.key === 'Enter') {
        note.currentNoteContent += '\n'
    }
    else if (e.key.length > 1) {
        return
    }
    else {
        note.currentNoteContent += e.key
    }



    localStorage.setItem(note.id, JSON.stringify(note))

})


function setContent(value) {
    content.textContent = value;
}

export { setContent }
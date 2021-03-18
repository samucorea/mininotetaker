
import { getSelectedNote } from './notemanager.js'
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
content.addEventListener('paste', (e) => {


    setTimeout(() => {
        let newContent = e.target.value

        const note = getSelectedNote()

        note.currentNoteContent += newContent

        localStorage.setItem(note.id, JSON.stringify(note))
    }, 0)

})


function setContent(value) {

    content.value = value;
    content.style.visibility = 'visible'
    content.focus()

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
        return noteContent
    }
    else {
        noteContent += value
    }

    return noteContent

}

export { setContent }
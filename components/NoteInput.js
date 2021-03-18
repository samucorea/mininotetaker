
export default function NoteInput() {
    const noteInput = document.createElement('input')
    noteInput.setAttribute('id', 'newNoteInput')
    noteInput.setAttribute('placeholder', 'New note name...')
    noteInput.focus()

    return noteInput

}
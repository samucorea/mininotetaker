import noteItem from '../components/noteSelector.js'
// function upsert(id, value) {
//     const currentValue = localStorage.getItem(id)

//     if (!currentValue) {
//         localStorage.setItem(id, value)
//     }
//     else {
//         let newValue = currentValue + value
//         localStorage.setItem(id, newValue)
//     }
// }

function getCurrentNoteContent(id) {
    const note = JSON.parse(localStorage.getItem(id))

    return note ? note.currentNoteContent : ''


}

function loadStorage(noteManager) {

    const noteList = noteManager.children[1]

    Object.keys(localStorage).forEach(key => {
        const note = JSON.parse(localStorage.getItem(key))
        const noteSelector = noteItem(note.name, key)

        noteList.appendChild(noteSelector)
    })

    return noteManager



}

export { getCurrentNoteContent, loadStorage }
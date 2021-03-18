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
    const noteArr = []

    Object.keys(localStorage).forEach(key => {
        const note = JSON.parse(localStorage.getItem(key))
        noteArr.push(note)

    })

    noteArr.sort((a, b) => a.index > b.index ? 1 : -1)

    noteArr.forEach(note => {
        const noteSelector = noteItem(note.name, note.id)

        noteList.appendChild(noteSelector)
    })
    return noteManager



}

export { getCurrentNoteContent, loadStorage }
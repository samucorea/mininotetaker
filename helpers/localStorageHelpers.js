import noteItem from '../components/noteSelector.js'


// function getCurrentNoteContent(id) {
//     const note = JSON.parse(localStorage.getItem(id))

//     return note ? note.currentNoteContent : ''


// }

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

export { loadStorage }
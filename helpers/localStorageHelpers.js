
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

export { getCurrentNoteContent }
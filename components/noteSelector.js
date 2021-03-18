

export default function noteSelector(value, id = null) {
    const randomNum = Math.floor(Math.random() * Math.floor(100000000))
    const newNote = document.createElement('li')

    newNote.id = id ? id : randomNum.toString()
    newNote.classList.add('note')
    newNote.textContent = value




    return newNote
}
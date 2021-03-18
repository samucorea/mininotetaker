

export default function noteSelector(value) {
    const randomNum = Math.floor(Math.random() * Math.floor(100000000))
    const newNote = document.createElement('li')

    newNote.id = randomNum.toString()
    newNote.classList.add('note')
    newNote.textContent = value




    return newNote
}
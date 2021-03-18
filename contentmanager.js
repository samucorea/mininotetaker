
import { getSelectedNote } from './notemanager.js'
import * as storage from './helpers/localStorageHelpers.js'
const content = document.querySelector('.noteContent')

content.addEventListener('keypress', (e) => {
    const id = getSelectedNote()
    storage.upsert(id, e.key)

})


function setContent(value) {
    content.textContent = value;
}

export { setContent }

function upsert(id, value) {
    const currentValue = localStorage.getItem(id)

    if (!currentValue) {
        localStorage.setItem(id, value)
    }
    else {
        currentValue += value
        localStorage.setItem(id, currentValue)
    }
}

export { upsert }
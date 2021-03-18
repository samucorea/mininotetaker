
function upsert(id, value) {
    const currentValue = localStorage.getItem(id)

    if (!currentValue) {
        localStorage.setItem(id, value)
    }
    else {
        let newValue = currentValue + value
        localStorage.setItem(id, newValue)
    }
}

export { upsert }
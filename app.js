let count = 0
let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")

function increment() {
    count += 1
    countEl.textContent = count
}

function increment2() {
    count -= 1
    countEl.textContent = count
}

function save() {
    let countStr = count + " - "
    saveEl.textContenttStr
    countEl.textContent = 0
    count = 0
}

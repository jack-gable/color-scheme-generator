const col1 = document.getElementById('col-1')
const col2 = document.getElementById('col-2')
const col3 = document.getElementById('col-3')
const col4 = document.getElementById('col-4')
const col5 = document.getElementById('col-5')
const hex1 = document.getElementById('hex-1')
const hex2 = document.getElementById('hex-2')
const hex3 = document.getElementById('hex-3')
const hex4 = document.getElementById('hex-4')
const hex5 = document.getElementById('hex-5')
const colorInput = document.getElementById('color-input')
const mode = document.getElementById('mode-select')
const colorBtn = document.getElementById('color-btn')

let hex = colorInput.value.replace('#', '')

colorBtn.addEventListener('click', ()=>{
    let hex = colorInput.value.replace('#', '')
    fetch(`https://www.thecolorapi.com/scheme?hex=${hex}&mode=${mode.value}`)
        .then(res => res.json())
        .then(data => {
            col1.style.backgroundColor = data.colors[0].hex.value
            hex1.textContent = data.colors[0].hex.value
            col2.style.backgroundColor = data.colors[1].hex.value
            hex2.textContent = data.colors[1].hex.value
            col3.style.backgroundColor = data.colors[2].hex.value
            hex3.textContent = data.colors[2].hex.value
            col4.style.backgroundColor = data.colors[3].hex.value
            hex4.textContent = data.colors[3].hex.value
            col5.style.backgroundColor = data.colors[4].hex.value
            hex5.textContent = data.colors[4].hex.value
        })
})

fetch(`https://www.thecolorapi.com/scheme?hex=F55A5A&mode=analogic`)
    .then(res => res.json())
    .then(data => {
        col1.style.backgroundColor = data.colors[0].hex.value
        hex1.textContent = data.colors[0].hex.value
        col2.style.backgroundColor = data.colors[1].hex.value
        hex2.textContent = data.colors[1].hex.value
        col3.style.backgroundColor = data.colors[2].hex.value
        hex3.textContent = data.colors[2].hex.value
        col4.style.backgroundColor = data.colors[3].hex.value
        hex4.textContent = data.colors[3].hex.value
        col5.style.backgroundColor = data.colors[4].hex.value
        hex5.textContent = data.colors[4].hex.value
    })


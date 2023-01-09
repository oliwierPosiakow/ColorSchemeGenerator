

const contentEl = document.getElementById('content')
const colorDivs = contentEl.getElementsByClassName('color')
const colorLabels = contentEl.getElementsByTagName('span')

renderColor()

contentEl.addEventListener('click',copy)
document.getElementById('generate-btn').addEventListener('click', renderColor)

function renderColor(){
    const schemeMode = document.getElementById('scheme-type').value
    const colorVal = document.getElementById('color-picker').value.slice(1)
    fetch(`https://www.thecolorapi.com/scheme?hex=${colorVal}&mode=${schemeMode}&count=6`)
    .then(res => res.json())
    .then(data => {
        for(let i=0; i<colorDivs.length; i++){ 
            colorDivs[i].style.backgroundColor = `${data.colors[i].hex.value}`
            colorLabels[i].textContent = `${data.colors[i].hex.value}`
        }

    })
}

function copy(e){

    const copyEl = e.target.id ? e.target.nextElementSibling.textContent : e.target.textContent
    navigator.clipboard.writeText(copyEl)
}
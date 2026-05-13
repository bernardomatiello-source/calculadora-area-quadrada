const inputBase = document.getElementById('base')
const inputAltura = document.getElementById('altura')
const areaButton = document.getElementById('area-button')
const result = document.getElementById('show-result')

const createElement = (element) => document.createElement(element)

function calculateArea(base, altura) {
    return base * altura
}

function resetResult() {
    result.removeChild()
}

function showResult(areaResult) {

    const paragrafer = createElement('p')
    paragrafer.innerText = areaResult.toFixed(2)
    paragrafer.setAttribute('class', 'result-paragrafer')

    result.appendChild(paragrafer)
}

areaButton.addEventListener('click', () => {

    const base = Number(inputBase.value)
    const altura = Number(inputAltura.value)

    const areaResult = calculateArea(base, altura)

    showResult(areaResult)
})
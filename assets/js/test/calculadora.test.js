const tests = document.getElementById('show-tests')
const testCalc = document.getElementById('calc-test')
const testElement = document.getElementById('element-test')

function testarCalculadora(nome, callback) {
    try {
        callback()
        const paragrafer = createElement('p')
        paragrafer.setAttribute('class', 'test-paragrafer')
        paragrafer.innerText = `${nome} Passou!`
        tests.appendChild(paragrafer)
    } catch (e) {
        const paragrafer = createElement('p')
        paragrafer.innerText = `${nome} Não Passou! ${e.message}`
        tests.appendChild(paragrafer)
    }
}

testCalc.addEventListener('click', () => {
    testarCalculadora('Testar Calculos', () => {
        if(calculateArea(30, 30) !== 900) throw new Error('Esperado 900!')
        if(calculateArea(12.4, 14.4) !== 178.56) throw new Error('Esperado 178.56!')
    })
})

testElement.addEventListener('click', () => {
    testarCalculadora('Testar Elementos', () => {
        if(inputBase === null) throw new Error('Input Base não Existe!')
        if(inputAltura === null) throw new Error('Input Altura não Existe!')
    })
})
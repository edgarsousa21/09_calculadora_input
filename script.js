
function calcular() {
    let opr = window.document.getElementById('selection').value
    let tn1 = window.document.getElementById('txtn1') //obs: são iguais de forma diferente.
    let tn2 = window.document.querySelector('input#txtn2')
    let res = window.document.getElementById('res')
    let n1 = Number(tn1.value)
    let n2 = Number(tn2.value)

    changeOperation(opr)
    calculatorNumb(n1, n2, opr)

}
function changeOperation(opr) {
    let operation
    if (opr === '+') { operation = '+' }
    if (opr === '-') { operation = '-' }
    if (opr === '*') { operation = '*' }
    if (opr === '/') { operation = '/' }
    if (opr === '%') { operation = '%' }
    if (opr === '**') { operation = '**' }
    return operation

}

function calculatorNumb(num1, num2, operation) {
    let result
    let signal
    switch (operation) {
        case '+':
            result = num1 + num2
            signal = 'A soma de '
            break;

        case '-':
            result = num1 - num2
            signal = 'A subtração de '
            break;

        case '*':
            result = num1 * num2
            signal = 'A multiplicação entre '
            break;

        case '/':
            result = num1 / num2
            signal = 'A Divisão entre'
            break;

        case '%':
            result = num1 % num2
            signal = 'O resto da divisão entre'
            break;

        case '**':
            result = num1 ** num2
            signal = 'O Calculo da Potência de '
            break;

        default:
            result = num1 + num2
            signal = 'Soma por Padrão de '
            break;
            return result
    }
    res.innerHTML = `${signal} ${num1} e ${num2} é igual a: <strong>${result}</strong>`
}

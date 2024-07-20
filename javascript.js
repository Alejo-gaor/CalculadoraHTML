// function suma(){
//     let number1 = parseInt(document.querySelector('#num1').value);
//     let number2 = parseInt(document.querySelector('#num2').value);
//     let result = document.querySelector('p')
//     result.innerHTML = `Resultado: ${number1+number2}`
// }
// function resta(){
//     let number1 = parseInt(document.querySelector('#num1').value);
//     let number2 = parseInt(document.querySelector('#num2').value);
//     let result = document.querySelector('p')
//     result.innerHTML = `Resultado: ${number1-number2}`
// }
// function multi(){
//     let number1 = parseInt(document.querySelector('#num1').value);
//     let number2 = parseInt(document.querySelector('#num2').value);
//     let result = document.querySelector('p')
//     result.innerHTML = `Resultado: ${number1*number2}`
// }
// function divi(){
//     let number1 = parseInt(document.querySelector('#num1').value);
//     let number2 = parseInt(document.querySelector('#num2').value);
//     let result = document.querySelector('p')
//     result.innerHTML = `Resultado: ${number1/number2}`
// }

// function clearInput(){
//     document.querySelector('#num1').value = ''
//     document.querySelector('#num2').value = ''
//     document.querySelector('p').innerHTML = ''

// }

function valor(num){
   document.querySelector('#entrada').value+= num;
}

function operacion(){
    let operacion = document.querySelector('#entrada').value;
    document.querySelector('#entrada').value = eval(operacion)

}


let numeroUm = 1
let stringUm = '1'
let numeroTrinta = 30
let stringTrinta = '30'
let numeroDez = 10
let stringDez = '10'

function funcao_1(){
    if (numeroUm == stringUm) {
        console.log('As variáveis numeroUm e stringUm tem o mesmo valor, mas tipos diferentes')
      } else {
        console.log('As variáveis numeroUm e stringUm não tem o mesmo valor')
      }
}

function funcao_2(){
    if (numeroTrinta === stringTrinta) {
        console.log('As variáveis numeroTrinta e stringTrinta tem o mesmo valor e mesmo tipo')
      } else {
        console.log('As variáveis numeroTrinta e stringTrinta não tem o mesmo tipo')
      }
}

function funcao_3(){
    if (numeroDez == stringDez) {
        console.log('As variáveis numeroDez e stringDez tem o mesmo valor, mas tipos diferentes')
      } else {
        console.log('As variáveis numeroDez e stringDez não tem o mesmo valor')
      }
}

funcao_1();
funcao_2();
funcao_3();
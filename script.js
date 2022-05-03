let body = document.querySelector('#body')
let valores = ['A','B','C', 'D', 'E', 'F', '0','1', '2', '3', '4', '5', '6', '7', '8', '9']
let codigoHex = []
let cor 

let corBody = document.querySelector('.cor')

function geraCor() {
    for (i = 0; i < 6; i++) {
        let numero = Math.random(0,26) *15
        numero = (Math.round(numero))
    
        codigoHex.push(valores[numero])
        
    }

    let cor = codigoHex[0] + codigoHex[1] + codigoHex[2] + codigoHex[3] + codigoHex[4] + codigoHex[5]
    body.style.backgroundColor = '#' + cor
    
    for (i = 0; i < 6; i++) {
        codigoHex.pop()
    }

    corBody.innerHTML = "#" + cor
}


let cuadro = document.getElementById('idResultado')
let lugar1 = 0;
let lugar2 = 0;
let operacion = '';


//funciones numeros
function escribir7(){
    cuadro.innerText=cuadro.innerText+7
}
function escribir8(){
    cuadro.innerText=cuadro.innerText+8
}
function escribir9(){
    cuadro.innerText=cuadro.innerText+9
}
function escribir4(){
    cuadro.innerText=cuadro.innerText+4
}
function escribir5(){
    cuadro.innerText=cuadro.innerText+5
}
function escribir6(){
    cuadro.innerText=cuadro.innerText+6
}
function escribir1(){
    cuadro.innerText=cuadro.innerText+1
}
function escribir2(){
    cuadro.innerText=cuadro.innerText+2
}
function escribir3(){
    cuadro.innerText=cuadro.innerText+3
}
function escribir0(){
    cuadro.innerText=cuadro.innerText+0
}


//funciones operaciones
function sumar(){
    lugar1=parseInt(cuadro.innerText)
    cuadro.innerText=''
    operacion='suma';
    console.log(operacion)
}
function restar(){
    lugar1=parseInt(cuadro.innerText)
    cuadro.innerText=''
    operacion='resta';
    console.log(operacion)
}
function multiplicar(){
    lugar1=parseInt(cuadro.innerText)
    cuadro.innerText=''
    operacion='multiplicacion';
    console.log(operacion)
}
function dividir(){
    lugar1=parseInt(cuadro.innerText)
    cuadro.innerText=''
    operacion='division';
    console.log(operacion)
}

//igual
function igual(){
    lugar2=parseInt(cuadro.innerText)
    if(operacion=='suma'){
        cuadro.innerText=lugar1+lugar2
    }
    if(operacion=='resta'){
        cuadro.innerText=lugar1-lugar2
    }
    if(operacion=='multiplicacion'){
        cuadro.innerText=lugar1*lugar2
    }
    if(operacion=='division'){
        cuadro.innerText=lugar1/lugar2
    }

}

function reset(){
    lugar1 = 0;
    lugar2 = 0;
    operacion = ''
    cuadro.innerText=''
}
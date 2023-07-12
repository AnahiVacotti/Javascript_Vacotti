/*let Nombre;
Nombre= "Anahi"
console.log(Nombre)


let algo;
algo= "cosas"
console.log(algo)

Nombre="Luciano"
console.log(Nombre)

let Apellido= prompt("Ingresar apellido")
switch (Apellido){
    case "Vacotti":
        console.log("anahi te amo")
        break
    case "Ferreiro":
        console.log("lucho te amo")
        break
    case "":
        alert("No se ingreso ningun apellido")
        break
    case "Oviedo":
        alert("que asco es de racing")
        break
}*/

/*let numberFor = 1
let numberWhile = 1

for (i=0; i<10; i = i+1){
    numberFor = numberFor *2;
    console.log(numberFor)
}

while(numberWhile < 1024){
    numberWhile = numberWhile*2;
    console.log(numberWhile)
}
*/

function solicitarNombre (){
    let nombre= prompt ("Ingresar nombre")
    alert("El nombre que ingresaste es " + nombre)
}

function solicitarFecha (){
    let fecha= prompt("Ingresar fecha de nacimiento")
    alert("Tu fecha de nacimiento es " + fecha)
}

function solicitarEmail (){
    let email= prompt("Escribi tu email")
    alert("El email que ingresaste es "+ email)
    
    }


function solicitarDatos(){
    solicitarNombre()
    solicitarFecha()
    solicitarEmail()
}

//alert()

/* variables
    let     usamos
    const   usamos

    condicionales
    if usamos
    else if usamos
    swich

    ciclos
    for
    while usamos

    funciones
        funciones propias de javascript 
        funciones creadas por nosotros
*/

const MIN_POWER = 10;
const MAX_POWER = 30;

let energiaGoku = 100;
let energiaSuperman = 100;

let round = 0;

/* function calcularGolpe(){
    return Math.ceil(Math.random()*(MAX_POWER - MIN_POWER) + MIN_POWER);
} */

/* function ambosVivos(){
    return energiaGoku>0 && energiaSuperman>0
} */

/* function gokuSigueVivo(){
    return energiaGoku > 0
} 

const gokuSigueVivo = () => energiaGoku > 0


const ambosVivos = ()=> energiaGoku>0 && energiaSuperman>0


const calcularGolpe = () => Math.ceil(Math.random()*(MAX_POWER - MIN_POWER) + MIN_POWER);




while(ambosVivos()){
    round +=1;
    //let golpeGoku = Math.ceil(Math.random()*(MAX_POWER - MIN_POWER) + MIN_POWER);
    let golpeGoku = calcularGolpe();
    //let golpeSuperman = Math.ceil(Math.random()*(MAX_POWER - MIN_POWER) + MIN_POWER);;
    let golpeSuperman = calcularGolpe();
    
    console.log("------ Round " + round + "-------")

    if(golpeGoku == golpeSuperman){
        //energiaSuperman = energiaSuperman - golpeGoku;
        console.log("Siga Siga");
    } else if(golpeGoku > golpeSuperman){
        energiaSuperman -= golpeGoku;
        console.log("Goku golpea con fuerza de " + golpeGoku);
        console.log("Energia de Goku es " + energiaGoku);
        document.write('<div class="card"><img src="img/golpeGoku.jpeg"></div>')
        
        if(energiaSuperman < 0){
            energiaSuperman = 0;
        }
        console.log("Energia de Superman es " + energiaSuperman);
        
    }else {
        energiaGoku -= golpeSuperman;
        console.log("Superman golpea con fuerza de " + golpeSuperman);
        console.log("Energia de Superman es " + energiaSuperman);
        document.write('<div class="card"><img src="img/golpeSuperman.jpeg"></div>')

        if(energiaGoku < 0){
            energiaGoku = 0;
        }
        console.log("Energia de Goku es " + energiaGoku);
    }

/*     
for(let i=0; i<1000; i+=1){
        1+1
} 


}

console.log("---------------------")

if(gokuSigueVivo()){
    console.log("Gano Goku")
        document.write('<div class="ganador"><img src="img/wingoku.jpeg"></div>')

}else {
    console.log("Gano Superman")
        document.write('<div class="ganador"><img class="ganaste"src="img/winsuperman.jpg"></div>')

}
*/
function generadorNumero(numMin, numMax){
    return Math.floor(Math.random()*(numMax - numMin + 1) + numMin);
}
let numeroAAdivinar
let numeroMax

let dificultad = prompt("Bienvenido, en este juego tendras que adivinar un numero. Elije la dificultad. Escribi 1 y Aceptar, para la dificultad Facil, Escribi 2 y Aceptar para la dificultad Media, Escribi 3 y Aceptar para la dificultad Dificil.")
switch(dificultad){
    case "1":
        numeroAAdivinar = generadorNumero(0, 10)
        numeroMax = 10
        alert("Elegiste la dificultad Facil, el numero a adivinar esta entre 0 y 10")
        break
    case "2":
        numeroAAdivinar = generadorNumero(0, 20)
        numeroMax = 20
        alert("Elegiste la dificultad Media, el numero a adivinar esta entre 0 y 20")
        break
    case "3":
        numeroAAdivinar = generadorNumero(0, 30)
        numeroMax = 30
        alert("Elegiste la dificultad Dificil, el numero a adivinar esta entre 0 y 30")
        break
    default:
        alert("El valor ingresado no se corresponde con una dificultad, por defecto el juego comienza con la dificultad Facil")
        numeroAAdivinar = generadorNumero(0,10)
        numeroMax = 10
        break
}

let sinAdivinar = true

while(sinAdivinar){
    
    let numero = prompt("Ingrese un numero")
    if (numero<0 || numero>numeroMax){
        alert("Lo sentimos, recuerda que el numero a adivinar esta entre el 0 y el " +  numeroMax + ", vuelve a intentarlo ingresando un numero en ese rango.")
    }
    else if(numeroAAdivinar == numero){
        sinAdivinar = false;
        document.write('<div class="tarjeta"><img class="ganaste" src="ganaste.jpg"></div>')
        alert("Felicidades, el numero a adivinar era " + "'" + numeroAAdivinar + "'")
    } 
    else if (numeroAAdivinar > numero){
        alert("El numero ingresado es demasiado bajo, prueba con un numero mas alto")

    }
    else if(numeroAAdivinar < numero) {
        alert("El numero ingresado es demasiado alto, prueba con un numero mas bajo")
    }
}


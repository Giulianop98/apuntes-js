//const no se puede modificar let si

/*const objeto = {
    nombre:'Giuliano'
}



const colores = ['azul,amarillo,blanco'];

console.log(objeto);
console.log(colores);

colores.push('naranja')

console.log(objeto);
console.log(colores);*¨/

//si no va a cambiar la variable se usa cons pero si cambia let
//var no se usa
//push para agregarle algo a la variable

//strings

/*const nombre= 'Giuliano';
const apellido= 'Pimenta';
const saludo = new String('Hola Mundo');
 console.log(nombre,apellido,saludo)*/



 //new es un cosntructor de strings
 //la propiedad legnth sirve para saber la cantidad de caracteres
 //los metodos y acciones van con parentesis
 //split sirve para transformar string en array

 //concatenacion


 /*const nombre = "Giuliano"
 const apellido = "Pimenta"
 const saludo = `Hola mi nombre es ${nombre} ${apellido}.`;

 console.log(saludo)

 //se usa etsa comilla ` para el template strings y llaves

 const ul = ` <ul>
                    
 <li>inicio</li>
  <li> servicios </li>
   <li>contacto</li>
</ul>`;

console.log(ul)

//la comilla respeta los espacios

const a = 2
const b = new Number (1)
const c = 1.55
const d = '2.5'

console.log(a)
console.log(b)
console.log(c)
console.log(parseInt(c))
console.log(d)
console.log(typeof c, typeof d);

//parseint sirve para mostrar el numero entero y para sumar string o number
//typeof te dice si es numbber o string

const verdadero = true
const falso = false

console.log(verdadero,falso)
console.log(Boolean(0))
console.log(Boolean(2))

// undefined,null,Nan

let indefinido;

console.log(indefinido)

const hola = null

console.log(hola)

const noEsUnNumero = 'hola'*2

console.log(noEsUnNumero)*/

//funciones

function estoEsUnaFuncion() {
    console.log('uno')
    console.log('dos')
    console.log('tres')

}

/*estoEsUnaFuncion()*/

function funcionQueDevuelve() {
    console.log('uno')
    return 20
    console.log('dos')
    console.log('tres')
    return 'devolver valores'
}


//const valorDeFuncion = funcionQueDevuelve()


/*console.log(valorDeFuncion)

function saludo(nombre='no se',edad= 0){
    console.log(`Hola mi nombre es ${nombre} y tengo ${edad} años `)

}

saludo('+Messi', 35)
saludo()*/

//se pueden asignar valores a los parametros

/*funcionDeclarada()

function funcionDeclarada() {
    console.log('esto es un string en una funcion')
}

funcionDeclarada()

const funcionExpresada = function () {
    console.log('string que representa funcion expresada')

}

funcionExpresada()*/

//arrays

/*const a = []
console.log(a)
const b = [1,true,'Hola',['a','b','c']]
console.log(b)
console.log(b[2])

console.log(b[3][0])
//los corchetes en el console sirve para entrar a otros arreglos
const c = Array.of('a','b','c')

console.log(c)
//esto sirve para entrar al prototipo del arreglo
const d = Array(100).fill('hola')

console.log(d)
//sirve para poner muchos elementos en un arreglo

const colores = ['azul','verde','amarillo']

console.log(colores)

colores.push('negro')
console.log(colores)

colores.pop()
console.log(colores)
//pop sirve para sacar el ultimo elemento

colores.forEach(function(el,index){
    console.log(`<li id='${index}'>${el}</li>`)
})*/

//foreach sirve para mostrar cada elemento que tenga mediante una funcion

//objetos

/*const Giuliano ={
    nombre:'Giuliano',
    apellido:'Pimenta',
    edad:24,
    pasatiempos:['jugar a la play','ver futbol','jugar al fobal'],
    soltero:true,
    contacto:{
        ig: 'Giuliano.pimenta',
        telefono:12345678,
        mail:'giulianopim98@gmail.com'
    },
    
    saludar: function(){
        console.log(`hola :)`)
    },
    DecirMiNombre: function(){
        console.log(`Hola me llamo ${this.nombre} ${this.apellido}
      y tengo ${this.edad} años y me puedes seguir en ${this.contacto.ig} en instagrams`  )
    }
}*/
//el this sirve para concatenar valores dentro de un objeto
/*console.log(Giuliano)
//para acceder a un valor en especifico se usa el punto
console.log(Giuliano.nombre)
console.log(Giuliano.pasatiempos[2])
Giuliano.saludar()
//las funciones no usan console.log para ser declaradas
Giuliano.DecirMiNombre() 
console.log(Object.keys(Giuliano));
//object.keys sirve para listar las llaves que hay en el objeto
console.log(Object.values(Giuliano))
//Object.value forma un arrelgo que muestra los valores
console.log(Giuliano.hasOwnProperty('nombre'))
console.log(Giuliano.hasOwnProperty('hobbies'))
console.log(Giuliano.hasOwnProperty('apellido'))*/
//hasOwnProperty confirma que llave esta en el objeto y que no


//operadores

/*aritmeticos +-*%/*/

/*const a = 2+2;
const b = 5%2;

console.log(a)
console.log(b)*/

/* el modulo % da el resto
el / da el cociente */

/* operadores relacionales > <= != */

/*console.log(8>9)
console.log(9>8)
console.log(8>=9)
console.log(9>=8)
//>= mayor o igual
console.log(7<7)
console.log(7<=7)*/
//<= menor igual
/*
= 1 igual asignacion de variables
== 2 iguales comparacion de valores
=== 3 iguales comparacion de tipo de dato y de valor */

/*console.log(7==7)
console.log('7'==7)
console.log(0==false)
//aca solo compara valores ya no se usa

console.log(7===7)
console.log('7'===7)
console.log(0===false)*/

//aca compara tipo de dato y valor, recomendable usar

/* operadores de incremento y decremento */

//let i=1;

//i=+ 2;

//operador unario
 //i++
 //i--
//console.log(i)

//operadores logicos

/*
!-not:niega lo verdadero y viceversa

||-Or cuando hay 2 o mas condiciones que se cumplan
el Or va a validar

&&-and cuando hay 2 o mas condiciones todas tienen que cumplirse
en resumen sean verdaderas para que and se valide
*/

/*console.log(!true)
console.log(!false)

console.log((9===9)||('9'===9))
console.log((9===9)&&('9'===9))
console.log((9===9)&&(9===9))*/ //aca el and si aplica

//condicionales

//if-else

const edad = 16

if(edad > 16){
    console.log('eres mayor de edad')
}
else{
    console.log('eres menor de edad')
}
/*if indica si edad es mayor a 16 pero no lo es
entonces el else se ejecuta */
if(edad >= 18){
    console.log('eres mayor de edad')
}
else{
    console.log('eres menor de edad')
}
if(edad <= 16){
    console.log('eres menor de edad')
}
else{
    console.log('eres mayor de edad')
}
/*si pones el  = el valor se incluye en las condiciones
a cumplir */

/*dejame dormir -0hrs - 5hrs
Buenos Dias 6am-11am
Buenas tardes 12hrs - 18hrs
Buenas noches 19hrs - 23hrs*/

//if-else else-if

const hora = 20;
if(hora>=0 && hora <=5){
    console.log('dejame dormir')
}
else if(hora>=6 && hora <=11){
    console.log('buenos dias')
}
else if(hora>=12 && hora <=18){
    console.log('buenas tardes')
}
else{
    console.log('buenas noches')
}

/*if - else anidados son para 
agregar una tercera opcion*/


//operador ternario simplifica el if-else
//sirve para usar una linea de codigo
//poner (condicion) ? parte verdadera :parte falsa
console.log('operador ternario')
const eresMayor = (edad>= 18)
? 'eres mayor de edad'
:'eres menor de edad'
console.log(eresMayor)

//switch case

const dia = 1

switch (dia) {
    case 0:
        console.log('domingo')
        
        break;
        case 1:
            console.log('lunes')
        break;
        case 2:
            console.log('martes')
        break;
        case 3:
            console.log('miercoles')
        break;
        case 4:
            console.log('jueves')
        break;
        case 5:
            console.log('viernes')
        break;
        case 6:
            console.log('sabado')
        break;
    default:
        console.log('el dia no existe')
        break;
}
//poner console.log entre case y break
//sirve cuando tenes diferentes valores en una misma variable
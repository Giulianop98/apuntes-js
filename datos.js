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

const Giuliano ={
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
}
//el this sirve para concatenar valores dentro de un objeto
console.log(Giuliano)
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
console.log(Giuliano.hasOwnProperty('apellido'))
//hasOwnProperty confirma que llave esta en el objeto y que no

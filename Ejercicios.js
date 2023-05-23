const readline = require('readline');

let interfazCaptura = readline.createInterface(
    {
        input: process.stdin,
        output: process.stdout
    }
);
//                        Variables y Operadores Aritmeticos 
//Crea un programa que solicite al usuario dos números y muestre la suma de ambos.

let num1 = parseInt(prompt("Digite el primer numero: "));
let num2 = parseInt(prompt("Digite el segundo numero: "));

let suma = num1 + num2;

alert(`La suma de los numeros ${num1} + ${num2} es igual a ${suma}`);

//Escribe un programa que calcule el área de un paralelogramo cuando la base sea 10 y la altura 7.

let base = 10;
let altura = 7;

let area = base * altura;

alert(`El area del paralelogramo con base ${base} y altura ${altura} es igual a ${area}`);

//                                        Condicionales
//Escribe un programa que solicite al usuario su edad y muestre un mensaje indicando si es mayor de edad o no.

let edad = prompt('Digite su edad: ');

if (edad >= 18){
    alert(`Es mayor de edad`);
}
else{
    alert(`Es menor de edad`);
}

//Crea un programa que pida al usuario un número y muestre un mensaje indicando si es positivo, negativo o cero.

let numero = parseInt(prompt('Digite un numero: '));

if(numero>0){
    alert(`El numero ${numero} es positivo`);
}
else if(numero<0){
    alert(`El numero ${numero} es negativo`);
}
else{
    alert(`El numero es cero`);
}

//                                            Array
//Crea un programa que declare un array con varios nombres y luego los muestre uno por uno en la consola.

let nombres = [];
let i;
let numeroNombres;
let nombre;

numeroNombres = parseInt(prompt('Ingrese el numero de nombres que desea ingresar: '));

for(i=0; i<numeroNombres; i++){
    nombre = prompt('Ingrese un nombre: ');
    nombres[i]=nombre;
}

for(i=0; i<numeroNombres; i++){
    alert(nombres[i]);
}

//Escribe un programa que pida al usuario cinco números, los guarde en un array y luego muestre el número mayor.

let numeros = [];
let numero1;
let mayor = 0;

for(i=0; i<5; i++){
    numero1 = prompt('Ingrese un numero: ');
    numeros[i] = numero1;
    if (numeros[i] > mayor){
        mayor=numeros[i];
    }
}

alert(numeros);
alert(`El numero mayor es: ${mayor}`);


//                                                       Objetos
//Crea un objeto llamado "persona" con propiedades como nombre, edad y profesión. Luego, muestra cada una de las propiedades en la consola.

const persona = {
    nombre : "Cristian",
    apellido: "Varon",
    Edad: 28,
    profesion: "Licenciado en Matematicas"
};

alert(`Hola mi nombre es ${persona.nombre} ${persona.apellido}\nTengo ${persona.Edad} años\nSoy ${persona.profesion}`);

//Escribe un programa que simule un carrito de compras. Crea un objeto "carrito" que tenga propiedades como productos y total. Agrega varios productos al carrito y muestra el total.



const carrito = [
    {
        Producto: 'Cuaderno',
        Total: 7000
    },
    {
        Producto: 'Lapicero',
        Total: 1500
    },
    {
        Producto: 'Agenda 7 materias',
        Total: 15000
    }
];

for(i = 0; i < carrito.length; i++){
    alert(`El producto ${carrito[i].Producto} tiene un costo de ${carrito[i].Total}`);
}

//                                            Ciclos
//Crea un programa que muestre en la consola los números del 1 al 10 utilizando un bucle for.

for(i = 1; i <= 10; i++){
    alert(i);
}

//Escribe un programa que solicite al usuario un número y luego muestre en la consola todos los números pares desde 1 hasta ese número.

n = parseInt(prompt('Ingrese un numero: '));

for(i = 1; i <= n; i++){
    if(i%2 === 0){
        alert(i);
    }
}

//                                   Array de objetos
//Crea un array de objetos, donde cada objeto represente a una persona con propiedades como nombre, edad y profesión. Muestra en la consola la profesión de cada persona en el array.

const grupo = [
    {
        Nombre: 'Andres',
        Edad: 28,
        Profesion: 'Arquitecto'
    },
    {
        Nombre: 'Tatiana',
        Edad: 28,
        Profesion: 'Docente'
    },
    {
        Nombre: 'Sebastian',
        Edad: 26,
        Profesion: 'Ingeniero Aeronautico'
    }
]

for(i = 0; i < grupo.length; i++){
    alert(`Nombre: ${grupo[i].Nombre}\nEdad: ${grupo[i].Edad} años\nProfesion: ${grupo[i].Profesion}`);
}

//     Variables, condicionales, ciclos, arrays, objetos, operadores aritméticos, relacionales y lógicos
//Escribe un programa que simule un juego de adivinanzas. Genera un número aleatorio entre 1 y 10 y pide al usuario que lo adivine. Muestra un mensaje indicando si el usuario acertó o no.

alert('Bienvenido al juego de adivinanzas')

let numeroJugador = parseInt(prompt('Ingrese un numero del 1 al 10: '));

let numeroAleatorio = Math.floor(Math.random() * (10 - 1)+ 1);

alert(`El numero que ingreso es ${numeroJugador} y el numero ganador es ${numeroAleatorio}`);

if(numeroJugador === numeroAleatorio){
    alert('Felicidades!! has acertado el numero');
}
else{
    alert('Lo siento, no has acertado el numero');
}

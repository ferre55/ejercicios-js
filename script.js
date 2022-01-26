const ejercicio1 = [
  3, 100, 85, 64, 46, 39, 40, 30, 20, 24, 25, 6, 10, 54, 82, 71, 67, 77, 17, 29,
  19, 88, 456, 13, 23, 24,
];

const ejercicio2 = [
  {
    nombre: "Gabriel",
    edad: 22,
    esFamiliar: false,
  },
  {
    nombre: "Jaime",
    edad: 15,
    esFamiliar: true,
  },
  {
    nombre: "María",
    edad: 18,
    esFamiliar: true,
  },
  {
    nombre: "Angel",
    edad: 19,
    esFamiliar: true,
  },
  {
    nombre: "Fer",
    edad: 18,
    esFamiliar: true,
  },
  {
    nombre: "Rachel",
    edad: 30,
    esFamiliar: true,
  },
];





/*

console.log("Arreglo =>", ejercicio1 );



for(let indice=0; indice< ejercicio1.length;indice++ ){
  
  let numero= (ejercicio1[indice]);

  let limite= Math.round(Math.sqrt(numero));

   for(let divisor=2; divisor <= limite; divisor++ ){
      if(numero % divisor === 0 ){
       console.log(` no es primo`);
      }else{
        console.log(`es primo`);
      }

      }


   }*/


/*
   function isPrime(n){
    if (n === 0) return false;
    let limit = Math.round(Math.sqrt(n));
    for( let i =2; i <= limit; i++){
      if(n % i === 0) return false;
    }
    return true;
   }


   ejercicio1.forEach(function(n){
    console.log(isPrime(n));

   } ); */







   console.log("\n\n Ejercicio 1\n\n");

/* Dado un arreglo de números enteros, Imprimir solamente 
aquellos que son denominados números primos, (usar arreglo denominado como "ejercicio1").*/
  

  

  for(let indice=0; indice< ejercicio1.length;indice++ ){
  
    let number= (ejercicio1[indice]);
  

  let isPrime = true;

  // checar si number is igual a 1
  if (number === 1) {
      console.log("1 is neither prime nor composite number.");
  }

  // checar si number es mayor que 1
  else if (number > 1) {

      // looping through 2 to number-1
      for (let i = 2; i < number; i++) {
          if (number % i == 0) {
              isPrime = false;
              break;
          }
      }

      if (isPrime) {
          console.log(`${number} is a prime number`);
      } else {
          console.log(`${number} is a not prime number`);
      }
  }

  // check if number is less than 1
  else {
      console.log("The number is not a prime number.");

  }
  }

 
  
  console.log("\n\n Ejercicio 2 \n\n");

/*Ramón quiere hacer una fiesta privada en donde solo entre un
 número exclusivo de personas, ayudale al portero a solo dejar
  pasar a aquellas personas mayores de edad que sean familiares de Ramón. 
  (con imprimir los usuarios que se admitirán basta, usar el arreglo denominado 
    como "ejercicio2") */



  

/* EXAMPLE 2*/

console.log("\n\n Ejercicio 2\n\n");



function fiesta(persona){
  if(persona.edad>=18 && persona.esFamiliar){
    console.log(`${persona.nombre} es admitido en la fiesta`);
  }
}

ejercicio2.forEach((persona) => {
  fiesta(persona);
});
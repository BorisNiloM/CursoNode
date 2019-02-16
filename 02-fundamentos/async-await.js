/**
 *  Async Await
 */

// async se puede definir como funcion flecha, o funcion normal( async function())

//***ejemplo 1

//  let getNombre = async() => {

//     //throw new Error('No existe un nombre para ese usuario');
//     //este error lo recive el catch

//      return 'Boris'

//  };


 // escribir Async es lo mismo que escribir una promesa como sigue..

//  let getNombre= ()=>{
//      return new Promise ((resolve, reject) => {
//          resolve('Boris')
//      });
//  }


//***ejemplo 2

let getNombre= ()=>{
    return new Promise ((resolve, reject) => {

    setTimeout(() =>{

        resolve('Boris')

    }, 3000)
    });
}

// await se usa siempre dentro de un async
let saludo = async() => {

    let nombre = await getNombre();

    return `Hola ${ nombre }`;
}


// *** de ejemplo 1
// getNombre().then(nombre=> {
//     console.log(nombre);
// })
// .catch(e => {
//     console.log('Error de ASYNC', e);
// });


// *** de ejemplo 2

saludo().then(mensaje => {
    console.log(mensaje);
})
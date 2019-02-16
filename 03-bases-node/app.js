//1) requireds.
//Se suele colocar al principio. 3 Tipos de required:
//a) ya existe  en node,
//const fs = require('fs');
//b) no viene en node. Es un paquete que se instala
// const fs = require('express');
//c) de archivos que creamos en el proyecto. Comienzan con ./
// const fs = require('./fs');

const argv = require('./config/yargs').argv;
//var colors = require('colors');
const colors = require('colors/safe');


//aca se utiliza un ejempplo de destructuracion. A crearArchivo se le asigna la funcion,
//contenida en la carpeta multiplicar

const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');


let comando = argv._[0];

switch( comando ){

  case 'listar':
    listarTabla(argv.base,argv.limite);
  break;

  case 'crear':
      crearArchivo(argv.base,argv.limite)
          .then( archivo => console.log(`Archivo creado:`,colors.green(`${ archivo } `)))
          .catch(e => console.log(e));
  break;

  default:
    console.log('Comando no reconocido');


}



//2)cuando node se ejecuta crea una variable de entorno llamada process con varia informacion.
//en el process hay un parametro llamada argv, el cual recive argumentos ingresados
//manualmente en la terminal.
//console.log(process.argv);






//console.log(argv.base);


// let parametro = argv[2];
// let base = parametro.split('=')[1];





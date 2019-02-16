//3) cuando va un require('yargs'), sin ./yargs, indica que es un paquete, no un path relativo


const opts = {
    base: {
        demand:true,
        alias:'b'
      },
      limite:{
        alias:'l',
        default: 10
      }
}

const argv = require('yargs')
                .command('listar','Imprime en consola la tabla de multiplicar',opts)
                .command('crear','Crea un archivo con la tabla de multiplicar',opts)
                .help()
                .argv;


module.exports = {
    argv
}
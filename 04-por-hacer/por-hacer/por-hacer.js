

const fs =require('fs');


let listadoPorHacer = [];

const guardarDB = () => {

    //  JSON.stringify  transforma un valor de javascript en json
    let data =JSON.stringify(listadoPorHacer);

    fs.writeFile('./db/data.json',data, (err) => {
        if ( err ) throw new Error ('No se pudo grabar') ;
        console.log('El archivo ha sido guardado');
    })



}

const crear = (descripcion) => {

    let porHacer = {
        descripcion,
        completado: false
    };

    listadoPorHacer.push( porHacer );

    guardarDB();

    return porHacer;

}

module.exports = {
    crear
}


// setTimeout(function(){
//     console.log('Hola Mundo');
// },3000);

let getUsuarioById = (id, callback ) => {

    let usuario = {
        nombre:'Boris',
        id
    }

    if( id === 20 ){
        callback(`El usuario con id ${ id }, no existe en la BD`)
    }else{
        callback(null, usuario);

    }

}

// lo usual al trabajar con callbacks es enviar el parametro, y luego el callback propiamente tal, con su primer parametro el error, y luego el dato que sigue
getUsuarioById(1, (err, usuario)=>{

    if(err){
        return console.log(err);
    }

    console.log('Usuario de base de datos',usuario);
});
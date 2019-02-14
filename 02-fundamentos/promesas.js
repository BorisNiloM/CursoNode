let empleados = [{
    id:1,
    nombre:'Boris'
},{
    id:2,
    nombre:'Melisa'
},{
    id:3,
    nombre:'Juan'
}];

let salarios = [{
    id:1,
    salario:1000
},{
    id:2,
    salario:2000
}];


let getEmpleado = (id)=>{

    //resolve se ocupa cuando es exitoso la busqueda. Se regresa un solo objeto. Si el objeto tiene propiedades se puede configurar las propiedades
    //reject en caso contrario
    return new Promise( (resolve, reject) =>{

        let empleadoDB = empleados.find(empleado =>  empleado.id === id)

        if( !empleadoDB ){
            reject(`No existe un empleado con el ID ${ id}`)
        }else{
            resolve(empleadoDB);
        }
    });

}

let getSalario = (empleado) =>{

    return new Promise((resolve,reject)=>{

        let salarioDB = salarios.find(salario=>salario.id === empleado.id);

        if(!salarioDB){
            reject(`No se econtro un salario para el usuario ${empleado.nombre}`);
        }else{
            resolve({nombre:empleado.nombre,
                     salario:salarioDB.salario
                    });
        };
    })
};

// getEmpleado(1).then( empleado => {

//     getSalario(empleado).then(salario=>{
//         console.log(`El empleado ${salario.nombre}, gana un sueldo de $${salario.salario}`);
//     },(err)=>{
//         console.log(err);
//     })

// }, (err) => {
//     console.log(err);
// });

//====Promesas en Cadena
//como getEmpleado devuelve otra funcion ( getSalario), que a su vez devuelve una promesa, se puede encadenar con .then . Los errores se encadenad con un .catch

getEmpleado(10).then(empleado =>{

    return getSalario(empleado);
})
.then(resp =>{
    console.log(`El salario de ${ resp.nombre } es de ${ resp.salario }`);
})
.catch(err => {
    console.log(err);
})





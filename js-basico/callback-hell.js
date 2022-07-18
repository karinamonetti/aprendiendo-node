const empleados = [
    {
        id:1444,
        nombre:"camila"
    },

    {
        id:1443,
        nombre:"yefferson"
    },

    {
        id:1434,
        nombre:"olivia"
    }
]

const salarios = [
    {
        id:1444,
        salario: 1000
    },
    
    {
        id:1443,
        salario: 1100
    }
]

const getEmpleado = (id,callback) =>{

    const empleado = empleados.find( (e) => e.id === id );
    if(empleado){
        callback(null, empleado);
    } else{
        callback(`El empleado con id ${id} no existe`);
    }
    
}


const getSalario = (id,callback) => {

    const salario = salarios.find( (e) => e.id === id )?.salario; // si encuentra el id entonces devolverá el salario del objeto

    if(salario){
        callback(null, salario);
    } else{
        callback(`El empleado con id ${id} no existe o no está cargado su salario`);
    }
    
}



getEmpleado (1434, (err,empleado) =>{

    if(err){
        
        console.log("ERROR!!");
        return console.log(err);
    }

    console.log("Empleado existe!");
    console.log(empleado)


    getSalario (1434, (err,salario) =>{

        if(err){
            
            console.log("ERROR!!");
            return console.log(err);
        }
    
        console.log(`Su salario es de ${salario}$`)
    })
})




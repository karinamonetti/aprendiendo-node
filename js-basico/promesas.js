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

////////CREACIÓN DE FUNCIONES////////////////////////////////////////////////////////////////
const getEmpleado = (id) =>{
   
    return promesa = new Promise ( (resolve, reject) => {

        const empleado = empleados.find( (e) => e.id === id )?.nombre;

        (empleado)
        ? resolve(empleado)
        : reject(`No existe empleado con id ${id}`)
        
    });

    
}

//////

const getSalario = id => {
    return promesa = new Promise ( (resolve, reject) => {

        const salario = salarios.find ( s => s.id === id)?.salario;

        (salario)
        ? resolve(salario)
        : reject (` (SALARIO) No existe empleado con id ${id} o no tiene salario cargado en nuestra base`)
    })
}


const id = 1444;

////////EJECUCIÓN////////////////////////////////////////////////////////////
// getEmpleado(1434)
//     .then ( empleado => console.log(empleado))
//     .catch( err => console.log(err))


// getSalario(1445)
// .then ( salario => console.log(salario))
// .catch( err => console.log(err))


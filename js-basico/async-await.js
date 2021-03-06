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
        : reject (`No existe un salario con id ${id}`)
    })
}

const id = 1434;


//////// ASYNC & AWAIT //////////////////////////////////////////////////////

// async () devuelve una promesa
// await debe ir dentro de async

const getInfo = async(id) => {
    try {
        const empleado = await getEmpleado (id);
        const salario = await getSalario(id);
        return `El salario del empleado ${empleado} es de ${salario}$`;
    } catch (error) {
        throw error  // es el reject
    }
    
}

getInfo(id)
    .then( msg => {
        console.log("TODO BIEN!")
        console.log(msg)
    })
    .catch (err => {
        console.log("TODO MAL!")
        console.log(err)
    })
// Es una función que se va a ejecutar en un determinado tiempo

setTimeout(( () => {
    console.log("Hola")
}),2000); // 2 segundos


const getUsuarioByID = (id, callback) => {

    const usuario = {
        id,
        nombre:"kaRINA"
    }

    setTimeout(()=>{
        callback(usuario)
    },1500);
}

getUsuarioByID(1555,(usuario) => {
    console.log(usuario)
})

// También se pueden mandar como argumentos a otra función


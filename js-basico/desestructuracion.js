// DESESTRUCTURACIÓN DE ARRAYS

let miArray=[0,1,2,3,4];
const [zero, one, two, three, four]= miArray;
console.log(two);

// Si quiero omitir valores
const [ , ,tres]=miArray;
console.log(tres);



// DESESTRUCTURACIÓN DE OBJETOS

const myPersona = {
    nombre:"kari",
    edad: 15,
    pais: "argentina"
}

// en una función
const desestructurarMyPersona = ({nombre, edad, pais, female=true}) => {
    console.log(nombre,edad,pais,female)
}
desestructurarMyPersona(myPersona);

// desestructuración normal
const{nombre, edad}= myPersona;
console.log(edad);
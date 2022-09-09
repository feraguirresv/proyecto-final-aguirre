class coffe{ //clase generadora de objetos con estas caracteristicas
    constructor(nombre, tipo, color, envio){
        this.nombre =  nombre;

        this.tipo = tipo;

        this.intensidad = color;

        this.envio = envio;
    }
} 

const cafe = [ //arrays
     
    {nombre:"Café de El Salvador",tipo:"muy fino", intensidad:"suave", envio:"a casa"},

    {nombre:"Café de Colombia",tipo:"fino", intensidad:"medio", envio:"sucursal"},

    {nombre:"Café de Mexíco",tipo:"grano grueso", intensidad:"fuerte", envio:"a casa"},

    {nombre:"Café de Brasil",tipo:"grano muy grueso", intensidad:"muy fuerte", envio:"sucursal"},
];

//AGREGAR OPCIONES DE CAFE ARRAYS
alert("¡Aquí encontraras tu café ideal!"); // alert para agregar opciones de café con las siguientes caracateristicas
  
    let nombre =  prompt(`País de origen
    1- El Salvador
    2- Colombia
    3- Mexíco
    4- Brasil
    `)

    let tipo =  prompt(`Tipo de molienda
    1- Muy fina
    2- Fina
    3- Grano grueso
    4- Grano muy grueso
    `)

    let intensidad =  prompt(`Tipo de intensidad
    1- Suave
    2- Medio
    3- Fuerte
    4- Muy fuerte
    `)

    let envio= prompt("Envio a sucursal o casa");

    
    let agregar = new coffe(nombre, tipo, intensidad, envio); 

    cafe.unshift(agregar);
    
    alert(
        `${nombre} fue agregado a la lista de tu café ideal`); 
        
    


let busquedaNombre = prompt("Escoja el país de origen");

let buscar = cafe.find(coffe => coffe.nombre === busquedaNombre.toLoweCase());


if(buscar === undefined){
    alert("Café no encontrado. Lo siento! ")
}
else{
    let mensaje = (`Nombre: ${buscar.nombre}

Tipo: ${buscar.tipo}

Color: ${buscar.intensidad}

Envio: ${buscar.envio}`);

alert(mensaje);}
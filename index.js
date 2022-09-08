class coffe{ //clase generadora de datos estas caracteristicas para el café
    constructor(nombre, tipo, color, envio){
        this.nombre =  nombre;

        this.tipo = tipo;

        this.intensidad = color;

        this.envio = envio;
    }
} 

const cafe = [ //arrays
     
    {nombre:"el salvador",tipo:"muy fino", intensidad:"suave", envio:"a casa"},

    {nombre:"colombia",tipo:"fino", intensidad:"medio", envio:"sucursal"},

    {nombre:"mexico",tipo:"grano grueso", intensidad:"fuerte", envio:"a casa"},

    {nombre:"brasil",tipo:"grano muy frueso", intensidad:"muy fuerte", envio:"sucursal"},
];

//AGREGAR OPCIONES DE CAFE ARRAYS
alert("¡Aquí encontraras tu café ideal!"); // alert para agregar opciones de café con las siguientes caracateristicas
  
    let nombre = prompt("origen del café");

    let tipo = prompt("Tipo de molienda");

    let intensidad = prompt("Tipo de intensidad");

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
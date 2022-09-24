/* voy a hacerlo en base a la entrega anterior pero tratando de ingresar mas datos
Ingresare una funcion que te lleve a otros dos lugares (Shop de ese deporte y Informacion de ese deporte)*/

/*Solamente aplique textos en las opciones, en un futuro supongo que se podra conectar ese dato a un index html que sera de shop*/ 


function eleccion(shop, informacion)
{
    let opcion = prompt (`Elija el numero del deporte: 
    1.Shop
    2.Informacion`) 

    switch (opcion) {
        case "1":
            console.log ("Usted a ingresado al Shop"); 
            console.log (shop);
                        
            /*aplique un for para el array de shop que esta abajo*/ 

            for(const mercancia of shop){
                console.log(mercancia.producto)
                console.log(mercancia.precio)
            }

            break;
        case "2":
            console.log ("Usted a ingresado a la informacion");
            console.log (informacion);
            /*aplique un for para el array de informacion que esta abajo*/ 
            for(const info of informacion){
            console.log(info.futbol)
            console.log(info.basquetball)
            console.log(info.voley)
            console.log(info.rugby)
         }
            break;
        default:
            console.log ("No Ingreso ningun dato")
            break;

    }
}
  
 /*entrega de Arrays*/ 
   /*voy a hacer un slice para cada deporte, hay 3 cosas por cada deporte*/ 
   const shop  = [
     {producto: "Camiseta del Psg", precio: 4000},
     {producto: "Balon del Mundial Qatar 2022", precio: 900},
     {producto: "Botines Nike Legend 9 Academy Tf ", precio: 2500}, 
     {producto: "Balon Oficcial Nba", precio: 800},
     {producto: "Camiseta oficial Golden State", precio: 2000},
     {producto: "Nike Precision Iii Unisex-Adult", precio: 2000},
     {producto: "Balon oficial Mundial de Voley", precio: 400},
     {producto: "Camiseta de la seleccion Argentina", precio: 1100},
     {producto: "Zapatillas Misuno ", precio: 1500},
     {producto: "Balon oficial de Rugby championship", precio: 600},
     {producto: "Camiseta de los Pumas", precio: 1300},
     {producto: "Camiseta de los All Blacks", precio: 1500},
   ];

   /*para el proyecto final no se como voy a hacer con la historia o la actualidad de la informacion de cada deporte pero aca lo hare que sea algo fuera del shop*/
   const informacion = [
    {futbol: "Informacion de futbol"},
    {basquetball: "Informacion de Basquetball"},
    {voley: "Informacion de Voleyl"},
    {rugby: "Informacion de Rugby"},
   ]
   
   /*ahora tengo que conectar cada arry con su deporte y seleccion cuales productos son de ese shop y lo mismo con la informacion*/ 



    let salir = 0 

    while (salir != 1){

    let deporte = prompt (`Elija el numero del deporte: 
    1.Futbol
    2.Voleyball
    3.Basquetball
    4.Rugby
    5.Salir`) 
    
  
    /* por cada case voy agregar los prductos de cada deporte*/ 
    switch (deporte){
        case "1":
            console.log ("Usted a elejido Futbol");
            const deportFut = shop.slice(0,3)
            const inforFut = informacion.slice (0,1)
            eleccion(shop,informacion)
            break;

        case "2":
            console.log ("Usted a elejido Voleyball");
            const deportBas = shop.slice(3,6)
            const infoBas = informacion.slice(1,2)
            eleccion(shop,informacion)
            break;
        
        case "3":
            console.log ("Usted a elejido Basquetball");
            const deportVol = shop.slice (6,9)
            const infoVol = informacion.slice (2,3)
            eleccion(shop,informacion)
            break;
        
        case "4":
            console.log ("Usted a elejido Rugby");
            const deportRug = shop.slice(9,12)
            const infoRug = informacion.slice (4,5)
            eleccion(shop,informacion)
            break;

        case "5":
            alert("Adios");
            salir = 1;
            break;

        default:
            alert ("Usted no elijio ningun deporte");
            break;
    }


    
}


/*entrega de Dom*/
/*para futbol*/
const tiendaf = document.querySelector(".shopdeportesfut");
const listasf = [
    {id:1, titulo:"Camiseta del Psg", precio:4000},
    {id:2, titulo:"Balon del Mundial Qatar 2022", precio:900},
    {id:3, titulo:"Botines Nike Legend 9 Academy Tf", precio:2500},
]

for (lista of listasF){
    let contenedor = document.createElement("li");
    conetedor.innerHtml = `<h4> listas: ${listasf.titulo}</h4>
    <p>precio: ${listasf.precio}</p>`;

    document.body= appenChild (contenedor);
}

/*para shop basquet*/
const tiendab = document.querySelector(".shopdeportesbas");
const listasb = [
    {id:1, titulo:"Balon Oficcial Nba", precio: 800},
    {id:2, titulo:"Camiseta oficial Golden State", precio: 2000},
    {id:3, titulo:"Nike Precision Iii Unisex-Adult", precio: 2000},
]

for (lista of listas){
    let contenedor = document.createElement("li");
    conetedor.innerHtml = `<h4> Listas: ${listasb.titulo}</h4>
    <p>Precio: ${listasb.precio}</p>`;

    document.body= appenChild (contenedor);
}



/*para shop voley*/
const tiendav= document.querySelector(".shopdeportesvol");
const listasv = [
    {id:1, titulo:"Balon oficial Mundial de Voley", precio: 400},
    {id:2, titulo:"Camiseta de la seleccion Argentina", precio: 1100},
    {id:3, titulo:"Zapatillas Misuno ", precio: 1500},
]

for (lista of listas){
    let contenedor = document.createElement("li");
    conetedor.innerHtml = `<h4> listas: ${listasv.titulo}</h4>
    <p>precio: ${listasv.precio}</p>`;

    document.body= appenChild (contenedor);
}



/*para shop rugby*/
const tiendar = document.querySelector(".shopdeportesrug");
const listasr = [
    {id:1, titulo:"Balon oficial de Rugby championship", precio: 600},
    {id:2, titulo:"Camiseta de los Pumas", precio: 1300},
    {id:3, titulo:"Camiseta de los All Blacks", precio: 1500},
]

for (lista of listas){
    let contenedor = document.createElement("li");
    conetedor.innerHtml = `<h4> listas: ${listasr.titulo}</h4>
    <p>precio: ${listasr.precio}</p>`;

    document.body= appenChild (contenedor);
}



/*
    estoy viendo como hacer mi carrito todavia, no se me ocurre como hacerlo
*/







/*aplicando desafio de eventos en shop.html con una lista de busqueda*/ 



const busqueda = document.querySelector("form")

const busquedadep = document.querySelector (".busqueda")

formulario.addEventListener ("submit", validarBusqueda)

function validarBusqueda (e){
    e.preventDefault()
    console.log (`${busquedadep.value}`)
}














/*Aqui termina el proyecto, lo de abajo es practica*/ 
    
      


/*ajemplo de shop las listas despeglables*/ 


/*  <!--fin de zona header o logo-->
<!--la idea era poner los 4 deportes linkeados con sus productos capaz hacerlo con un enlace interno que toquen el deporte y baje hasta su seccion-->
   
   
   
<!--nav con los deportes-->



<nav class="navshop">
    <ul class="ulshop">
        <li class="navfutshop">
            Futbol <a href="#futbol"> Ir a la seccion Futbol</a>
        </li>

        <li class="navbasqshop">
            Basquetball <a href="#basquetball"></a>
        </li>

        <li class="navvolshop">
            Voley <a href="#voley"></a>
        </li>

        <li class="navrugshop">
            Rugby <a href="#rugby"></a>
        </li>
    </ul>
</nav>

<!--fin de nav-->
*/ 



























/*sera una eleccion de deportes*/
/*en un futuro sera una eleccion del deporte y conectado con un shop de ese deportes*/ 


/*
let salir = 0 

while (salir != 1){

    let deporte = prompt (`Elija el numero del deporte: 
    1.Futbol
    2.Voleyball
    3.Basquetball
    4.Rugby
    5.Salir`) 
    
    switch (deporte){
        case "1":
            console.log ("Usted a elejido Futbol");
            salir=salida()
            break;

        case "2":
            console.log ("Usted a elejido Voleyball");
            break;
        
        case "3":
            console.log ("Usted a elejido Basquetball");
            break;
        
        case "4":
            console.log ("Usted a elejido Rugby");
            break;

        case "5":
            alert("Adios");
            salir = 1;
            break;

        default:
            alert ("Usted no elijio ningun deporte");
            break;
 
    }


}
*/

/*La idea era tambien hacer un ciclo dentro de cada case para que te dirija a la tienda del deporte o a la informacion*/ 




/*probe tambien esta opcion que seria si ingresas opciones de 1 a 4 entonces deportes es ese numero y sera igual ... entonces te sale el promp de salir y todo el resto */ 
/*
      function salida()
        {
            let opcion=0;

            let continuar = prompt (`Salir: 
            1.No
            2.SI`)

                switch (continuar){
                    case "1": 
                        opcion=0;
                        break;

                    case "2":
                        alert ("Adios");
                        opcion=1;
                        break;
                    

                    default:
                        alert ("Usted no elijio ninguna opcion");
                        break;

                }
            return opcion;

        }

}*/ 
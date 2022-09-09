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

            break;
        case "2":
            console.log ("Usted a ingresado a la informacion");
            console.log (informacion);
            break;
        default:
            console.log ("No Ingreso ningun dato")
            break;

    }
}
  
 /*entrega de Arrays*/ 
   
   const shop  = [
     {producto: "Camiseta del Psg", precio: 4000},
     {producto: "Balon del Mundial Qatar 2022", precio: 700},
     {producto: "Botines Nike Legend 9 Academy Tf ", precio: 2500},
     {producto: "Camiseta del Psg", precio: 500},
     {producto: "Camiseta del Psg", precio: 500},
     {producto: "Camiseta del Psg", precio: 500},
     {producto: "Camiseta del Psg", precio: 500},
     {producto: "Camiseta del Psg", precio: 500},
     {producto: "Camiseta del Psg", precio: 500},
     {producto: "Camiseta del Psg", precio: 500},
     {producto: "Camiseta del Psg", precio: 500},
     {producto: "Camiseta del Psg", precio: 500},
   ]





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
            shop= "Una camiseta vale $300"
            informacion="Es el mejor deporte"
            eleccion(shop,informacion)
            break;

        case "2":
            console.log ("Usted a elejido Voleyball");
            shop= "Una pelota vale $700"
            informacion="Se juega con las manos"
            eleccion(shop,informacion)
            break;
        
        case "3":
            console.log ("Usted a elejido Basquetball");
            shop= "Una camiseta de la NBA vale $15000"
            informacion="Es uno de los deportes mas famosos en Estados Unidos"
            eleccion(shop,informacion)
            break;
        
        case "4":
            console.log ("Usted a elejido Rugby");
            shop= "La pelota oficial de los Pumas vale $5000"
            informacion= "La liga mas importante del mundo es Premiership de Inglaterra"
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



























/*Aqui termina el proyecto, lo de abajo es practica*/ 
    
      

































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
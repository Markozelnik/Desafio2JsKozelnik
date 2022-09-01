/* voy a hacerlo en base a la entrega anterior tratando de ingresar mas datos*/

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



   if ( deporte == 1 || deporte == 2 || deporte == 3 || deporte == 4) {
      

        function eleccion (){

        let eleccion = prompt (`
        1.Desea ir al shop del deporte
        2.Desea tener informacion del deporte`)

        switch (eleccion) {
            case "1":
                console.log ("en un futuro ira un link directo al shop")
                break;
            case "2":
                console.log ("En un futuro ira la informacion del equipo")
                break;
            
            default:
                alert ("usted no ingreso ninguna opcion")

        } 

    }


    }

    
    console.log (eleccion)
    
      




















































































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
        if (deporte == 1 || deporte == 2 || deporte == 3 || deporte == 4)
        {

            let continuar = prompt (`Salir: 
            1.No
            2.SI`)

                switch (continuar){
                    case "1": 
                        break;

                    case "2":
                        alert ("Adios");
                        salir=1;
                        break;
                    

                    default:
                        alert ("Usted no elijio ninguna opcion");
                        break;

                }

        }

}*/ 
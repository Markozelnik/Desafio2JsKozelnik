let stockProductos = [
    {id: 1, nombre: "Balon oficial Qatar 2022", tipo: "futbol", cantidad: 1, desc: "Pelota de futbol", precio: 900, img: './imagenes/Productos/2pelotaqatar.jpg'},
    {id: 2, nombre: "Camiseta PSG 2022", tipo: "futbol", cantidad: 1, desc: "Camiseta de futbol", precio: 4000, img: './imagenes/Productos/1psgcamiseta.jpg'},
    {id: 3, nombre: "Botines Nike Legend", tipo: "futbol", cantidad: 1, desc: "Botines de futbol", precio: 500, img: './imagenes/Productos/3botineNikeLegendAcademy.jpg'},
    {id: 4, nombre: "Balon Oficial NBA 2022", tipo: "basquetball", cantidad: 1, desc: "Pelota de basquetball", precio: 800, img: './imagenes/Productos/4balonnba.jpg'},
    {id: 5, nombre: "Camiseta Golden State 2022", tipo: "basquetball", cantidad: 1, desc: "Camiseta esquipo NBA 2022", precio: 2000, img: './imagenes/Productos/5goldenstate.jpg'},
    {id: 6, nombre: "Nike Precision Iii  Raptors", tipo: "basquetball", cantidad: 1, desc: "Botines con tapones para pasto", precio: 2500, img: './imagenes/Productos/6NikePrecisionnba.jpg'},
    {id: 7, nombre: "Balon oficial Voley 2022", tipo: "voley", cantidad: 1, desc: "Pelota de voley oficial de la temporada 2022 ", precio: 400, img: './imagenes/Productos/7balonvoley.jpg'},
    {id: 8, nombre: "Camiseta argentina 2022", tipo: "voley", cantidad: 1, desc: "Camiseta seleccion argentina de voley", precio: 1100, img: './imagenes/Productos/8voley.jpg'},
    {id: 9, nombre: "Zapatillas Mizuno 2022", tipo: "voley", cantidad: 1, desc: "Zapatillas para deportes indor ", precio: 1500, img: './imagenes/Productos/9mizunovoley.jpg'},
    {id: 10, nombre: "Balon oficial de Rugby", tipo: "rugby", cantidad: 1, desc: "Balon oficial de la temporada de rugby", precio: 600, img: './imagenes/Productos/10pelotarugby.jpg'},
    {id: 11, nombre: "Camiseta de los Pumas", tipo: "rugby", cantidad: 1,desc: "Camiseta oficial de los pumas 2022", precio: 1300, img: './imagenes/Productos/11pumas.jpg'},
    {id: 12, nombre: "Camiseta de los All Blacks", tipo: "rugby", cantidad: 1, desc: "Camiseta oficial de los All Blacks 2022", precio: 1500, img: './imagenes/Productos/12allblacksrug.jpg'},
]
const contenedorProductos = document.getElementById('contenedor-productos')

//TERCER PASO

const contenedorCarrito = document.getElementById('carrito-contenedor')
//SEXTO PASO
const botonVaciar = document.getElementById('vaciar-carrito')
//SEXTIMO PASO, MODIFICAR LOS CONTADORES
const contadorCarrito = document.getElementById('contadorCarrito')

//OCTAVO PASO
const cantidad = document.getElementById('cantidad')
const precioTotal = document.getElementById('precioTotal')
const cantidadTotal = document.getElementById('cantidadTotal')

let carrito = []

document.addEventListener('DOMContentLoaded', () => {
    if (localStorage.getItem('carrito')){
        carrito = JSON.parse(localStorage.getItem('carrito'))
        actualizarCarrito()
    }
})

//SEXTO PASO
botonVaciar.addEventListener('click', () => {
    carrito.length = 0
    actualizarCarrito()
})

//PRIMER PRIMER PASO, INYECTAR EL HTML
stockProductos.forEach((producto) => {
    const div = document.createElement('div')
    div.classList.add('producto')
    div.innerHTML = `
    <img src=${producto.img} alt= "">
    <h3>${producto.nombre}</h3>
    <p>${producto.desc}</p>
    <p class="precioProducto">Precio:$ ${producto.precio}</p>
    <button id="agregar${producto.id}" class="boton-agregar">Agregar <i class="fas fa-shopping-cart"></i></button>
    `
    contenedorProductos.appendChild(div)

    //2 - SEGUNDO PASO, LUEGO DE QUE INSERTEMOS EL HTML EN EL DOM:
    const boton = document.getElementById(`agregar${producto.id}`)
    //Por cada elemento de mi array, creo un div, lo cuelgo, le pongo un id particular, una vez colgado
    //le hago un get element by id (el de agregar) Obtengo el elemento y a dicho elemento le agregamos
    //el add event listener

    boton.addEventListener('click', () => {
        //esta funcion ejecuta el agregar el carrito con la id del producto
        agregarAlCarrito(producto.id)
        //
    })
})

// 1- PRIMER PASO

//AGREGAR AL CARRITO
const agregarAlCarrito = (prodId) => {

    //PARA AUMENTAR LA CANTIDAD Y QUE NO SE REPITA
    const existe = carrito.some (prod => prod.id === prodId) //comprobar si el elemento ya existe en el carro

    if (existe){ //SI YA ESTÁ EN EL CARRITO, ACTUALIZAMOS LA CANTIDAD
        const prod = carrito.map (prod => { //creamos un nuevo arreglo e iteramos sobre cada curso y cuando
            // map encuentre cual es el q igual al que está agregado, le suma la cantidad
            if (prod.id === prodId){
                prod.cantidad++
            }
        })
    } else { //EN CASO DE QUE NO ESTÉ, AGREGAMOS EL CURSO AL CARRITO
        const item = stockProductos.find((prod) => prod.id === prodId)//Trabajamos con las ID
        //Una vez obtenida la ID, lo que haremos es hacerle un push para agregarlo al carrito
        carrito.push(item)
    }
    //Va a buscar el item, agregarlo al carrito y llama a la funcion actualizarCarrito, que recorre
    //el carrito y se ve.
    actualizarCarrito() //LLAMAMOS A LA FUNCION QUE CREAMOS EN EL TERCER PASO. CADA VEZ Q SE 
    //MODIFICA EL CARRITO
}
//agregarAlCarrito(1) //Le pasamos el ID por parametro. Tenemos que asigarle como evento esta funcion al boton
//con el id de su producto correspondiente

// 5 - QUINTO PASO
const eliminarDelCarrito = (prodId) => {
    const item = carrito.find((prod) => prod.id === prodId)

    const indice = carrito.indexOf(item) //Busca el elemento q yo le pase y nos devuelve su indice.

    carrito.splice(indice, 1) //Le pasamos el indice de mi elemento ITEM y borramos 
    // un elemento 
    actualizarCarrito() //LLAMAMOS A LA FUNCION QUE CREAMOS EN EL TERCER PASO. CADA VEZ Q SE 
    //MODIFICA EL CARRITO
    console.log(carrito)
}

const actualizarCarrito = () => {
    //4- CUARTO PASO
    //LOS APPENDS SE VAN ACUMULANDO CON LO QE HABIA ANTES
    contenedorCarrito.innerHTML = "" //Cada vez que yo llame a actualizarCarrito, lo primero q hago
    //es borrar el nodo. Y despues recorro el array lo actualizo de nuevo y lo rellena con la info
    //actualizado
    //3 - TERCER PASO. AGREGAR AL MODAL. Recorremos sobre el array de carrito.

    //Por cada producto creamos un div con esta estructura y le hacemos un append al contenedorCarrito (el modal)
    carrito.forEach((prod) => {
        const div = document.createElement('div')
        div.className = ('productoEnCarrito')
        div.innerHTML = `
        <p>${prod.nombre}</p>
        <p>Precio:$${prod.precio}</p>
        <p>Cantidad: <span id="cantidad">${prod.cantidad}</span></p>
        <button onclick="eliminarDelCarrito(${prod.id})" class="boton-eliminar"><i class="fas fa-trash-alt"></i></button>
        `

        contenedorCarrito.appendChild(div)
        
        localStorage.setItem('carrito', JSON.stringify(carrito))

    })
    //SEPTIMO PASO
    contadorCarrito.innerText = carrito.length // actualizamos con la longitud del carrito.
    //OCTAVO PASO
    console.log(carrito)
    precioTotal.innerText = carrito.reduce((acc, prod) => acc + prod.cantidad * prod.precio, 0)
    //Por cada producto q recorro en mi carrito, al acumulador le suma la propiedad precio, con el acumulador
    //empezando en 0.

}
const contenedorModal = document.getElementsByClassName('modal-contenedor')[0]
const botonAbrir = document.getElementById('boton-carrito')
const botonCerrar = document.getElementById('carritoCerrar')
const modalCarrito = document.getElementsByClassName('modal-carrito')[0]


botonAbrir.addEventListener('click', ()=>{
    contenedorModal.classList.toggle('modal-active')
})
botonCerrar.addEventListener('click', ()=>{
    contenedorModal.classList.toggle('modal-active')
})

contenedorModal.addEventListener('click', (event) =>{
    contenedorModal.classList.toggle('modal-active')

})
modalCarrito.addEventListener('click', (event) => {
    event.stopPropagation() //cuando clickeo sobre el modal se finaliza la propagacion del click a los elementos
    //padre
})


/*entrega librerias*/
// tengo que ver como hago para vaciar la suma una vez que se aprete el button de Comprar
const boton = document.querySelector (".botonani")

boton.addEventListener ("click", () =>{
  swal("Excelente!", "Su compra fue realizada con exito!", "success");
  })


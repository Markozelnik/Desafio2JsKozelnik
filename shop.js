let stockProductos = [
    {id: 1, nombre: "Balon oficial Qatar 2022", tipo: "futbol",cantidad: 1, desc: "Pelota de futbol", precio: 900, img: './imagenes/Productos/2pelotaqatar.jpg'},
    {id: 2, nombre: "Camiseta PSG 2022", tipo: "futbol",cantidad: 1, desc: "Camiseta de futbol", precio: 4000, img: './imagenes/Productos/1psgcamiseta.jpg'},
    {id: 3, nombre: "Botines Nike Legend", tipo: "futbol",cantidad: 1, desc: "Botines de futbol", precio: 500, img: './imagenes/Productos/3botineNikeLegendAcademy.jpg'},
    {id: 4, nombre: "Balon Oficial NBA 2022", tipo: "basquetball",cantidad: 1, desc: "Pelota de basquetball", precio: 800, img: './imagenes/Productos/4balonnba.jpg'},
    {id: 5, nombre: "Camiseta Golden State 2022", tipo: "basquetball",cantidad: 1, desc: "Camiseta esquipo NBA 2022", precio: 2000, img: './imagenes/Productos/5goldenstate.jpg'},
    {id: 6, nombre: "Nike Precision Iii  Raptors", tipo: "basquetball",cantidad: 1, desc: "Botines con tapones para pasto", precio: 2500, img: './imagenes/Productos/6NikePrecisionnba.jpg'},
    {id: 7, nombre: "Balon oficial Voley 2022", tipo: "voley",cantidad: 1, desc: "Pelota de voley oficial de la temporada 2022 ", precio: 400, img: './imagenes/Productos/7balonvoley.jpg'},
    {id: 8, nombre: "Camiseta argentina 2022", tipo: "voley",cantidad: 1, desc: "Camiseta seleccion argentina de voley", precio: 1100, img: './imagenes/Productos/8voley.jpg'},
    {id: 9, nombre: "Zapatillas Mizuno 2022", tipo: "voley",cantidad: 1, desc: "Zapatillas para deportes indor ", precio: 1500, img: './imagenes/Productos/9mizunovoley.jpg'},
    {id: 10, nombre: "Balon oficial de Rugby", tipo: "rugby",cantidad: 1, desc: "Balon oficial de la temporada de rugby", precio: 600, img: './imagenes/Productos/10pelotarugby.jpg'},
    {id: 11, nombre: "Camiseta de los Pumas", tipo: "rugby",cantidad: 1,desc: "Camiseta oficial de los pumas 2022", precio: 1300, img: './imagenes/Productos/11pumas.jpg'},
    {id: 12, nombre: "Camiseta de los All Blacks", tipo: "rugby",cantidad: 1, desc: "Camiseta oficial de los All Blacks 2022", precio: 1500, img: './imagenes/Productos/12allblacksrug.jpg'},
]
const contenedorProductos = document.getElementById('contenedor-productos')



const contenedorCarrito = document.getElementById('carrito-contenedor')

const botonVaciar = document.getElementById('vaciar-carrito')

const contadorCarrito = document.getElementById('contadorCarrito')


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


botonVaciar.addEventListener('click', () => {
    carrito.length = 0
    actualizarCarrito()
})



// INYECTAR EL HTML
async function fetchProductos() {
    const response = await fetch('./data.json')
    return await response.json()
}

fetchProductos().then(productos => {
    catalogo = productos
    mostrarCatalogo()
})

stockProductos.forEach((producto) => {
    const div = document.createElement('div')
    div.classList.add('producto')
    div.innerHTML = `
    <img src=${producto.img} alt= "${producto.nombre}">
    <h3>${producto.nombre}</h3>
    <p>${producto.desc}</p>
    <p class="precioProducto">Precio:$ ${producto.precio}</p>
    <button id="agregar${producto.id}" class="boton-agregar tostifyparaprduc">Agregar <i class="fas fa-shopping-cart"></i></button>
    `
    contenedorProductos.appendChild(div)

    const boton = document.getElementById(`agregar${producto.id}`)

    boton.addEventListener('click', () => {
        Toastify({
            text: "Agregado al carrito",
            duration: 3000
            }).showToast();;
        agregarAlCarrito(producto.id)
        //
    })
})
 


//AGREGAR AL CARRITO
const agregarAlCarrito = (prodId) => {

    //PARA AUMENTAR LA CANTIDAD Y QUE NO SE REPITA
    const existe = carrito.some (prod => prod.id === prodId) 

    if (existe){ 
        const prod = carrito.map (prod => { 
            if (prod.id === prodId){
                prod.cantidad++
            }
        })
    } else { 
        const item = stockProductos.find((prod) => prod.id === prodId)
        carrito.push(item)
    }
    actualizarCarrito() 
}



const eliminarDelCarrito = (prodId) => {
    const item = carrito.find((prod) => prod.id === prodId)

    const indice = carrito.indexOf(item) 

    carrito.splice(indice, 1) 
    actualizarCarrito() 
    console.log(carrito)
}

const actualizarCarrito = () => {
    contenedorCarrito.innerHTML = "" 

    
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
    
    contadorCarrito.innerText = carrito.length // actualizamos con la longitud del carrito.
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
    event.stopPropagation() 
})


/*entrega librerias*/
// tengo que ver como hago para vaciar la suma una vez que se aprete el button de Comprar
const boton = document.querySelector (".botonani")

boton.addEventListener ("click", () =>{
  swal("Excelente!", "Su compra fue realizada con exito!", "success");

  })


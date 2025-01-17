//inicio de js en proyecto final 
//traemos el titulo, imagen y precio de las cards
const Clickbutton = document.querySelectorAll('.button')
const tbody = document.querySelector('.tbody')
let carrito = []

Clickbutton.forEach(btn => {
  btn.addEventListener('click', addToCarritoItem)
})


function addToCarritoItem(e){
  const button = e.target
  const item = button.closest('.card')
  const itemTitle = item.querySelector('.card-title').textContent;
  const itemPrice = item.querySelector('.precio').textContent;
  const itemImg = item.querySelector('.card-img-top').src;
  
  const newItem = {
    title: itemTitle,
    precio: itemPrice,
    img: itemImg,
    cantidad: 1
  }

  addItemCarrito(newItem)
}
//desafio feach
const tabla = document.querySelector(`.cardsnuevas`)

function cargarProductos() {
    fetch('data.json')
        .then(respuesta => respuesta.json())
        .then(data => {
            data.forEach(pruducto => {
                const row = document.createElement('tr');
                row.innerHTML += `
                    <td>${producto.type}</td>
                    <td>${producto.price}</td>
                    <td>${producto.descripcion}</td>
                    <td>${producto.source}</td>
                `;
                tabla.appendChild(row);

              });
            }) 
    }



    
//intentando aplicar toastify Js
/*
const agregarprodu = document.querySelector(".aplicotosty")

agregarprodu.addEventListener ("click", () =>{
  Toastify({

    text: "This is a toast",
    
    duration: 3000
    
    }).showToast();
} )
*/

// trtar de aplicar tostify en agregar producto
function addItemCarrito(newItem){
  
  const alert = document.querySelector('.alert')

  setTimeout( function(){
    alert.classList.add('hide')
  }, 2000)
    alert.classList.remove('hide')

  const InputElemnto = tbody.getElementsByClassName('input__elemento')
  for(let i =0; i < carrito.length ; i++){
    if(carrito[i].title.trim() === newItem.title.trim()){
      carrito[i].cantidad ++;
      const inputValue = InputElemnto[i]
      inputValue.value++;
      CarritoTotal()
      return null;
    }
  }
  
  carrito.push(newItem)
  
  renderCarrito()
} 


function renderCarrito(){
  tbody.innerHTML = ''
  carrito.map(item => {
    const tr = document.createElement('tr')
    tr.classList.add('ItemCarrito')
    const Content = `
    
    <th scope="row">1</th>
            <td class="table__productos">
              <img src=${item.img}  alt="">
              <h6 class="title">${item.title}</h6>
            </td>
            <td class="table__price"><p>${item.precio}</p></td>
            <td class="table__cantidad">
              <input type="number" min="1" value=${item.cantidad} class="input__elemento">
              <button class="delete btn btn-danger">x</button>
            </td>
    
    `
    tr.innerHTML = Content;
    tbody.append(tr)

    tr.querySelector(".delete").addEventListener('click', removeItemCarrito)
    tr.querySelector(".input__elemento").addEventListener('change', sumaCantidad)
  })
  CarritoTotal()
}
//carrito
function CarritoTotal(){
  let Total = 0;
  const itemCartTotal = document.querySelector('.itemCartTotal')
  carrito.forEach((item) => {
    const precio = Number(item.precio.replace("$", ''))
    Total = Total + precio*item.cantidad
  })

  itemCartTotal.innerHTML = `Total $${Total}`
  addLocalStorage()
}
//remover los cards del carrito
function removeItemCarrito(e){
  const buttonDelete = e.target
  const tr = buttonDelete.closest(".ItemCarrito")
  const title = tr.querySelector('.title').textContent;
  for(let i=0; i<carrito.length ; i++){

    if(carrito[i].title.trim() === title.trim()){
      carrito.splice(i, 1)
    }
  }

  const alert = document.querySelector('.remove')

  setTimeout( function(){
    alert.classList.add('remove')
  }, 2000)
    alert.classList.remove('remove')

  tr.remove()
  CarritoTotal()
}
/*entrega operadores avanzados*/
//sumaInput...
function sumaCantidad(e){
  const sumaInput  = e.target
  const tr = sumaInput.closest(".ItemCarrito")
  const title = tr.querySelector('.title').textContent;
  carrito.forEach(item => {
    if(item.title.trim() === title){
      sumaInput.value < 1 ?  (sumaInput.value = 1) : sumaInput.value;/*Aqui*/
      item.cantidad = sumaInput.value;
      CarritoTotal()
    }
  })
}

function addLocalStorage(){
  localStorage.setItem('carrito', JSON.stringify(carrito))
}

window.onload = function(){
  const storage = JSON.parse(localStorage.getItem('carrito'));
  if(storage){
    carrito = storage;
    renderCarrito()
  }
}


/*entrega librerias*/
// tengo que ver como hago para vaciar la suma una vez que se aprete el button de Comprar
const boton = document.querySelector (".botonani")

boton.addEventListener ("click", () =>{
  swal("Excelente!", "Su compra fue realizada con exito!", "success");
  })



//entrega fetch en mi proyecto
/*
const lista = document.querySelector(".entregafetch")

fetch ("/data.json")
.then((res) => res.json())
.then((data))=>{
    data.forEach(()=>{
      const box = document.createElement("box")
      box.innerHTML:`
      <h5>${producto.nombre}</h5>
      <p>${producto.comentario}</p>
      <P>${producto.precio}</P>`

    })
}
*/

const listapr = [
  {
  
  description: "Balon oficial Qatar 2022",
  price: 900,
  source: "./imagenes/Productos/2pelotaqatar.jpg"
  },

  { 
    description: "Camiseta PSG 2022",
    price: 4000,
    source: "./imagenes/Productos/1psgcamiseta.jpg"
  },

  { 
  description: "Balon oficial Qatar 2022",
  price: 900,
  source: "./imagenes/Productos/2pelotaqatar.jpg"
  },

  { 
  description: "Balon oficial Qatar 2022",
  price: 900,
  source: "./imagenes/Productos/2pelotaqatar.jpg"
  },


]

let card = document.getElementById("cardcreada");

listapr.map((x) => {
  card.innerHTML += `
  <div class="col d-flex justify-content-center mb-4">
  <div class="card shadow mb-1 bg-dark rounded" style="width: 20rem;">
    <h5 class="card-title pt-2 text-center text-primary">${x.description}</h5>
    <img src="${x.source}" class="card-img-top" alt="qatar 2022">
    <div class="card-body">
      <p class="card-text text-white-50 description">Balon oficial de Qatar 2022</p>
      <h5 class="text-primary">Precio: <span class="precio">$ ${x.price}</span></h5>
      <div class="d-grid gap-2">
      <button  class="aplicotosty btn btn-primary button">Añadir a Carrito</button>
    </div>
    </div>
  </div>
  </div>
  `;
});



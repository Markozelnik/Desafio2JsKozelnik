//inicio de js en proyecto final 
//linkeando el boton con el carrito
const addToShoppingCartdButtons = document.querySelectorAll(`.addToCard`)
addToShoppingCartButtons.forEach((addToCardButton) => {
 addToCartButton.addEventListener(`click`, addToCartClicked) 
});

//creando addToCartCliked
function addToCartClicked(event) {
  const button = event.target;
  const item = buttom.closest (`.item`);

  const itemTitle = item.querySelector(`.item.title`).textContent;
  const itemPrice = item.querySelector(`.item.price`).textContent;
  const itemImage = item.querySelector(`.item.image`).src;
  
}

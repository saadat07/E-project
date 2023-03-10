let menu = document.querySelector('#extend-bars');
let navbar = document.querySelector('#navbar');

menu.onclick = () => {
    menu.classList.toggle('fa-xmark');
    navbar.classList.toggle('active');
    
}
// window.onscroll = () => {
//     menu.classList.remove('fa-xmark');
//     navbar.classList.remove('active');
// }
// document.querySelector('#search-icon').onclick = () =>{
//     document.querySelector('#search-form').classList.toggle('active')
// }
// document.querySelector('#close').onclick = () =>{
//     document.querySelector('#search-form').classList.remove('active');
// }


// let cartIcon = document.querySelector('#cart-icon')
// let cart = document.querySelector('.cart')
// let closeCart = document.querySelector('#close-cart')

// cartIcon.onclick = () => {
//     cart.classList.add("active");
// };
// closeCart.onclick = () => {
//     cart.classList.remove("active");
// };
// // cart working js
// if (document.readyState == 'loading'){
//     document.addEventListener('DOMContentLoaded',ready)
// }else{
//     ready();
// }

// // making function
// function ready(){
//     // remove item from cart
//     var removecartButtton = document.getElementsByClassName('fa-trash')
//     console.log(removecartButtton)
//     for (var i =0; i < removecartButtton.length; i++){
//         var button = removecartButtton[i]
//         button.addEventListener('click' , removeCartItem )
//     }
//     // quantity changes
//     var quantityInput = document.getElementsByClassName('cart-quantity')
//     for (var i = 0; i < quantityInput.length; i++){
//         var input = quantityInput[i];
//         input.addEventListener("change", quantityChanged);
//     }

// }
// function removeCartItem(event) {
//     var buttonClicked = event.target;
//     buttonClicked.parentElement.remove();
//     updatetotal();
// }
// // add to cart
// var addcart = document.getElementsByClassName('box');
// for (var i = 0; i < addcart.length; i++){
//     var button = addcart[i];
//     button.addEventListener("click",addcartClicked);
// }

// // Quantity changes
// function quantityChanged(event) {
//     var input = event.target;
//     if(isNaN(input.value) || input.value <= 0) {
//         input.value = 1;
//     }            
//  updatetotal();
// }
// function addcartClicked(event){
//     var button = event.target
//     var shopproduct = button.parentElement;
//     var price = shopproduct.getElementsByClassName("price")[0].innerText;
//     var productimage = shopproduct.getElementsByClassName("price")[0].innerText;
//     console.log(price);
// }
// function addProductCart(title,price,productImg) {
//     var cartShopBox = document.createElement("div");
//     // cartShopBox.classlist.add('cart-box')
//     var carItems = document.getElementsByClassName('cart-content')[0]
//     var CartItemName = cartItems.getElementsByClassName('cart-product-title')
//     for (var i = 0;i < CartItemName.length ; i++){
//         alert("You have already add this item to cart")

//     }
// }
// // update total
// function updatetotal() {
//     var cartContent = document.getElementsByClassName("cart-content")[0];
//     var cartBoxes = cartContent.getElementsByClassName("cart-box");
//     var total = 0;
//     for (var i = 0; i < cartBoxes.length; i++) {
//         var cartBox = cartBoxes[i];
//         var priceElement = cartBox.getElementsByClassName("cart-price")[0];
//         var quantityElement = cartBox.getElementsByClassName("cart-quantity")[0];
//         var price = parseFloat(priceElement.innerText.replace("$",""));
//         var quantity = quantityElement.value;
//         total = total + price * quantity;
//         // if price contain some cents value
//         total = Math.round(total * 100) /100;


//         document.getElementsByClassName("total-price")[0].innerText = "$" + total;

//     }
    
// }

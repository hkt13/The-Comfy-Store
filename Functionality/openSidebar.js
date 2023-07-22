const cartitemel = document.querySelector('.cart-item')
let flag = true;
const circleel = document.querySelector('.circle')
import getLocalStorageData from "./localstorage.js";
import { removingitem } from "./removingitem.js";
import { carttotal } from "./carttotal.js";
getLocalStorageData(null,'')

export const opensidebar =(ide,products)=>{
  let localdata = JSON.parse(localStorage.getItem('products'));
const selecteditemel = document.querySelectorAll('.selected-item')
    document.querySelector('.cart-overlay').classList.add('showel')
    document.querySelector('.cart').classList.add('showel')
if (localdata!==null) {
  Array.from(selecteditemel).map(product=>{
    if(product.id===ide){
      flag=false;
      let newnumber = parseInt(product.children[2].children[1].innerText)
      product.children[2].children[1].innerText  = newnumber +1;
      getLocalStorageData(ide,'increase')
      carttotal(product.id,(newnumber+1),'old')
    }
  })
}
   
if(ide!==null && flag){
 carttotal(ide,1,"new")
if(localdata!==null){
  
  let newproduct = products.filter(product=>{
    return product.id===ide;
  }).map(product=>{
    return {...product, amount : 1}
  })
localStorage.setItem('products', JSON.stringify([...localdata,...newproduct]))
}
else{
  localStorage.setItem('products', JSON.stringify(products.filter(product=>{
    return product.id===ide;
  }).map(product=>{
    return {...product, amount : 1}
  })))
}
getLocalStorageData(null,'')


    }

    flag=true;
}

cartitemel.addEventListener('click', event=>{
  if(event.target.classList.contains('selected-item-remove')){
    removingitem(event.target.id)
    circleel.innerText = parseInt(circleel.innerText) - parseInt(event.target.parentElement.nextElementSibling.children[1].innerText); 
    carttotal(event.target.id,0,'old')
  }
  else if(event.target.classList.contains('increase')){
    const quantityElement = event.target.nextElementSibling;
    const currentQuantity = parseInt(quantityElement.innerText);
    quantityElement.innerText = currentQuantity + 1;
    circleel.innerText = parseInt(circleel.innerText) + 1;
     getLocalStorageData(event.target.id,'increase')
    carttotal(event.target.id, event.target.nextElementSibling.innerText, "old")
  }
  else if (event.target.classList.contains('decrease')) {
    const quantityElement = event.target.previousElementSibling;
  const currentQuantity = parseInt(quantityElement.innerText);
  circleel.innerText = parseInt(circleel.innerText) - 1;
  
  if (currentQuantity > 1) {
    quantityElement.innerText = currentQuantity - 1;
    carttotal(event.target.id, event.target.previousElementSibling.innerText, "old")
       getLocalStorageData(event.target.id,'decrease')
  }
  else{
    removingitem(event.target.id)
    carttotal(event.target.id,0,'old')
  }

  }
})


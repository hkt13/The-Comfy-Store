const cartitemel = document.querySelector('.cart-item')
import { carttotal } from "./carttotal.js";
let localdata = JSON.parse(localStorage.getItem('products'));
const circleel = document.querySelector('.circle')
let cartquantity=0;
(
  function() {
    if (localdata!==null) {
      
   localdata.map((item)=>{
    carttotal(item.id, item.amount, 'new')
    cartquantity += item.amount;
   })
   circleel.innerText = cartquantity;
  return;  
  }
circleel.innerText = 0;
})();

const  getLocalStorageData=(id,val)=> {
let localdata = JSON.parse(localStorage.getItem('products'));

if (localdata!==null) {

if (val) {
  
  let localel = localdata.filter(product=>{
    return product.id===id;
  }).map(product=>{
  if (val==='increase') {
        return {...product, amount: product.amount+1 }
  }
  else{
    return {...product, amount: product.amount-1 }
  }

  })

  let newlocalel = localdata.filter(product=>{
    return product.id!==id;
  })
  localStorage.setItem('products', JSON.stringify([...localel,...newlocalel]))
      return;
}


        cartitemel.innerHTML =localdata.map((product,index)=>{
    const { id, title, image, price, amount } = product
    return `<div class="selected-item" id=${id}>
    <img src=${image} >
    <div class="selected-item-info">
        <h5>${title}</h5>
        <div class="selected-item-price">${price}</div>
        <button class="selected-item-remove" id=${id}>remove</button>
    </div>
    <div class="quantity-toogle">
        <button class="increase"  id=${id}>+</button>
  
        <span class="quantity-number">${amount}</span>
        <button class="decrease" id=${id}>-</button>
    </div>
  </div>`
  }).join('');
}


}

export default getLocalStorageData ;
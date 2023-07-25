import {opensidebar} from "./openSidebar.js"
import {products} from "../items.js";
const circleel = document.querySelector('.circle')
export const events=()=>{    
    let productcartel = document.querySelectorAll('.product-cart');
    Array.from(productcartel).map(product=>{
     product.addEventListener('click',(e)=>{
         circleel.innerText = parseInt(circleel.innerText) + 1;
         opensidebar(product.id,products)

     })
    })
    let producticonel = document.querySelectorAll('.product-icon')
    Array.from(producticonel).map(product=>{
     product.addEventListener('click',(e)=>{
          let myData = {
             'key' : `${product.id}`
          }
         localStorage.setItem( 'objectToPass', JSON.stringify(myData));
     })
    })
}
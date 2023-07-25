import {products} from "./items.js";
import toogle from "./Functionality/toogle.js";
import {opensidebar} from "./Functionality/openSidebar.js"
const loadingel = document.querySelector('.loading')
const circleel = document.querySelector('.circle')
const productel = document.querySelector('.product')
console.log('runnn')

toogle();

     function run()
    {
        console.log('run')
       if (window.location.pathname === 'https://hkt13.github.io/The-Comfy-Store/index.html') {
           loadingel.style.display = 'block';
    
        productel.innerHTML  =products.filter((product,index)=>{
        const { id, title, image, price,featured } = product
        console.log(product)
        return featured===true;
       }).map((product,index)=>{
        console.log(product)
        const { id, title, image, price } = product
        return ` <div class="item">
        <div class="product-container">
        <img src=${image} alt="" class="item-img">
        <div class="product-icons">
            <a href= ' ./SingleProduct/product.html' class="product-icon" id=${id}><i class="fa-solid fa-magnifying-glass"></i></a>
            <button class="product-cart" id=${id}><i class="fa-solid fa-cart-shopping"></i></button>
        </div>
        </div>
        <div class="product-name">${title}</div>
        <div class="price">$${price}</div>
    </div>`
       }
    
       ).join('');
       loadingel.style.display = 'none';
       }
       events()        
    } 

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

        run();
     
  
import {products} from "./items.js";
import toogle from "./Functionality/toogle.js";
import { events } from "./Functionality/eventsfile.js";
const loadingel = document.querySelector('.loading')
const productel = document.querySelector('.product')

toogle();

     function run()
    {
        loadingel.style.display = 'block';
        productel.innerHTML  =products.filter((product,index)=>{
        const { id, title, image, price,featured } = product
        return featured===true;
       }).map((product,index)=>{
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
       events()        
    }


        run();
     
  
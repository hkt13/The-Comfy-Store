import {products} from "../items.js";
import { opensidebar } from "../Functionality/openSidebar.js";
import toogle from "../Functionality/toogle.js"
let saved_history =JSON.parse(localStorage.getItem('objectToPass'))
let singleproductnameel = document.querySelector('.single-product-name')
const pageloadingel = document.querySelector('.page-loading')
const singleproductel = document.querySelector('.single-product')

toogle();

    function showsingleproduct() {
    pageloadingel.style.display = 'block';
    singleproductel.innerHTML = products.filter(product=>{
       return product.id===saved_history.key;
    }).map(product=>{
        const { id, title, image, company, price } = product
        let titleupper = title.toUpperCase();
        document.title = `${titleupper} | Comfy`
        singleproductnameel.innerText = `home / ${title}` 
        return `<img src=${image} alt="" srcset="">
        <div class="single-product-info">
            <h3>${title}</h3>
            <p class="company">By ${company}</p>
            <p class="single-product-price">$${price}</p>
            <div class="single-product-color">
                <span class="first product-color"></span>
                <span class="second product-color"></span>
            </div>
            <p class="single-product-description">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea, esse? Libero in corrupti amet delectus at voluptatem voluptas assumenda voluptate. Fugiat earum commodi atque cumque sed sequi, id dolorem consequatur. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente debitis omnis voluptate</p>
            <button class="single-cart all-products" id=${id}>add to cart</button>
        </div>`
    })
    pageloadingel.style.display = 'none';
    let newproducts = products.filter(product=>{
        return product.id===saved_history.key;
     })
    let btn = document.querySelector('.single-cart')
  

btn.addEventListener('click',event=>{
       opensidebar(event.target.id,newproducts)
}
)
}

showsingleproduct();

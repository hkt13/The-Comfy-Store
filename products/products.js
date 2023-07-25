import {products} from "../items.js";
import { events } from "../Functionality/eventsfile.js";
import toogle from "../Functionality/toogle.js";
const productsel = document.querySelector('.products-info')
const searchinputel = document.querySelector('.search-input')
const pricerangeel = document.querySelector('.price-range')
const pricevalueel  = document.querySelector('.price-value')
const pageloadingel = document.querySelector('.page-loading')
const btnel = document.querySelectorAll('.company-btn')
const companyfilter = document.querySelector('.companies')

toogle();

function showproducts(products){
pageloadingel.style.display = 'block';
productsel.innerHTML = products.map((product)=>{
    const { id, title, image, price } = product
    return ` <div class="item">
    <div class="product-container">
    <img src=${image} alt="" class="item-img">
    <div class="product-icons">
        <a href="../SingleProduct/product.html" id=${id} class="product-icon"><i class="fa-solid fa-magnifying-glass"></i></a>
        <button class="product-cart" id=${id}><i class="fa-solid fa-cart-shopping"></i></button>
    </div>
    </div>
    <div class="product-name">${title}</div>
    <div class="price">$${price}</div>
</div>`
}).join('');
pageloadingel.style.display = 'none';
events()
}

function checkingvalue(value) {
    const searchvalue = value.toLowerCase();
    const newproducts = products.filter(product=> product.title.toLowerCase().startsWith(searchvalue))
    if (newproducts.length===0) {
        // productsel.classList.add('center')
        productsel.innerHTML = `<div class='nf'>Sorry, No Products Matched Your Search</div>`
    }
    else{
showproducts(newproducts)
    }
}

function updatingui(value) {
    const newproducts = products.filter((product)=>{
        return product.price<=value;
    } )
    showproducts(newproducts)
}

companyfilter.addEventListener('click', event=>{
    if (event.target.innerText==='All') {
        showproducts(products);
    }
    else{
    const newproducts = products.filter((product)=>{
        return product.company==event.target.innerText;
    })
    showproducts(newproducts)
}
})


searchinputel.addEventListener('input',event=>{
    checkingvalue(event.target.value)
})

  
  pricerangeel.addEventListener('input', event=>{
    pricevalueel.textContent = `Value : $${event.target.value}`;
    updatingui(event.target.value)  
});

showproducts(products);


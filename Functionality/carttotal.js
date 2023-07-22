let finaltotal =[];
let gtotal;
import { products } from "../items.js";
const totalamount = document.querySelector('.total-amount')
export function carttotal(id,quantity,val) {
    let total;
    let quantityel = parseInt(quantity)
    let price = products.filter(product=>{
      return product.id===id
    })
    
    total = quantityel*(price[0].price);

   finaltotal= [...finaltotal, {'id': id, 'totalamount': total}]
    if (val==='old') {
      gtotal = finaltotal.filter((total)=> {
       return total.id!=id;
      })
      finaltotal= [...gtotal, {'id': id, 'totalamount': total}]
    }

  let x=0;
  finaltotal.map(total=>{
    x=x+total.totalamount;
  })
  totalamount.innerText = `$${x.toFixed(2)}`
  }
import getLocalStorageData from "./localstorage.js";

export const removingitem =(ide)=>{
    let localdata = JSON.parse(localStorage.getItem('products'));
    let newproducts = localdata.filter(item=>{
        return item.id!==ide;
    })
localStorage.setItem('products', JSON.stringify(newproducts))
getLocalStorageData(null,'')
}
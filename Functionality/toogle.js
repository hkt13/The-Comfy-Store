const tooglenav = document.querySelector('.toggle-nav')
const sidebaroverlay = document.querySelector('.sidebar-overlay')
const sidebarclose = document.querySelector('.sidebar-close')
const cartlogo=  document.querySelector('.cart-logo')
const crossel  = document.querySelector('.cross') 

const toogle = () =>{
    cartlogo.addEventListener('click',()=>{
        document.querySelector('.cart-overlay').classList.add('showel')
        document.querySelector('.cart').classList.add('showel')   
    })
    
    crossel.addEventListener('click',()=>{
    document.querySelector('.cart-overlay').classList.remove('showel')
    document.querySelector('.cart').classList.remove('showel')
    })
    
    tooglenav.addEventListener('click',()=>{
    
        sidebaroverlay.classList.add('show-sidebar')
    
    })
    
    sidebarclose.addEventListener('click',()=>{
    
        sidebaroverlay.classList.remove('show-sidebar')
    
    })
    
}

export default toogle;
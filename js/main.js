
//* current year
const yearEl = document.querySelector('.year');
const currentYear = new Date().getFullYear();
yearEl.textContent = currentYear;

//*  show / hide menu

const navMenu = document.querySelector('.nav-items');
const searchForm = document.querySelector('#search-form');
const cartItems = document.querySelector('.cart-items-container');
const menuBtn = document.querySelector('#menu-btn');
const searchBtn = document.querySelector('.search-btn');
const cartBtn = document.querySelector('.menu-cart');
 


 
  menuBtn.addEventListener('click', function(){
    navMenu.classList.toggle('active');
    document.addEventListener('click', function(e){
      if(!e.composedPath().includes(menuBtn) && !e.composedPath().includes(navMenu)){
        navMenu.classList.remove('active');
      }
    
    })
  })

cartBtn.addEventListener('click', function(){
  cartItems.classList.toggle('active');
  document.addEventListener('click', function(e){
    if(!e.composedPath().includes(cartBtn) && !e.composedPath().includes(cartItems)){
      cartItems.classList.remove('active');
    }
  
  })
})


searchBtn.addEventListener('click', function(){
  searchForm.classList.toggle('active');
  document.addEventListener('click', function(e){
    if(!e.composedPath().includes(searchBtn) && !e.composedPath().includes(searchForm)){
      searchForm.classList.remove('active');
    }
  
  })
})





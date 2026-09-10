const  homeList=document.querySelector('.homeList')
const home=document.getElementById('home')
const pages=document.getElementById('pages')
const pagesList=document.querySelector('.pageslist')
const product=document.getElementById('product')
const productlist=document.querySelector('.productlist')

const menu_button=document.getElementById('menu_button')
const Mobile_links=document.querySelector('.Mobile_links')

menu_button.addEventListener('click',()=>{
    Mobile_links.classList.toggle('hide')
})
home.addEventListener('click',()=>{
  homeList.classList.toggle('hide')
  pagesList.classList.add('hide')
  productlist.classList.add('hide')  
})


pages.addEventListener('click', ()=>{
    pagesList.classList.toggle('hide')
    homeList.classList.add('hide')
    productlist.classList.add('hide')
})

product.addEventListener('click', ()=>{
    productlist.classList.toggle('hide')
    homeList.classList.add('hide')
    pagesList.classList.add('hide')
})

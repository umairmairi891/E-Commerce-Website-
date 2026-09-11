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

const Mobilehome=document.getElementById("Mobilehome")
const MobilehomeList=document.querySelector('.MobilehomeList')

const Mobilepages=document.getElementById('Mobilepages')
const Mobilepageslist=document.querySelector('.Mobilepageslist')

const Mobileproduct=document.getElementById('Mobileproduct')
const Mobileproductlist=document.querySelector('.Mobileproductlist')

Mobilehome.addEventListener('click',()=>{
  MobilehomeList.classList.toggle('hide')
  Mobilepageslist.classList.add('hide')
  Mobileproductlist.classList.add('hide') 
})

Mobilepages.addEventListener('click', ()=>{
    Mobilepageslist.classList.toggle('hide')
    MobilehomeList.classList.add('hide')
    Mobileproductlist.classList.add('hide')
})


Mobileproduct.addEventListener('click',()=>{
    Mobileproductlist.classList.toggle('hide')
    MobilehomeList.classList.add('hide')
    Mobilepageslist.classList.add('hide')
})
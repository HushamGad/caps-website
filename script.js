const bar = document.getElementById('bar');
const close = document.getElementById('close');
const navbar =document.getElementById('navbar');

const up= document.querySelector(".up");

if(bar){
  bar.addEventListener('click', ()=>{
    navbar.classList.add('active');
  })
}

if(close){
  close.addEventListener('click', ()=>{
    navbar.classList.remove('active');
  })
}

window.addEventListener("scroll", ()=>{
  if(window.scrollY > 100){
    up.classList.add("active");
  }else{
    up.classList.remove("active");
  }
})


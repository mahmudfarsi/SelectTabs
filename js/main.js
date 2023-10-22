const $ = document;
const anchor = $.querySelectorAll('.anchor');
const containers = $.querySelectorAll('.container');
const navList = $.querySelector('.nav');
let idSection = 'home';

window.addEventListener('scroll',()=>{
  containers.forEach(item=>{
    if(window.scrollY >= item.offsetTop){
      idSection = item.id
    }
  });
  anchor.forEach(items=>{
    if(items.href.includes(idSection)){
      items.classList.add('show');
    }
    else{
      items.classList.remove('show');
    }
  });
   
   // for nav
   if(document.documentElement.scrollTop > 20 || document.scrollTop > 20){
    navList.classList.add('show');
  }else{
    navList.classList.remove('show');
  }
 
});








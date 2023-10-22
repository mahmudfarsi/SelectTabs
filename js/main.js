const $ = document;
const anchor = $.querySelectorAll('.anchor');
const containers = $.querySelectorAll('.container');
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

});


const menu  =  document.querySelector('#btn-menu');
const nav = document.querySelector('.nav-links');
const navLinks = document.querySelectorAll('.nav-links li');
const boxMenu = document.querySelector('#contend-btn-menu')
menu.addEventListener("click",menuSelected);

function menuSelected(){
    if(menu.checked){
        console.log("activado");
        nav.classList.toggle('nav-active');
        navLinks.forEach((link,index)=>{
            link.style.animation = `navLinkFade 0.5s forwards ${index/3 + 0.7}s`;
        });
        boxMenu.style.animation= `btnMenuOpen 0.5s forwards`;
    }else{
        console.log("desactivado");
        nav.classList.toggle('nav-active');
        navLinks.forEach((link,index)=>{
            link.style.animation = '';
        });
        boxMenu.style.animation= `btnMenuClose 0.5s forwards`;
    }
}
const music = document.querySelector('#music');
const bSound = document.querySelector('#b-sound');
bSound.volume=0.4;
music.addEventListener("click",()=>{
    if(music.classList.contains('play')){
        bSound.pause();
    }else{
        bSound.play();
    }
    music.classList.toggle('play');
});
const dMode = document.querySelector('#dark-mode');
dMode.addEventListener("click",()=>{
    var element = document.querySelectorAll('body,div, label, h1, h2, a, p ,h2 ,section, nav, i, ul, li');
   element.forEach((elemento)=>{
    elemento.classList.toggle('dark-mode');
   });
});

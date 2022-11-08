//menu-1-mobile;
const btnMobile = document.querySelector('#btn-mobile');
btnMobile.addEventListener('click' || 'touchstart', ()=>{
    const menu = document.querySelector('.menu-1');
    const menu1 = document.querySelector('#hamburguer');
    menu.classList.toggle('active');
    if (menu){
        menu1.classList.toggle('x-menu');
    }
});
//

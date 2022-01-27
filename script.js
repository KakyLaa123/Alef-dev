const images = document.querySelectorAll('.product-card__small-photo');
const imageMain = document.querySelector('.product-card__main-photo');
const btnPlus = document.getElementById('prod-plus');
const btnMin = document.getElementById('prod-min');
const numValue = document.getElementById('prod-val');
const nameProd = document.querySelector('.product-card__prod-name');
const addToBag = document.getElementById('add-to-bag');
const addToFav = document.getElementById('add-to-favorite');
const addMessage = document.querySelector('.product-card__prod-buying__message');
const backForm = document.querySelector('.footer__form');
const inputForm = document.querySelector('.footer__form-input-value');
const header = document.querySelector('.header');
const headerMenu = document.querySelector('.header__list__button');
const headerMenuList = document.querySelector('.header__header-menu');
const headerMenuClose = document.querySelector('.header__header-menu-close');
const prods = document.querySelectorAll('.ther-products__product');
const bigProd = document.querySelector('.other-products__first');

let value = 1;

images.forEach(el => {
    el.addEventListener('click', () => {
        imageMain.src = el.src;
    });
});

btnPlus.addEventListener('click', () => {
    value++;
    header.classList.add('hide-header');
    numValue.textContent = value;
    if(value > 1){
        btnMin.disabled = false;
    }
    return value;
});

btnMin.addEventListener('click', () => {
    value--;
    numValue.textContent = value;
    header.classList.remove('hide-header');
    if(value < 2){
        btnMin.disabled = true;
    }
    return value;
});

addToBag.addEventListener('click', (e) => {
    e.preventDefault();
    addMessage.classList.remove('message');
    addMessage.textContent = `Товар ${nameProd.textContent} в количестве ${value} добавлен в корзину`;
    addToBag.disabled = true;
    setTimeout(() => {    
        addMessage.classList.add('message');
        addMessage.textContent = '';
        addToBag.disabled = false;
    }, 15000);
});

addToFav.addEventListener('click', () => {
    addMessage.classList.remove('message');
    addMessage.textContent = `Товар ${nameProd.textContent} в количестве ${value} добавлен в избранное`;
    addToFav.disabled = true;
    setTimeout(() => {    
        addMessage.classList.add('message');
        addMessage.textContent = '';
        addToFav.disabled = false;
    }, 15000);
});

headerMenu.addEventListener('click', () => {
    headerMenuList.classList.remove('hidden');
});

headerMenuClose.addEventListener('click', () => {
    headerMenuList.classList.add('hidden');
});

window.addEventListener('click', e => {
    if(!e.target.closest('.header__header-menu') && !e.target.closest('.header__list__button')){
        headerMenuList.classList.add('hidden');
    }
});

window.addEventListener('scroll', () => {
    if(window.scrollY > 1){
        header.classList.add('scroll-header');
    }else{
        header.classList.remove('scroll-header');
        header.classList.add('header-shown');
        setTimeout(() => {  
            header.classList.remove('header-shown');
        }, 1010);
    }
});

prods.forEach(el => {
    const prodHov = el.querySelector('.other-products__product__hover');
    el.addEventListener('mouseover', () => {
        prodHov.classList.remove('hidden');
    });
    el.addEventListener('mouseout', () => {
        prodHov.classList.add('hidden');
    });
});

const prodHovBig = bigProd.querySelector('.other-products__product__hover');
bigProd.addEventListener('mouseover', () => {
    prodHovBig.classList.remove('hidden');
});
bigProd.addEventListener('mouseout', () => {
    prodHovBig.classList.add('hidden');
});
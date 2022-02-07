const imagesArea = document.querySelector('.product-card__photos');
const images = document.querySelectorAll('.product-card__small-photo');
const imageMain = document.querySelector('.product-card__main-photo');
const btnPlus = document.getElementById('prod-plus');
const btnMin = document.getElementById('prod-min');
const numValue = document.getElementById('prod-val');
const nameProd = document.querySelector('.product-card__prod-name');
const toBag = document.getElementById('add-to-bag');
const addToFav = document.getElementById('add-to-favorite');
const addMessage = document.querySelector('.product-card__prod-buying__message');
const backForm = document.querySelector('.footer__form');
const inputForm = document.querySelector('.footer__form-input-value');
const header = document.querySelector('.header');
const headerMenu = document.querySelector('.header__list__button');
const headerMenuList = document.querySelector('.header__header-menu');
const headerMenuRef = document.querySelector('.header__header-menu-list');
const headerMenuClose = document.querySelector('.header__header-menu-close');
const prods = document.querySelectorAll('.ther-products__product');
const bigProd = document.querySelector('.other-products__first');
const inputValue = document.querySelector('.footer__form-input-value');
const clearInputBtn = document.querySelector('.footer__form-input-clear');

changeImg();
slideImg();
valueFunctional();
menuToggle();
headerScroll();
otherProductsHover();
clearInput();


function changeImg(){
    images.forEach(el => {
        if(imageMain.src == el.src){
            el.style.opacity = 1;
        }else{
            el.style.opacity = 0.8;
        }
        el.addEventListener('click', () => {
            setTimeout(() => {
                imageMain.src = el.src;
                images.forEach(element => {
                    if(element.src != imageMain.src){
                        element.style.opacity = 0.8;
                    }else{
                        element.style.opacity = 1;
                    }
                });
            }, 500);
            imageMain.classList.add('product-card__main-photo_changing');
            setTimeout(() => {
                imageMain.classList.remove('product-card__main-photo_changing');
            }, 1000);
        });
        el.addEventListener('mouseover', () => {
            el.style.opacity = 1;
        });
        el.addEventListener('mouseout', () => {
            el.style.opacity = 0.8;
            if(imageMain.src == el.src){
                el.style.opacity = 1;
            }
        });
    });
}

function slideImg(){
    let isChanghing = true;

    imagesArea.addEventListener('mouseover', () => {
        isChanghing = false;
    });

    imagesArea.addEventListener('mouseout', () => {
        isChanghing = true;
    });

        let imgNum = 0;
        setInterval(() => {
            if(isChanghing){
                imgNum++;
                if(imgNum > 4){
                    imgNum = 0;
                }
                imageMain.classList.add('product-card__main-photo_changing');
                setTimeout(() => {
                    imageMain.src = images[imgNum].src;
                    images.forEach(element => {
                        if(element.src != imageMain.src){
                            element.style.opacity = 0.8;
                        }else{
                            element.style.opacity = 1;
                        }
                    });
                }, 500);
                setTimeout(() => {
                    imageMain.classList.remove('product-card__main-photo_changing');
                }, 1000);
            }
        }, 8000);
}

function valueFunctional(){
    let value = 1;

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


    toBag.addEventListener('click', (e) => {
        e.preventDefault();
        addMessage.classList.remove('message');
        addMessage.classList.add('product-card__prod-buying__message__showing');
        addMessage.textContent = `Товар ${nameProd.textContent} в количестве ${value} добавлен в корзину`;
        toBag.disabled = true;
        setTimeout(() => {    
            addMessage.classList.add('product-card__prod-buying__message__hidden');
        }, 9000);
        setTimeout(() => {    
            addMessage.classList.remove('product-card__prod-buying__message__showing');
            addMessage.classList.remove('product-card__prod-buying__message__hidden');
            addMessage.classList.add('message');
            addMessage.textContent = '';
            toBag.disabled = false;
        }, 10000);
    });

    addToFav.addEventListener('click', () => {
        addMessage.classList.remove('message');
        addMessage.classList.add('product-card__prod-buying__message__showing');
        addMessage.textContent = `Товар ${nameProd.textContent} в количестве ${value} добавлен в избранное`;
        addToFav.disabled = true;
        toBag.disabled = true;
        setTimeout(() => {    
            addMessage.classList.add('product-card__prod-buying__message__hidden');
        }, 9000);
        setTimeout(() => {    
            addMessage.classList.remove('product-card__prod-buying__message__showing');
            addMessage.classList.remove('product-card__prod-buying__message__hidden');
            addMessage.classList.add('message');
            addMessage.textContent = '';
            addToFav.disabled = false;
            toBag.disabled = false;
        }, 10000);
    });
}

function menuToggle(){
    let isShowing = false;
    headerMenu.addEventListener('click', () => {
        headerMenuList.classList.remove('hidden');
        headerMenuRef.classList.remove('header__header-menu-list_hidden');
        headerMenuList.classList.remove('header__header-menu__hidden');
        headerMenuList.classList.add('header__header-menu__shown');
        headerMenuRef.classList.add('header__header-menu-list_shown');
        headerMenu.style.opacity = 0;
        setTimeout(() => {
            isShowing = true;
        }, 1000);
    });
    
    headerMenuClose.addEventListener('click', () => {
        if(isShowing){
            headerMenuRef.classList.add('header__header-menu-list_hidden');
            headerMenuList.classList.add('header__header-menu__hidden');
            setTimeout(() => {
                headerMenuList.classList.add('hidden');
                headerMenu.style.opacity = 1;
            }, 1000);
            isShowing = false;
        }
    });
    
    window.addEventListener('click', e => {
        if(isShowing){
            if(!e.target.closest('.header__header-menu') && !e.target.closest('.header__list__button')){
                headerMenuRef.classList.add('header__header-menu-list_hidden');
                headerMenuList.classList.add('header__header-menu__hidden');
                setTimeout(() => {
                    headerMenuList.classList.add('hidden');
                    headerMenu.style.opacity = 1;
                }, 1000);
                isShowing = false;
            }
        }
    });
}

function headerScroll(){
    window.addEventListener('scroll', () => {
        if(window.scrollY > 1){
            header.classList.add('scroll-header');
            headerMenuList.classList.add('hidden');
            headerMenu.style.opacity = 1;
        }else{
            header.classList.remove('scroll-header');
            header.classList.add('header-shown');
            setTimeout(() => {  
                header.classList.remove('header-shown');
            }, 1010);
        }
    });
}

function otherProductsHover(){
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
}

function clearInput(){
    clearInputBtn.addEventListener('click', () => {
        inputValue.value = '';
    });
}
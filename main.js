window.onload = () => {

//Selected menu item -- START
let selected = 0;
for (var i = 0; i < document.links.length; i++) {
    if (document.links[i].href === document.URL) {
        selected = i;
    }
}
document.links[selected].classList.add('selected');
//Selected menu item -- END

//Menu item container width -- START
const root = document.documentElement;

const menuItemsContainerWidth = document.querySelector('.js-menu-items-container').clientWidth;
const listContainer = document.querySelector('.js-list-container');

console.log(document.querySelector('.js-menu-items-container').clientWidth);
root.style.setProperty('--menu-items-container', `${menuItemsContainerWidth}px`);
// listContainer.classList.add('loaded');

const mediaQuery = window.matchMedia('(max-width: 1158px)');

//Recalculate menuItemsContainerWidth variable when coming from less than desktop resolution
mediaQuery.addEventListener('change', e => {
if (!e.matches) {
    root.style.setProperty('--menu-items-container', `${menuItemsContainerWidth}px`);
}
})

//Menu item container width -- END


//Hamburger -- START
const hamburgerBtn = document.querySelector('.js-hamburger');
const hamburgerCloseBtn = document.querySelector('.js-hamburger-close');
const menuContainer = document.querySelector('.js-menu-container');
const page = document.querySelector('.js-page');

hamburgerBtn.addEventListener('click', ()=>{
    menuContainer.classList.add('open');
    page.addEventListener('click', ()=>{
        menuContainer.classList.remove('open');
    })
})
hamburgerCloseBtn.addEventListener('click', ()=>{
    menuContainer.classList.remove('open');
    page.removeEventListener('click', ()=>{
        menuContainer.classList.remove('open');
    })
})
//Hamburger -- END

}


//I needed to set the variable before onload because the header menu was jumping on every page load
//I need to set the same variable again in onload because sometimes the script runs before css and then menu itemsContainerWidth has wrong value
const root = document.documentElement;
const menuItemsContainerWidth = document.querySelector('.js-menu-items-container').clientWidth;
root.style.setProperty('--menu-items-container', `${menuItemsContainerWidth}px`);
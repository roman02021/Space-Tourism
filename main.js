window.onload = () => {

//Selected menu item -- START
let selected = 0;
// for (var i = 0; i < document.links.length; i++) {
    
//     if (document.links[i].href === document.URL) {
//         selected = i;
//     }
    
// }
const menuLinks = document.querySelector(".menu__list").querySelectorAll("a");
for (var i = 0; i < menuLinks.length; i++) {
    if(document.location.pathname === '/'){
        selected = 0;
        console.log("haha");
        break;
    }
    else if (menuLinks[i].href === document.URL) {
        selected = i;
        break;
    }
    
}
menuLinks[selected].classList.add('selected');
//Selected menu item -- END

//Menu item container width -- START
const root = document.documentElement;

let menuItemsContainerWidth = document.querySelector('.js-menu-items-container').clientWidth;
const listContainer = document.querySelector('.js-list-container');

console.log(document.querySelector('.js-menu-items-container').clientWidth);
root.style.setProperty('--menu-items-container', `${menuItemsContainerWidth}px`);
// listContainer.classList.add('loaded');

const mediaQuery = window.matchMedia('(max-width: 1158px)');

//Recalculate menuItemsContainerWidth variable when coming from less than desktop resolution
mediaQuery.addEventListener('change', e => {
if (!e.matches) {
    menuItemsContainerWidth = document.querySelector('.js-menu-items-container').clientWidth;
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



function switchTab(tabId, containers) {

    containers.forEach(container => {
        for(let imageElement of container.children){
            if(imageElement.dataset.tabId == tabId){
                imageElement.classList.add('active');
            }
            else {
                imageElement.classList.remove('active');
            }
        }
    })
}

//Destination -- START



const destinationTabs = document.querySelectorAll('.js-tab');
const imageContainer = document.querySelector('.js-destination-image-container');
const tabsContainer = document.querySelector('.js-destination-tabs-container');
const infoContainer = document.querySelector('.js-destination-info-container');

destinationTabs.forEach((tab)=>{
    // console.log(tab.dataset.tabId);
    tab.addEventListener('click', (tab) => switchTab(tab.target.dataset.tabId, [imageContainer, tabsContainer, infoContainer]));
})

//Destination -- END

//Crew -- START

const crewTabs = document.querySelectorAll('.js-crew-tab');
const crewPhotoContainer = document.querySelector('.js-crew-photo-container');
const crewTabsContainer = document.querySelector('.js-crew-tabs-container');
const crewInfoContainer = document.querySelector('.js-crew-info-container');

crewTabs.forEach((tab)=>{
    // console.log(tab.dataset.tabId);
    tab.addEventListener('click', (tab) => switchTab(tab.target.dataset.tabId, [crewPhotoContainer, crewTabsContainer, crewInfoContainer]));
})

//Crew -- END

//Technology -- START

const technologyTabs = document.querySelectorAll('.js-technology-tab');
const technologyImageContainer = document.querySelector('.js-technology-image-container');
const technologyTabsContainer = document.querySelector('.js-technology-tabs-container');
const technologyInfoContainer = document.querySelector('.js-technology-info-container');

technologyTabs.forEach((tab)=>{
    // console.log(tab.dataset.tabId);
    tab.addEventListener('click', (tab) => switchTab(tab.target.dataset.tabId, [technologyImageContainer, technologyTabsContainer, technologyInfoContainer]));
})

//Technology -- END
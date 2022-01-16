function switchTab(tabId) {
    const imageContainer = document.querySelector('.js-destination-image-container');
    const tabsContainer = document.querySelector('.js-destination-tabs-container');
    const infoContainer = document.querySelector('.js-destination-info-container');

    for(let imageElement of imageContainer.children){
        if(imageElement.dataset.tabId == tabId){
            imageElement.classList.add('active');
        }
        else {
            imageElement.classList.remove('active');
        }
    }
    for(let tabElement of tabsContainer.children){
        if(tabElement.dataset.tabId == tabId){
            tabElement.classList.add('active');
        }
        else {
            tabElement.classList.remove('active');
        }
    }
    for(let infoElement of infoContainer.children){
        if(infoElement.dataset.tabId == tabId){
            infoElement.classList.add('active');
        }
        else {
            infoElement.classList.remove('active');
        }
    }

}

const tabs = document.querySelectorAll('.js-tab');

tabs.forEach((tab)=>{
    // console.log(tab.dataset.tabId);
    tab.addEventListener('click', (tab) => switchTab(tab.target.dataset.tabId));
})
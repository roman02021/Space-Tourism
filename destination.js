async function buildDestinationPage() {
    const data = await (await fetch('/data.json')).json();
    const destinationData = data.destinations;

    const imageContainer = document.querySelector('.js-destination-image-container');
    const tabsContainer = document.querySelector('.js-destination-tabs-container');
    const infoContainer = document.querySelector('.js-destination-info-container');

    const domParser = new DOMParser();

    destinationData.forEach(destination => {
        
        const imageContainerHtmlString = `<picture>
        <source srcset="${destination.images.webp}" type="image/webp">
        <source srcset="${destination.images.png}" type="image/png"> 
        <img src="${destination.images.webp}" alt="${destination.name}" id="moon" class="destination-tabs__image">
        </picture>`;

        const imageContainerNode = domParser.parseFromString(imageContainerHtmlString, 'text/html').body.firstElementChild;
        imageContainer.appendChild(imageContainerNode);
    })
    
}
buildDestinationPage();


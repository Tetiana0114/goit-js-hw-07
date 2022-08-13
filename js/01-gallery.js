import { galleryItems } from './gallery-items.js';

const galleryEl = document.querySelector(".gallery");
galleryEl.addEventListener("click", getImgOriginal);

const imgElements = galleryItems
  .map(({ preview, original, description }) => 
    `<div class="gallery__item">
    <a class="gallery__link" href="${original}">
    <img class="gallery__image" src= "${preview}" data-source="${original}" alt= "${description}"/>
    </a>
    </div>`
  ).join('');

galleryEl.insertAdjacentHTML("beforeend", imgElements);
// console.log(galleryItems);

function getImgOriginal(event) {
    event.preventDefault();
    if (event.target.nodeName !== "IMG") {
        return;
    }
    openImgModalWindow.element().querySelector("img").src = event.target.dataset.source;
    openImgModalWindow.show();
    // console.log(event.target.nodeName);
    // console.log(event.target.dataset.source);
    console.log(openImgModalWindow);
}

const openImgModalWindow = basicLightbox.create(`<img src="" width="800" height="600"/>`, {
    onShow: () => {window.addEventListener("keydown", closeModalWindow)},
    onClose: () => {window.removeEventListener("keydown", closeModalWindow)},
})
    
function closeModalWindow(event) {
    if (event.code === 'Escape') {
        openImgModalWindow.close();
        // console.log(event);
    }
}
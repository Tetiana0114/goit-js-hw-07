import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryEl = document.querySelector(".gallery");
const imgEl = document.querySelectorAll("img");
galleryEl.addEventListener("click", getImgOriginal);

const imgElements = galleryItems
  .map(({ original, preview, description }) => 
    `<div class="gallery__item">
    <a class="gallery__link" href="${original}">
    <img class="gallery__image" src= "${preview}" data-source="${original}" alt= "${description}"/>
    </a>
    </div>`
  ).join('');

galleryEl.insertAdjacentHTML("beforeend", imgElements);
// console.log(galleryEl);
// console.log(galleryItems);

function getImgOriginal(event) {
    event.preventDefault();
    if (event.target.nodeName !== "IMG") {
        return;
    } else {
        imgEl.src = event.target.dataset.source;
        // console.log(imgEl.src);

        const openModalImg = basicLightbox.create(`<img src="${imgEl.src}" width="800" height="600"/>`);
        openModalImg.show();
        console.log(openModalImg);
    }
}

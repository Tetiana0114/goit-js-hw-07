import { galleryItems } from './gallery-items.js';
// Change code below this line
// Task 1
const galleryEl = document.querySelector(".gallery");
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
console.log(galleryItems);

// Task 2
galleryEl.addEventListener("click", getImgOriginal);

function getImgOriginal(event) {
    event.preventDefault();
    if (event.target.nodeName !== "IMG") {
        return;
    } else {
        const imgTag = document.querySelectorAll("img");
        imgTag.src = event.target.dataset.source;
        // console.log(imgTag.src);
    }
}

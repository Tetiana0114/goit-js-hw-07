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

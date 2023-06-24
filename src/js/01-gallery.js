import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

import { galleryItems } from './gallery-items';
// Change code below this line

const galleryRef = document.querySelector('.gallery');

const galleryItemsNew = createGalleryItems(galleryItems);

galleryRef.insertAdjacentHTML('beforeend', galleryItemsNew);

function createGalleryItems(items) {
  return items
    .map(({ preview, original, description }) => {
      return `<li class= "gallery__item"><a class= "gallery__link" href = "${original}">
      <img
      class="gallery__image"
      src="${preview}"
    alt= "${description}"/></a></li>`;
    })
    .join('');
}
galleryRef.style.listStyle = 'none';
const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionPosition: 'bottom',
  captionDelay: 250,
});
console.log(galleryItems);

import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const imagesContainer = document.querySelector(".gallery");
const cardsMarkup = createImagesCardsMarkup(galleryItems);

imagesContainer.insertAdjacentHTML('afterbegin', cardsMarkup);



function createImagesCardsMarkup(images) {
  return galleryItems.map(({preview, original, description}) => {
    return `
    <div class="gallery__item">
      <a class="gallery__link" href="${original}">
        <img
          class="gallery__image"
          src="${preview}"
          alt="${description}"
        />
      </a>
    </div>
`
  }).join('')
}

const lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250,
    // navText:	['←','→'],
});

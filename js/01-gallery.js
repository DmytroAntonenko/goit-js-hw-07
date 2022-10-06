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
      <a class="gallery__link" href="${preview}">
        <img
          class="gallery__image"
          src="${preview}"
          data-source="${original}"
          alt="${description}"
        />
      </a>
    </div>
`
  }).join('')

}

imagesContainer.addEventListener('click', onImagesContainerClick);

function onImagesContainerClick(event) {
  event.preventDefault();
  if (!event.target.classList.contains('gallery__image')) {
            return;
  }
  const instance = basicLightbox.create(`
    <img src="${event.target.dataset.source}">
  `);

  instance.show();
  window.addEventListener('keydown', onEscPress)

  function onEscPress(event) {
        
    if (event.code === 'Escape') {
      instance.close();
      window.removeEventListener('keydown', onEscPress)
      }  
  }
}

// const instance = basicLightbox.create(`
//     <img src="${event.target.dataset.source}">
//   `,
//   {
//     onShow: () => window.addEventListener('keydown', onEscPress),
//     onClose: () => window.removeEventListener('keydown', onEscPress),
//   },
//   )
//   instance.show();

//   function onEscPress(event) {
        
//     if (event.code === 'Escape') {
//       instance.close();
//       }  
//   }
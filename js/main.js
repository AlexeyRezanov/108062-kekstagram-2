import {containerPictures, renderPhotos} from './thumbnails.js';
import {openBigPicture} from './big-pictures.js';
import {openUploadModal, setUploadFormSubmit, closeImgEditor} from './upload-img-form.js';
import './api.js';

containerPictures.addEventListener('click', (evt) => {
  const currentPicture = evt.target.closest('.picture');

  if (currentPicture) {
    evt.preventDefault();
    openBigPicture(currentPicture.dataset.pictureId);
  }
});

fetch('https://31.javascript.htmlacademy.pro/kekstagram/data')
  .then((response) => response.json())
  .then((photos) => {
    renderPhotos(photos);
  })

openUploadModal();
setUploadFormSubmit(closeImgEditor);

'use strict';
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');

function handelOpenClose() {
  modal.classList.toggle('hidden');
  overlay.classList.toggle('hidden');
}

for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener('click', handelOpenClose);

btnCloseModal.addEventListener('click', handelOpenClose);
overlay.addEventListener('click', handelOpenClose);

document.addEventListener('keydown', e => {
  if (e.key === 'Escape' && !modal.classList.contains('hidden'))
    handelOpenClose();
});

// function handleOpenModal() {
//   modal.classList.remove('hidden');
//   overlay.classList.remove('hidden');
// }

// function handleCloseModal() {
//   modal.classList.add('hidden');
//   overlay.classList.add('hidden');
// }


'use strict';
const model=document.querySelector('.modal');
const overlay=document.querySelector('.overlay');
const btnCloseModel=document.querySelector('.close-modal');
//when multiple elements with same selector below method returen a list
const btnshowModel=document.querySelectorAll('.show-modal');

const openModal = function () {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
  };
  
  const closeModal = function () {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
  };

//iterate through list in line no 6 and add evenet to each selector
for(let i=0;i<btnshowModel.length;i++)
{
    btnshowModel[i].addEventListener('click', openModal);
}
 document.addEventListener('keydown', function (e) {
  // console.log(e.key);

  if (e.key === 'a' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});
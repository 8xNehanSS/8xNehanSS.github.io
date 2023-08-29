const boxContainer = document.querySelector('.box-container');
const boxes = document.querySelectorAll('.box');

let boxIndex = 0;

boxes.forEach((box, index) => {
  box.addEventListener('click', () => {
    boxIndex = index;
    updateScrollPosition();
  });
});

function updateScrollPosition() {
  const boxWidth = boxes[0].offsetWidth + parseInt(getComputedStyle(boxes[0]).marginRight);
  boxContainer.scrollLeft = boxIndex * boxWidth;
}

updateScrollPosition();

const content = document.querySelector('credits');

function scrolldownslow() {
  content.scrollIntoView({ behavior: 'smooth' });
}
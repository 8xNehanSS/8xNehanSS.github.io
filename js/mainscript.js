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

const name = "8xNehanSS..";

function typeText(element, text, speed) {
  let index = 0;

  function addCharacter() {
      if (index < text.length) {
          element.innerHTML += text.charAt(index);
          index++;
          setTimeout(addCharacter, speed);
      }
  }

  addCharacter();
}

const targetElement = document.getElementById("name"); // Replace with the ID of your target element
const textToType = "8xNehanSS.."; // Replace with your desired text
const typingSpeed = 200;

window.addEventListener('load', function () {

  typeText(targetElement, textToType, typingSpeed);

  setTimeout(function () {
      document.querySelector('.splash').style.display = 'none';
      document.querySelector('#heading').style.display = 'flex';
  }, 3000);
});
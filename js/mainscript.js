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
  windowSize();

  typeText(targetElement, textToType, typingSpeed);

  setTimeout(function () {
      document.querySelector('.splash').style.display = 'none';
      document.querySelector('#heading').style.display = 'flex';
  }, 3000);
});

function windowSize() {
  var w = window.innerWidth;
  var h = window.innerHeight;
  if(w<750) {
    const targetElement = document.getElementById("nameheading");
    const targetElement1 = document.getElementById("content1");
    const targetElement2 = document.getElementById("line1");
    const targetElement3 = document.getElementById("line2");
    const targetElement4 = document.getElementById("whitespace");

    targetElement.innerHTML = "N.S."
    targetElement1.style.display = "block"
    targetElement2.style.padding = "0px 5px 0px";
    targetElement3.style.padding = "30px 5px 0px";
    targetElement2.style.width = "80%";
    targetElement4.style.padding = "100px 0px 0px";
  } else {
    const targetElement = document.getElementById("nameheading");
    const targetElement1 = document.getElementById("content1");
    const targetElement2 = document.getElementById("line1");
    const targetElement3 = document.getElementById("line2");
    const targetElement4 = document.getElementById("whitespace");

    targetElement.innerHTML = "Nehan Sudasinghe"
    targetElement1.style.display = "flex"
    targetElement2.style.padding = "0px 5px 0px";
    targetElement2.style.width = "40%";
    targetElement4.style.padding = "100px 0px 0px";
  }
}

window.addEventListener('resize', windowSize);
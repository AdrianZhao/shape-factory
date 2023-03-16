'use strict';
/*
  OOP JavaScript
  Yuhan Zhao
*/

class DivBox {
  #shape;
  #color;
  constructor(shape, color) {
    this.#shape = shape;
    this.#color = color;
  }
  set shape(shape) { this.#shape = shape; }
  set color(color) { this.#color = color; }
  get shape() { return this.#shape; } 
  get color() { return this.#color; }
  getInfo() {
    return `${this.#shape} ${this.#color}`;
  }
}

const shape = document.querySelector('#shape');
const color = document.querySelector('#color');
const message = document.querySelector('.message');
const button = document.querySelector('button');
const generate = document.querySelector('.generate');

function setShape(div) {
  let temp = div.shape;
  if (temp == 'Circle') {
    div.style.borderRadius = '50%';
  } else {
    div.style.borderRadius = '5px';
  }
}
function setColor(div) {
  let temp = div.color;
  if (temp == 'Blue') {
    div.style.backgroundColor = '#09f';
  } else if (temp == 'Green') {
    div.style.backgroundColor = '#9f0';
  } else if (temp == 'Orange') {
    div.style.backgroundColor = '#f90';
  } else if (temp == 'Pink') {
    div.style.backgroundColor = '#f09';
  } else {
    div.style.backgroundColor = '#90f';
  }
}
function addDiv() {
  const divs = document.createElement("div");
  divs.classList.add("DivBox");
  divs.id = number;
  divs.shape = shape.value; 
  divs.color = color.value; 
  // divs.value = shape.value + ' ' + color.value;
  setShape(divs);
  setColor(divs);
  generate.appendChild(divs); 
  divs.addEventListener('click', () => {
    message.innerText = 'Unit ' + divs.id + ' ' + divs.shape + ' ' + divs.color;
  })
}
let number = 0;
button.addEventListener('click', () => {
  if(number < 20) {
    number++;
    addDiv();
  } else {
    message.innerText = `The Box is Full!`;
  }
})
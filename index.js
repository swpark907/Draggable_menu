'use strict'
const toggle = document.querySelector('.toggle');
const nav = document.querySelector('.nav');
const draggable = document.querySelector('.draggable')
const plusIcon = document.querySelector('.fa-plus');
const cancelIcon = document.querySelector('.fa-times');
const menu = document.querySelector('.menu');

let mouseX = 0;
let mouseY = 0;

nav.addEventListener('dragstart', e => {
  mouseX = e.offsetX;
  mouseY = e.offsetY;
})

nav.addEventListener('drag', e => {
  if(e.target.className.includes('nav')){
    let x =   e.clientX - mouseX;
    let y =   e.clientY - mouseY;
    draggable.style.top = `${y}px`;
    draggable.style.left = `${x}px`;
  }
  e.preventDefault();
})

window.addEventListener('dragover', e => {
  e.preventDefault();
})

toggle.onclick = e => {
  toggle.classList.toggle('active');
  menu.classList.toggle('active');
  nav.classList.toggle('active')
}


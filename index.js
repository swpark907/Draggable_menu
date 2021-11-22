'use strict'
const toggle = document.querySelector('.toggle');
const nav = document.querySelector('.nav');
const draggable = document.querySelector('.draggable')

let mouseX = 0;
let mouseY = 0;

function onMouseMove (e) {
  let x =   e.pageX - mouseX;
  let y =   e.pageY - mouseY;
  draggable.style.top = `${y}px`;
  draggable.style.left = `${x}px`;
}

nav.onmousedown = function(e){
  mouseX = e.pageX - nav.getBoundingClientRect().left;
  mouseY = e.pageY - nav.getBoundingClientRect().top;

  onMouseMove(e)

  document.addEventListener('mousemove', onMouseMove)

  document.onmouseup = function() {
    document.removeEventListener('mousemove', onMouseMove);
    nav.onmouseup = null;
  }
  
}

nav.ondragstart = function() {
  return false;
}

toggle.onclick = e => {
  toggle.classList.toggle('active');
  nav.classList.toggle('active')
  draggable.classList.toggle('active')
}


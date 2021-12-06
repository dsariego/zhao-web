/**
 * Import dependencies from node_modules
 * see commented examples below
 */

import * as bootstrap from 'bootstrap';

import '@fortawesome/fontawesome-free/js/all.js';
// import 'some-node-module';
// import SomeModule from 'some-node-module';

/**
 * Write any other JavaScript below
 */

// Dinamic logic to construction gallery layout
 const gallery = document.querySelector('.gallery');
 const overlay = document.querySelector('.overlay');
 const overlayImage = overlay.querySelector('img');
 const overlayClose = overlay.querySelector('.close');

 function generateHTML([h, v]) {
   return `
   <div class="photo horizontal__${h} vertical__${v}">
     <img src="https://picsum.photos/id/${randomNumber(60)}/800/400/">
     <div class="item__overlay">
       <button class="btn__lite">View </button>
     </div>
   </div>`;
 }

 function randomNumber(limit) {
   return Math.floor(Math.random() * limit) + 1;
 }

 function handleClick(e) {
   console.log(e.currentTarget);
   const src = e.currentTarget.querySelector('img').src;
   overlayImage.src = src;
   overlay.classList.add('open');
 }

 function close() {
   overlay.classList.remove('open');
 }

 const digits = Array.from({length: 50}, () =>
 [randomNumber(4), randomNumber(4)]).concat([[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1]]);
 console.log(digits);

 const html = digits.map(generateHTML).join('');
 console.log(html);

 gallery.innerHTML = html;

 const items = document.querySelectorAll('.photo');

 items.forEach(item => item.addEventListener('click',handleClick));

 overlayClose.addEventListener('click', close);
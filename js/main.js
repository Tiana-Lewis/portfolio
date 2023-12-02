/* Explanation for why I used async instead of defer:
Defer loads scripts once everything else is loaded, Async loads scripts immediately.
As this is a small JavaScript file, async is better to use for load speed, 
however on a site with a larger javascript file, I may opt to use defer instead.
*/
console.log("Hi")

/*console log message*/

const d = new Date();
let year = d.getUTCFullYear();
document.getElementById("fyear").innerHTML = year;

/* footer date */

function myFunction() {
  alert("Oh, hey.");
}
/* alert */

document.getElementById('btn-alert').onmouseover = () => {
  document.getElementById('btn-alert').innerText = 'Woah, wait-';
};

document.getElementById('btn-alert').onmouseleave = () => {
  document.getElementById('btn-alert').innerText = 'What does this do?';
};
/*hover text change for button*/

let count = 1;

const outputElement = document.getElementById('txt-counter');
const incrementButton = document.getElementById('btn-counter');

function updateCounter() {
  outputElement.innerHTML = `Likes: ${count}`;

  if (count % 2 === 0) {
    outputElement.classList.remove('odd');
    outputElement.classList.add('even');
  } else {
    outputElement.classList.remove('even');
    outputElement.classList.add('odd');
  }
}

incrementButton.onclick = () => {
  count++;
  updateCounter();
};

updateCounter();

/*even and odd color change*/

const myList = document.getElementById('numbers');

for (let i = 1; i <= 100; i++) { //i++ uses original value of i but increments instead of i = i + 1 which maintains value of i, does that explanation make sense? my brain hurts
  const listItem = document.createElement('li');
  listItem.textContent = `example ${i}`;

  const label = i % 2 === 0 ? 'even' : 'odd';

  listItem.textContent = `${label} - ${i}`;
  
  listItem.className = i % 2 === 0 ? 'even' : 'odd';

  myList.appendChild(listItem);
}
/*loop de loop*/


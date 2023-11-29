/*document.addEventListener('DOMContentLoaded', function () {*/

const d = new Date();
let year = d.getUTCFullYear();
document.getElementById("fyear").innerHTML = year;

/* footer date */

function myFunction() {
    alert("Oh, hey.");
  }
/* alert */

// 

//function () {
    let count = 1;

    const outputElement = document.getElementById('txt-counter');
    const incrementButton = document.getElementById('btn-counter');

    document.addEventListener('DOMContentLoaded'),function updateCounter() {
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
//};

/*even and odd color change*/



document.getElementById('btn-alert').onmouseover = () => {
    document.getElementById('btn-alert').innerText = 'Woah, wait-';
};

document.getElementById('btn-alert').onmouseleave = () => {
    document.getElementById('btn-alert').innerText = 'What does this do?';
};
/*hover text change for button*/
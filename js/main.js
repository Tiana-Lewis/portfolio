const d = new Date();
let year = d.getUTCFullYear();
document.getElementById("fyear").innerHTML = year;
/* footer date */

function myFunction() {
    alert("Oh, hey.");
  }
/* alert */

let count = 1;
document.getElementById('btn-counter').onclick = () => {
     count = count + 1;
     document.getElementById('txt-counter').innerHTML = `Likes: ${count}`;
}
/*incrementing text and button*/

document.getElementById('btn-alert').onmouseover = () => {
    document.getElementById('btn-alert').innerText = 'Woah, wait-';
};

document.getElementById('btn-alert').onmouseleave = () => {
    document.getElementById('btn-alert').innerText = 'What does this do?';
};
/*hover text change for button*/

if (number % 2 == 0) {
    document.getElementById('txt-counter').classList.add('even');
} else {
    document.getElementById('txt-counter').classList.add('odd');
}

/*even and off color change*/
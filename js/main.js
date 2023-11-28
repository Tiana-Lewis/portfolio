const d = new Date();
let year = d.getUTCFullYear();
document.getElementById("fyear").innerHTML = year;
/* footer date */



let count = 1;
document.getElementById('btn-counter').onclick = () => {
     count = count + 1;
     document.getElementById('txt-counter').innerHTML = `Likes: ${count}`;
}
/*incrementing text and button*/
const d = new Date();
let year = d.getUTCFullYear();
document.getElementById("fyear").innerHTML = year;
/* footer date */

/*function myFunction() {
    document.getElementById("txt-counter").innerHTML = "Thank you! :)";
  }
/* buttons under photos */

let count = 1;
document.getElementById('btn-counter').onclick = () => {
     count = count + 1;
     document.getElementById('txt-counter').innerHTML = 'Likes: 1'
}
/*incrementing text*/
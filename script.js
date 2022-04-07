const btn = document.getElementById("osszeg");
const p = document.getElementById("kiir");
const diak = document.getElementById("diak");
const felnott = document.getElementById("felnott");

let diakjegy = 1000;
let felnottjegy = 2000;

btn.addEventListener("click", vegosszeg);

function vegosszeg() {
    p.innerHTML = ((Number)(diak.value) * diakjegy + (Number)(felnott.value) * felnottjegy) + " FT"
}
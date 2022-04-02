let raw_date = document.getElementById('bh-date').textContent;

console.log(raw_date);

const today = Date();
const bh_date = Date.parse(raw_date);

console.log(today);
console.log(bh_date);

const diffTime = Math.abs(bh_date - today);
const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

console.log(diffTime + " milliseconds");
console.log(diffDays + " days");

document.getElementById('bh-date').innerHTML="salut";

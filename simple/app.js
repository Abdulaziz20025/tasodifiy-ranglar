// Array
// getElementById
// querySelector
// addEventListener
// click
// const
// function name() return
// length
// Math.floor()
// Math.random()
// document
// style
// backgroundColor
// textContent

const simple = [
  "#F6B4DA",
  "#FDE482",
  "#BAD7C8",
  "#E9D5BE",
  "#CE9D8E",
  "#F6D4D4",
  "#906B6B",
  "#EED4B9",
  "#A96E6E",
  "#ECD1E8",
  "#DE3163",
  "#FF7F50",
  "#FFBF00",
  "#DFFF00",
  "#40E0D0",
  "#9FE2BF",
  "#6495ED",
  "#CCCCFF",
  "#e6e6fa",
  "#af9f9c",
  "#f39e7d",
  "#fbab81",
  "#87a7ca",
  "#a3bdd4",
  "#80ca9f",
  "#2B1B17",
  "#000000",
  "#FFFFFF"
];

const output = document.querySelector('.output');
const btn = document.getElementById('btn');
  

btn.addEventListener('click', function () {


  simpleColor = simple[randomSimple()];

  
  document.body.style.backgroundColor = simpleColor;
  output.textContent = simpleColor;
  

  console.log(output);


})
function randomSimple() {
  return Math.floor(Math.random() * simple.length);
}
const timeValue = document.querySelector(".time");
const startButton = document.querySelector(".start");
const stopButton = document.querySelector(".stop");
const gameContainer = document.querySelector(".game-container");
const result = document.querySelector(".result");
const controls = document.querySelector(".controls-container");

let cards;
let interval;
let firstCard = false;
let secondCard = false;


// Items array
const items = [
  {name:"dubai" , image: "./img/dubai.jpg"},
  {name:"izland" , image: "./img/izland.jpg"},
  {name:"newyork" , image: "./img/newyork.jpg"},
  {name:"santorini" , image: "./img/santorini.jpg"},
  {name:"singapore" , image: "./img/singapore.jpg"},
];

//Initial time
let seconds = 0,
minutes = 0;

//Initial moves and win count
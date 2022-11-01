//minimize menu


let status0; //change
function openMenu() { //change
  let initialButtonTxt = "expand menu"; //change
  let buttonTxtOnClick = "minimize menu"; //change
  
    $('.remote>button').toggleClass('show');

  if (status0) {
    status0 = false;
    $('#minimize>button').text(initialButtonTxt);
  } else {
    status0 = true;
    $('#minimize>button').text(buttonTxtOnClick);
  }
}

//make it big
let status1; //change
function makeItBigger() { //change
  let dotClass = "bigger" //change
  let buttonId = "#makeItBigger"; //change
  let initialButtonTxt = "make it bigger"; //change
  let buttonTxtOnClick = "make it smaller"; //change

  $('.dot').toggleClass(dotClass);

  if (status1) {
    status1 = false;
    $(buttonId).text(initialButtonTxt);
  } else {
    status1 = true;
    $(buttonId).text(buttonTxtOnClick);
  }
}

//make it round
let status2; //change
function makeItRound() { //change
  let dotClass = "round" //change
  let buttonId = "#makeItRound"; //change
  let initialButtonTxt = "make it round"; //change
  let buttonTxtOnClick = "give some corners"; //change

  $('.dot, .dot>.background').toggleClass(dotClass);

  if (status2) {
    status2 = false;
    $(buttonId).text(initialButtonTxt);
  } else {
    status2 = true;
    $(buttonId).text(buttonTxtOnClick);
  }
}

//rainbow!
let status3; //change
function rainbow() { //change
  let dotClass = "rainbow" //change
  let buttonId = "#rainbow"; //change
  let initialButtonTxt = "rainbow!"; //change
  let buttonTxtOnClick = "no rainbow :("; //change

  $('.dot>.background').toggleClass(dotClass);

  if (status3) {
    status3 = false;
    $(buttonId).text(initialButtonTxt);
  } else {
    status3 = true;
    $(buttonId).text(buttonTxtOnClick);
  }
}

//add satellites
let status4; //change
function dragonball() { //change
  let buttonId = "#dragonball"; //change
  let initialButtonTxt = "add satellites"; //change
  let buttonTxtOnClick = "destroy satellites"; //change

  $('.circle-orbit-container').toggleClass('satellites');

  if (status4) {
    status4 = false;
    $(buttonId).text(initialButtonTxt);
  } else {
    status4 = true;
    $(buttonId).text(buttonTxtOnClick);
  }
}

//make it draggable
let status5; //change
function makeItDraggable() { //change
  let dotClass = "draggable" //change
  let buttonId = "#draggable"; //change
  let initialButtonTxt = "make it draggable"; //change
  let buttonTxtOnClick = "put it back"; //change

  $('.dot').toggleClass(dotClass);

  if (status5) {
    status5 = false;
    $(buttonId).text(initialButtonTxt);
    $('.dot').draggable({
      disabled: true
    });
    $('.dot').css({
      "top": "50vh",
      "left": "50vw"
    });
  } else {
    status5 = true;
    $(buttonId).text(buttonTxtOnClick);
    $('.dot').draggable({
      disabled: false
    });
  }
}

// change background color
let status6; //change
let color = "#333";
function changeBackground() { //change
  let dotClass = "darkmode" //change
  let buttonId = "#darkbc"; //change
  let initialButtonTxt = "dark mode"; //change
  let buttonTxtOnClick = "light mode"; //change

  $('.remote>button, #minimize>button, .dot').toggleClass(dotClass);

  $('body').toggleClass('dark');

  if(status8) {
    $('.dot').toggleClass("blurrylight");
    $('.dot').toggleClass("blurrydark");
  }

  if (status6) {
    status6 = false;
    $(buttonId).text(initialButtonTxt);
    color="#333";
  } else {
    status6 = true;
    $(buttonId).text(buttonTxtOnClick);
    color="white";
  }
}

//add a dot
function duplicateDot() { //change  
  let dotClone = $('#originalDot').clone();

  $('body').append(dotClone);
  dotClone.css({
    "left": Math.random() * window.innerWidth,
    "top": Math.random() * window.innerHeight
  })
  $('#removeDots').css('display', 'block');
}

//remove all dots
function removeDots() { //change  
  let dotClone = $('#originalDot').clone();
  $('.dot').remove()
  $('body').append(dotClone);
  $('#removeDots').css('display', 'none');
}

//make it rain
let c, ctx, rain;


class Rain {
  constructor(x, y, l, v) {
    this.x = x;
    this.y = y;
    this.vy = v;
    this.l = l;
  }
  show() {
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.moveTo(this.x, this.y);
    ctx.lineTo(this.x, this.y + this.l);
    ctx.stroke();
  }
  fall() {
    this.y += this.vy;

    if (this.y > c.height) {
      this.x = Math.floor(Math.random() * c.width) + 5;
      this.y = Math.floor(Math.random() * 100) - 100;
      this.l = Math.floor(Math.random() * 30) + 1;
      this.v = Math.floor(Math.random() * 12) + 4;
    }
  }
}

function loop() {

  ctx.clearRect(0, 0, c.width, c.height);
  for (var i = 0; i < vRain.length; i++) {
    vRain[i].show();
    vRain[i].fall();
  }
}

function setup() {
  c = document.getElementById("canvas");
  ctx = c.getContext("2d");
  vRain = []
  for (var i = 0; i < 60; i++) {
    vRain[i] = new Rain(
      Math.floor(Math.random() * c.width) + 5,
      Math.floor(Math.random() * 100) - 100,
      Math.floor(Math.random() * 30) + 1,
      Math.floor(Math.random() * 12) + 4
    );
  }

  rain = new Rain(10, 10, 20, 6);

  setInterval(loop, 10);
}

setup();

let status7; //change
function makeItRain() { //change
  let dotClass = "raining" //change
  let buttonId = "#makeItRain"; //change
  let initialButtonTxt = "make it rain"; //change
  let buttonTxtOnClick = "stop rain!!"; //change

  $('canvas').toggleClass(dotClass);
  $('.umbrella').toggleClass("openUmbrella");

  if (status7) {
    status7 = false;
    $(buttonId).text(initialButtonTxt);
    $('.dot>audio').prop('muted', true);
  } else {
    status7 = true;
    $(buttonId).text(buttonTxtOnClick);
    $('.dot>audio').prop('muted', false);
  }
}

//make it blurry
let status8; //change
function makeItBlurry() { //change
  let buttonId = "#blurry"; //change
  let initialButtonTxt = "make it blurry"; //change
  let buttonTxtOnClick = "make it clear again"; //change
  console.log(status6);
  if(status6) {
    $('.dot').toggleClass("blurrydark");
  } else {
    $('.dot').toggleClass("blurrylight");
  }

  
  if (status8) {
    status8 = false;
    $(buttonId).text(initialButtonTxt);
  } else {
    status8 = true;
    $(buttonId).text(buttonTxtOnClick);
  }
}
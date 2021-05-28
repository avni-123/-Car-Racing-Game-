var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var form, player, game;

var cars, car1, car2, car3, car4;

var carImg, carImg2, carImg3, carImg4, ground, track;

function preload(){

  carImg = loadImage("car1.png");
  carImg2 = loadImage("car2.png");
  carImg3 = loadImage("car3.png");
  carImg4 = loadImage("car4.png");
  ground = loadImage("ground.png");
  track = loadImage("track.jpg");

}

function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){

  if(playerCount === 4){
    game.update(1);
  }
  if(gameState === 1){
    
    game.play();
  }
}

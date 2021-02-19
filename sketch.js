const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine;
var world;

var starImg,fairyImg,bgImg;
var fairy,star;
var fairyVoice;
var starBody;

function preload(){

	starImg = loadImage("star.png");
	fairyImg = loadAnimation("fairyImage1.png","fairyImage2.png");
	bgImg = loadImage("starNight.png");

	fairyVoice = loadSound("JoyMusic.mp3");

}

function setup() {
	createCanvas(800, 750);

    fairyVoice.play();

	fairy = createSprite(130,520,10,10);
	fairy.addAnimation("fairyflying",fairyImg);  
	fairy.scale =0.2;

	star = createSprite(650,30,10,10);
	star.addImage(starImg);
	star.scale = 0.19;
   
	engine = Engine.create();
	world = engine.world;
	Engine.run(engine);

	starBody = Bodies.circle(650,30,5,{restitution: 0.5 , isStatic: true});

	World.add(world,starBody);

	console.log(fairy.x);

}

function draw() {
  background(bgImg)         
  Engine.update(engine);
  keyPressed();
  star.x = starBody.position.x;
  star.y = starBody.position.y;

  if(fairy.x > 480 ){
        Matter.Body.setStatic(starBody,false);
  }

  if(star.y > 455 && starBody.position.y > 455 ){
		Matter.Body.setStatic(starBody,true);
  }

  drawSprites();
}

function keyPressed() {

	if(keyDown("LEFT_ARROW")){
      fairy.x = fairy.x-5;
	}

	if(keyDown("RIGHT_ARROW")){
		fairy.x = fairy.x+5;
	  }

	if (keyDown("DOWN_ARROW")) {
		Matter.Body.setStatic(starBody,false); 
	}

}


  
 
var monkey , monkey_running;
var banana ,bananaImage,bananaGroup; 
var obstacleGroup ,obstacle, obstacleImage;
var score,survivalTime;
var ground;

function preload(){
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
  
}



function setup() {
  
  createCanvas(670,400);
  
  monkey = createSprite(80,315,20,20);
  monkey.addAnimation("moving",monkey_running);
  monkey.scale = 0.1;
  
  ground=createSprite(0,400,1500,10);
  ground.velocityX=-4;
  ground.x = ground.width/2;
  console.log(ground.x);
  
  bananaGroup   =createGroup();
  obstacleGroup =createGroup(); 
  
  score=0
  survivalTime=0;
}


function draw() {
  
background("green");
text("Score: "+ score, 500,50);
  
   if(keyDown("space")&&monkey.y >= 350){
    monkey.velocityY=-10
    }
  
monkey.velocityY = monkey.velocityY + 0.3
monkey.collide(ground);  
 
ground.velocityX = -7;
ground.x = ground.width/2;
  
  if(World.frameCount%200===0){
  fruits()
  }
  
  if(World.frameCount%300===0){
  stones()
  }
  
  if(monkey.isTouching(bananaGroup)){
  bananaGroup.destroyEach();
  score=score+1
  }

fill("black");
textSize(15);
survivalTime=Math.ceil(frameCount/frameRate());
text("Survival Time: "+ survivalTime,110,50); 
  
drawSprites();  
}



function fruits(){
banana=createSprite(670,Math.round(random(170,230)),10,10);
banana.addImage(bananaImage);
banana.scale=0.1
banana.velocityX=-3;
bananaGroup.add(banana);
banana.lifetime = 200;
}



function stones(){
obstacle=createSprite(670,380,10,10);
obstacle.addImage(obstaceImage);
obstacle.velocityX=-4
obstacle.scale=0.2
obstacleGroup.add(obstacle);
obstacle.lifetime = 150;
}  
  





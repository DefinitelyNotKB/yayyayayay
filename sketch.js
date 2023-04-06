var bg,back
var doggo, doggoImage
var edges

function preload(){

  doggoImage=loadAnimation("gs1.png","gs2.png","gs3.png","gs4.png");
  bg=loadImage("park_2.jpeg")

}


function setup(){

createCanvas(1200,500)
back=createSprite(500,250)
back.addImage(bg)
back.scale=1.3
doggo=createSprite(140,400,20,20)
doggo.addAnimation("running",doggoImage)
doggo.scale=0.8
edges=createEdgeSprites();

}

function draw(){
console.log(doggo.y)
background(0)
back.velocityX=-2
if (back.x<0){

  back.x=600
}

if (keyIsDown(UP_ARROW)&&doggo.y>=340)
{
 

  doggo.velocityY=-10
}
doggo.velocityY=doggo.velocityY+0.8
doggo.collide(edges)

drawSprites()
}
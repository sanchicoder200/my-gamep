var player;
var box1, box2, box3, box4, box5, box6;
var chance=3;
var guess;
var  b1, b2, b3,  b4,  b5,  b6;
var reset;
var question1, question2, question3;
var gameState= "play";
var count=0;
function preload()
{
	box1img= loadImage("box.png");
	kidImg=loadImage("kid.png"); 
    bgImg= loadImage("bg.jpg");
	reImg=loadImage("re.png");
	backImg=loadImage("backg.jpg");
	b1Img=loadImage("cat.png");
	congratsImg=loadImage("congrats.png");
	b2Img=loadImage("try.png");
	ppImg=loadImage("pp.png");
	
}

function setup() {
	
	createCanvas(displayWidth,displayHeight);

	question1=createElement('H2')
    player= createSprite(100, 100, 50, 50)
	player.shapeColor="yellow";
	player.addImage(kidImg);
	player.scale=(0.2);

   
	b1= createSprite(displayWidth/2, 100, 100, 100)
	b1.shapeColor="brown";
	b1.addImage(b1Img)
	b1.visible=false;
	

	b4= createSprite(1000, 400,100, 100)
	b4.shapeColor="green";
	b4.addImage(b1Img)
	b4.visible=false;

	b6= createSprite(1000, 700,100, 100)
	b6.shapeColor="white";
	b6.addImage(b1Img)
	b6.visible=false;

	b2= createSprite(1000, 100, 100, 100)
	b2.shapeColor="red";
	b2.addImage(b2Img)
	b2.visible=false;

	b3= createSprite(displayWidth/2, 400,100, 100)
	b3.shapeColor="pink";
	b3.addImage(b2Img)
	b3.visible=false;

	b5= createSprite(displayWidth/2, 700,100, 100)
	b5.shapeColor="blue";
	b5.addImage(b2Img)
	b5.visible=false;





	box1= createSprite(displayWidth/2, 100, 100, 100)
	box1.shapeColor="brown";
	box1.addImage(box1img)
	box1.visible=true;
	//box1.debug=true;

	box2= createSprite(1000, 100, 100, 100)
	box2.shapeColor="red";
	box2.addImage(box1img)

	box3= createSprite(displayWidth/2, 400,100, 100)
	box3.shapeColor="pink";
	box3.addImage(box1img)


	box4= createSprite(1000, 400,100, 100)
	box4.shapeColor="green";
	box4.addImage(box1img)

	
	box5= createSprite(displayWidth/2, 700,100, 100)
	box5.shapeColor="blue";
	box5.addImage(box1img)


	box6= createSprite(1000, 700,100, 100)
	box6.shapeColor="white";
	box6.addImage(box1img)

	pp= createSprite(1000, 100, 100, 100)
	pp.visible=false;
    pp.addImage(ppImg)

congrats= createSprite(displayWidth/2-200, displayHeight/2)
congrats.visible=false;
congrats.addImage(congratsImg);


	reset= createSprite(displayWidth/2, displayHeight/2)
	reset.visible=false;
	reset.addImage(reImg);

edges= createEdgeSprites();
}


function draw() {
  background(bgImg);
fill("white");
textSize(20)
text("You have only 3 chances to win the game!", 100, 50);


text("CHANCE: "+chance, 950, 30)

if (keyDown(UP_ARROW)){
	player.y-=10;
}
if (keyDown(DOWN_ARROW)){
	player.y+=10;
}
if (keyDown(LEFT_ARROW)){
	player.x-=10;
}
if (keyDown(RIGHT_ARROW)){
	player.x+=20;
}


if (gameState=="quiz"){
	question();
}
if(chance==0){
	fill("pink");
	textSize(100)
	text("You lost the game!", 300, 200);
	player.velocityX=0;
	player.velocityY=0;
    reset.visible=true;
	b1.destroy()
	b2.destroy()
	b3.destroy()
	b4.destroy()
	b5.destroy()
	b6.destroy()
}
if (player.isTouching(box1)){
	b1.visible=true;
	box1.destroy()
}
if (player.isTouching(box4)){
	b4.visible=true;
	box4.destroy()
}
if (player.isTouching(box6)){
	b6.visible=true;
	box6.destroy()
}

	console.log(gameState)
	
	
if (player.isTouching(b1)|| player.isTouching(b4)|| player.isTouching(b6)){
	gameState="win"
}
	if(gameState=="win"){
		background.addImage(backImg);
		congrats.visible=true;
		pp.visible=true;
		b1.destroy()
		b2.destroy()
		b3.destroy()
		b4.destroy()
		b5.destroy()
		b6.destroy()
	}




if (player.isTouching(box2)){
	chance-=1;
	box2.destroy()
	b2.visible=true;

}
if (player.isTouching(box5)){
    chance-=1;
	box5.destroy()
	b5.visible=true;
}


if (player.isTouching(box3)){
    chance-=1;
	box3.destroy()
	b3.visible=true;
}


  player.collide(edges[0]);
  player.collide(edges[1]);
  player.collide(edges[2]);
  player.collide(edges[3]);
  drawSprites();

}




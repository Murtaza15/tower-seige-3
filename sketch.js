const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var circle1,ground,ground2;
var world, slingshot;
var score=0;

function preload(){
    getBackgroundImg();
}


function setup(){
    var canvas = createCanvas(1200,600);
    rectMode(CENTER);

    engine= Engine.create();
    world= engine.world;

    ground = new Ground(400,400,230,20);

    ground2= new Ground(600,height,1200,20);

    World.add(world,ground);

    box1=new Box(310,370,30,40);

    box2= new Box(340,370,30,40);

    box3= new Box(370,370,30,40);

    box4= new Box(400,370,30,40);

    box5= new Box(430,370,30,40);

    box6= new Box(460,370,30,40);

    box7= new Box(490,370,30,40);

    box8= new Box(340,330,30,40);

    box9= new Box(370,330,30,40);

    box10= new Box(400,330,30,40);

    box11= new Box(430,330,30,40);

    box12= new Box(460,330,30,40);

    box13= new Box(370,290,30,40);

    box14= new Box(400,290,30,40);

    box15= new Box(430,290,30,40);

    box16= new Box(400,250,30,40);

    circle1= new Circle(100,200,20);

    slingshot=new SlingShot(circle1.body,{x:130,y:200});

    Engine.run(engine);
}

function draw(){
    background("blue");
    Engine.update(engine);

    text("SCORE:"+score,750,40);

    circle1.display();
    
    slingshot.display();
   
    box1.display();

    box2.display();

    box3.display();

    box4.display();

    box5.display();

    box6.display();

    box7.display();

    box8.display();

    box9.display();

    box10.display();

    box11.display();

    box12.display();

    box13.display();

    box14.display();

    box15.display();

    box16.display();

    ground.display();

    ground2.display();

    box1.score();
    box2.score();
    box3.score();
    box4.score();
    box5.score();
    box6.score();
    box7.score();
    box8.score();
    box9.score();
    box10.score();
    box11.score();
    box12.score();
    box13.score();
    box14.score();
    box15.score();
    box16.score();

    drawSprites();
}

function keyPressed(){

    if(keyCode=== UP_ARROW){
    Matter.body.applyForce(circle1,circle1.position,{x:55,y:-75});
    }

    else if(keyCode===LEFT_ARROW){
        boxleftSprite.x=boxleftSprite.x-20;
        boxrightSprite.x=boxrightSprite.x-20;
        boxBase.x=boxBase.x-20;
        translation={x:-20,y:0}
        Matter.Body.translate(boxRightBody, translation)
        Matter.Body.translate(boxLeftBody, translation)
        Matter.Body.translate(boxBase,translation)
    }
    else if(keyCode===RIGHT_ARROW){
        boxleftSprite.x=boxleftSprite.x+20;
        boxrightSprite.x=boxrightSprite.x+20;
        boxBase.x=boxBase.x+20;
        translation={x:20,y:0}
        Matter.Body.translate(boxRightBody, translation)
        Matter.Body.translate(boxLeftBody, translation)
        Matter.Body.translate(boxBase,translation) 
    }
}

function mouseDragged(){
    Matter.Body.setPosition(circle1.body,{x:mouseX,y:mouseY})
}

function mouseReleased(){
    slingshot.fly();
}

function keyPressed(){
    if (keyCode==32){
        slingshot.attach(circle1.body);
    }
}

async function getBackgroundImg(){
    var response=await fetch("http://worldclockapi.com/api/json/est/now");
    var responseJSON=await response.json();
    //console.log(responseJSON)
    var dateTime=responseJSON.currentDateTime;
    var hour=dateTime.slice(11,13);
    console.log(hour)
    if(hour>=06&&hour<=19){
        bg="yellow"
    }
    else{
        bg="blue"
    }
}
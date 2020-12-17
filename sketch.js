const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;

var man,umbrella;
var drops=[];

var man,manAnimation,manBody;

var thunderImg1,thunderImg2,thunderImg3,thunderImg4

function preload(){
    manAnimation=loadAnimation("walking_1.png","walking_2.png",
                                "walking_3.png","walking_4.png",
                                "walking_5.png","walking_6.png",
                                "walking_7.png","walking_8.png")

    thunderImg1=loadImage("1.png") 
    thunderImg2=loadImage("2.png")  
    thunderImg3=loadImage("3.png")  
    thunderImg4=loadImage("4.png")                             
}

function setup(){
   createCanvas(500,500);

   engine = Engine.create();
   world = engine.world;

   man=createSprite(250,400)
   man.addAnimation("running",manAnimation)
   man.scale=0.3

   manBody=Bodies.circle(250,330,40,{isStatic:true})
   World.add(world,manBody)
}

function draw(){
    background("black")
    Engine.update(engine);

    //to create drops
    if(frameCount%5===0){
        drops.push(new Drop(random(20,480),-20))
    }
   
    //to display drops
    for(var i=0;i<drops.length;i++){
        drops[i].display()
    }

   //to display thunder
   
   if(frameCount%100===0){
        var thunder=createSprite(random(30,450),50,20,20)
        thunder.scale=0.5
        thunder.lifetime=25;

        var selectImage=Math.round(random(1,4))

        if(selectImage===1){
            thunder.addImage("T",thunderImg1)
        }

        else if(selectImage===2){
            thunder.addImage("T",thunderImg2)
        }

        else if(selectImage===3){
            thunder.addImage("T",thunderImg3)
        }

        else{
            thunder.addImage("T",thunderImg4)
        }
   }

    drawSprites();
}

const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground;
var line1,line2,line3,line4,line5,line6,line7,line8;
var plk1,plk2,plk3,plk4,plk5;
var plk6,plk7,plk8,plk9,plk10;
var plk11,plk12,plk13,plk14;
var plk15,plk16,plk17,plk18;
var particle1;

var divisionHeight=300;

var Plinko=[];
var Particles=[];



function preload() {
 

}

function setup(){
    var canvas = createCanvas(480,550);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);

    line1 = new Divisions(100,530,800,10)
    line2 = new Divisions(5,425,10,200)
    line3 = new Divisions(84,425,10,200)
    line4 = new Divisions(163,425,10,200)
    line5 = new Divisions(242,425,10,200)
    line6 = new Divisions(321,425,10,200)
    line7 = new Divisions(400,425,10,200)
    line8 = new Divisions(475,425,10,200)

    plk1 = new plinko(40,20,40)
    plk2 = new plinko(140,20,40)
    plk3 = new plinko(240,20,40)
    plk4 = new plinko(340,20,40)
    plk5 = new plinko(440,20,40)

    plk6 = new plinko(90,100,40)
    plk7 = new plinko(190,100,40)
    plk8 = new plinko(290,100,40)
    plk9 = new plinko(390,100,40)

    plk10 = new plinko(40,180,40)
    plk11 = new plinko(140,180,40)
    plk12 = new plinko(240,180,40)
    plk13 = new plinko(340,180,40)
    plk14 = new plinko(440,180,40)

    plk15 = new plinko(90,250,40)
    plk16 = new plinko(190,250,40)
    plk17 = new plinko(290,250,40)
    plk18 = new plinko(390,250,40)

    particle1 = new particles(20,20,10)
}

function draw(){
    background(0);
    Engine.update(engine);

    if(frameCount%60===0){
        Particles.push(new particles(random(width/2-10,width/2+10),10,10))
    }
    
    ground.display();
    
    
    line1.display();
    line2.display();
    line3.display();
    line4.display();
    line5.display();
    line6.display();
    line7.display();
    line8.display();

    plk1.display();
    plk2.display();
    plk3.display();
    plk4.display();
    plk5.display();

     plk6.display();
     plk7.display();
     plk8.display();
     plk9.display();

     
     plk10.display();
     plk11.display();
     plk12.display();
     plk13.display();
     plk14.display();

     plk15.display();
     plk16.display();
     plk17.display();
     plk18.display();

    particle1.display();
}


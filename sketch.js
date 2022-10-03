var fundo;
var nave;
var naveI;
var naveY = 0;
var naveG = 0.3;
var naveX = 0;
var naveC;
var naveD;
var naveE;
var pouso;
var pousoI;

function preload(){
    fundo = loadImage("bg.png");
    naveI = loadAnimation("b_thrust_1.png");
    naveC = loadAnimation("b_thrust_1.png","b_thrust_2.png","b_thrust_3.png");
    naveD = loadAnimation("left_thruster_1.png","left_thruster_2.png");
    naveE = loadAnimation("right_thruster_1.png","right_thruster_2.png");
    naveC.looping = false;
    naveD.looping = false;
    naveE.looping = false;
    pousoI = loadImage("lz.png");
}

function setup() {
    createCanvas(650,350);
    pouso = createSprite(530,240);
    pouso.addImage(pousoI);
    pouso.scale = 0.4;
    pouso.debug = false;
    pouso.setCollider("rectangle",0,200,320,100);
    nave = createSprite(50,50);
    nave.addAnimation("normal",naveI);
    nave.scale = 0.1;
    nave.addAnimation("cima",naveC);
    nave.addAnimation("direita",naveD);
    nave.addAnimation("esquerda",naveE);
   
}

function draw() {
    background(fundo);
    //console.log(mouseX);
    //console.log(mouseY);
    fill("#8A2BE2");
    text("VX:"+round(naveX),20,30);
    text("VY:"+round(naveY),20,45);
    drawSprites();
    naveY+=naveG;
    nave.position.y+=naveY;

    nave.position.x+=naveX;
    if(nave.collide(pouso)){
        nave.velocityX = 0;
        nave.velocityY = 0;
        naveX = 0;
        naveY = 0;
        nave.changeAnimation("normal");
        textSize(17);
        text("Parabens! Você ganhou!!",275,150);
    }
}

function keyPressed(){
    if(keyCode===87){
        nave.changeAnimation("cima");
        naveY=-3;
    }
    if(keyCode===65){
        nave.changeAnimation("esquerda");
        naveX-=0.3;
    }
    if(keyCode===68){
        nave.changeAnimation("direita");
        naveX+=0.3;
    }
}
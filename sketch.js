var fundo;
var nave;
var naveI;
var naveY = 0;
var naveG = 0.3;
var naveX = 0;
var naveC;
var naveD;
var naveE;

function preload(){
    fundo = loadImage("bg.png");
    naveI = loadImage("b_thrust_1.png");
}

function setup() {
    createCanvas(650,350);
    nave = createSprite(50,50);
    nave.addImage(naveI);
    nave.scale = 0.1;
}

function draw() {
    background(fundo);
    fill("#8A2BE2");
    text("VX:"+round(naveX),20,30);
    text("VY:"+round(naveY),20,45);
    drawSprites();
    naveY+=naveG;
    nave.position.y+=naveY;
    if(keyDown("w")){
        naveY-=0.5;
    }
    nave.position.x+=naveX;
    if(keyDown("a")){
        naveX-=0.3;
    }
    if(keyDown("d")){
        naveX+=0.3;
    }
}
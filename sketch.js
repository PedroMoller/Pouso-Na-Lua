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
var obstaculo;
var obstaculoI;
var bum;
var combustivel = 100;
var stadoG = "jogando";

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
    obstaculoI = loadImage("obstacle.png");
    bum = loadAnimation("crash2.png","crash3.png");
    bum.looping = false;
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
    nave.addAnimation("bum",bum);
    obstaculo = createSprite(325,200);
    obstaculo.addImage(obstaculoI);
    obstaculo.scale = 0.5;
    obstaculo.debug = false;
    obstaculo.setCollider("rectangle",-50,180,150,300);
}

function draw() {
    background(fundo);
    //console.log(mouseX);
    //console.log(mouseY);
    fill("#8A2BE2");
    text("VX:"+round(naveX),20,30);
    text("VY:"+round(naveY),20,45);
    text("C:"+round(combustivel),20,60);
    drawSprites();
    if(stadoG==="jogando"){
        naveY+=naveG;
        nave.position.y+=naveY;
        nave.position.x+=naveX;
        if(nave.collide(pouso)){
            stadoG = "venceu";
         
    }
        if(nave.collide(obstaculo)){
            stadoG = "perdeu";
    }
    }
    if(stadoG==="venceu"){
        nave.velocityX = 0;
        nave.velocityY = 0;
        naveX = 0;
        naveY = 0;
        nave.changeAnimation("normal");
        textSize(17);
        text("Parabens! Você ganhou!!",275,150);
    }
    if(stadoG==="perdeu"){
        nave.velocityX = 0;
        nave.velocityY = 0;
        naveX = 0;
        naveY = 0;
        nave.changeAnimation("bum");
        text("Sua nave explodiu!",275,150);
    }
}

function keyPressed(){
    if(keyCode===87&&combustivel>0&&stadoG==="jogando"){
        nave.changeAnimation("cima");
        naveY=-3;
        combustivel-=5;
    }
    if(keyCode===65&&combustivel>0&&stadoG==="jogando"){
        nave.changeAnimation("esquerda");
        naveX-=0.3;
        combustivel-=3;
    }
    if(keyCode===68&&combustivel>0&&stadoG==="jogando"){
        nave.changeAnimation("direita");
        naveX+=0.3;
        combustivel-=3;
    }
}
var super_natural_banana_image,super_natural_banana,super_natural_banana_Grp;
var obstacles,obstacles_Grp,obstacle_1,obstacle_2,obstacle_3;
var gorrilas_1,gorrilas_2,gorrilas_3,gorrilla_running;

var background_image,background_bg;
var player,player_running;

var ground,ground_2;
var collected_banana = 0;

function preload() {

    super_natural_banana_image = loadImage("./assets/Banana.png");
    background_image = loadImage("./assets/Background.png");

    gorrilla_running = loadAnimation("./assets/G_1.png","./assets/G_2.png","./assets/G_3.png","./assets/G_4.png","./assets/G_5.png","./assets/G_6.png","./assets/G_7.png","./assets/G_8.png","./assets/G_9.png","./assets/G_10.png","./assets/G_11.png","./assets/G_12.png");
    player_running = loadAnimation("./assets/R_1.png","./assets/R_2.png","./assets/R_3.png","./assets/R_4.png","./assets/R_5.png","./assets/R_7.png","./assets/R_7.png","./assets/R_8.png");
    
    obstacle_1 = loadImage("./assets/S_1.png");
    obstacle_2 = loadImage("./assets/S_2.png");
    obstacle_3 = loadImage("./assets/S_3.png");

    player_steady = loadAnimation("./assets/R_5.png");
    gorrilla_steady = loadAnimation("./assets/G_12.png");

}

function setup() {

    createCanvas(1530,740);

    background_bg = createSprite(0,369,1550,750);
    background_bg.addImage(background_image);
    background_bg.velocityX= -10;

    //Super_Gorrilla
    gorrilla_1 = createSprite(300,630,50,35);
    gorrilla_1.addAnimation("running",gorrilla_running);
    gorrilla_1.addAnimation("dead_gorrilla", gorrilla_steady);
    gorrilla_1.scale = 2;
    
    //Great_Gorrilla
    gorrilla_2 = createSprite(150,610,50,35);
    gorrilla_2.addAnimation("running",gorrilla_running);
    gorrilla_2.addAnimation("dead_gorrilla", gorrilla_steady);
    gorrilla_2.scale = 1.5;

    //Best_Gorrilla
    gorrilla_3 = createSprite(40,620,50,35);
    gorrilla_3.addAnimation("running",gorrilla_running);
    gorrilla_3.addAnimation("dead_gorrilla", gorrilla_steady);
    gorrilla_3.scale = 1;

    //Player
    player = createSprite(500,610,50,35);
    player.addAnimation("running",player_running);
    player.addAnimation("dead",player_steady);

    player.scale = 0.3;
    player.setCollider("circle",0,0,140);

    //Ground
    ground = createSprite(200,740,1800,30)
    ground.visible=false;

    ground_2 = createSprite(200,640,1800,30)
    ground_2.visible=false;

    obstacles_Grp = new Group();
    super_natural_banana_Grp = new Group();

}

function draw() {

    background(background_image);

    if(background_bg.x<0) {

        background_bg.x=background_bg.width/2;

    }

    if(keyDown("space") && player.y>=500) {

        player.velocityY=-20;

    }

    player.velocityY=player.velocityY+0.8;
    
    spawnObstacles()  
    spawnSuperNaturalBananas()

    if(player.isTouching(super_natural_banana_Grp)) {

        super_natural_banana_Grp.destroyEach();
        collected_banana = collected_banana+1;

    }

    gorrilla_1.collide(ground);
    gorrilla_2.collide(ground);
    gorrilla_3.collide(ground);
    player.collide(ground_2);
    
    drawSprites();

    textSize(25);
    fill("red");
    text("Super Natural Bananas Collected : "+ collected_banana,10,50);

    }

function spawnObstacles() {

    if(frameCount%70 === 0) {

        var obstacles = createSprite(1500,610,50,35);
        obstacles.velocityX = -11;
        obstacles.scale=1;

    var rand = Math.round(random(1,3));
    switch (rand) {

        case 1: obstacles.addImage(obstacle_1);
                break;
        case 2: obstacles.addImage(obstacle_2);
                break;
        case 3: obstacles.addImage(obstacle_3);
                break;
        default: break;

    }

    obstacles_Grp.add(obstacles);
    obstacles.lifetime=138;

}

}

function spawnSuperNaturalBananas() {

    if(frameCount%140 === 0) {

        super_natural_banana = createSprite(1500,400,40,40);
        super_natural_banana.addImage(super_natural_banana_image);
        super_natural_banana.scale=0.3;
        super_natural_banana.velocityX = -11;
        super_natural_banana_Grp.add(super_natural_banana);
        super_natural_banana.lifetime=138;

}

}

window.onload = function()
{
    // You might want to start with a template that uses GameStates:
    //     https://github.com/photonstorm/phaser/tree/master/resources/Project%20Templates/Basic
    
    // You can copy-and-paste the code from any of the examples at http://examples.phaser.io here.
    // You will need to change the fourth parameter to "new Phaser.Game()" from
    // 'phaser-example' to 'game', which is the id of the HTML element where we
    // want the game to go.
    // The assets (and code) can be found at: https://github.com/photonstorm/phaser/tree/master/examples/assets
    // You will need to change the paths you pass to "game.load.image()" or any other
    // loading functions to reflect where you are putting the assets.
    // All loading functions will typically all be found inside "preload()".
    
    "use strict";
    
    var game = new Phaser.Game( 1024, 576, Phaser.AUTO, 'game', { preload: preload, create: create, update: update, render: render} );
   
 
    function preload()
    {
    	   /* game.load.image( 'back', 'assets/back.png' );
    	    game.load.image( 'ground', 'assets/ground.png' );
    	    game.load.image( 'spawn1', 'assets/spawn1.png' );
    	    game.load.image( 'spawn2', 'assets/spawn2.png' );
    	    game.load.image( 'spawn3', 'assets/spawn3.png' );
    	    game.load.image( 'spawn4', 'assets/spawn4.png' );
    	    game.load.image( 'spawn5', 'assets/spawn5.png' );
    	    game.load.image( 'spawn6', 'assets/spawn6.png' );
    	    game.load.image( 'spawn7', 'assets/spawn7.png' );
    	    game.load.image( 'spawn8', 'assets/spawn8.png' );
    	    game.load.image( 'spawn9', 'assets/spawn9.png' );
    	    game.load.image( 'kill', 'assets/kill.png' );
    	    game.load.image( 'kill2', 'assets/kill2.png' );
    	    game.load.image( 'heart', 'assets/heart.png' );
    	    game.load.spritesheet('dude', 'assets/dude.png', 32, 48);
    	    game.load.image( 'back2', 'assets/back2.png' );
    	    game.load.image( 'back3', 'assets/back3.png' );
    	    game.load.image( 'fore', 'assets/fore.png' );
    	    game.load.audio('floating', 'assets/float.mp3');
    	    game.load.audio('heartBell', 'assets/bell.mp3');
    	    game.load.audio('reed', 'assets/reed.mp3');*/
    	    game.load.image( 'back', 'assets/back.png' )
    	    game.load.image( 'b1', 'assets/b1.png' )
    	    game.load.image( 'b2', 'assets/b2.png' )
    	    game.load.image( 'b3', 'assets/b3.png' )
    	    game.load.image( 'b4', 'assets/b4.png' )
    	    game.load.image( 'b5', 'assets/b5.png' )
    	    game.load.image( 'b6', 'assets/b6.png' )
    	    game.load.image( 'b7', 'assets/b7.png' )
    	    game.load.image( 'b8', 'assets/b8.png' )
    	    game.load.image( 'b9', 'assets/b9.png' )
    	    game.load.image( 'wrap1', 'assets/wrap1.png' )
    	    game.load.image( 'wrap2', 'assets/wrap2.png' )
    	    game.load.image( 'wrap3', 'assets/wrap3.png' )
    	    game.load.image( 'wrap4', 'assets/wrap4.png' )
    	    game.load.image( 'wrap5', 'assets/wrap5.png' )
    	    game.load.image( 'wrap6', 'assets/wrap6.png' )
    	    game.load.image( 'wall1', 'assets/wall1.png' )
    	    game.load.image( 'wall2', 'assets/wall2.png' )
    	    game.load.spritesheet('dude', 'assets/dude.png', 32, 48);
    	    game.load.spritesheet('dude2', 'assets/dude2.png', 32, 48);
    	    game.load.spritesheet('star', 'assets/star.png', 50, 50, 4, 0, 1);
    	    game.load.spritesheet('star2', 'assets/star2.png', 50, 50, 4, 0, 1);
    	    
    }
    
   /* var reed;
    var floating;
    var heartBell;
    var back;
    var back2;
    var back3;
    var fore;
    var ground;
    var spawn1;
    var spawn2;
    var spawn3;
    var spawn4;
    var spawn5;
    var spawn6;
    var spawn7;
    var spawn8;
    var spawn9;
    var spawnCountCeiling = -1;
    var spawnCountHigh = -1;
    var spawnCountMed = -1;
    var spawnCountLow = 1;
    var spawnKey = {};
    var loop;
    var spawnGroup;
    var spawnPlat;
    //var killFront;
    var killBack;
    var killFloor;
    var xOffset = 0;
    var heart;
    var freezeHeartGroup;
    var heartGroup;
    //var freezeHeart;
    var newHeart;
    var heartTimer = 1;
    var player;
    var cursors;
    var style = { font: "40px Arial", fill: "#A30000", align: "center" };
    var statusStyle = { font: "20px Arial", fill: "#000000", align: "center" };
    var heartText;
    var freezeHeartText;
    var textDict = {};
    var heartLost = 0;
    var floatHeartSaved = 0;
    var heartSaved = 0;
    var statusText;*/
    //var back;
    var player1;
    var player2;
    var b1;
    var b2;
    var b3;
    var c1;
    var c2;
    var c3;
    var w1;
    var w2;
    var w3;
    var w4;
    var cursors;
    var wKey;
    var sKey;
    var aKey;
    var dKey;
    var spaceKey;
    var enterKey;
    var player1ShootTime = 0;
    var player1Shoot;    
    var player2ShootTime = 0;
    var player2Shoot;
    var star;
    var star2;
    var player1ShootGroup;
    var player2ShootGroup;
    var moveUp = 1.0;
    var rateUp = 1.0;
    var speedUp = 1.0;
    var moveUp2 = 1.0;
    var rateUp2 = 1.0;
    var speedUp2 = 1.0;
    var player1Max = 10;
    var player2Max = 10;
    var player1MaxCount = 1;
    var player2MaxCount = 1;
    var player1Killed = 0;
    var player2Killed = 0;
    var bloodDict = {};
    var b1Time = 0;
    var b2Time = 0;
    var b3Time = 0;
    var moveB;
    var rateB;
    var speedB;
    var moveText;
    var rateText;
    var speedText;
    var statusStyle = { font: "13px Arial", fill: "#333300", align: "center" };
    var titleStyle = { font: "20px Arial", fill: "#000000", align: "center" };
    var statusText;
    var statusText2;
    
    function create()
    {
    	    game.physics.startSystem(Phaser.Physics.ARCADE);
    	    game.world.setBounds(0, 0, 1024, 576);
    	    var back = game.add.sprite(0, 0, 'back');
    	    b1 = game.add.sprite(512, 100, 'wrap1');
    	    b1.anchor.setTo(0.5, 0.5);
    	    game.physics.arcade.enable(b1);
    	    b1.body.immovable = true;
    	    b2 = game.add.sprite(512, 288, 'wrap3');
    	    b2.anchor.setTo(0.5, 0.5);
    	    game.physics.arcade.enable(b2);
    	    b2.body.immovable = true;
    	    b3 = game.add.sprite(512, 476, 'wrap5');
    	    b3.anchor.setTo(0.5, 0.5);
    	    game.physics.arcade.enable(b3);
    	    b3.body.immovable = true;
    	    w1 = game.add.sprite(275, 200, 'wall1');
    	    w1.anchor.setTo(0.5, 0.5);
    	    game.physics.arcade.enable(w1);
    	    w1.body.immovable = true;
    	    w2 = game.add.sprite(749, 376, 'wall1');
    	    w2.anchor.setTo(0.5, 0.5);
    	    game.physics.arcade.enable(w2);
    	    w2.body.immovable = true;
    	    w3 = game.add.sprite(799, 125, 'wall2');
    	    w3.anchor.setTo(0.5, 0.5);
    	    game.physics.arcade.enable(w3);
    	    w3.body.immovable = true;
    	    w4 = game.add.sprite(225, 451, 'wall2');
    	    w4.anchor.setTo(0.5, 0.5);
    	    game.physics.arcade.enable(w4);
    	    w4.body.immovable = true;
    	    
    	    speedB = game.add.sprite(-500, -500, 'wrap6');
    	    speedB.anchor.setTo(0.5, 0.5);
    	    rateB = game.add.sprite(-500, -500, 'wrap4');
    	    rateB.anchor.setTo(0.5, 0.5);
    	    moveB = game.add.sprite(-500, -500, 'wrap2');
    	    moveB.anchor.setTo(0.5, 0.5);
    	    
    	    player1 = game.add.sprite(50, 150, 'dude');
    	    game.physics.arcade.enable(player1);
    	    player1.body.collideWorldBounds = true;
    	    player1.animations.add('left', [0, 1, 2, 3], 10, true);
    	    player1.animations.add('right', [5, 6, 7, 8], 10, true);
    	    
    	    player2 = game.add.sprite(950, 350, 'dude2');
    	    game.physics.arcade.enable(player2);
    	    player2.body.collideWorldBounds = true;
    	    player2.animations.add('left', [0, 1, 2, 3], 10, true);
    	    player2.animations.add('right', [5, 6, 7, 8], 10, true);
    	    
    	    cursors = game.input.keyboard.createCursorKeys();
    	    wKey = game.input.keyboard.addKey(Phaser.Keyboard.W);
    	    sKey = game.input.keyboard.addKey(Phaser.Keyboard.S);
    	    aKey = game.input.keyboard.addKey(Phaser.Keyboard.A);
    	    dKey = game.input.keyboard.addKey(Phaser.Keyboard.D);
    	    spaceKey = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
    	    enterKey = game.input.keyboard.addKey(Phaser.Keyboard.ENTER);
    	    
    	    player1ShootGroup = game.add.group();
    	    game.physics.arcade.enable(player1ShootGroup);
    	    player2ShootGroup = game.add.group();
    	    game.physics.arcade.enable(player2ShootGroup);
    	    
    	    bloodDict[0] = 'b1';
    	    bloodDict[1] = 'b2';
    	    bloodDict[2] = 'b3';
    	    bloodDict[3] = 'b4';
    	    bloodDict[4] = 'b5';
    	    bloodDict[5] = 'b6';
    	    bloodDict[6] = 'b7';
    	    bloodDict[7] = 'b8';
    	    bloodDict[8] = 'b9';
    	    
    	    statusText = game.add.text(15, 10, 'Player 2 Kills: ' + player2Killed, titleStyle);
    	    statusText2 = game.add.text(950, 10, 'Player 1 Kills: ' + player1Killed, titleStyle);
    	    
    	    
    	    
    	    
    	    
    	    /*
    	    back = game.add.tileSprite(0, -736, 2048, 2048, 'back');
    	    back2 = game.add.tileSprite(0, -736, 2048, 2048, 'back2');
    	    back3 = game.add.tileSprite(0, -736, 2048, 2048, 'back3');
    	    back3.alpha = .1;
    	    ground = game.add.tileSprite(0, 536, 2048, 40, 'ground');
    	    game.physics.arcade.enable(ground);
    	    ground.body.allowGravity = false;
    	    ground.body.immovable = true; 
    	    killBack = game.add.sprite(-800, 0, 'kill');
    	    game.physics.arcade.enable(killBack);
    	    killBack.body.allowGravity = false;
    	    killBack.body.immovable = true;
    	    killFloor = game.add.sprite(-1024, 580, 'kill2');
    	    game.physics.arcade.enable(killFloor);
    	    killFloor.body.allowGravity = false;
    	    killFloor.body.immovable = true;
    	    
    	    player = game.add.sprite(50, 450, 'dude');
    	    game.physics.arcade.enable(player);
    	    player.body.gravity.y = 300;
    	    player.body.collideWorldBounds = true;
    	    player.animations.add('left', [0, 1, 2, 3], 10, true);
    	    player.animations.add('right', [5, 6, 7, 8], 10, true);

    	    cursors = game.input.keyboard.createCursorKeys();

    	    
    	    
    	    //makeHeart();
    	    //makeHeart();
    	    //makeHeart();
    	    
    	    
    	    
    	    spawnGroup = game.add.group();
    	    game.physics.arcade.enable(spawnGroup);
    	    heartGroup = game.add.group();
    	    game.physics.arcade.enable(heartGroup);
    	    freezeHeartGroup = game.add.group();
    	    game.physics.arcade.enable(freezeHeartGroup);
    	    fore = game.add.tileSprite(0, -736, 2048, 2048, 'fore');
    	    fore.alpha = .3;
    	    
    	    //game.physics.arcade.enable(spawnGroup);
    	    
    	    //grass = game.add.sprite(0, 400, 'grass');
    	    //game.physics.arcade.enable(grass);
    	        	   
    	    for (loop = 1; loop < 10; loop = loop + 1)
    	    {
    	    	    spawnKey[loop] = 'spawn' + loop;
    	    }
    	    
    	    textDict[0] = 'love';
    	    textDict[1] = 'peace';
    	    textDict[2] = 'hope';
    	    textDict[3] = 'candy';
    	    textDict[4] = 'flowers';
    	    textDict[5] = 'cupcakes';
    	    textDict[6] = 'games';
    	    textDict[7] = 'potatoes';
    	    textDict[8] = 'song';
    	    textDict[9] = 'dance';
    	    textDict[10] = 'music';
    	    textDict[11] = 'hugs';
    	    textDict[12] = 'kisses';
    	    textDict[13] = 'smiles';
    	    textDict[14] = 'chocolate';
    	    textDict[15] = 'sweets';
    	    textDict[16] = 'sweetie';
    	    textDict[17] = 'snuggly';
    	    textDict[18] = 'fuzzy';
    	    textDict[19] = 'cookies';
    	    
    	    game.physics.arcade.gravity.y = 100;
    	    
    	    statusText = game.add.text(15, 10, 'Hearts Saved: ' + heartSaved + '  Floating Hearts Saved: ' + floatHeartSaved + '  Hearts Lost: ' + heartLost, statusStyle);
    	    //statusText.anchor.set(0.5);
    	    
    	    floating = game.add.audio('floating');
    	    floating.allowMultiple = true;
    	    heartBell = game.add.audio('heartBell');
    	    heartBell.allowMultiple = true;
    	    
    	    reed = game.add.audio('reed');
    	    reed.play('',0,1,true);
    	        	*/    
    	    game.scale.fullScreenScaleMode = Phaser.ScaleManager.SHOW_ALL;
    	    game.input.onDown.add(fullScreenStart, this);
    	    game.paused = true;
    	    
    	    

    }
    
    function fullScreenStart()
    {
    	    if (game.scale.isFullScreen)
    	    {
    	    	    game.paused = true;
    	    	    game.scale.stopFullScreen();
    	    }
    	    else
    	    {
    	    	    game.scale.startFullScreen(true);
    	    	    game.paused = false;
    	    }
    }
    
    function update()
    {
    	   /* if (heartTimer === 1)
    	    {
    	    	    heartTimer = 0;
    	    	    makeHeart();
    	    	    //heartTimer = 0;
    	    }
    	    
    	    xOffset = xOffset + 4;
    	    back.tilePosition.x = back.tilePosition.x - .2;
    	    back2.tilePosition.x = back2.tilePosition.x - .6;
    	    back3.tilePosition.x = back3.tilePosition.x - 1;
    	    ground.tilePosition.x = ground.tilePosition.x - 4;
    	    fore.tilePosition.x = fore.tilePosition.x - 4.5;
    	    spawnGroup.x = spawnGroup.x - 4;
    	    //if (newHeartLive > 0)
    	    //{
    	    //	 freezeHeartGroup.x = freezeHeartGroup.x - 4;   
    	   // }
    	    //newHeart.x = newHeart.x - 2;
    	    
    	    //console.log('hello');
    	    //spawnCountHigh = 1;
    	    game.physics.arcade.collide(player, ground, null, null, this);
    	    game.physics.arcade.collide(player, spawnGroup, null, null, this);
    	    game.physics.arcade.overlap(player, heartGroup, playerHeart, null, this);
    	    game.physics.arcade.overlap(player, freezeHeartGroup, playerFreezeHeart, null, this);
    	    game.physics.arcade.collide(spawnGroup, freezeHeartGroup, null, null, this);
    	    game.physics.arcade.collide(ground, freezeHeartGroup, null, null, this);
    	    game.physics.arcade.collide(spawnGroup, heartGroup, freezeHeart, null, this);
    	    game.physics.arcade.collide(ground, heartGroup, freezeHeartGround, null, this);
    	    game.physics.arcade.overlap(spawnGroup, killBack, murderSpawn, null, this);
    	    game.physics.arcade.overlap(heartGroup, killBack, heartKillWall, null, this);
    	    game.physics.arcade.overlap(freezeHeartGroup, killBack, freezeHeartKillWall, null, this);
    	    game.physics.arcade.overlap(heartGroup, killFloor, heartKillFloor, null, this);
    	    game.physics.arcade.overlap(freezeHeartGroup, killFloor, freezeHeartKillFloor, null, this);
    	    if (spawnCountCeiling > 0)
    	    {
    	    	    spawnCountCeiling = -1;
    	    	    //console.log("hi");
    	    	    //spawnPlat = game.add.sprite(1000, 350, getSpawnKey());
    	    	    spawnPlat = spawnGroup.create((xOffset + 1030), 125, getSpawnKey());
    	    	    //grass = game.add.sprite(0, 400, 'grass');
    	    	    game.physics.arcade.enable(spawnPlat);
    	    	    spawnPlat.body.allowGravity = false;
    	    	    spawnPlat.body.immovable = true; 
    	    	    game.time.events.add(Phaser.Timer.SECOND * 1.5, spawnCeilingReset, null);
    	    	    //musicBubble = spawnGroup.create(3500, 350, getSpawnKey());
    	    }
    	    
    	    if (spawnCountHigh > 0)
    	    {
    	    	    spawnCountHigh = -1;
    	    	    //console.log("hi");
    	    	    //spawnPlat = game.add.sprite(1000, 350, getSpawnKey());
    	    	    spawnPlat = spawnGroup.create((xOffset + 1030), 225, getSpawnKey());
    	    	    //grass = game.add.sprite(0, 400, 'grass');
    	    	    game.physics.arcade.enable(spawnPlat);
    	    	    spawnPlat.body.allowGravity = false;
    	    	    spawnPlat.body.immovable = true; 
    	    	    game.time.events.add(Phaser.Timer.SECOND * 1.5, spawnHighReset, null);
    	    	    //musicBubble = spawnGroup.create(3500, 350, getSpawnKey());
    	    }
    	    //spawnCountMed = 1;
    	    //game.physics.arcade.overlap(spawnGroup, killFront, setSpawnHigh(), null, this);
    	    if (spawnCountMed > 0)
    	    {
    	    	    spawnCountMed = -1;
    	    	    //console.log("hi");
    	    	    //spawnPlat = game.add.sprite(1000, 350, getSpawnKey());
    	    	    spawnPlat = spawnGroup.create((xOffset + 1030), 325, getSpawnKey());
    	    	    //grass = game.add.sprite(0, 400, 'grass');
    	    	    game.physics.arcade.enable(spawnPlat);
    	    	    //spawnPlat.alpha = .2;
    	    	    spawnPlat.body.allowGravity = false;
    	    	    spawnPlat.body.immovable = true; 
    	    	    game.time.events.add(Phaser.Timer.SECOND * 1.5, spawnMedReset, null);
    	    	    //musicBubble = spawnGroup.create(3500, 350, getSpawnKey());
    	    }
    	    
    	    if (spawnCountLow > 0)
    	    {
    	    	    //console.log('hello');
    	    	    spawnCountLow = -1;
    	    	    //console.log("hi");
    	    	    //spawnPlat = game.add.sprite(1000, 350, getSpawnKey());
    	    	    spawnPlat = spawnGroup.create((xOffset + 1030), 425, getSpawnKey());
    	    	    //grass = game.add.sprite(0, 400, 'grass');
    	    	    game.physics.arcade.enable(spawnPlat);
    	    	    spawnPlat.body.allowGravity = false;
    	    	    spawnPlat.body.immovable = true; 
    	    	    game.time.events.add(Phaser.Timer.SECOND * 1.5, spawnLowReset, null);
    	    	    //musicBubble = spawnGroup.create(3500, 350, getSpawnKey());
    	    }*/
    	    
    	   /* if (game.time.now > player1ShootTime)
    	    {
    	    	    player1ShootReady = true;
    	    	    player1ShootTime = game.time.now + 300;
    	    }
    	    
    	    if (game.time.now > player2ShootTime)
    	    {
    	    	    player2ShootReady = true;
    	    	    player2ShootTime = game.time.now + 300;
    	    }*/

    	     statusText.setText('Player 2 Kills: ' + player2Killed);
    	     statusText2.setText('Player 1 Kills: ' + player1Killed);
    	    
    	     game.physics.arcade.collide(player1, w1, null, null, this);
    	     game.physics.arcade.collide(player1, w2, null, null, this);
    	     game.physics.arcade.collide(player1, w3, null, null, this);
    	     game.physics.arcade.collide(player1, w4, null, null, this);
    	     game.physics.arcade.collide(player2, w1, null, null, this);
    	     game.physics.arcade.collide(player2, w2, null, null, this);
    	     game.physics.arcade.collide(player2, w3, null, null, this);
    	     game.physics.arcade.collide(player2, w4, null, null, this);
    	     game.physics.arcade.collide(player1ShootGroup, w1, null, null, this);
    	     game.physics.arcade.collide(player1ShootGroup, w2, null, null, this);
    	     game.physics.arcade.collide(player1ShootGroup, w3, null, null, this);
    	     game.physics.arcade.collide(player1ShootGroup, w4, null, null, this);
    	     game.physics.arcade.collide(player2ShootGroup, w1, null, null, this);
    	     game.physics.arcade.collide(player2ShootGroup, w2, null, null, this);
    	     game.physics.arcade.collide(player2ShootGroup, w3, null, null, this);
    	     game.physics.arcade.collide(player2ShootGroup, w4, null, null, this);
    	     game.physics.arcade.collide(player2ShootGroup, player1ShootGroup, null, null, this);
    	     game.physics.arcade.collide(player2, player1ShootGroup, killPlayer2, null, this);
    	     game.physics.arcade.collide(player1, player2ShootGroup, killPlayer1, null, this);
    	     game.physics.arcade.overlap(player1, b1, player1Move, null, this);
    	     game.physics.arcade.overlap(player1, b2, player1Rate, null, this);
    	     game.physics.arcade.overlap(player1, b3, player1Speed, null, this);
    	     game.physics.arcade.overlap(player2, b1, player2Move, null, this);
    	     game.physics.arcade.overlap(player2, b2, player2Rate, null, this);
    	     game.physics.arcade.overlap(player2, b3, player2Speed, null, this);
    	     
    	    
    	    player1.body.velocity.x = 0;
    	    player1.body.velocity.y = 0;
    	    if (wKey.isDown && dKey.isDown)
    	    {
    	    	    player1.body.velocity.y = -200 * moveUp;
    	    	    player1.body.velocity.x = 200 * moveUp;
    	    	    player1.animations.play('right');
    	    	    if ((game.time.now > player1ShootTime) && spaceKey.isDown && player1MaxCount <= player1Max)
    	    	    {
    	    	    	    player1MaxCount = player1MaxCount + 1;
    	    	    	    player1Shoot = player1ShootGroup.create(player1.x + 25, player1.y - 25, 'star');
    	    	    	    player1Shoot.scale.setTo(0.5, 0.5);
    	    	    	    game.physics.arcade.enable(player1Shoot);
    	    	    	    player1Shoot.body.collideWorldBounds = true;
    	    	    	    player1Shoot.body.bounce.setTo(1, 1);
    	    	    	    player1Shoot.body.velocity.x = 300 * speedUp;
    	    	    	    player1Shoot.body.velocity.y = -300 * speedUp;
    	    	    	    player1ShootTime = game.time.now + 1500 * rateUp;
    	    	    	    player1Shoot.animations.add('spin', [0, 1, 2, 3], 10, true);
    	    	    	    player1Shoot.animations.play('spin');
    	    	    }
    	    }
    	    else if (wKey.isDown && aKey.isDown)
    	    {
    	    	    player1.body.velocity.y = -200 * moveUp;
    	    	    player1.body.velocity.x = -200 * moveUp;
    	    	    player1.animations.play('left');
    	    	    if ((game.time.now > player1ShootTime) && spaceKey.isDown && player1MaxCount <= player1Max)
    	    	    {
    	    	    	    player1MaxCount = player1MaxCount + 1;
    	    	    	    player1Shoot = player1ShootGroup.create(player1.x - 25, player1.y - 25, 'star');
    	    	    	    player1Shoot.scale.setTo(0.5, 0.5);
    	    	    	    game.physics.arcade.enable(player1Shoot);
    	    	    	    player1Shoot.body.collideWorldBounds = true;
    	    	    	    player1Shoot.body.bounce.setTo(1, 1);
    	    	    	    player1Shoot.body.velocity.x = -300 * speedUp;
    	    	    	    player1Shoot.body.velocity.y = -300 * speedUp;
    	    	    	    player1ShootTime = game.time.now + 1500 * rateUp;
    	    	    	    player1Shoot.animations.add('spin', [0, 1, 2, 3], 10, true);
    	    	    	    player1Shoot.animations.play('spin');
    	    	    }
    	    }
    	    else if (sKey.isDown && dKey.isDown)
    	    {
    	    	    player1.body.velocity.y = 200 * moveUp;
    	    	    player1.body.velocity.x = 200 * moveUp;
    	    	    player1.animations.play('right');
    	    	    if ((game.time.now > player1ShootTime) && spaceKey.isDown && player1MaxCount <= player1Max)
    	    	    {
    	    	    	    player1MaxCount = player1MaxCount + 1;
    	    	    	    player1Shoot = player1ShootGroup.create(player1.x + 25, player1.y + 25, 'star');
    	    	    	    player1Shoot.scale.setTo(0.5, 0.5);
    	    	    	    game.physics.arcade.enable(player1Shoot);
    	    	    	    player1Shoot.body.collideWorldBounds = true;
    	    	    	    player1Shoot.body.bounce.setTo(1, 1);
    	    	    	    player1Shoot.body.velocity.x = 300 * speedUp;
    	    	    	    player1Shoot.body.velocity.y = 300 * speedUp;
    	    	    	    player1ShootTime = game.time.now + 1500 * rateUp;
    	    	    	    player1Shoot.animations.add('spin', [0, 1, 2, 3], 10, true);
    	    	    	    player1Shoot.animations.play('spin');
    	    	    }
    	    }
    	    else if (sKey.isDown && aKey.isDown)
    	    {
    	    	    player1.body.velocity.y = 200 * moveUp;
    	    	    player1.body.velocity.x = -200 * moveUp;
    	    	    player1.animations.play('left');
    	    	    if ((game.time.now > player1ShootTime) && spaceKey.isDown && player1MaxCount <= player1Max)
    	    	    {
    	    	    	    player1MaxCount = player1MaxCount + 1;
    	    	    	    player1Shoot = player1ShootGroup.create(player1.x - 25, player1.y + 25, 'star');
    	    	    	    player1Shoot.scale.setTo(0.5, 0.5);
    	    	    	    game.physics.arcade.enable(player1Shoot);
    	    	    	    player1Shoot.body.collideWorldBounds = true;
    	    	    	    player1Shoot.body.bounce.setTo(1, 1);
    	    	    	    player1Shoot.body.velocity.x = -300 * speedUp;
    	    	    	    player1Shoot.body.velocity.y = 300 * speedUp;
    	    	    	    player1ShootTime = game.time.now + 1500 * rateUp;
    	    	    	    player1Shoot.animations.add('spin', [0, 1, 2, 3], 10, true);
    	    	    	    player1Shoot.animations.play('spin');
    	    	    }
    	    }
    	    else if (wKey.isDown)
    	    {
    	    	    player1.body.velocity.y = -200 * moveUp;
    	    	    player1.frame = 4;
    	    	    if ((game.time.now > player1ShootTime) && spaceKey.isDown && player1MaxCount <= player1Max)
    	    	    {
    	    	    	    player1MaxCount = player1MaxCount + 1;
    	    	    	    player1Shoot = player1ShootGroup.create(player1.x, player1.y - 25, 'star');
    	    	    	    player1Shoot.scale.setTo(0.5, 0.5);
    	    	    	    game.physics.arcade.enable(player1Shoot);
    	    	    	    player1Shoot.body.collideWorldBounds = true;
    	    	    	    player1Shoot.body.bounce.setTo(1, 1);
    	    	    	    player1Shoot.body.velocity.x = 0;
    	    	    	    player1Shoot.body.velocity.y = -300 * speedUp;
    	    	    	    player1ShootTime = game.time.now + 1500 * rateUp;
    	    	    	    player1Shoot.animations.add('spin', [0, 1, 2, 3], 10, true);
    	    	    	    player1Shoot.animations.play('spin');
    	    	    }
    	    }
    	    else if (sKey.isDown)
    	    {
    	    	    player1.body.velocity.y = 200 * moveUp;
    	    	    player1.frame = 4;
    	    	    if ((game.time.now > player1ShootTime) && spaceKey.isDown && player1MaxCount <= player1Max)
    	    	    {
    	    	    	    player1MaxCount = player1MaxCount + 1;
    	    	    	    player1Shoot = player1ShootGroup.create(player1.x, player1.y + 25, 'star');
    	    	    	    player1Shoot.scale.setTo(0.5, 0.5);
    	    	    	    game.physics.arcade.enable(player1Shoot);
    	    	    	    player1Shoot.body.collideWorldBounds = true;
    	    	    	    player1Shoot.body.bounce.setTo(1, 1);
    	    	    	    player1Shoot.body.velocity.x = 0;
    	    	    	    player1Shoot.body.velocity.y = 300 * speedUp;
    	    	    	    player1ShootTime = game.time.now + 1500 * rateUp;
    	    	    	    player1Shoot.animations.add('spin', [0, 1, 2, 3], 10, true);
    	    	    	    player1Shoot.animations.play('spin');
    	    	    }
    	    }
    	    else if (aKey.isDown)
    	    {
    	    	    player1.body.velocity.x = -200 * moveUp;
    	    	    player1.animations.play('left');
    	    	    if ((game.time.now > player1ShootTime) && spaceKey.isDown && player1MaxCount <= player1Max)
    	    	    {
    	    	    	    player1MaxCount = player1MaxCount + 1;
    	    	    	    player1Shoot = player1ShootGroup.create(player1.x - 25, player1.y, 'star');
    	    	    	    player1Shoot.scale.setTo(0.5, 0.5);
    	    	    	    game.physics.arcade.enable(player1Shoot);
    	    	    	    player1Shoot.body.collideWorldBounds = true;
    	    	    	    player1Shoot.body.bounce.setTo(1, 1);
    	    	    	    player1Shoot.body.velocity.x = -300 * speedUp;
    	    	    	    player1Shoot.body.velocity.y = 0;
    	    	    	    player1ShootTime = game.time.now + 1500 * rateUp;
    	    	    	    player1Shoot.animations.add('spin', [0, 1, 2, 3], 10, true);
    	    	    	    player1Shoot.animations.play('spin');
    	    	    }
    	    }
    	    else if (dKey.isDown)
    	    {
    	    	    player1.body.velocity.x = 200 * moveUp;
    	    	    player1.animations.play('right');
    	    	    if ((game.time.now > player1ShootTime) && spaceKey.isDown && player1MaxCount <= player1Max)
    	    	    {
    	    	    	    player1MaxCount = player1MaxCount + 1;
    	    	    	    player1Shoot = player1ShootGroup.create(player1.x + 25, player1.y, 'star');
    	    	    	    player1Shoot.scale.setTo(0.5, 0.5);
    	    	    	    game.physics.arcade.enable(player1Shoot);
    	    	    	    player1Shoot.body.collideWorldBounds = true;
    	    	    	    player1Shoot.body.bounce.setTo(1, 1);
    	    	    	    player1Shoot.body.velocity.x = 300 * speedUp;
    	    	    	    player1Shoot.body.velocity.y = 0;
    	    	    	    player1ShootTime = game.time.now + 1500 * rateUp;
    	    	    	    player1Shoot.animations.add('spin', [0, 1, 2, 3], 10, true);
    	    	    	    player1Shoot.animations.play('spin');
    	    	    }
    	    }
    	    else
    	    {
    	    	    player1.frame = 4;
    	    	    if ((game.time.now > player1ShootTime) && spaceKey.isDown && player1MaxCount <= player1Max)
    	    	    {
    	    	    	    player1MaxCount = player1MaxCount + 1;
    	    	    	    player1Shoot = player1ShootGroup.create(player1.x, player1.y + 25, 'star');
    	    	    	    player1Shoot.scale.setTo(0.5, 0.5);
    	    	    	    game.physics.arcade.enable(player1Shoot);
    	    	    	    player1Shoot.body.collideWorldBounds = true;
    	    	    	    player1Shoot.body.bounce.setTo(1, 1);
    	    	    	    player1Shoot.body.velocity.x = 0;
    	    	    	    player1Shoot.body.velocity.y = 300 * speedUp;
    	    	    	    player1ShootTime = game.time.now + 1500 * rateUp;
    	    	    	    player1Shoot.animations.add('spin', [0, 1, 2, 3], 10, true);
    	    	    	    player1Shoot.animations.play('spin');
    	    	    }
    	    }
    	    
    	    player2.body.velocity.x = 0;
    	    player2.body.velocity.y = 0;
    	    if (cursors.up.isDown && cursors.right.isDown)
    	    {
    	    	    player2.body.velocity.y = -200 * moveUp2;
    	    	    player2.body.velocity.x = 200 * moveUp2;
    	    	    player2.animations.play('right');
    	    	    if ((game.time.now > player2ShootTime) && enterKey.isDown && player2MaxCount <= player2Max)
    	    	    {
    	    	    	    player2MaxCount = player2MaxCount + 1;
    	    	    	    player2Shoot = player2ShootGroup.create(player2.x + 25, player2.y - 25, 'star2');
    	    	    	    player2Shoot.scale.setTo(0.5, 0.5);
    	    	    	    game.physics.arcade.enable(player2Shoot);
    	    	    	    player2Shoot.body.collideWorldBounds = true;
    	    	    	    player2Shoot.body.bounce.setTo(1, 1);
    	    	    	    player2Shoot.body.velocity.x = 300 * speedUp2;
    	    	    	    player2Shoot.body.velocity.y = -300 * speedUp2;
    	    	    	    player2ShootTime = game.time.now + 1500 * rateUp2;
    	    	    	    player2Shoot.animations.add('spin2', [0, 1, 2, 3], 10, true);
    	    	    	    player2Shoot.animations.play('spin2');
    	    	    }
    	    }
    	    else if (cursors.up.isDown && cursors.left.isDown)
    	    {
    	    	    player2.body.velocity.y = -200 * moveUp2;
    	    	    player2.body.velocity.x = -200 * moveUp2;
    	    	    player2.animations.play('left');
    	    	    if ((game.time.now > player2ShootTime) && enterKey.isDown && player2MaxCount <= player2Max)
    	    	    {
    	    	    	    player2MaxCount = player2MaxCount + 1;
    	    	    	    player2Shoot = player2ShootGroup.create(player2.x - 25, player2.y - 25, 'star2');
    	    	    	    player2Shoot.scale.setTo(0.5, 0.5);
    	    	    	    game.physics.arcade.enable(player2Shoot);
    	    	    	    player2Shoot.body.collideWorldBounds = true;
    	    	    	    player2Shoot.body.bounce.setTo(1, 1);
    	    	    	    player2Shoot.body.velocity.x = -300 * speedUp2;
    	    	    	    player2Shoot.body.velocity.y = -300 * speedUp2;
    	    	    	    player2ShootTime = game.time.now + 1500 * rateUp2;
    	    	    	    player2Shoot.animations.add('spin2', [0, 1, 2, 3], 10, true);
    	    	    	    player2Shoot.animations.play('spin2');
    	    	    }
    	    }
    	    else if (cursors.down.isDown && cursors.right.isDown)
    	    {
    	    	    player2.body.velocity.y = 200 * moveUp2;
    	    	    player2.body.velocity.x = 200 * moveUp2;
    	    	    player2.animations.play('right');
    	    	    if ((game.time.now > player2ShootTime) && enterKey.isDown && player2MaxCount <= player2Max)
    	    	    {
    	    	    	    player2MaxCount = player2MaxCount + 1;
    	    	    	    player2Shoot = player2ShootGroup.create(player2.x + 25, player2.y + 25, 'star2');
    	    	    	    player2Shoot.scale.setTo(0.5, 0.5);
    	    	    	    game.physics.arcade.enable(player2Shoot);
    	    	    	    player2Shoot.body.collideWorldBounds = true;
    	    	    	    player2Shoot.body.bounce.setTo(1, 1);
    	    	    	    player2Shoot.body.velocity.x = 300 * speedUp2;
    	    	    	    player2Shoot.body.velocity.y = 300 * speedUp2;
    	    	    	    player2ShootTime = game.time.now + 1500 * rateUp2;
    	    	    	    player2Shoot.animations.add('spin2', [0, 1, 2, 3], 10, true);
    	    	    	    player2Shoot.animations.play('spin2');
    	    	    }
    	    }
    	    else if (cursors.left.isDown && cursors.down.isDown)
    	    {
    	    	    player2.body.velocity.y = 200 * moveUp2;
    	    	    player2.body.velocity.x = -200 * moveUp2;
    	    	    player2.animations.play('left');
    	    	    if ((game.time.now > player2ShootTime) && enterKey.isDown && player2MaxCount <= player2Max)
    	    	    {
    	    	    	    player2MaxCount = player2MaxCount + 1;
    	    	    	    player2Shoot = player2ShootGroup.create(player2.x - 25, player2.y + 25, 'star2');
    	    	    	    player2Shoot.scale.setTo(0.5, 0.5);
    	    	    	    game.physics.arcade.enable(player2Shoot);
    	    	    	    player2Shoot.body.collideWorldBounds = true;
    	    	    	    player2Shoot.body.bounce.setTo(1, 1);
    	    	    	    player2Shoot.body.velocity.x = -300 * speedUp2;
    	    	    	    player2Shoot.body.velocity.y = 300 * speedUp2;
    	    	    	    player2ShootTime = game.time.now + 1500 * rateUp2;
    	    	    	    player2Shoot.animations.add('spin2', [0, 1, 2, 3], 10, true);
    	    	    	    player2Shoot.animations.play('spin2');
    	    	    }
    	    }
    	    else if (cursors.up.isDown)
    	    {
    	    	    player2.body.velocity.y = -200 * moveUp2;
    	    	    player2.frame = 4;
    	    	    if ((game.time.now > player2ShootTime) && enterKey.isDown && player2MaxCount <= player2Max)
    	    	    {
    	    	    	    player2MaxCount = player2MaxCount + 1;
    	    	    	    player2Shoot = player2ShootGroup.create(player2.x, player2.y - 25, 'star2');
    	    	    	    player2Shoot.scale.setTo(0.5, 0.5);
    	    	    	    game.physics.arcade.enable(player2Shoot);
    	    	    	    player2Shoot.body.collideWorldBounds = true;
    	    	    	    player2Shoot.body.bounce.setTo(1, 1);
    	    	    	    player2Shoot.body.velocity.x = 0;
    	    	    	    player2Shoot.body.velocity.y = -300 * speedUp2;
    	    	    	    player2ShootTime = game.time.now + 1500 * rateUp2;
    	    	    	    player2Shoot.animations.add('spin2', [0, 1, 2, 3], 10, true);
    	    	    	    player2Shoot.animations.play('spin2');
    	    	    }
    	    }
    	    else if (cursors.down.isDown)
    	    {
    	    	    player2.body.velocity.y = 200 * moveUp2;
    	    	    player2.frame = 4;
    	    	    if ((game.time.now > player2ShootTime) && enterKey.isDown && player2MaxCount <= player2Max)
    	    	    {
    	    	    	    player2MaxCount = player2MaxCount + 1;
    	    	    	    player2Shoot = player2ShootGroup.create(player2.x, player2.y + 25, 'star2');
    	    	    	    player2Shoot.scale.setTo(0.5, 0.5);
    	    	    	    game.physics.arcade.enable(player2Shoot);
    	    	    	    player2Shoot.body.collideWorldBounds = true;
    	    	    	    player2Shoot.body.bounce.setTo(1, 1);
    	    	    	    player2Shoot.body.velocity.x = 0;
    	    	    	    player2Shoot.body.velocity.y = 300 * speedUp2;
    	    	    	    player2ShootTime = game.time.now + 1500 * rateUp2;
    	    	    	    player2Shoot.animations.add('spin2', [0, 1, 2, 3], 10, true);
    	    	    	    player2Shoot.animations.play('spin2');
    	    	    }
    	    }
    	    else if (cursors.left.isDown)
    	    {
    	    	    player2.body.velocity.x = -200 * moveUp2;
    	    	    player2.animations.play('left');
    	    	    if ((game.time.now > player2ShootTime) && enterKey.isDown && player2MaxCount <= player2Max)
    	    	    {
    	    	    	    player2MaxCount = player2MaxCount + 1;
    	    	    	    player2Shoot = player2ShootGroup.create(player2.x - 25, player2.y, 'star2');
    	    	    	    player2Shoot.scale.setTo(0.5, 0.5);
    	    	    	    game.physics.arcade.enable(player2Shoot);
    	    	    	    player2Shoot.body.collideWorldBounds = true;
    	    	    	    player2Shoot.body.bounce.setTo(1, 1);
    	    	    	    player2Shoot.body.velocity.x = -300 * speedUp2;
    	    	    	    player2Shoot.body.velocity.y = 0;
    	    	    	    player2ShootTime = game.time.now + 1500 * rateUp2;
    	    	    	    player2Shoot.animations.add('spin2', [0, 1, 2, 3], 10, true);
    	    	    	    player2Shoot.animations.play('spin2');
    	    	    }
    	    }
    	    else if (cursors.right.isDown)
    	    {
    	    	    player2.body.velocity.x = 200 * moveUp2;
    	    	    player2.animations.play('right');
    	    	    if ((game.time.now > player2ShootTime) && enterKey.isDown && player2MaxCount <= player2Max)
    	    	    {
    	    	    	    player2MaxCount = player2MaxCount + 1;
    	    	    	    player2Shoot = player2ShootGroup.create(player2.x + 25, player2.y, 'star2');
    	    	    	    player2Shoot.scale.setTo(0.5, 0.5);
    	    	    	    game.physics.arcade.enable(player2Shoot);
    	    	    	    player2Shoot.body.collideWorldBounds = true;
    	    	    	    player2Shoot.body.bounce.setTo(1, 1);
    	    	    	    player2Shoot.body.velocity.x = 300 * speedUp2;
    	    	    	    player2Shoot.body.velocity.y = 0;
    	    	    	    player2ShootTime = game.time.now + 1500 * rateUp2;
    	    	    	    player2Shoot.animations.add('spin2', [0, 1, 2, 3], 10, true);
    	    	    	    player2Shoot.animations.play('spin2');
    	    	    }
    	    }
    	    else
    	    {
    	    	    player2.frame = 4;
    	    	    if ((game.time.now > player2ShootTime) && enterKey.isDown && player2MaxCount <= player2Max)
    	    	    {
    	    	    	    player2MaxCount = player2MaxCount + 1;
    	    	    	    player2Shoot = player2ShootGroup.create(player2.x, player2.y + 25, 'star2');
    	    	    	    player2Shoot.scale.setTo(0.5, 0.5);
    	    	    	    game.physics.arcade.enable(player2Shoot);
    	    	    	    player2Shoot.body.collideWorldBounds = true;
    	    	    	    player2Shoot.body.bounce.setTo(1, 1);
    	    	    	    player2Shoot.body.velocity.x = 0;
    	    	    	    player2Shoot.body.velocity.y = 300 * speedUp2;
    	    	    	    player2ShootTime = game.time.now + 1500 * rateUp2;
    	    	    	    player2Shoot.animations.add('spin2', [0, 1, 2, 3], 10, true);
    	    	    	    player2Shoot.animations.play('spin2');
    	    	    }
    	    }
    	    

       
    }
    
    function render()
    {
    	    //game.debug.cameraInfo(game.camera, 500, 32);
    	    //game.debug.spriteCoords(game.camera, 32, 32);
    }
    
    function killPlayer1(player, shot)
    {
    	    shot.destroy();
    	    player1Blood();
    	    player1.body.x = 50;
    	    player1.body.y = 150;
    	    player1Killed = player1Killed + 1;
    }
    
    function killPlayer2(player, shot)
    {
    	    shot.destroy();
    	    player2Blood();
    	    player2.body.x = 950;
    	    player2.body.y = 350;
    	    player2Killed = player2Killed + 1;
    }
    
    function player1Blood()
    {
    	    game.add.sprite(player1.x, player1.y, bloodDict[game.rnd.integerInRange(0, 8)]);
    }
    
     function player2Blood()
    {
    	    game.add.sprite(player2.x, player2.y, bloodDict[game.rnd.integerInRange(0, 8)]);
    }
    
    function player1Move()
    {
    	    if (game.time.now > b1Time)
    	    {
    	    	    moveB.x = b1.x;
    	    	    moveB.y = b1.y;
    	    	    moveUp = 1.5;
    	    	    moveText = game.add.text(74, 550, 'Move Boost!', statusStyle);
    	    	    moveText.anchor.set(0.5);
    	    	    game.time.events.add(Phaser.Timer.SECOND * 7, resetMove1, null);
    	    	    b1Time = game.time.now + 7000;
    	    }
    }
    
    function player1Rate()
    {
    	    if (game.time.now > b2Time)
    	    {
    	    	    rateB.x = b2.x;
    	    	    rateB.y = b2.y;
    	    	    rateUp = 0.5;
    	    	    rateText = game.add.text(174, 550, 'Rate Boost!', statusStyle);
    	    	    rateText.anchor.set(0.5);
    	    	    game.time.events.add(Phaser.Timer.SECOND * 7, resetRate1, null);
    	    	    b2Time = game.time.now + 7000;
    	    }
    }
    
    function player1Speed()
    {
    	    if (game.time.now > b3Time)
    	    {
    	    	    speedB.x = b3.x;
    	    	    speedB.y = b3.y;
    	    	    speedUp = 1.5;
    	    	    speedText = game.add.text(274, 550, 'Speed Boost!', statusStyle);
    	    	    speedText.anchor.set(0.5);
    	    	    game.time.events.add(Phaser.Timer.SECOND * 7, resetSpeed1, null);
    	    	    b3Time = game.time.now + 7000;
    	    }
    }
    
    function player2Move()
    {
    	    if (game.time.now > b1Time)
    	    {
    	    	    moveB.x = b1.x;
    	    	    moveB.y = b1.y;
    	    	    moveUp2 = 1.5;
    	    	    moveText = game.add.text(750, 550, 'Move Boost!', statusStyle);
    	    	    moveText.anchor.set(0.5);
    	    	    game.time.events.add(Phaser.Timer.SECOND * 7, resetMove2, null);
    	    	    b1Time = game.time.now + 7000;
    	    }
    }
    
    function player2Rate()
    {
    	    if (game.time.now > b2Time)
    	    {
    	    	    rateB.x = b2.x;
    	    	    rateB.y = b2.y;
    	    	    rateUp2 = 0.5;
    	    	    rateText = game.add.text(850, 550, 'Rate Boost!', statusStyle);
    	    	    rateText.anchor.set(0.5);
    	    	    game.time.events.add(Phaser.Timer.SECOND * 7, resetRate2, null);
    	    	    b2Time = game.time.now + 7000;
    	    }
    }
    
    function player2Speed()
    {
    	    if (game.time.now > b3Time)
    	    {
    	    	    speedB.x = b3.x;
    	    	    speedB.y = b3.y;
    	    	    speedUp2 = 1.5;
    	    	    speedText = game.add.text(950, 550, 'Speed Boost!', statusStyle);
    	    	    speedText.anchor.set(0.5);
    	    	    game.time.events.add(Phaser.Timer.SECOND * 7, resetSpeed2, null);
    	    	    b3Time = game.time.now + 7000;
    	    }
    }
    
    function resetMove1()
    {
    	    moveUp = 1.0;
    	    moveB.x = -500;
    	    moveB.y = -500;
    	    moveText.destroy();
    }
    
     function resetRate1()
    {
    	    rateUp = 1.0;
    	    rateB.x = -500;
    	    rateB.y = -500;
    	    rateText.destroy();
    }
    
     function resetSpeed1()
    {
    	    speedUp = 1.0;
    	    speedB.x = -500;
    	    speedB.y = -500;
    	    speedText.destroy();
    }
    
     function resetMove2()
    {
    	    moveUp2 = 1.0;
    	    moveB.x = -500;
    	    moveB.y = -500;
    	    moveText.destroy();
    }
    
     function resetRate2()
    {
    	    rateUp2 = 1.0;
    	    rateB.x = -500;
    	    rateB.y = -500;
    	    rateText.destroy();
    }
    
     function resetSpeed2()
    {
    	    speedUp2 = 1.0;
    	    speedB.x = -500;
    	    speedB.y = -500;
    	    speedText.destroy();
    }
     
   /* function getSpawnKey()
    {
    	    return ('spawn' + game.rnd.integerInRange(1, 9));
    }
    
    function getYSpawnHigh()
    {
    	    return game.rnd.integerInRange(225, 225);
    }
    
    function getYSpawnHigh()
    {
    	    return game.rnd.integerInRange(225, 225);
    }
    
    function getYSpawnMed()
    {
    	    return game.rnd.integerInRange(325, 325);
    }
    
    function getYSpawnLow()
    {
    	    return game.rnd.integerInRange(425, 425);
    }
    
    function spawnLowReset()
    {
    	    var choiceLow = game.rnd.integerInRange(1, 3);
    	    if (choiceLow === 1)
    	    {
    	    	    spawnCountCeiling = 1;
    	    }
    	    else if (choiceLow === 2)
    	    {
    	    	    spawnCountHigh = 1;
    	    }
    	    else
    	    {
    	    	    spawnCountMed = 1;
    	    }
    }
    
    function spawnMedReset()
    {
    	    var choiceMed = game.rnd.integerInRange(1, 3);
    	    if (choiceMed === 1)
    	    {
    	    	    spawnCountCeiling = 1;
    	    }
    	    else if (choiceMed === 2)
    	    {
    	    	    spawnCountHigh = 1;
    	    }
    	    else
    	    {
    	    	    spawnCountLow = 1;
    	    }
    }
    
    function spawnHighReset()
    {
    	    var choiceHigh = game.rnd.integerInRange(1, 3);
    	    if (choiceHigh === 1)
    	    {
    	    	    spawnCountCeiling = 1;
    	    }
    	    else if (choiceHigh === 2)
    	    {
    	    	    spawnCountMed = 1;
    	    }
    	    else
    	    {
    	    	    spawnCountLow = 1;
    	    }
    }
    
    function spawnCeilingReset()
    {
    	    var choiceCeiling = game.rnd.integerInRange(1, 3);
    	    if (choiceCeiling === 1)
    	    {
    	    	    spawnCountHigh = 1;
    	    }
    	    else if (choiceCeiling === 2)
    	    {
    	    	    spawnCountMed = 1;
    	    }
    	    else
    	    {
    	    	    spawnCountLow = 1;
    	    }
    }
    
    function murderSpawn(killBack, spawnPlat)
    {
	spawnPlat.destroy();
	//heartLost = heartLost + 1;
    	  //  statusText.setText('Hearts Saved: ' + heartSaved + '  Floating Hearts Saved: ' + floatHeartSaved + '  Hearts Lost: ' + heartLost);
	//currentBubbles = currentBubbles - 1;
	//noteArray[rollingIndex] = game.add.audio('blank');
	//rollingIndex = rollingIndex + 1;
	//pop.play(); //Possible bug!! Pop sounds may not play or only playing sound fragment.
    }

    function freezeHeart(spawnPlat, heart)
    {
    	    newHeart = freezeHeartGroup.create(heart.x, heart.y, 'heart');
    	    game.physics.arcade.enable(newHeart);
    	    newHeart.body.velocity.x = -240;
    	    heart.destroy();
    	    //newHeartLive = newHeartLive + 1;
    	    //heart.body.immovable = true;
    }
    
    function freezeHeartGround(ground, heart)
    {
    	    newHeart = freezeHeartGroup.create(heart.x, heart.y, 'heart');
    	    game.physics.arcade.enable(newHeart);
    	    newHeart.body.velocity.x = -240;
    	    heart.destroy();
    	    //newHeartLive = newHeartLive + 1;
    	    //heart.body.immovable = true;
    }
    
    function makeHeart()
    {
    	    //heartTimer = 0;
    	    //heart = heartGroup.create(1000, 5, 'heart');
    	    //heart = game.add.sprite(1000, 5, 'heart');
    	    heart = heartGroup.create((game.rnd.integerInRange(600, 1050)), game.rnd.integerInRange(-10, -5), 'heart');
    	    game.physics.arcade.enable(heart);
    	    game.add.tween(heart).to({x: (heart.x + 30)}, 400, Phaser.Easing.Linear.NONE, true, 0, 20, true);
    	    game.time.events.add(Phaser.Timer.SECOND * 2, heartTimerReset, null);
    }
    
    function heartTimerReset()
    {
    	    heartTimer = 1;
    }
    
    function heartKillWall(killBack, heart)
    {
    	    heart.destroy();
    	    heartLost = heartLost + 1;
    	    statusText.setText('Hearts Saved: ' + heartSaved + '  Floating Hearts Saved: ' + floatHeartSaved + '  Hearts Lost: ' + heartLost);
    }
    
    function freezeHeartKillWall(killBack, newHeart)
    {
    	    newHeart.destroy();
    	    heartLost = heartLost + 1;
    	    statusText.setText('Hearts Saved: ' + heartSaved + '  Floating Hearts Saved: ' + floatHeartSaved + '  Hearts Lost: ' + heartLost);
    }
    
    function heartKillFloor(killFloor, heart)
    {
    	    heart.destroy();
    	    heartLost = heartLost + 1;
    	    statusText.setText('Hearts Saved: ' + heartSaved + '  Floating Hearts Saved: ' + floatHeartSaved + '  Hearts Lost: ' + heartLost);
    }
    
    function freezeHeartKillFloor(killFloor, newHeart)
    {
    	    newHeart.destroy();
    	    heartLost = heartLost + 1;
    	    statusText.setText('Hearts Saved: ' + heartSaved + '  Floating Hearts Saved: ' + floatHeartSaved + '  Hearts Lost: ' + heartLost);
    }
    
    function playerHeart(player, heart)
    {
    	    floating.play('', .2, .3);
    	    heartText = game.add.text(heart.x, heart.y, getText(), style);
    	    heartText.anchor.set(0.5);
    	    game.time.events.add(Phaser.Timer.SECOND * .3, killHeartText, null);
    	    heart.destroy();
    	    floatHeartSaved = floatHeartSaved + 1;
    	    statusText.setText('Hearts Saved: ' + heartSaved + '  Floating Hearts Saved: ' + floatHeartSaved + '  Hearts Lost: ' + heartLost);
    }
    
    function playerFreezeHeart(player, newHeart)
    {
    	    heartBell.play();
    	    freezeHeartText = game.add.text(newHeart.x, newHeart.y, getText(), style);
    	    freezeHeartText.anchor.set(0.5);
    	    game.time.events.add(Phaser.Timer.SECOND * .3, killFreezeText, null);
    	    newHeart.destroy();
    	    heartSaved = heartSaved + 1;
    	    statusText.setText('Hearts Saved: ' + heartSaved + '  Floating Hearts Saved: ' + floatHeartSaved + '  Hearts Lost: ' + heartLost);
    }
    
    function killFreezeText()
    {
    	    freezeHeartText.destroy();
    }
    
    function killHeartText()
    {
    	    heartText.destroy();
    }
    
    function getText()
    {
    	    var textNum = game.rnd.integerInRange(0, 19);
    	    return textDict[textNum];
    }*/
};

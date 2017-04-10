addMoreZombie = function() {
	  var startX;
	  var velX;

    if (Math.random() > 1/2 ) {
        startX = 600 - Math.random()*300-5;
        velX = -30;
    } 
    else {
        startX = Math.random()*300 +5;
        velX = 30;
    };

    var zombie = playState.zombies.create(startX, 0, "zombie");
    playState.game.physics.enable(zombie, Phaser.Physics.ARCADE);
    zombie.body.gravity.y = 2;
    zombie.animations.add('swim', [0,1,2], 6,true);
    zombie.animations.play("swim");
    zombie.body.collideWorldBounds = true;    
    zombie.body.velocity.x = Math.random()*velX+0.2;
};

addMoreZombieRight = function() {
    var startX;
    var velX;

    if (Math.random() > 1/2 ) {
        startX = 600 - Math.random()*10;
        velX = -20;
    } 
    else {
        startX = 700 - Math.random()*10;
        velX = -20;
    };

    var zombie = playState.zombiesRight.create(750, Math.random()*600, "zombie");
    playState.game.physics.enable(zombie, Phaser.Physics.ARCADE);
    zombie.body.gravity.y = 5;
    zombie.animations.add('left',[9,10,11]);
    zombie.animations.play('left', 6,true);
    zombie.body.collideWorldBounds = true;
    zombie.body.velocity.x = Math.random()*velX+0.2;

}

addMoreZombieLeft = function() {
    var startX;
    var velX;

    if (Math.random() > 1/2 ) {
        startX = 600 - Math.random()*10;
        velX = 20;
    } 
    else {
        startX = 700 - Math.random()*10;
        velX = 20;
    };

    var zombie = playState.zombiesLeft.create(0, Math.random()*600, "zombie");
    playState.game.physics.enable(zombie, Phaser.Physics.ARCADE);
    zombie.body.gravity.y = 5;
    zombie.animations.add('left',[18,19,20]);
    zombie.animations.play('left', 6,true);
    zombie.body.collideWorldBounds = true;
    zombie.body.velocity.x = Math.random()*velX+0.2;
};

addMoreZombieSecond = function() {
    var startX;
    var velX;

    if (Math.random() > 1/2 ) {
        startX = 600 - Math.random()*10;
       velX = 20;
    } 
    else {
        startX = 700 - Math.random()*10;
        velX = 20;
    };

    var zombie = playState.zombiesSecond.create(startX, 0, "zombie");
    playState.game.physics.enable(zombie, Phaser.Physics.ARCADE);
    zombie.body.gravity.y = 5;
    zombie.animations.add('left',[3,4,5]);
    zombie.animations.play('left', 10,true);
    zombie.body.collideWorldBounds = true;
    zombie.body.velocity.x = Math.random()*velX+0.2;
};

addMoreZombieSecondRight = function() {
    var startX;
    var velX;

    if (Math.random() > 1/2 ) {
        startX = 600 - Math.random()*10;
        velX = -30;
    } 
    else {
        startX = 700 - Math.random()*10;
        velX = -30;
    };

    var zombie = playState.zombiesSecondRight.create(750, Math.random()*600, "zombie");
    playState.game.physics.enable(zombie, Phaser.Physics.ARCADE);
    zombie.body.gravity.y = 5;
    zombie.animations.add('left',[12,13,14]);
    zombie.animations.play('left', 12,true);
    zombie.body.collideWorldBounds = true;
    zombie.body.velocity.x = Math.random()*velX+0.2;
};

addMoreZombieSecondLeft = function() {
    var startX;
    var velX;

    if (Math.random() > 1/2 ) {
        startX = 600 - Math.random()*10;
        velX = 40;
    } 
    else {
        startX = 700 - Math.random()*10;
        velX = 40;
    }

    var zombie = playState.zombiesSecondLeft.create(0, Math.random()*600, "zombie");
    playState.game.physics.enable(zombie, Phaser.Physics.ARCADE);
    zombie.body.gravity.y = 5;
    zombie.animations.add('left',[21,22,23]);
    zombie.animations.play('left', 6,true);
    zombie.body.collideWorldBounds = true;
    zombie.body.velocity.x = Math.random()*velX+0.2;
};

addMoreMonkey = function() {
    var startX = Math.random()*700;
    var startY = Math.random()*300;
    var monkey = playState.monkeys.create(startX, startY, "monkey");
    monkey.animations.add('monkey',[1,0,2]);
    monkey.animations.play('monkey', 0.5,true);
    playState.game.physics.enable(monkey, Phaser.Physics.ARCADE);
};
import Phaser from 'phaser';

export default class extends Phaser.State {
    create() {
        
    }

}




playState = {

	create:function() {

	game.physics.startSystem(Phaser.Physics.ARCADE);
    game.add.sprite(0, 0, 'underwater');

    direct = "IN FRONT";
 
    this.zombies = this.game.add.group();
    this.zombiesRight = this.game.add.group();
    this.zombiesLeft = this.game.add.group();
    this.zombiesSecond = this.game.add.group();
    this.zombiesSecondRight = this.game.add.group();
    this.zombiesSecondLeft = this.game.add.group();
    this.monkeys = this.game.add.group();
    this.lazers = this.game.add.group();

    this.timer = this.game.time.events.loop(7000, addMoreZombie, this); 
    this.timer = this.game.time.events.loop(5000, addMoreZombieRight, this); 
    this.timer = this.game.time.events.loop(15000, addMoreZombieLeft, this);
    this.timer = this.game.time.events.loop(25000, addMoreZombieSecond, this);
    this.timer = this.game.time.events.loop(35000, addMoreZombieSecondRight, this);
    this.timer = this.game.time.events.loop(50000, addMoreZombieSecondLeft, this);
    this.timer = this.game.time.events.loop(45000, addMoreMonkey, this);    


    player = game.add.sprite(400, game.world.height, 'gorilla');
    game.physics.arcade.enable(player);
    player.body.bounce.y = 0.2;
    player.body.gravity.y = 600;
    player.body.collideWorldBounds = true;
    player.animations.add('left', [0, 1, 2], 10, true);
    player.animations.add('right', [ 7,8,9], 10, true);
    player.animations.add("stopLeft", [5], 1, false);
    player.animations.add("stopRight", [10], 1, false);
    player.animations.add("stopUp", [6], 1, false);

    this.killText = this.game.add.text(20, 20, "", textStylePlay);
    this.scoreText = this.game.add.text(20, 40, "", textStylePlay);
    this.monkeyText = this.game.add.text(20, 60, "", textStylePlay);

    cursors = game.input.keyboard.createCursorKeys();

    },

    update:function() {
    this.scoreText.setText("Score: " + this.scores);
    this.killText.setText("Kills: " + this.kills);
    this.monkeyText.setText("Save monkey: " + this.savemonkey + "/5");
    player.body.velocity.x = 0;

    keyPress();

    game.physics.arcade.overlap(this.lazers, this.zombies, hitZombie, null, this); 
    game.physics.arcade.overlap(this.lazers, this.zombiesRight, hitZombie, null, this); 
    game.physics.arcade.overlap(this.lazers, this.zombiesLeft, hitZombie, null, this); 
    game.physics.arcade.overlap(this.lazers, this.zombiesSecond, hitZombieSecond, null, this); 
    game.physics.arcade.overlap(this.lazers, this.zombiesSecondLeft, hitZombieSecond, null, this); 
    game.physics.arcade.overlap(this.lazers, this.zombiesSecondRight, hitZombieSecond, null, this);
    game.physics.arcade.overlap(player, this.monkeys, hitPlayer, null, this);
    game.physics.arcade.overlap(player, this.zombies, hitPlayer, null, this);
    game.physics.arcade.overlap(player, this.zombiesLeft, hitPlayer, null, this);
    game.physics.arcade.overlap(player, this.zombiesRight, hitPlayer, null, this);
    game.physics.arcade.overlap(player, this.zombiesSecond, hitPlayer, null, this);
    game.physics.arcade.overlap(player, this.zombiesSecondLeft, hitPlayer, null, this);
    game.physics.arcade.overlap(player, this.zombiesSecondRight, hitPlayer, null, this);
   },
};


    
import Phaser from 'phaser';
import Enemies from './Enemy';
import Hit from './Hit';
import config from '../config';
import Input from './Input';

export default class extends Phaser.State {
    create() {
        this.physics.startSystem(Phaser.Physics.ARCADE);
        this.add.sprite(0, 0, 'underwater');

        this.direct = 'IN FRONT';

        this.zombies = this.add.group();
        this.zombiesRight = this.add.group();
        this.zombiesLeft = this.add.group();
        this.zombiesSecond = this.add.group();
        this.zombiesSecondRight = this.add.group();
        this.zombiesSecondLeft = this.add.group();
        this.monkeys = this.add.group();
        this.lazers = this.add.group();

        const enemies = new Enemies();

        this.timer = this.time.events.loop(7000, enemies.addMoreZombie, this);
        this.timer = this.time.events.loop(5000, enemies.addMoreZombieRight, this);
        this.timer = this.time.events.loop(15000, enemies.addMoreZombieLeft, this);
        this.timer = this.time.events.loop(25000, enemies.addMoreZombieSecond, this);
        this.timer = this.time.events.loop(35000, enemies.addMoreZombieSecondRight, this);
        this.timer = this.time.events.loop(50000, enemies.addMoreZombieSecondLeft, this);
        this.timer = this.time.events.loop(45000, enemies.addMoreMonkey, this);


        this.player = this.add.sprite(400, /*this.world.height*/config.gameHeight, 'gorilla');
        this.physics.arcade.enable(this.player);
        this.player.body.bounce.y = 0.2;
        this.player.body.gravity.y = 600;
        this.player.body.collideWorldBounds = true;
        this.player.animations.add('left', [0, 1, 2], 10, true);
        this.player.animations.add('right', [7, 8, 9], 10, true);
        this.player.animations.add('stopLeft', [5], 1, false);
        this.player.animations.add('stopRight', [10], 1, false);
        this.player.animations.add('stopUp', [6], 1, false);

        this.killText = this.add.text(20, 20, '', config.textStylePlay);
        this.scoreText = this.add.text(20, 40, '', config.textStylePlay);
        this.monkeyText = this.add.text(20, 60, '', config.textStylePlay);

        this.cursors = this.input.keyboard.createCursorKeys();
    }

    update() {
        this.scoreText.setText(`Score: ${this.scores || 0}`);
        this.killText.setText(`Kills: ${this.kills || 0}`);
        this.monkeyText.setText(`Save monkey: ${this.savemonkey || 0}/5`);
        this.player.body.velocity.x = 0;

        const hit = new Hit();
        // const input = new Input();

        this.keyPress();

        this.physics.arcade.overlap(this.lazers, this.zombies, hit.hitZombie, null, this);
        this.physics.arcade.overlap(this.lazers, this.zombiesRight, hit.hitZombie, null, this);
        this.physics.arcade.overlap(this.lazers, this.zombiesLeft, hit.hitZombie, null, this);
        this.physics.arcade.overlap(this.lazers, this.zombiesSecond, hit.hitZombieSecond, null, this);
        this.physics.arcade.overlap(this.lazers, this.zombiesSecondLeft, hit.hitZombieSecond, null, this);
        this.physics.arcade.overlap(this.lazers, this.zombiesSecondRight, hit.hitZombieSecond, null, this);
        this.physics.arcade.overlap(this.player, this.monkeys, hit.hitPlayer, null, this);
        this.physics.arcade.overlap(this.player, this.zombies, hit.hitPlayer, null, this);
        this.physics.arcade.overlap(this.player, this.zombiesLeft, hit.hitPlayer, null, this);
        this.physics.arcade.overlap(this.player, this.zombiesRight, hit.hitPlayer, null, this);
        this.physics.arcade.overlap(this.player, this.zombiesSecond, hit.hitPlayer, null, this);
        this.physics.arcade.overlap(this.player, this.zombiesSecondLeft, hit.hitPlayer, null, this);
        this.physics.arcade.overlap(this.player, this.zombiesSecondRight, hit.hitPlayer, null, this);
    }
    keyPress() {
        if (this.cursors.left.isDown) {
            this.player.body.velocity.x = -150;
            this.player.animations.play('left');
            this.direct = 'LEFT';
        } else if (this.cursors.right.isDown) {
            this.player.body.velocity.x = 150;
            this.player.animations.play('right');
            this.direct = 'RIGHT';
        } else if (this.cursors.up.isDown) {
            this.player.body.velocity.y = -200;
            this.direct = 'IN FRONT';
            this.player.animations.play('stopUp');
        } else {
            this.player.animations.play('stopUp');
        }

        // for shoot
        if (this.cursors.down.isDown) {
            if (this.direct === 'RIGHT') {
                this.player.animations.play('stopRight');
                var lazer = this.lazers.create(this.player.body.x + 80, this.player.body.y + 40, 'turretLazer');
                this.physics.enable(lazer, Phaser.Physics.ARCADE);
                lazer.body.velocity.x = 140;
                lazer.body.immovable = true;
                lazer.body.allowGravity = false;
                lazer.outOfBoundsKill = true;
            } else if (this.direct === 'LEFT') {
                player.animations.play('stopLeft');
                var lazer = this.lazers.create(this.player.body.x - 10, this.player.body.y + 40, 'turretLazer');
                this.physics.enable(lazer, Phaser.Physics.ARCADE);
                lazer.body.velocity.x = -140;
                lazer.body.immovable = true;
                lazer.body.allowGravity = false;
                lazer.outOfBoundsKill = true;
            } else {
                var lazer = this.lazers.create(this.player.body.x + 15, this.player.body.y, 'turretLazerUp');
                this.physics.enable(lazer, Phaser.Physics.ARCADE);
                lazer.body.velocity.y = -140;
                lazer.body.immovable = true;
                lazer.body.allowGravity = false;
                lazer.outOfBoundsKill = true;
            }
        }
    }
}

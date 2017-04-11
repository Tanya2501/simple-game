import Phaser from 'phaser';

export default class {
    addMoreZombie() {
        var startX;
        var velX;

        if (Math.random() > 1 / 2) {
            startX = 600 - Math.random() * 300 - 5;
            velX = -30;
        } else {
            startX = Math.random() * 300 + 5;
            velX = 30;
        }

        this.zombie = this.zombies.create(startX, 0, 'zombie');
        this.physics.enable(this.zombie, Phaser.Physics.ARCADE);
        this.zombie.body.gravity.y = 2;
        this.zombie.animations.add('swim', [0, 1, 2], 6, true);
        this.zombie.animations.play('swim');
        this.zombie.body.collideWorldBounds = true;
        this.zombie.body.velocity.x = Math.random() * velX + 0.2;
    }

    addMoreZombieRight() {
        var startX;
        var velX;

        if (Math.random() > 1 / 2) {
            startX = 600 - Math.random() * 10;
            velX = -20;
        } else {
            startX = 700 - Math.random() * 10;
            velX = -20;
        }

        this.zombie = this.zombiesRight.create(750, Math.random() * 600, 'zombie');
        this.physics.enable(this.zombie, Phaser.Physics.ARCADE);
        this.zombie.body.gravity.y = 5;
        this.zombie.animations.add('left', [9, 10, 11]);
        this.zombie.animations.play('left', 6, true);
        this.zombie.body.collideWorldBounds = true;
        this.zombie.body.velocity.x = Math.random() * velX + 0.2;
    }

    addMoreZombieLeft() {
        var startX;
        var velX;

        if (Math.random() > 1 / 2) {
            startX = 600 - Math.random() * 10;
            velX = 20;
        } else {
            startX = 700 - Math.random() * 10;
            velX = 20;
        }

        this.zombie = this.zombiesLeft.create(0, Math.random() * 600, 'zombie');
        this.physics.enable(this.zombie, Phaser.Physics.ARCADE);
        this.zombie.body.gravity.y = 5;
        this.zombie.animations.add('left', [18, 19, 20]);
        this.zombie.animations.play('left', 6, true);
        this.zombie.body.collideWorldBounds = true;
        this.zombie.body.velocity.x = Math.random() * velX + 0.2;
    }

    addMoreZombieSecond() {
        var startX;
        var velX;

        if (Math.random() > 1 / 2) {
            startX = 600 - Math.random() * 10;
            velX = 20;
        } else {
            startX = 700 - Math.random() * 10;
            velX = 20;
        }

        this.zombie = this.zombiesSecond.create(startX, 0, 'zombie');
        this.physics.enable(this.zombie, Phaser.Physics.ARCADE);
        this.zombie.body.gravity.y = 5;
        this.zombie.animations.add('left', [3, 4, 5]);
        this.zombie.animations.play('left', 10, true);
        this.zombie.body.collideWorldBounds = true;
        this.zombie.body.velocity.x = Math.random() * velX + 0.2;
    }

    addMoreZombieSecondRight() {
        var startX;
        var velX;

        if (Math.random() > 1 / 2) {
            startX = 600 - Math.random() * 10;
            velX = -30;
        } else {
            startX = 700 - Math.random() * 10;
            velX = -30;
        }

        this.zombie = this.zombiesSecondRight.create(750, Math.random() * 600, 'zombie');
        this.physics.enable(this.zombie, Phaser.Physics.ARCADE);
        this.zombie.body.gravity.y = 5;
        this.zombie.animations.add('left', [12, 13, 14]);
        this.zombie.animations.play('left', 12, true);
        this.zombie.body.collideWorldBounds = true;
        this.zombie.body.velocity.x = Math.random() * velX + 0.2;
    }

    addMoreZombieSecondLeft() {
        var startX;
        var velX;

        if (Math.random() > 1 / 2) {
            startX = 600 - Math.random() * 10;
            velX = 40;
        } else {
            startX = 700 - Math.random() * 10;
            velX = 40;
        }

        this.zombie = this.zombiesSecondLeft.create(0, Math.random() * 600, 'zombie');
        this.physics.enable(this.zombie, Phaser.Physics.ARCADE);
        this.zombie.body.gravity.y = 5;
        this.zombie.animations.add('left', [21, 22, 23]);
        this.zombie.animations.play('left', 6, true);
        this.zombie.body.collideWorldBounds = true;
        this.zombie.body.velocity.x = Math.random() * velX + 0.2;
    }

    addMoreMonkey() {
        var startX = Math.random() * 700;
        var startY = Math.random() * 300;
        this.monkey = this.monkeys.create(startX, startY, 'monkey');
        this.monkey.animations.add('monkey', [1, 0, 2]);
        this.monkey.animations.play('monkey', 0.5, true);
        this.physics.enable(this.monkey, Phaser.Physics.ARCADE);
    }

}

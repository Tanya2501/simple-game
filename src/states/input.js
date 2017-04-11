import Phaser from 'phaser';

export default class extends Phaser.State {
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

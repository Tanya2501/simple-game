keyPress = function() {

    if (cursors.left.isDown) {
        player.body.velocity.x = -150;
        player.animations.play('left');
        direct = "LEFT";
    }
    else if (cursors.right.isDown) {
        player.body.velocity.x = 150;
        player.animations.play('right');
        direct = "RIGHT";
    }

    else if (cursors.up.isDown) {
        player.body.velocity.y = -200;
				direct = "IN FRONT";
				player.animations.play("stopUp");
    }
    else {
     player.animations.play("stopUp");
    }

     // for shoot

    if (cursors.down.isDown) {
      	if (direct == "RIGHT") {
      			player.animations.play("stopRight");
		        var lazer = playState.lazers.create(player.body.x + 80, player.body.y + 40, "turretLazer");
		        playState.game.physics.enable(lazer, Phaser.Physics.ARCADE);
		        lazer.body.velocity.x = 140;
            lazer.body.immovable = true;
            lazer.body.allowGravity = false;
            lazer.outOfBoundsKill = true;
    }
    else if (direct == "LEFT") {
      	player.animations.play("stopLeft");
        var lazer = playState.lazers.create(player.body.x -10, player.body.y +40, "turretLazer");
        playState.game.physics.enable(lazer, Phaser.Physics.ARCADE);
        lazer.body.velocity.x = -140;
        lazer.body.immovable = true;
        lazer.body.allowGravity = false;
        lazer.outOfBoundsKill = true;
    }
    else {
        var lazer = playState.lazers.create(player.body.x +15, player.body.y, "turretLazerUp");
        playState.game.physics.enable(lazer, Phaser.Physics.ARCADE);     
        lazer.body.velocity.y = -140;
        lazer.body.immovable = true;
        lazer.body.allowGravity = false;
        lazer.outOfBoundsKill = true;
    }
}
};
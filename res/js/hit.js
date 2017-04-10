hitZombie = function(lazer,zombie) {
 		zombie.kill();
    this.scores += 10;
    this.kills++;
};

hitZombieSecond = function(lazer,zombieSecond) {
 		zombieSecond.kill();
    this.scores += 20;
    this.kills++;
};


countMonkey = function (player, monkey) {
		monkey.kill();
		this.savemonkey ++;
};

hitPlayer = function (player) {
	player.kill();
	game.state.start("loss");
}

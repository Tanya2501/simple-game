
export default class {
    hitZombie(lazer, zombie) {
        zombie.kill();
        this.scores += 10;
        this.kills++;
    }

    hitZombieSecond(lazer, zombieSecond) {
        zombieSecond.kill();
        this.scores += 20;
        this.kills++;
    }


    countMonkey(player, monkey) {
        monkey.kill();
        this.savemonkey ++;
    }

    hitPlayer(player) {
        player.kill();
        this.state.start('Loss');
    }
}

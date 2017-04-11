import config from '../config';

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
        if (localStorage.getItem(config.localStorageName) === null) {
            localStorage.setItem(config.localStorageName, this.scores);
        } else if (this.scores > localStorage.getItem(config.localStorageName)) {
            localStorage.setItem(config.localStorageName, this.scores);
        }
        localStorage.setItem(config.localStorageLastScore, this.scores);
        this.state.start('Loss');
    }
}

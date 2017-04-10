import Phaser from 'phaser';
// import config from '../config';

export default class extends Phaser.State {
    create() {
        // audio
        const music = this.add.audio('menuSoundTrack');
        music.volume = 0.25;
        music.play();

        const menu = this.add.sprite(this.world.centerX - 150, 50, 'menu');
        menu.scale.setTo(0.5, 0.5);

        const button1 = this.add.button(this.world.centerX - 125, 150, 'playTab', () => {
            music.mute = true;
            this.state.start('Play');
        }, this, 2, 1, 0);
        button1.scale.setTo(0.5, 0.5);
        button1.onInputOver.add(this.over, this);
        button1.onInputOut.add(this.out, this);

        const button2 = this.add.button(this.world.centerX - 125, 215, 'scoreTab', () => {
            music.mute = true;
            this.state.start('Score');
        }, this, 2, 1, 0);
        button2.scale.setTo(0.5, 0.5);
        button2.onInputOver.add(this.over, this);
        button2.onInputOut.add(this.out, this);

        const button3 = this.add.button(this.world.centerX - 125, 280, 'helpTab', () => {
            music.mute = true;
            this.state.start('Help');
        }, this, 2, 1, 0);
        button3.scale.setTo(0.5, 0.5);
        button3.onInputOver.add(this.over, this);
        button3.onInputOut.add(this.out, this);

        // playState.kills = 0;
        // playState.scores = 0;
        // playState.savemonkey = 0;
    }

    over(item) {
        item.alpha = 0.5;
    }

    out(item) {
        item.alpha = 1;
    }
}



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

        const button1 = this.add.button(this.world.centerX - 125, 150, 'playTab', this.playBtn, this, 2, 1, 0);
        button1.scale.setTo(0.5, 0.5);

        const button2 = this.add.button(this.world.centerX - 125, 215, 'scoreTab', this.scoreBtn, this, 2, 1, 0);
        button2.scale.setTo(0.5, 0.5);

        const button3 = this.add.button(this.world.centerX - 125, 280, 'helpTab', this.helpBtn, this, 2, 1, 0);
        button3.scale.setTo(0.5, 0.5);

        // playState.kills = 0;
        // playState.scores = 0;
        // playState.savemonkey = 0;
    }
    playBtn() {
        this.state.start('Play');
    }

    helpBtn() {
        this.state.start('Help');
    }

    scoreBtn() {
        this.state.start('Score');
    }

}



import Phaser from 'phaser';
import config from '../config';

export default class extends Phaser.State {
    create() {
        this.playButton = this.add.button(300, 240, 'button', this.playBtn);
        this.add.text(160, 90, 'Unfortunately you lost!', config.bigTextStyle);
        this.add.text(120, 120, 'Click on monkey to restart.', config.bigTextStyle);
        this.controlsButton = this.game.add.button(0, 0, 'ground', this.ctrlBtn);
        this.add.text(5, 0, 'Help', config.textStyle);
    }

    playBtn() {
        this.state.start('Play');
    }

    ctrlBtn() {
        this.state.start('Help');
    }
}

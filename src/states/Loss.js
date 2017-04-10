import Phaser from 'phaser';

export default class extends Phaser.State {
    create() {
        this.playButton = this.game.add.button(300, 240, 'button', this.playBtn);
        this.add.text(160, 90, 'Unfortunately you lost!', bigTextStyle);
        this.add.text(120, 120, 'Click on monkey to restart.', bigTextStyle);
        this.controlsButton = this.game.add.button(0, 0, 'ground', this.ctrlBtn);
        this.add.text(5, 0, 'Help', textStyle);
    }

    playBtn() {
        this.state.start('play');
    }

    ctrlBtn() {
        this.state.start('help');
    }
}

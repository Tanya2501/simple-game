import Phaser from 'phaser';
import config from '../config';

export default class extends Phaser.State {
    create() {
        const worldCenterX = this.world.centerX;
        const worldCenterY = this.world.centerY;

        const background = this.add.sprite(this.world.centerX - 150, 50, 'menu');
        background.scale.setTo(0.5, 0.5);

        this.add.text(worldCenterX - 120, worldCenterY - 50, 'Arrow keys (LEFT, RIGHT, UP) - Move and jump', config.textStyle);
        this.add.text(worldCenterX - 120, worldCenterY - 70, 'Arrow key DOWN - Shoot your item', config.textStyle);
        this.game.add.text(worldCenterX - 120, worldCenterY - 90, 'Click on monkey to return to Menu', config.textStyle);

        const controlsButton = this.game.add.button(worldCenterX - 120, 350, 'menuTab', () => {
            this.state.start('Menu');
        });
        controlsButton.scale.setTo(0.5, 0.5);
    }
}

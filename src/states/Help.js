import Phaser from 'phaser';
import config from '../config';

export default class extends Phaser.State {
    create() {
        const worldCenterX = this.world.centerX;

        const background = this.add.sprite(this.world.centerX - 150, 50, 'menu');
        background.scale.setTo(0.5, 0.5);

        this.add.text(worldCenterX - 120, 150, 'Arrow keys (LEFT, RIGHT, UP) -\n Move, jump and shoot', config.textStyle);

        const controlsButton = this.game.add.button(worldCenterX - 120, 350, 'menuTab', () => {
            this.state.start('Menu');
        });
        controlsButton.onInputOver.add(this.over, this);
        controlsButton.onInputOut.add(this.out, this);
        controlsButton.scale.setTo(0.5, 0.5);
    }

    over(item) {
        item.alpha = 0.5;
    }

    out(item) {
        item.alpha = 1;
    }
}

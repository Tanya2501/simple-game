import Phaser from 'phaser';

export default class extends Phaser.State {
    init() {
        this.stage.backgroundColor = '#000000';
    }
    create() {
        // create text
        const gameName = this.add.text(
            this.world.centerX,
            this.world.centerY - 35,
            'monkey war',
            {
                font: '50px Bangers',
                fill: '#ffffff',
                align: 'center',
            });
        const teamDescription = this.add.text(
            this.world.centerX,
            this.world.centerY,
            'created by green team',
            {
                font: '30px Bangers',
                fill: '#2d9e19',
                align: 'center',
            });

        // add text position
        // set alpha to 0 (opacity)
        gameName.anchor.setTo(0.5, 0.5);
        gameName.alpha = 0;

        teamDescription.anchor.setTo(0.5, 0.5);
        teamDescription.alpha = 0;

        // add fade effect to text
        this
            .add
            .tween(gameName)
            .to({ alpha: 1 }, 2000, Phaser.Easing.Linear.None, true, 0, 0, true);

        this
            .add
            .tween(teamDescription)
            .to({ alpha: 1 }, 2000, Phaser.Easing.Linear.None, true, 0, 0, true)
            .onComplete
            .add(() => {
                // transition to next state
                this.state.start('Menu');
            }, this);
    }
}

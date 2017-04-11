import Phaser from 'phaser';
import WebFont from 'webfontloader';

export default class extends Phaser.State {
    init() {
        this.stage.backgroundColor = '#000000';
        this.fontsReady = false;
        this.fontsLoaded = this.fontsLoaded.bind(this);
    }

    preload() {
        WebFont.load({
            google: {
                families: ['Bangers'],
            },
            active: this.fontsLoaded,
        });

        const text = this.add.text(this.world.centerX, this.world.centerY, 'loading fonts', { font: '16px Arial', fill: '#dddddd', align: 'center' });
        text.anchor.setTo(0.5, 0.5);

        this.load.image('loaderBg', '../../assets/images/loader-bg.png');
        this.load.image('loaderBar', '../../assets/images/loader-bar.png');
        this.load.image('underwater', '../../assets/images/1.png');
        this.load.image('button', '../../assets/images/gorillaMain.png');
        this.load.image('buttonMenu', '../../assets/images/gorillaMenu.png');
        this.load.spritesheet('monkey', '../../assets/images/monkey.png', 42, 52);
        this.load.spritesheet('gorilla', '../../assets/images/gorilla.png', 76, 78, 11);
        this.load.spritesheet('zombie', '../../assets/images/zombie.png', 32, 65);
        this.load.image('ground', '../../assets/images/ground.png');
        this.load.image('turretLazer', '../../assets/images/turretLazer.png');
        this.load.image('turretLazerUp', '../../assets/images/turretLazerUp.png');
        this.load.image('loaderBg', '../../assets/images/loader-bg.png');
        this.load.image('loaderBar', '../../assets/images/loader-bar.png');
        this.load.image('menu', '../../assets/images/menu.png');
        this.load.image('playTab', '../../assets/images/play-tab.png');
        this.load.image('scoreTab', '../../assets/images/score-tab.png');
        this.load.image('helpTab', '../../assets/images/help-tab.png');
        this.load.image('menuTab', '../../assets/images/menu-tab.png');
        this.load.image('purpleBall', '../../assets/images/purple_ball.png');
        this.load.audio('menuSoundTrack', ['../../assets/audio/menu.mp3']);
    }

    render() {
        if (this.fontsReady) {
            this.state.start('Preload');
        }
    }

    fontsLoaded() {
        this.fontsReady = true;
    }
}

// global imports: pixi - web 2d engine, p2 - phisics engine
import 'pixi';
import 'p2';
import Phaser from 'phaser';

// game modules
import BootState from './states/Boot';
import PreloadState from './states/Preload';
import PlayState from './states/Play';
import MenuState from './states/Menu';
import HelpState from './states/Help';
import LossState from './states/Loss';

// game configuration file
import config from './config';

class Game extends Phaser.Game {
    constructor() {
        super(window.innerWidth, window.innerHeight, Phaser.CANVAS, 'content', null);

        this.state.add('Boot', BootState, false);
        this.state.add('Preload', PreloadState, false);
        this.state.add('Menu', MenuState, false);
        this.state.add('Play', PlayState, false);
        this.state.add('Help', HelpState, false);
        this.state.add('Loss', LossState, false);

        this.state.start('Boot');
    }
}

window.game = new Game();

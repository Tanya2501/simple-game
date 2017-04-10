let game = new Phaser.Game(800, 600, Phaser.CANVAS, 'game');
game.state.add("load", loadState);
game.state.add("play", playState);
game.state.add("menu", menuState);
game.state.add("help", helpState);
game.state.add("loss", lossState);
game.state.start("load");
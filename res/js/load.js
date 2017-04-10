loadState = {
	
	preload:function() {
		this.game.stage.backgroundColor = 0x538096;

		textStyle = {
			font: "25px Robot",
			fill: "#000000"
		};

		textStylePlay = {
			font: "25px Robot",
		
			fill: "#fff"
		};

		bigTextStyle = {
			font: "40px Robot",
			fill: "#000000"
		};

		game.load.image('underwater', 'assets/img/1.png');
		game.load.image('button', 'assets/img/gorillaMain.png');
		game.load.image('buttonMenu', 'assets/img/gorillaMenu.png');
		game.load.spritesheet('monkey', 'assets/img/monkey.png', 42, 52);
    game.load.spritesheet('gorilla', 'assets/img/gorilla.png',76, 78, 11);
    game.load.spritesheet('zombie', 'assets/img/zombie.png', 32, 65);
		game.load.image("ground", "assets/img/ground.png");
		game.load.image("turretLazer", "assets/img/turretLazer.png");
		game.load.image("turretLazerUp", "assets/img/turretLazerUp.png");
	},

	create:function() {
		game.state.start("menu")
	}
};
menuState = {
		create:function() {
		
				this.playButton = this.game.add.button(300, 240, "button", this.playBtn);
				this.game.add.text(160, 90, "Click on monkey to start", bigTextStyle);
				playState.kills = 0;
				playState.scores = 0;
				playState.savemonkey = 0;
				this.controlsButton = this.game.add.button(0, 0, "ground", this.ctrlBtn);
				this.game.add.text(5, 0, "Help", textStyle);	
		},

		playBtn:function() {
				game.state.start("play");
		},

		ctrlBtn:function() {
				game.state.start("help")
		},
};

helpState = {

	  create:function() {
				this.game.add.text(20, 0, "Monkey WAR", bigTextStyle);
				this.game.add.text(20, 50, "Arrow keys (LEFT, RIGHT, UP) - Move and jump", textStyle);
				this.game.add.text(20, 70, "Arrow key DOWN - Shoot your item", textStyle);
				this.controlsButton = this.game.add.button(20, 200, "buttonMenu", this.menuBtn);
				this.game.add.text(20, 180, "Click on monkey to return to Menu", textStyle);
		}, 

	  menuBtn:function() {
				game.state.start("menu");
	}
};
	

lossState = {
	  create:function() {
		
				this.playButton = this.game.add.button(300, 240, "button", this.playBtn);
				this.game.add.text(160, 90, "Unfortunately you lost!", bigTextStyle);
				this.game.add.text(120, 120, "Click on monkey to restart.", bigTextStyle);
				this.controlsButton = this.game.add.button(0, 0, "ground", this.ctrlBtn);
				this.game.add.text(5, 0, "Help", textStyle);	
		}, 

		playBtn:function() {
				game.state.start("play");
		},

		ctrlBtn:function() {
				game.state.start("help")
		},
}
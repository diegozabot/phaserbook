Breakout.Menu = function(){}

Breakout.Menu.prototype = {
    create:function(){
        var background = this.add.image(0,0,'background');
        this.add.image(0,0,'menu');
        
        this.background.inputEnabled = true;
        this.background.events.onInputDown.add(this.start, this); 
        
        var space = this.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
        space.onDown.addOnce(this.start, this);
    },
    start: function(){
        Breakout.hitAud.play();
        this.state.start('Play');
    }
}
function Enemy(type){
	//敌机的出现
	this.init = function(){
		this.div = create("div");
		switch( type ){
			case "small" : {
				this.body.className = "enemy-small";
				this.hp = 1;
				this.speed = 6;
				this.imgs = ["plain1_die1.png","plain1_die2.png","plain1_die3.png"];
				new GameEngine().append(this);
				this.left(rand(0,new GameEngine().width() - this.width() ) );
				this.top( -this.height() );
				break;
			}
			case "middle" : {
				this.body.className = "enemy-middle";
				this.hp = 3;
				this.speed = 4;
				this.imgs = ["plain2_die1.png","plain2_die2.png","plain2_die3.png","plain2_die4.png"];
				new GameEngine().append(this);
				this.left(rand(0,new GameEngine().width() - this.width() ) );
				this.top( -this.height() );
				break;
			}
			case "large" : {
				this.body.className = "enemy-large";
				this.hp = 5;
				this.speed = 2;
				this.imgs = ["plain3_die1.png","plain3_die2.png","plain3_die3.png","plain3_die4.png","plain3_die5.png","plain3_die6.png"];
				new GameEngine().append(this);
				this.left(rand(0,new GameEngine().width() - this.width() ) );
				this.top( -this.height() );
				break;
			}
		}
		return this;
	}
	this.move = function(){
		this.timer =setInterval(function(){
			this.top( this.top() + this.speed );
			if( this.top() > new GameEngine().height() ){
				this.body.remove();
				clearInterval(this.timer);
			}
		}.bind(this),30)
		return this;
	}
	this.left = function(val){
		if( val || val == 0 ){
			this.body.style.left = val +"px";
		}
		return this.body.offsetLeft;
	}
	this.top = function(val){
		if( val || val == 0 ){
			this.body.style.top = val +"px";
		}
		return this.body.offsetTop;
	}
	this.width = function(){
		return this.body.offsetWidth;
	}
	this.height = function(){
		return this.body.offsetHeight;
	}
}

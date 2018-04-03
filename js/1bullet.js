function Bullet(){
	this.init = function(){
		this.body = create("div");
		this.body.className = "bullet";
		new GameEngine().append(this);
		var mp = new MyPlane();
		this.body.style.left = mp.left()+mp.width()/2 - this.width()/2+"px";
		this.body.style.top = mp.top()-this.height()+"px";
		return this;
	}
	this.move = function(){
		this.timer = setInterval(function(){
			this.top(this.top()-3);
			if( this.top() < -this.height() ){
				this.body.remove();
				clearInterval(this.timer);
			}
			//子弹爆炸
			/*var enemes = new GameEngine().enemes;
			for( var en of enemes ){
				if( pz(this.body,en.body) ){
					
				}
			}*/
		}.bind(this),30)
	}
	this.width = function(){
		return this.body.offsetWidth;
	}
	this.height = function(){
		return this.body.offsetHeight;
	}
	this.top = function(val){
		//如果val有值  设置  否则就获取
		if( val || val == 0 ){
			this.body.style.top = val + "px";
		}
		return this.body.offsetTop;
	}
	}


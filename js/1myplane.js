function MyPlane(){
	if( !MyPlane.instance ){
		MyPlane.instance = {
			show : function(){
				this.init();
				this.addListener({ type : "mouse" });//控制飞机的移动方式  鼠标？键盘？
			},
			init : function(){
				this.body = create("div");
				this.body.className = "my-warplain";
				//new GameEngine().body.appendChild(this.body)
				new GameEngine().append(this);
				this.body.style.bottom = 0;
				this.body.style.left = (new GameEngine().width()-this.width())/2 + "px";
			},
			addListener : function(obj){
				switch(obj.type){
					case "mouse" : {
						//鼠标在游戏引擎上移动 控制战斗机移动
						new GameEngine().body.onmousemove = function(e){
							var e = e || event;
							var oleft = e.pageX - this.width()/2 - new GameEngine().left();
							oleft = Math.min( Math.max(0,oleft),new GameEngine().width() -this.width() );
							this.left(oleft);
						}.bind(this)
						break;
					}
					case "key" : {
							document.onkeydown = function(e){
								var e = e || event;
								var code = e.keyCode || e.which;
								switch(code){
									case 37 : {
										this.left( Math.max( 0,this.left()-5 ) );
										break;
									}
									case 39 : {
										this.left( Math.min( new GameEngine().width() - this.width() , this.left()+5)   );
										break;
									}
								}
							}.bind(this)
						}
					
				}
			},
			width : function(){
				return this.body.offsetWidth;
			},
			left : function(val){
				//如果val有值  设置  否则就获取
				if( val || val ==0){
					this.body.style.left = val + "px";
				}
				return this.body.offsetLeft;
			},
			top : function(){
				return this.body.offsetTop;
			}
		}
		
	}
	return MyPlane.instance;
}
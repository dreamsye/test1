function GameEngine(){
	if( !GameEngine.instance ){
			GameEngine.instance = {
				body : $id("main"),
				menus : $id("options"),
				level : 0,
				enemes : new Set(),
				start : function(){
					this.init();
				},
				init : function(){//记录游戏等级
					this.menus.addEventListener("click",function(e){
						var e = e ||event;
						var target = e.target || e.srcElement;
						if( target.nodeName =="LI" ){
							this.level = target .getAttribute("level");
							this.menus.remove();
							this.loading();//菜单消失后，引出游戏引擎动画
						}
					}.bind(this))
				},
				loading : function(){
					this.logo = create("div");
					this.logo.className = "logo";
					this.body.appendChild(this.logo);
					//创建小飞机
					this.loading = create("div");
					this.loading.className = "loading";
					this.body.appendChild(this.loading);
					//定时间记录小飞机运动
					var timer = null;
					var index = 0;
					timer = setInterval(function(){
						this.loading.style.backgroundImage = "url(images/loading"+(++index)+".png)";
						if(index ==3){
							index =0
						}
					}.bind(this),600)
					//引擎背景移动动画
					var speedY = 0;
					setInterval(function(){
						this.body.style.backgroundPositionY = speedY++ +"px";
					}.bind(this),30)
					//3秒过后logo loading 消失 战斗机出场
					setTimeout(function(){
						this.logo.remove();
						this.loading.remove();
						clearInterval(timer);
						this.gameStart();
					//战斗机出场
					}.bind(this),3000)	
				},
				gameStart : function(){
					new MyPlane().show();
					this.fire();
					this.autoCreateEnemy();
					
				},
				append : function(obj){
					this.body.appendChild(obj.body);
				},
				width : function(){
					return this.body.offsetWidth;
				},
				height : function(){
					return this.body.offsetHeight;
				},
				left : function(){
					return this.body.offsetLeft;
				},
				fire : function(){
					setInterval(function(){
						new Bullet().init().move();
					}.bind(this),new GameEngine().level)
				},
				autoCreateEnemy : function(){
					//小飞机
					setInterval(function(){
						if( Math.random()>0.2 ){
							this.enemes.add( new Enemy("small").init().move() );
						}
					}.bind(this),1000)
					
					//中飞机
					setInterval(function(){
						if( Math.random()>0.3 ){
							this.enemes.add( new Enemy("middle").init().move() );
						}
					}.bind(this),1000)
					
					//大飞机
					setInterval(function(){
						if( Math.random()>0.7 ){
							this.enemes.add( new Enemy("large").init().move() );
						}
					}.bind(this),1000)
				}
			}
			
		}
	return GameEngine.instance;
}
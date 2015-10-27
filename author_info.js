;(function($){
	var time;
	var d =0;
	$.fn.showauthor=function(options){
		var defaults={
				author_pop_box: '.author_pop_box'
		}
		
		var options=$.extend(defaults,options);
		
		this.each(function(){
			var _this=$(this);
	   		$(this).bind('mouseenter',function(){
			var $this=$(this);
			var current_pop_box=$this.siblings(options.author_pop_box);
			var content_right_p=current_pop_box.find("div.author_pop_right .content_right>p");
			var speed = 0.2;
			content_right_p.each(function(){
				speed +=0.1;
				$(this).css("animation","moveLeft "+speed+"s ease-in-out");
				$(this).css("-webkit-animation","moveLeft "+speed+"s ease-in-out");
				$(this).css("-moz-animation","moveLeft "+speed+"s ease-in-out");
			});
			if(current_pop_box&&current_pop_box.length>0&&current_pop_box.is(":hidden")){
				$this.css("z-index","1000").css("transition","transform 0s");
	           time=setInterval(function(){
	               if(d>360){
	                   d=0;
	               }
	               d+=1;
	               $this.css("transform","rotate("+d+"deg)");
	               }, 50);
	  				current_pop_box.show();
	  			}
	   		});
	   	});
	};
	$.fn.hideauthor=function(options){
		var defaults={
				avatar: '.avatar_box'
		}
		
		var options=$.extend(defaults,options);
		
		this.each(function(){
			//实现功能的代码
			var _this=$(this);
			$(this).bind("mouseleave",function(){
			var $this=$(this);
			var current_avatar_box=$this.siblings(options.avatar);
			if($this && $this.length>0 && !$this.is(":hidden")){
				current_avatar_box.css("z-index","0");
				if(time){
	                    clearInterval(time);
	                    d=0;
	                    current_avatar_box.css("transform","rotate(0deg)");
	                    current_avatar_box.css("transition","transform 1s");
	                    }
	   				$this.hide();
	   			}
			});
		});
	}
}(jQuery));
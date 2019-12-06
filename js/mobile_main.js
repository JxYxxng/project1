$(function(){
	// 팝업
	$("body, .dim").addClass("static");
	$(".close").click(function(e){
		e.preventDefault();
		$(".pop").hide();
		$("body, .dim").removeClass("static");
	});

	// top 버튼
	$(".top").click(function(e){
		e.preventDefault();
		$("html").animate({"scrollTop":0}, 800);
	});
	$(window).scroll(function(){
		if($(window).scrollTop() > 100){
			$(".top").addClass("active");
		}
		else{
			$(".top").removeClass("active");
		}
	});

	// 키비주얼
	var n1=0;
	var distance=0;
	var bt=0;
	setInterval(function(){
		n1=n1+1;
		distance=n1*-1*100+"%";

		$(".key ul").animate({left:distance},300,function(){
			$(".key ul").append($(".key li:first-child"));
			n1=n1-1;
			distance=n1*-1*100+"%";
			$(".key ul").animate({left:distance}, 0);
		});
	}, 3000);
	setInterval(function(){
		if(bt<3){
			bt=bt+1;
		}
		else{
			bt=0;
		}
		$(".key_button li").removeClass("active");
		$(".key_button li").eq(bt).addClass("active");
	}, 3000);

	// 소식 버튼 높이 지정
	var w;
	var button_h;
	var timer; /**/

	$(window).resize(function(){
		clearTimeout(timer);

		timer=setTimeout(function(){
			button_h=$(".button li a").width();
			$(".button li a").css({"height": button_h, "line-height": button_h+"px"});
		}, 10);
	});
	$(window).trigger("resize");

	// gnb
	$(".tab").click(function(e){
		e.preventDefault();
		if($("#header").hasClass("active")){
			$("#header").removeClass("active");
			$("body").removeClass("static");
			$("#gnb > ul > li > a").removeClass("active");
			$("#gnb > ul > li > a ").next("ul").slideUp(300);
		}
		else{
			$("#header").addClass("active");
			$("body").addClass("static");
		}
	});
	$("#gnb > ul > li > a ").click(function(e){
		e.preventDefault();
		if($(this).hasClass("active")){
			$(this).removeClass("active");
			$(this).next("ul").slideUp(300);
		}
		else{
			$("#gnb > ul > li > a").removeClass("active");
			$("#gnb ul ul").slideUp(300);
			$(this).addClass("active");
			$(this).next("ul").slideDown(300);
		}
	});

	// 이벤트 배너 갤러리 버튼
	var n2=0;
	$(".banner_list li").eq(0).addClass("timer");
	$(".banner_controll li").eq(0).addClass("timer");
	setInterval(function(){
		if(n2<2){
			n2=n2+1;
		}
		else {
			n2=0;
		}
		// console.log(n);
		$(".banner_list li").removeClass("timer");
		$(".banner_list li").eq(n2).addClass("timer");
		$(".banner_controll li").removeClass("timer");
		$(".banner_controll li").eq(n2).addClass("timer");
	}, 3000);

});

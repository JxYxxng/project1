$(function(){

	// 팝업
	$("body, .dim").addClass("static");
	$(".close").click(function(e){
		e.preventDefault();
		$(".pop").hide();
		$("body, .dim").removeClass("static");
	});

	var n1=0;

	// 키비주얼
	$(".keyvisual_inner li").eq(0).addClass("active");

	$(".controlls li").click(function(e){
		e.preventDefault();

		n1=$(this).index();
		myFn1();
	});

	// 키비주얼 버튼
	$(".right").click(function(e){
		e.preventDefault();
		if(n1 < 4){
			n1= n1+1;
		}
		else{
			n1=0;
		}
		myFn1();
	});
	$(".left").click(function(e){
		e.preventDefault();
		if(n1 >= 1){
			n1= n1-1;
		}
		else{
			n1=4;
		}
		myFn1();
	});

	// 키비주얼 자동슬라이드
	setInterval(function () {
		if(n1<4){
			n1=n1+1;
		}
		else{
			n1=0;
		}
		myFn1();
	}, 5000);

	function myFn1(){
		$(".keyvisual_inner li").removeClass("active");
		$(".keyvisual_inner li").eq(n1).addClass("active");
		$(".controlls li").removeClass("active");
		$(".controlls li").eq(n1).addClass("active");
	}


	// 메뉴 GNB
	$("#GNB").hover(
		function(){
			$(this).parent().addClass("on");},
		function(){
			$(this).parent().removeClass("on");}
	);


	// 메뉴 배경 on
	$("#GNB > ul > li:first-child > a").focusin(function(){
		$(".menu_zone_inner").addClass("on");
		$("#GNB .gnb_bg").addClass("on");
	});
	$("#GNB li:last-child li:last-child").focusout(function(){
		$(".menu_zone_inner").removeClass("on");
		$("#GNB .gnb_bg").removeClass("on");
	});
	// 1뎁스 on
	$("#GNB > ul > li > a").focusin(function(){
		$(this).parent().addClass("on");
		//console.log("in");
	});
	$("#GNB ul ul li:last-child").focusout(function(){
		$(this).parent().parent().removeClass("on");
		//console.log("out");
	});


	// 2뎁스 on
	$("#GNB ul ul a").focusin(function(){
		$(this).parent().addClass("on");
	});
	$("#GNB ul ul a").focusout(function(){
		$(this).parent().removeClass("on");
	});


	// 공지사항, 이벤트
	var n2=0;
	$(".main_tab li").click(function(e){
		e.preventDefault();
		n2=$(this).index();
		console.log(n2);
		$(".main_tab li a").removeClass("active");
		$(".main_tab li a").eq(n2).addClass("active");
		$(".main_panel ul").removeClass("active");
		$(".main_panel ul").eq(n2).addClass("active");
	});


	//배너 갤러리 자동슬라이드
	var n3=0;
	var distance=0;
	setInterval(function () {
		if(n3<2){
			n3=n3+1;
		}
		else {
			n3=0;
		}

		myFn2();
	}, 5000);
	$(".campus_pager li").click(function(e){
		e.preventDefault();
		n3=$(this).index();

		myFn2();
	});
	function myFn2(){
		distance=-1*n3*368;
		$(".campus_pager a").removeClass("active");
		$(".campus_pager li").eq(n3).find("a").addClass("active");
		$(".campus_wrap_moving").animate({"left":distance}, 300);
	}


	// 지역 버튼
	$(".a_sel_local").click(function(e){
		e.preventDefault();
		if($(".sel_local").is(":visible")){
			$(".sel_local").slideUp(300);
		}
		else {
			$(".sel_local").slideDown(300);
		}
			$(".sel_center").slideUp(300);
	});

	$(".a_sel_center").click(function(e){
		e.preventDefault();
		if( $("a.a_sel_local").text() == "시/도"){
		}
		else if($(".sel_center").is(":visible")){
			$(".sel_center").slideUp(300);
		}
		else{
			$(".sel_center").slideDown(300);
		}
		$(".sel_local").slideUp(300);
	});

	var local=0;
	var local_name="";
	$(".sel_local li").click(function(e){
		e.preventDefault();
		local=$(this).index();
		local_name=$(this).text();
		// console.log(local_name);

		$(".a_sel_local").text(local_name);
		$(".sel_local").slideUp(300);
		$(".sel_center > li").hide();
		$(".sel_center > li").eq(local).show();
	});


	// 하단 배너 슬라이드
	var n4=0;
	var distance2=0;
	$(".next").click(function(e){ // 맨앞을 맨뒤로
		e.preventDefault();

		n4=n4+1;
		distance2=-1*167*n4;
		$(".site_logo ul").animate({left:distance2}, 300, function(){
			$(".site_logo ul").append($(".site_logo li:first-child"));
			n4=n4-1;
			distance2=-1*167*n4;
			$(".site_logo ul").animate({left:distance2}, 0);
		});
	});
	$(".prev").click(function(e){
		e.preventDefault();

		$(".site_logo ul").prepend($(".site_logo li:last-child"));
		n4=n4+1;
		distance2=-1*167*n4;

		$(".site_logo ul").animate({left:distance2}, 0, function(){
			n4=n4-1;
			distance2=-1*167*n4;
			$(".site_logo ul").animate({left:distance2}, 300);
		});
	});
});

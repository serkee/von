$(function(){
	formHandler();
	naviHandler();
	slideHandler();
	tabHandler();
})

//jquery-ui
function formHandler(){
	$(".select-form > select").selectmenu();
	$(".accordion-form").accordion();
};

//네비게이션
function naviHandler(){
	$(".header .util-area > a.ham").click(function(){
		$(this).toggleClass("on");
		$(".header, .header .navi-area").toggleClass("on");
	});

	$(".header .navi-area .navi .list > ul > li").mouseover(function(){
		$(this).parent().removeClass("top-1 top-2");
		if($(this).index() == 5) $(this).parent().addClass("top-1");
		else if($(this).index() == 7) $(this).parent().addClass("top-2");
	}).mouseout(function(){
		$(this).parent().removeClass("top-1 top-2");
	});

	$(".footer .btn-top").click(function(){
		if($('body').hasClass("sub")) $('html, body').animate({scrollTop: '0'}, 500);
		else $.fn.fullpage.moveTo('home',1);
		
	});


	//.header .navi-area .navi .list
};

//guide 상단 슬라이드
function slideHandler(){
	var _num = 0
	var $imgList = $(".signup .slide-area .img-list > ul");
	var $txtList = $(".signup .slide-area .txt-list > li");
	var $dotList = $(".signup .slide-area .dot-list > li");
	var $arrList = $(".signup .slide-area .arr-area > button");
	$dotList.click(function(){
		rollingFn($(this).index());
	});
	$arrList.click(function(){
		if($(this).hasClass("prev")) _num--;
		else _num++;
		rollingFn(_num);
	});
	rollingFn(0);
	function rollingFn(arg){
		_num = arg;
		$txtList.removeClass('on');
		$dotList.removeClass('on');
		$txtList.eq(arg).addClass('on');
		$dotList.eq(arg).addClass('on');

		$arrList.attr("disabled",false)
		console.log(arg,  $txtList.length);
		if(!arg){
			$arrList.eq(0).attr("disabled",true)
			console.log($arrList.eq(0));
		}
		if(arg == $txtList.length-1) $arrList.eq(1).attr("disabled",true)

		_l = 63.5*arg;
		$imgList.css({"transform":"translateX(-"+_l+"rem)"});
	}
}
function tabHandler(){

	$(".tab-area > ul > li > button").click(function(){
		_idx = $(this).parent().index();
		follingFn(_idx);
	});
	follingFn(0)
	function follingFn(arg){
		$(".contents-area .tab-area > ul > li").removeClass("select");
		$(".contents-area .tab-area > ul > li").eq(arg).addClass("select");

		$(".tab-con-area > .tab-con-unit").addClass("hide");
		$(".tab-con-area > .tab-con-unit").eq(arg).removeClass("hide");
	}
};

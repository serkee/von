var mainFp;

$(function(){
	fullpageHandler();
	s2Handler();
	s4Handler();
});

// 메인 프레임 풀페이지
function fullpageHandler(){
	mainFp = $(".container").fullpage({
		normalScrollElements: '.footer',
		navigation:true,
    	navigationTooltips:['intro', 'V ON Class란', 'V ON 커리큘럼', 'V ON 강사소개', 'V ON 청담 & April', 'V ON 가능 지역 찾기', 'V ON Class Review', 'V ON Class EVENT', 'footer'],
		    anchors:['home', 'class', 'curriculum', 'teacher', 'academy', 'local', 'review', 'event', ''],
		showActiveTooltip:true,
		navigationPosition:"left",
		onLeave: function(origin, destination, direction){
			//console.log(origin, destination, direction);
			if(destination == 1) $(".header, .fp-show-active > ul").removeClass("down");
			else $(".header, .fp-show-active > ul").addClass("down");
		}
		// afterLoad: function(anchorLink, index){
		// 	console.log(index);
		// }
	});
}

//V ON Class란
function s2Handler(){
	var $imgList = $(".slide-area .img-list");
	var $txtList = $(".slide-area .txt-list > li");
	var $dotList = $(".slide-area .dot-list > li");
	$dotList.click(function(){
		rollingFn($(this).index());
	});
	rollingFn(0);
	function rollingFn(arg){
		$txtList.removeClass('on');
		$dotList.removeClass('on');
		$txtList.eq(arg).addClass('on');
		$dotList.eq(arg).addClass('on');

		
		_h = 49.4*arg;
		//$imgList.css({"top":-_h+"rem"});
		$imgList.css({"transform":"translateY(-"+_h+"rem)"});
	}
}

//V ON 강사소개
function s4Handler(){
	var $tab = $(".section.s4 .tab-area > ul > li");
	var $tabBtn = $tab.find("> button");
	var $arrBtn = $(".section.s4 .tab-area .arr > button");
	var $list = $(".section.s4 .list");
	var _num = 0;
	var $listSelect;

	$tabBtn.click(function(){
		//console.log($(this).parent().index());
		$tab.removeClass("on");
		$(this).parent().addClass("on");
		rollingFn($(this).parent().index());
	});

	rollingFn(0);
	function rollingFn(arg){
		$list.attr("style","");
		$tab.removeClass("on");
		$list.removeClass("on");
		$tab.eq(arg).addClass("on");
		$listSelect = $list.eq(arg);
		$listSelect.addClass("on");
		if($listSelect.find("> li").length < 4) $arrBtn.attr("disabled",true);
		else{
			_num = 0;
			$arrBtn.eq(0).attr("disabled",true);
			$arrBtn.eq(1).attr("disabled",false);
			$listSelect.css({"transform": "translateX(0);"})
			//$listSelect.css({"transform": "translateX(-"+43.3*_num+"rem);"})
    		//transform: translateX(-433px);
		}
	}

	$arrBtn.click(function(){
		if($(this).hasClass("prev")){
			_num--;
		}else{
			_num++;
		}
		console.log(_num);
		$arrBtn.attr("disabled",false);
		if(!_num){
			$arrBtn.eq(0).attr("disabled",true);
		}
		if($listSelect.find("> li").length - 3 == _num){
			$arrBtn.eq(1).attr("disabled",true);	
		}
		$listSelect.css({"transform": "translateX(-"+43.3*_num+"rem)"})
	});
}
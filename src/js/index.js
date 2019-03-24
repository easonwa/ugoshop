$(function(){
	// 公告移入效果
	$notics = $(".noticeContent li")
	$.each($notics,function(index,value){
		$(value).hover(function(){
			$(this).css('color','#f74333');
		},function(){
			$(this).css('color','#666666');
		})
	})
	//公告轮播
	function autoPlay(){
		$oUl=$('.noticeContent')
		var timer = setInterval(function(){
			var oLi = document.querySelectorAll('.noticeContent li')[0];
			$oUl.append($(oLi).clone());
			$oUl.animate({top:$oUl.offset().top-28},1000,function(){
				$(oLi).remove();
				$oUl.css('top','0');
			})
		},3000)
	}autoPlay()	
	//小导航栏移入效果
	$sNavs = $('.ht-main .sNav a');
	$sNavs.each(function(index,value){
		$(value).hover(function(){
			$(this).css('color','#f74333');
		},function(){
			$(this).css('color','#666666');
		})
	})
	//二维码显示效果
	$('.ht-main .sNav a:last-child').hover(function(){
		$('.downApp').css('display','block');
	},function(){
		$('.downApp').css('display','none');
	})
	//导航栏背景颜色改变
	$('.navMain p a:not(first-child)').each(function(index,value){
		$(value).hover(function(){
			$(this).css('background','#e20700');
		},function(){
			$(this).css('background','#f70800');
		})
	})
 	$('.navMain p #first').hover(function(){
 		$(this).css('background','#e20700');
	},function(){
 		$(this).css('background','#bc0600');
 	})
	// 在售分类显隐
	$('nav .navMain span').hover(function(){
		$(this).css('background-position','0 -133px');
		$('.menuBar').css('display','block');
	},function(){
		$(this).css('background-position','0 -65px');
		$('.menuBar').css('display','none');
	})
	$('.menuBar').hover(function(){
		$('nav .navMain span').css('background-position','0 -133px');
		$('.menuBar').css('display','block');
	},function(){
		$('nav .navMain span').css('background-position','0 -65px');
		$('.menuBar').css('display','none');
	})
	//在售分类字体颜色
	$('.menuBar .kitchen a').hover(function(){
		$(this).css('color','#ff587b');
	},function(){
		$(this).css('color','#222222');
	})
	$('.menuBar .food a').hover(function(){
		$(this).css('color','#1290ff');
	},function(){
		$(this).css('color','#222222');
	})
	$('.menuBar .health a').hover(function(){
		$(this).css('color','#56b418');
	},function(){
		$(this).css('color','#222222');
	})
	$('.menuBar .wear a').hover(function(){
		$(this).css('color','#ff7e9c');
	},function(){
		$(this).css('color','#222222');
	})
	$('.menuBar .jewelry a').hover(function(){
		$(this).css('color','#ff7f40');
	},function(){
		$(this).css('color','#222222');
	})
	$('.menuBar .cosmetics a').hover(function(){
		$(this).css('color','#70abff');
	},function(){
		$(this).css('color','#222222');
	})
	$('.menuBar .barContent a').each(function(index,value){
		$(value).hover(function(){
			$(this).css('color','#f74333')
		},function(){
			$(this).css('color','#555555')
		})
	})
	// 轮播按钮显隐
	$('.bannerBox').mouseenter(function(){
		$('.leftPoint').css('display','block');
		$('.rightPoint').css('display','block')
	})
	$('.bannerBox').mouseleave(function(){
		$('.leftPoint').css('display','none');
		$('.rightPoint').css('display','none')
	})
	//右侧功能键效果
	$('.right-funct .sign-in li:first-child').mouseenter(function(){
		$('.right-funct .sign-in .first-li').css('display','block');
	})
	$('.right-funct .sign-in li:first-child').mouseleave(function(){
		$('.right-funct .sign-in .first-li').css('display','none');
	})
	//关注
	$('.right-funct .sign-in li:last-child').mouseenter(function(){
		$('.right-funct .sign-in .last-li').css('display','block');
	})
	$('.right-funct .sign-in li:last-child').mouseleave(function(){
		$('.right-funct .sign-in .last-li').css('display','none');
	})
	//下半部分功能键
	$('.right-funct .right-bottom li:first-child').mouseenter(function(){
		$('.right-funct .right-bottom li:first-child>img').css('display','block');
	})
	$('.right-funct .right-bottom li:first-child').mouseleave(function(){
		$('.right-funct .right-bottom li:first-child>img').css('display','none');
	})
	$('.right-funct .right-bottom li:first-child').css('background-position','-47px -184px');
	$('.right-funct .right-bottom li:first-child').hover(function(){
		$(this).css('background-position','-47px -184px');
	},function(){
		$(this).css('background-position','0 -184px')
	})
	$('.right-funct .right-bottom li:eq(1)').mouseenter(function(){
		$('.right-funct .right-bottom li:eq(1)>span').css('display','block');
		
	})
	$('.right-funct .right-bottom li:eq(1)').mouseleave(function(){
		$('.right-funct .right-bottom li:eq(1)>span').css('display','none');
	})
	$('.right-funct .right-bottom li:eq(2)').mouseenter(function(){
		$('.right-funct .right-bottom li:eq(2)>span').css('display','block');
		
	})
	$('.right-funct .right-bottom li:eq(2)').mouseleave(function(){
		$('.right-funct .right-bottom li:eq(2)>span').css('display','none');
	})
	$('.right-funct .right-bottom li:eq(2)').click(function(){
		$(window).scrollTop(0);
		
	})
})
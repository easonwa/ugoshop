$(function(){
	var $imgBox = $('.img-box');
	var $float = $('.img-float');
	var $bigImgBox = $('.bigImg-box');
	var $mark = $('.img-mark');
	var $bigImg = $('.bigImg-box img')
	var box = document.querySelector('.img-box')
// 	$imgBox.hover(function(evt){
// 		$float.css('display','block');
// 		$bigImgBox.css('display','block');
// 	},function(){
// 		$float.css('display','none');
// 		$bigImgBox.css('display','none');
// 	})
	$imgBox.mouseenter(function(){
		$float.css('display','block');
		$bigImgBox.css('display','block');
	})
	$imgBox.mouseleave(function(){
		$float.css('display','none');
		$bigImgBox.css('display','none');
	})
	console.log($(document))
	$(document).mousemove(function(evt){
		let left = evt.pageX - $imgBox.offset().left-$float.width()/2;
		let top = evt.pageY - $imgBox.offset().top-$float.height()/2;
		if(left<=0){
			left =0;
		}else if(left>=$mark.width()-$float.width()){
			left=$mark.width()-$float.width();
		}
		if(top<=0){
			top =0;
		}else if(top>=$mark.height()-$float.height()){
			top = $$mark.height()-$float.height();
		}
		$float.css({'left':`${left}px`,'top':`${top}px`})
		let pX = left/($mark.width()-$float.width());
		let pY = top/($mark.height()-$float.height());
		$bigImg[0].style.left=-pX*($bigImg[0].offsetWidth-$bigImgBox[0].offsetWidth)+'px';
		$bigImg[0].style.top =-pY*($bigImg[0].offsetHeight-$bigImgBox[0].offsetHeight)+'px';
	})
	//商品信息
	$(window).scroll(function(){
		if($(window).scrollTop()>=887){
			$('.goods-meg-nav').css({'position':'fixed','top':'0'})
		}else{
			$('.goods-meg-nav').css({'position':''});
		}
			
	})
	$('.goods-meg-nav li').first().css({'color':'red','background':'white','border-top':'2px solid red','border-bottom':'none'})
	$('.goods-meg-nav').delegate('li','click',function(){
		$('.goods-meg-nav li').css({'background':'#f5f5f5','border':'1px solid #e8e8e8','color':'#222'})
		$(this).css({'color':'red','background':'white','border-top':'2px solid red','border-bottom':'none'});
	})
	$('.goods-meg-nav li').first().click(function(){
		$(window).scrollTop(917);
	})
	$('.goods-meg-nav li:nth-child(2)').click(function(){
		$(window).scrollTop(12924);
	})
	$('.goods-meg-nav li').last().click(function(){
		$(window).scrollTop(13750);
	})
	//评论切换
	$('#a').click(function(){
		$('.evaluate li').css('display','block');
		$('.evaluate').css('height','677px');
		$('.none-mesg').css('display','none');
	})
	$('#b').click(function(){
		$('.evaluate li').css('display','block');
		$('.evaluate').css('height','677px');
		$('.none-mesg').css('display','none');
	})
	$('#d').click(function(){
		$('.evaluate li').css('display','none');
		$('.evaluate').css('height','152px');
		$('.none-mesg').css('display','block');
	})
	$('#c').click(function(){
		$('.evaluate li').css('display','none');
		$('.evaluate').css('height','152px');
		$('.none-mesg').css('display','block');
	})
	//导航背景
	var $sNavs = $('.ht-main .sNav a');
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
	$('.downApp').hover(function(){
		$('.downApp').css('display','block');
	},function(){
		$('.downApp').css('display','none');
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
	var $notics = $(".noticeContent li");
	$.each($notics,function(index,value){
		$(value).hover(function(){
			$(this).css('color','#f74333');
		},function(){
			$(this).css('color','#666666');
		})
	})
	//公告轮播
	function autoPlay(){
		var $oUl=$('.noticeContent');
		var timer = setInterval(function(){
			var oLi = document.querySelectorAll('.noticeContent li')[0];
			$oUl.append($(oLi).clone());
			$oUl.animate({top:$oUl.offset().top-28},1000,function(){
				$(oLi).remove();
				$oUl.css('top','0');
			})
		},3000)
		$oUl.mouseenter(function(){
			clearInterval(timer);
		})
		$oUl.mouseleave(function(){
			autoPlay()
		})
	}autoPlay()	
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
	
	
})
"use strict";

$(function () {
  // 公告移入效果
  var $notics = $(".noticeContent li");
  $.each($notics, function (index, value) {
    $(value).hover(function () {
      $(this).css('color', '#f74333');
    }, function () {
      $(this).css('color', '#666666');
    });
  }); //公告轮播

  function autoPlay() {
    var $oUl = $('.noticeContent');
    var timer = setInterval(function () {
      var oLi = document.querySelectorAll('.noticeContent li')[0];
      $oUl.append($(oLi).clone());
      $oUl.animate({
        top: $oUl.offset().top - 28
      }, 1000, function () {
        $(oLi).remove();
        $oUl.css('top', '0');
      });
    }, 3000);
    $oUl.mouseenter(function () {
      clearInterval(timer);
    });
    $oUl.mouseleave(function () {
      autoPlay();
    });
  }

  autoPlay(); //小导航栏移入效果

  var $sNavs = $('.ht-main .sNav a');
  $sNavs.each(function (index, value) {
    $(value).hover(function () {
      $(this).css('color', '#f74333');
    }, function () {
      $(this).css('color', '#666666');
    });
  }); //二维码显示效果

  $('.ht-main .sNav a:last-child').hover(function () {
    $('.downApp').css('display', 'block');
  }, function () {
    $('.downApp').css('display', 'none');
  }); //导航栏背景颜色改变

  $('.navMain p a:not(first-child)').each(function (index, value) {
    $(value).hover(function () {
      $(this).css('background', '#e20700');
    }, function () {
      $(this).css('background', '#f70800');
    });
  });
  $('.navMain p #first').hover(function () {
    $(this).css('background', '#e20700');
  }, function () {
    $(this).css('background', '#bc0600');
  }); // 在售分类显隐

  $('nav .navMain span').hover(function () {
    $(this).css('background-position', '0 -133px');
    $('.menuBar').css('display', 'block');
  }, function () {
    $(this).css('background-position', '0 -65px');
    $('.menuBar').css('display', 'none');
  });
  $('.menuBar').hover(function () {
    $('nav .navMain span').css('background-position', '0 -133px');
    $('.menuBar').css('display', 'block');
  }, function () {
    $('nav .navMain span').css('background-position', '0 -65px');
    $('.menuBar').css('display', 'none');
  }); //在售分类字体颜色

  $('.menuBar .kitchen a').hover(function () {
    $(this).css('color', '#ff587b');
  }, function () {
    $(this).css('color', '#222222');
  });
  $('.menuBar .food a').hover(function () {
    $(this).css('color', '#1290ff');
  }, function () {
    $(this).css('color', '#222222');
  });
  $('.menuBar .health a').hover(function () {
    $(this).css('color', '#56b418');
  }, function () {
    $(this).css('color', '#222222');
  });
  $('.menuBar .wear a').hover(function () {
    $(this).css('color', '#ff7e9c');
  }, function () {
    $(this).css('color', '#222222');
  });
  $('.menuBar .jewelry a').hover(function () {
    $(this).css('color', '#ff7f40');
  }, function () {
    $(this).css('color', '#222222');
  });
  $('.menuBar .cosmetics a').hover(function () {
    $(this).css('color', '#70abff');
  }, function () {
    $(this).css('color', '#222222');
  });
  $('.menuBar .barContent a').each(function (index, value) {
    $(value).hover(function () {
      $(this).css('color', '#f74333');
    }, function () {
      $(this).css('color', '#555555');
    });
  }); // 轮播按钮显隐

  $('.bannerBox').mouseenter(function () {
    $('.leftPoint').css('display', 'block');
    $('.rightPoint').css('display', 'block');
  });
  $('.bannerBox').mouseleave(function () {
    $('.leftPoint').css('display', 'none');
    $('.rightPoint').css('display', 'none');
  }); //右侧功能键效果

  $('.right-funct .sign-in li:first-child').mouseenter(function () {
    $('.right-funct .sign-in .first-li').css('display', 'block');
  });
  $('.right-funct .sign-in li:first-child').mouseleave(function () {
    $('.right-funct .sign-in .first-li').css('display', 'none');
  }); //关注

  $('.right-funct .sign-in li:last-child').mouseenter(function () {
    $('.right-funct .sign-in .last-li').css('display', 'block');
  });
  $('.right-funct .sign-in li:last-child').mouseleave(function () {
    $('.right-funct .sign-in .last-li').css('display', 'none');
  }); //下半部分功能键

  $('.right-funct .right-bottom li:first-child').mouseenter(function () {
    $('.right-funct .right-bottom li:first-child>img').css('display', 'block');
  });
  $('.right-funct .right-bottom li:first-child').mouseleave(function () {
    $('.right-funct .right-bottom li:first-child>img').css('display', 'none');
  });
  $('.right-funct .right-bottom li:first-child').css('background-position', '-47px -184px');
  $('.right-funct .right-bottom li:first-child').hover(function () {
    $(this).css('background-position', '-47px -184px');
  }, function () {
    $(this).css('background-position', '0 -184px');
  });
  $('.right-funct .right-bottom li:eq(1)').mouseenter(function () {
    $('.right-funct .right-bottom li:eq(1)>span').css('display', 'block');
  });
  $('.right-funct .right-bottom li:eq(1)').mouseleave(function () {
    $('.right-funct .right-bottom li:eq(1)>span').css('display', 'none');
  });
  $('.right-funct .right-bottom li:eq(2)').mouseenter(function () {
    $('.right-funct .right-bottom li:eq(2)>span').css('display', 'block');
  });
  $('.right-funct .right-bottom li:eq(2)').mouseleave(function () {
    $('.right-funct .right-bottom li:eq(2)>span').css('display', 'none');
  });
  $('.right-funct .right-bottom li:eq(2)').click(function () {
    $(window).scrollTop(0);
  }); //直播倒计时

  $.getJSON('../json/count-down.json', function (obj) {
    var intSecond = parseInt(obj.hours * 3600 + obj.minutes * 60 + obj.seconds);
    setInterval(function () {
      var hour = 0;
      var minute = 0;
      var second = 0;

      if (intSecond > 0) {
        hour = Math.floor(intSecond / 3600);
        minute = Math.floor((intSecond - hour * 3600) / 60);
        second = Math.floor(intSecond - hour * 3600 - minute * 60);
      }

      if (hour <= 9) {
        hour = '0' + hour;
      }

      ;

      if (minute <= 9) {
        hour = '0' + minute;
      }

      ;

      if (second <= 9) {
        hour = '0' + second;
      }

      ;
      $('.count-down .hours').html(hour + ':');
      $('.count-down .minutes').html(minute + ':');
      $('.count-down .seconds').html(second);
      intSecond--;
    }, 1000);
  }); //动态创建商品图片

  $.getJSON("../json/goodchoice.json", function (arr) {
    for (var i = 0, len = arr.length; i < len; i++) {
      $('.gdchoice-content-box>ul').append("<li>\n\t \t\t\t\t<div class=\"gdchoice-content-main\">\n\t \t\t\t\t\t<img src=\"".concat(arr[i].src, "\" class=\"gdchoice-content-img\">\n\t \t\t\t\t\t<p class=\"img-tits\">").concat(arr[i].imgTits, "</p>\n\t \t\t\t\t\t<p class=\"small-tit\">").concat(arr[i].smallTit, "</p>\n\t\t\t\t\t\t<p class=\"price-bottom\">\n\t\t\t\t\t\t\t<span>").concat(arr[i].nowPrice, " <i>").concat(arr[i].prePrice, "</i></span>\n\t \t\t\t\t\t\t<b><em>").concat(arr[i].people, "</em>\u5DF2\u8D2D\u4E70</b>\n\t\t\t\t\t\t</p>\n\t \t\t\t\t</div>\n\t\t\t\t</li>"));
    }
  }); //footer按钮

  $('footer>.footer-nav .footer-nav-link .footer-r-button').click(function () {
    if ($(this).html() == '▼') {
      $(this).html('▲');
    } else {
      $(this).html('▼');
    } //alert('('+$(this).html()+')')

  }); //banner图

  var index = 0;
  var $banBox = $('.banner-imgbox2'); //自动轮播

  function autoPlays() {
    var timer = null;
    timer = setInterval(function () {
      var $banBox = $('.banner-imgbox2');

      if (index === 3) {
        index = 1;
        $banBox.css('left', '0');
      }

      $banBox.animate({
        left: -1920 * index
      }, 1000), bottomPo();
      index++;
    }, 3000);
    $('.mark').mouseenter(function () {
      clearInterval(timer);
    });
    $('.mark').mouseleave(function () {
      autoPlays();
    });
  }

  autoPlays(); //console.log($('.banner-imgbox2').children().length)
  //轮播左按钮

  $('.leftPoint').click(function () {
    index--;

    if (index < 0) {
      index = 1;
      $banBox.css('left', -3840);
    }

    $banBox.animate({
      left: -1920 * index
    }, 1000);
    bottomPo();
    console.log(index);
  }); //轮播右按钮

  $('.rightPoint').click(function () {
    index++;

    if (index > 2) {
      index = 1;
      $banBox.css('left', 0);
    }

    $banBox.animate({
      left: -1920 * index
    }, 1000);
    bottomPo();
    console.log(index);
  }); //小按钮

  function bottomPo() {
    var $bP1 = $('.bottom-ponit1');
    var $bP2 = $('.bottom-ponit2');

    if (index == $bP1.attr('index')) {
      $bP1.css('background', '#f73100');
      $bP2.css('background', '#ece5dd');
    } else if (index == $bP2.attr('index')) {
      $bP2.css('background', '#f73100');
      $bP1.css('background', '#ece5dd');
    } else {
      $bP1.css('background', '#f73100');
      $bP2.css('background', '#ece5dd');
    } //console.log($bP1.attr('index'));

  }

  var $bP1 = $('.bottom-ponit1');
  var $bP2 = $('.bottom-ponit2');
  $bP1.click(function () {
    $banBox.animate({
      left: 0
    }, 1000);
    $bP1.css('background', '#f73100');
    $bP2.css('background', '#ece5dd');
  });
  $bP2.click(function () {
    $banBox.animate({
      left: -1920
    }, 1000);
    $bP2.css('background', '#f73100');
    $bP1.css('background', '#ece5dd');
  });
});
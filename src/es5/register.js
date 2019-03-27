"use strict";

$(function () {
  //小导航栏移入效果
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
  });
  $('.downApp').hover(function () {
    $('.downApp').css('display', 'block');
  }, function () {
    $('.downApp').css('display', 'none');
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
  });
});
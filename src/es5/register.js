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
  }); //表单验证

  var $regN = $('#register-name');
  var $regNameWarn = $('.register-name-warn');
  var $regPW = $('#register-password');
  var $regPassWarn = $('.register-password-warn');
  var $register = $('.register-point');
  var cookieStr = $.cookie('userlist') ? $.cookie('userlist') : '';
  var cookieObj = converCookieStrToCoookieObj(cookieStr); //账号部分

  $regN.focus(function () {
    $(this).parent().css('border-color', '#5fc100');
  });
  $regN.blur(function () {
    var re = /\w{3,20}/;
    $(this).parent().css('border-color', '#a2a2a2');

    if (!re.test($(this).val())) {
      $regNameWarn.css('display', 'block');
    } else if (re.test($(this).val())) {
      $regNameWarn.css('display', 'none');
      $('#register-img').css('display', 'inline-block');
    }
  }); //密码部分

  $regPW.focus(function () {
    $(this).parent().css('border-color', '#5fc100');
    $regPassWarn.css('display', 'none');
  });
  $regPW.blur(function () {
    $(this).parent().css('border-color', '#a2a2a2');
  });
  $register.click(function () {
    if ($regPW.val() === '') {
      $regPassWarn.css('display', 'block');
    } else {
      if (!cookieObj[$regN.val()]) {
        $('.mask').css('display', 'block');
        console.log('账号不正确');
      } else {
        if (!($regPW.val() === cookieObj[$regN.val()].password)) {
          $('.mask').css('display', 'block');
          console.log('密码不正确');
        } else {
          alert('登录成功');
        }
      }
    }
  });
  $('.close').click(function () {
    $('.mask').css('display', 'none');
  }); // 	{"13832971109":{"userId":"13832971109","password":"a123456"},
  // 	"13832971108":{"userId":"13832971108","password":"a123456"},
  // 	"13832971107":{"userId":"13832971107","password":"a123456"}}
  // 	
  //工具

  function converCookieStrToCoookieObj(cookStr) {
    if (!cookStr) {
      return {};
    }

    return JSON.parse(cookStr);
  }
});
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
  }); //表单正则

  var autoPlay = null;
  var $phoneNum = $('#phoneNum');
  var $checkNum = $('#checkNum');
  var $checkText = $('.login-check-numtext');
  var $changeNum = $('#change-num');
  var $passWord = $('#login-password');
  var $checkPW = $('#login-passworda');
  var $checkNum = $("#checkNum");
  var userId = $phoneNum.val(); //手机号部分

  $phoneNum.focus(function () {
    $(this).parent().css('border', '1px solid #5fc100');
    $(this).parent().next().removeClass('login-check-wrong').addClass('login-check-import').html('请输入常用手机号，避免忘记'); //当此部分得焦是密码部分不论正确与否都不提示

    $passWord.parent().next().removeClass('login-check-wrong login-check-import').html('');
  });
  $phoneNum.blur(function () {
    $(this).parent().css('border', '1px solid #a2a2a2');
    $(this).parent().next().removeClass('login-check-import').html('');
    var re = /^(13|14|15|17|18|19)[0-9]{9}$/;
    var str = $(this).val();
    console.log(userId);

    if (str === "") {
      $(this).parent().next().addClass('login-check-wrong').html('请输入手机号');
    } else if (!re.test(str)) {
      $(this).parent().next().addClass('login-check-wrong').html('手机格式不正确，请核对后在输入');
    } else if (re.test(str)) {
      $(this).next().css('background-position', '0 -270px');
    } //console.log($(this).next())

  }); //console.log($phoneNum,$checkNum,$passWord,$checkPW,$checkNum)
  //验证码部分

  function getChecknum() {
    var checkNumStr = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    var checkNums = '';

    for (var i = 0; i < 4; i++) {
      checkNums += checkNumStr.charAt(Math.floor(Math.random() * checkNumStr.length));
    }

    return checkNums;
  }

  $changeNum.click(function () {
    $checkText.html(getChecknum());
  });
  $checkText.html(getChecknum());
  $checkNum.focus(function () {
    $(this).parent().css('border', '1px solid #5fc100');
  });
  $checkNum.blur(function () {
    $(this).parent().css('border', '1px solid #a2a2a2');
  }); //密码部分

  $passWord.focus(function () {
    $(this).parent().css('border', '1px solid #5fc100');
    $(this).parent().next().addClass('login-check-import').html('6-20位，字母、数字或符号的组合');
  });
  $passWord.blur(function () {
    var re1 = /^(13|14|15|17|18|19)[0-9]{9}$/;
    var re2 = /^[0-9a-z@#!$]{6,20}$/;
    var str1 = $phoneNum.val();
    var str2 = $(this).val();

    if (str2 === '') {
      if (!re1.test(str1)) {
        $(this).parent().next().removeClass('login-check-import').addClass('login-check-wrong').html('请输入密码');
        $(this).parent().css('border', '1px solid #a2a2a2');
        $passWord.focus(function () {
          $(this).parent().css('border', '1px solid #5fc100');
          $(this).parent().next().removeClass('login-check-import').addClass('login-check-wrong').html('请输入密码');
        });
      } else {
        $(this).parent().next().removeClass('login-check-import').addClass('login-check-wrong').html('请输入密码');
        $(this).parent().css('border', '1px solid #a2a2a2');
        $passWord.focus(function () {
          $(this).parent().css('border', '1px solid #5fc100');
          $(this).parent().next().removeClass('login-check-wrong').addClass('login-check-import').html('6-20位，字母、数字或符号的组合');
        });
      }
    } else if (str2 !== '' && !re2.test(str2)) {
      if (!re1.test(str1)) {
        $(this).parent().next().removeClass('login-check-import').addClass('login-check-wrong').html('密码长度应是6-20字符，请重新输入');
        $(this).parent().css('border', '1px solid #a2a2a2');
        $passWord.focus(function () {
          $(this).parent().css('border', '1px solid #5fc100');
          $(this).parent().next().removeClass('login-check-import').addClass('login-check-wrong').html('密码长度应是6-20字符，请重新输入');
        });
      } else if (re1.test(str1)) {
        $(this).parent().next().removeClass('login-check-import').addClass('login-check-wrong').html('密码长度应是6-20字符，请重新输入');
        $(this).parent().css('border', '1px solid #a2a2a2');
        $passWord.focus(function () {
          $(this).parent().css('border', '1px solid #5fc100');
          $(this).parent().next().removeClass('login-check-wrong').addClass('login-check-import').html('6-20位，字母、数字或符号的组合');
        });
      }
    } else if (re2.test(str2)) {
      $(this).parent().next().removeClass('login-check-wrong').addClass('login-check-import').html('6-20位，字母、数字或符号的组合');
      $(this).parent().css('border', '1px solid #a2a2a2');
      $(this).next().css('background-positon', '0 -270px');
    }
  }); //验证密码

  $checkPW.focus(function () {
    var str2 = $passWord.val();
    var str3 = $(this).val();

    if (str3 === '') {
      $(this).parent().css('border', '1px solid #5fc100');
      $(this).parent().next().removeClass('login-check-wrong').addClass('login-check-import').html('请再次输入密码');
    } else if (str3 !== str2) {
      $(this).parent().css('border', '1px solid #5fc100');
      $(this).parent().next().removeClass('login-check-import').addClass('login-check-wrong').html('两次密码输入不一致');
    }
  });
  $checkPW.blur(function () {
    var st2 = $passWord.val();
    var str3 = $(this).val();

    if (str3 === '') {
      $(this).parent().css('border', '1px solid #a2a2a2');
      $(this).parent().next().removeClass('login-check-wrong').addClass('login-check-import').html('请再次输入密码');
    } else if (str3 !== "") {
      $(this).parent().css('border', '1px solid #a2a2a2');
      $(this).parent().next().removeClass('login-check-wrong').addClass('login-check-import').html('请再次输入密码');
    } else if (str3 === str2) {
      $(this).parent().css('border', '1px solid #a2a2a2');
      $(this).parent().next().removeClass('login-check-wrong').addClass('login-check-import').html('请再次输入密码');
    }
  }); //提交

  $('.login-submit').click(function () {
    var re1 = /^(13|14|15|17|18|19)[0-9]{9}$/;
    var re2 = /^[0-9a-z@#!$]{6,20}$/;
    var str1 = $phoneNum.val();
    var str2 = $passWord.val();
    var str3 = $checkPW.val();

    if (!re1.test(str1)) {
      //用户名不正确
      $phoneNum.parent().next().addClass('login-check-wrong').html('手机格式不正确，请核对后在输入');
    } else if (re1.test(str1)) {
      if (!re2.test(str2)) {
        //用户名正确但密码格式不对
        $passWord.parent().next().removeClass('login-check-import').addClass('login-check-wrong').html('密码长度应是6-20字符，请重新输入');
      } else {
        if (str3 !== str2) {
          //密码格式正确二次输入密码不正确
          $checkPW.parent().next().removeClass('login-check-import').addClass('login-check-wrong').html('两次密码输入不一致');
        } else {
          if ($checkNum.val() !== $checkText.html()) {
            alert('验证码错误');
            console.log($checkNum.val(), $checkText.html());
          } else {
            //获取cookie
            var cookieStr = $.cookie('userlist') ? $.cookie('userlist') : "";
            var cookieObj = convertCookieStrToCookieObj(cookieStr);

            if (userId in cookieObj) {
              //检查是否注册过
              $phoneNum.parent().next().addClass('login-check-wrong').html('该手机已被注册请直接登录');
            } else {
              cookieObj[userId] = {
                "userId": userId,
                "password": $passWord.val()
              };
            }

            $.cookie('userlist', JSON.stringify(cookieObj), {
              expires: 7,
              path: '/'
            });
            alert($.cookie('userlist'));
          }
        }
      }
    }
  });

  function convertCookieStrToCookieObj(cookieStr) {
    if (!cookieStr) {
      return {};
    }

    return JSON.parse(cookieStr);
  }

  $('footer>.footer-nav .footer-nav-link .footer-r-button').click(function () {
    if ($(this).html() == '▼') {
      $(this).html('▲');
    } else {
      $(this).html('▼');
    } //alert('('+$(this).html()+')')

  });
});
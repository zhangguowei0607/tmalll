"use strict";

$('.main .login .login_Ewm .login_img').click(function () {
  $('.main .login .login_Ewm').css({
    "display": "none"
  });
  $('.main .login .login_Act').css({
    "display": "block"
  });
});
$('.main .login .login_Act .login_img').click(function () {
  $('.main .login .login_Act').css({
    "display": "none"
  });
  $('.main .login .login_Ewm').css({
    "display": "block"
  });
});
$('.main .login .login_Ewm .login_a').click(function () {
  $('.main .login .login_Ewm').css({
    "display": "none"
  });
  $('.main .login .login_Act').css({
    "display": "block"
  });
}); // 实现cookie交互
// 获取页面元素

var oName = $('.login_btn1')[0];
var oPwd = $('.login_btn2')[0]; // 登录按钮

var oBtn = $('.login_Act button')[0]; // 登录按钮点击事件

oBtn.onclick = function () {
  // 获取俩个框中的内容
  var name = oName.value;
  var pwd = oPwd.value; // 判断框中的内容是否为空

  if (!name) {
    alert('用户名不能为空！');
  }

  if (!pwd) {
    alert('密码不能为空！');
  } //获取cookie


  var cookieStr = cookie.get('ID') ? cookie.get('ID') : ''; //转对象

  var cookieObj = abc(cookieStr); //判断输入的用户名在cookie里是否存在

  if (name in cookieObj) {
    //用户名存在判断密码是否一致
    if (cookieObj[name] == pwd) {
      alert('登录成功！');
      location.href = '../main.html';
    } else {
      alert('密码不正确，请重新输入！');
    }
  } else {
    alert('用户名不存在，请注册！');
  }
};
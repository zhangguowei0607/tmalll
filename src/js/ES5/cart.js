"use strict";

$('.search_btn1').mouseenter(function () {
  $('.search_box').css({
    "display": "block"
  });
  $('.search_box p').each(function () {
    var str = $('.search_btn1').val();
    $('.search_box p').click(function () {
      var str1 = $(this).html();
      console.log(str);
      $('.search_btn1').val(str1); //$(this).text(str);
    });
  });
});
$('.search_box').mouseleave(function () {
  $('.search_box').css({
    "display": "none"
  });
});
$('.shop ul li').each(function () {
  $('.shop ul li').mouseenter(function () {
    $(this).addClass('shop_active').siblings().removeClass('shop_active');
  });
});
$('.cart ul li').each(function () {
  $('.cart ul li').mouseenter(function () {
    $(this).addClass('cart_active').siblings().removeClass('cart_active');
  });
}); // 刷新

window.onload = function () {
  // 结算
  var oSum3 = document.querySelector('.cart_close_sum');
  var oNum3 = document.querySelector('.cart_close_num');
  var a = document.querySelector('.cart_shop_text').value;
  var b = document.querySelector('.cart_shop_sum').innerHTML;
  oNum3.innerHTML = a;
  oSum3.innerHTML = b;
  var n = document.querySelector('.cart_close_num').innerHTML;

  if (n > 0) {
    $('.cart_null').css({
      "display": "none"
    });
    $('.cart_close_btn').css({
      "background": "red"
    });
  } else {
    $('.cart_null').css({
      "display": "block"
    });
    $('.cart_close_btn').css({
      "background": "#b0b0b0"
    });
  }
}; // 购物车
//获取页面元素


var oCart = document.querySelector('.cart'); //获取localStorage中的信息

var storage = window.localStorage;
var storageStr = storage.getItem('shop') ? storage.getItem('shop') : '';
var storageObj = abc(storageStr);

for (var shopId in storageObj) {
  var goodInfo = storageObj[shopId];
  console.log(goodInfo); //创建div

  var oDiv = document.createElement('div'); //设置div的class名字

  oDiv.className = 'cart_shop'; // 动态添加div中的内容

  var str = "\n        <dl class=\"cart_shop_title\">\n            <dd>\u5546\u54C1\u4FE1\u606F</dd>\n            <dd>\u5355\u4EF7</dd>\n            <dd>\u6570\u91CF</dd>\n            <dd>\u91D1\u989D</dd>\n            <dd>\u64CD\u4F5C</dd>\n        </dl>\n        <dl class=\"cart_shop_name\">\n            <dt>".concat(goodInfo.store, "</dt>\n        </dl>\n        <dl class=\"cart_shop_details\">\n            <dd>\n                <img src=\"").concat(goodInfo.src, "\" alt=\"\">\n                <p>").concat(goodInfo.name, "</p>\n                <p class=\"cart_shop_color\">\u989C\u8272\u5206\u7C7B\uFF1A<span>").concat(goodInfo.color, "</span></p>\n                <p class=\"cart_shop_size\">\u5C3A\u7801\uFF1A<span>").concat(goodInfo.size, "</span></p>\n            </dd>\n            <dd class=\"cart_shop_price\">\uFFE5").concat(goodInfo.price, "</dd>\n            <dd class=\"cart_shop_num\">\n                <button class=\"cart_shop_up\">-</button>\n                <input type=\"text\" value=\"").concat(goodInfo.num, "\" class=\"cart_shop_text\">\n                <button class=\"cart_shop_down\">+</button>\n            </dd>\n            <dd class=\"cart_shop_sum\">\uFFE5").concat(goodInfo.price * goodInfo.num, "</dd>\n            <dd class=\"cart_shop_remove\">\u5220\u9664</dd>\n        </dl>\n    ");
  oDiv.innerHTML = str;
  oCart.appendChild(oDiv);
} //获取页面中的-按钮 并添加事件


var oMinus = document.querySelector('.cart_shop_up');

oMinus.onclick = function () {
  console.log(1); //找到当前点击的商品id

  var shopId = document.querySelector('.cart_shop_name').firstElementChild.innerHTML; //获取localStorage中的数据

  var storage = window.localStorage;
  var storageStr = storage.getItem('shop') ? storage.getItem('shop') : '';
  var storageObj = abc(storageStr); //判断localStorage中的数据中对应商品数量是否大于1，大于则--

  if (storageObj[shopId].num > 1) {
    storageObj[shopId].num--;
  } //将新的数据存入localStorage


  storage.setItem('shop', JSON.stringify(storageObj)); // 获取文本框元素

  var oText = document.querySelector('.cart_shop_text'); // 获取总金额

  var oSum = document.querySelector('.cart_shop_sum'); //改变文本里面的值

  oText.value = storageObj[shopId].num; //改变金额里的值

  oSum.innerHTML = "\uFFE5".concat(storageObj[shopId].num * storageObj[shopId].price); // 结算

  var oSum2 = document.querySelector('.cart_close_sum');
  var oNum2 = document.querySelector('.cart_close_num');
  oNum2.innerHTML = storageObj[shopId].num;
  oSum2.innerHTML = "".concat(storageObj[shopId].num * storageObj[shopId].price);

  if (oNum2.innerHTML > 0) {
    $('.cart_null').css({
      "display": "none"
    });
    $('.cart_close_btn').css({
      "background": "red"
    });
  } else {
    $('.cart_null').css({
      "display": "block"
    });
    $('.cart_close_btn').css({
      "background": "#b0b0b0"
    });
  }
}; //获取页面中的+按钮 并添加事件


var oPlus = document.querySelector('.cart_shop_down');

oPlus.onclick = function () {
  //找到当前点击的商品id
  var shopId = document.querySelector('.cart_shop_name').firstElementChild.innerHTML; //获取localStorage中的数据

  var storage = window.localStorage;
  var storageStr = storage.getItem('shop') ? storage.getItem('shop') : '';
  var storageObj = abc(storageStr); //localStorage中的数据中对应商品数量++

  storageObj[shopId].num++; //将新的数据存入localStorage

  storage.setItem('shop', JSON.stringify(storageObj)); // 获取文本框元素

  var oText = document.querySelector('.cart_shop_text'); // 获取总金额

  var oSum = document.querySelector('.cart_shop_sum'); //改变文本里面的值

  oText.value = storageObj[shopId].num; //改变合计里的值

  oSum.innerHTML = "\uFFE5".concat(storageObj[shopId].num * storageObj[shopId].price); // 结算

  var oSum2 = document.querySelector('.cart_close_sum');
  var oNum2 = document.querySelector('.cart_close_num');
  oNum2.innerHTML = storageObj[shopId].num;
  oSum2.innerHTML = "".concat(storageObj[shopId].num * storageObj[shopId].price);

  if (oNum2.innerHTML > 0) {
    $('.cart_null').css({
      "display": "none"
    });
    $('.cart_close_btn').css({
      "background": "red"
    });
  } else {
    $('.cart_null').css({
      "display": "block"
    });
    $('.cart_close_btn').css({
      "background": "#b0b0b0"
    });
  }
}; //获取页面中的输出按钮 并添加事件


var oText = document.querySelector('.cart_shop_text');

oText.onblur = function () {
  //找到当前点击的商品id
  var shopId = document.querySelector('.cart_shop_name').firstElementChild.innerHTML; //获取localStorage中的数据

  var storage = window.localStorage;
  var storageStr = storage.getItem('shop') ? storage.getItem('shop') : '';
  var storageObj = abc(storageStr); //判断输入的数为大于0的数字 否则数量默认为1

  var num = parseInt(this.value);

  if (num < 1 || isNaN(num)) {
    num = 1;
  }

  storageObj[shopId].num = num; //将新的数据存入localStorage

  storage.setItem('shop', JSON.stringify(storageObj)); //改变文本里面的值

  this.value = storageObj[shopId].num; // 获取总金额

  var oSum = document.querySelector('.cart_shop_sum'); //改变合计里的值

  oSum.innerHTML = "\uFFE5".concat(storageObj[shopId].num * storageObj[shopId].price); // 结算

  var oSum2 = document.querySelector('.cart_close_sum');
  var oNum2 = document.querySelector('.cart_close_num');
  oNum2.innerHTML = storageObj[shopId].num;
  oSum2.innerHTML = "".concat(storageObj[shopId].num * storageObj[shopId].price);

  if (oNum2.innerHTML > 0) {
    $('.cart_null').css({
      "display": "none"
    });
    $('.cart_close_btn').css({
      "background": "red"
    });
  } else {
    $('.cart_null').css({
      "display": "block"
    });
    $('.cart_close_btn').css({
      "background": "#b0b0b0"
    });
  }
}; //获取页面中的删除按钮 并添加事件


var oDel = document.querySelector('.cart_shop_remove');

oDel.onclick = function () {
  //找到当前点击的商品id
  var shopId = document.querySelector('.cart_shop_name').firstElementChild.innerHTML; //获取localStorage中的数据

  var storage = window.localStorage;
  var storageStr = storage.getItem('shop') ? storage.getItem('shop') : '';
  var storageObj = abc(storageStr); //删除对象中指定的属性

  delete storageObj[shopId]; //将新的数据存入localStorage

  storage.setItem('shop', JSON.stringify(storageObj)); //删除这个ul

  this.parentNode.parentNode.remove(); // 结算

  var oSum2 = document.querySelector('.cart_close_sum');
  var oNum2 = document.querySelector('.cart_close_num');
  oNum2.innerHTML = 0;
  oSum2.innerHTML = "0.00";

  if (oNum2.innerHTML > 0) {
    $('.cart_null').css({
      "display": "none"
    });
    $('.cart_close_btn').css({
      "background": "red"
    });
  } else {
    $('.cart_null').css({
      "display": "block"
    });
    $('.cart_close_btn').css({
      "background": "#b0b0b0"
    });
  }
};

function abc(storageStr) {
  if (!isNaN(storageStr)) {
    return {};
  }

  return JSON.parse(storageStr);
}
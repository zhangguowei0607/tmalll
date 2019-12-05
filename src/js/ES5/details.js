"use strict";

// 收藏图标
$('.icon').click(function () {
  $('.icon_box').css({
    "color": "red"
  });
  $('.icon').css({
    "color": "red"
  });
}); // 支付方式

$('.zoom_btn2').click(function () {
  $('.zoom_btn2_box').css({
    "display": "block"
  });
  $('.zoom_btn2').mouseleave(function () {
    $('.zoom_btn2_box').css({
      "display": "none"
    });
  });
}); // 地址

$('.address').click(function () {
  $('.address_box').css({
    "display": "block"
  });
  $('.address_provinceS p').eq(3).addClass('address_active');
  $('.address_cityS p').eq(8).addClass('address_active'); // 省

  $('.address_province').click(function () {
    $('.address_province').css({
      "background": "white"
    });
    $('.address_city').css({
      "background": "#f2f2f2"
    });
    $('.address_provinceS').css({
      "display": "block"
    });
    $('.address_cityS').css({
      "display": "none"
    });
  }); // 市

  $('.address_city').click(function () {
    $('.address_city').css({
      "background": "white"
    });
    $('.address_province').css({
      "background": "#f2f2f2"
    });
    $('.address_provinceS').css({
      "display": "none"
    });
    $('.address_cityS').css({
      "display": "block"
    });
  }); // 遍历所有省

  $('.address_provinceS p').each(function () {
    $('.address_provinceS p').click(function () {
      $('.address_provinceS p').eq(3).addClass('address_active');
      $(this).addClass('address_active').siblings().removeClass('address_active');
      var str = $(this).html(); // console.log(str);

      $('.address_choose').html(str);
      $('.address_province').html(str);
      $('.address').html(str);
    });
  }); // 遍历所有市

  $('.address_cityS p').each(function () {
    $('.address_cityS p').click(function () {
      $('.address_cityS p').eq(8).addClass('address_active');
      $(this).addClass('address_active').siblings().removeClass('address_active');
      var str = $(this).html(); // console.log(str);

      $('.address_choose').html(str);
      $('.address_city').html(str);
      $('.address').html(str);
    });
  });
}); // 关闭按钮

$('.address_close').click(function () {
  $('.address_box').css({
    "display": "none"
  });
}); // 尺码

$('.chiMa dd').each(function () {
  $('.chiMa dd').click(function () {
    $(this).addClass('chiMa_active').siblings().removeClass('chiMa_active');
  });
}); // 颜色分类

$('.yanSe dd').each(function () {
  $('.yanSe dd').click(function () {
    $(this).addClass('yanSe_active').siblings().removeClass('yanSe_active');
  });
}); // 数量

$('.zoom_btn1').focus(function () {
  var num = parseInt($(this).val());
  $('.zoom_btn1').blur(function () {
    var num = parseInt($(this).val());

    if (num < 1 || isNaN(num)) {
      num = 1;
    }

    $('.zoom_btn1').val(num);
    var str1 = "\uFFE5".concat(84.00 * num, "x3");
    $('.huaBei_much1').html(str1);
    var str2 = "\uFFE5".concat(43.00 * num, "x6");
    $('.huaBei_much2').html(str2);
    var str3 = "\uFFE5".concat(22.00 * num, "x12");
    $('.huaBei_much3').html(str3);
  });
}); // 上按钮

$('.zoom_btn4').click(function () {
  var num = $('.zoom_btn1').val(); // console.log(num);

  num++;
  $('.zoom_btn1').val(num); // $('.huaBei_much').each(function(){
  //     console.log(num);
  //     let str = $('.huaBei_much').html();
  //     let a = parseInt(/(\d+)/.exec(str)[1]);
  //     console.log(a);
  //     let str1 = `￥${a*num}x3`;
  //     $('.huaBei_much').html(str1);
  // })

  var str1 = "\uFFE5".concat(84.00 * num, "x3");
  $('.huaBei_much1').html(str1);
  var str2 = "\uFFE5".concat(43.00 * num, "x6");
  $('.huaBei_much2').html(str2);
  var str3 = "\uFFE5".concat(22.00 * num, "x12");
  $('.huaBei_much3').html(str3);
}); // 下按钮

$('.zoom_btn3').click(function () {
  var num = $('.zoom_btn1').val(); // console.log(num);

  num--;

  if (num <= 1) {
    num = 1;
  }

  $('.zoom_btn1').val(num);
  var str1 = "\uFFE5".concat(84.00 * num, "x3");
  $('.huaBei_much1').html(str1);
  var str2 = "\uFFE5".concat(43.00 * num, "x6");
  $('.huaBei_much2').html(str2);
  var str3 = "\uFFE5".concat(22.00 * num, "x12");
  $('.huaBei_much3').html(str3);
}); // 二级菜单

$('.extend_imgK1').click(function () {
  $('.extend_imgK1').css({
    "display": "none"
  });
  $('.extend_imgG1').css({
    "display": "block"
  });
  $('.extend_menu1').css({
    "display": "block"
  });
  $('.extend_imgG1').click(function () {
    $('.extend_imgG1').css({
      "display": "none"
    });
    $('.extend_imgK1').css({
      "display": "block"
    });
    $('.extend_menu1').css({
      "display": "none"
    });
  });
});
$('.extend_imgK2').click(function () {
  $('.extend_imgK2').css({
    "display": "none"
  });
  $('.extend_imgG2').css({
    "display": "block"
  });
  $('.extend_menu2').css({
    "display": "block"
  });
  $('.extend_imgG2').click(function () {
    $('.extend_imgG2').css({
      "display": "none"
    });
    $('.extend_imgK2').css({
      "display": "block"
    });
    $('.extend_menu2').css({
      "display": "none"
    });
  });
});
$('.extend_imgK3').click(function () {
  $('.extend_imgK3').css({
    "display": "none"
  });
  $('.extend_imgG3').css({
    "display": "block"
  });
  $('.extend_menu3').css({
    "display": "block"
  });
  $('.extend_imgG3').click(function () {
    $('.extend_imgG3').css({
      "display": "none"
    });
    $('.extend_imgK3').css({
      "display": "block"
    });
    $('.extend_menu3').css({
      "display": "none"
    });
  });
});
$('.extend_imgK4').click(function () {
  $('.extend_imgK4').css({
    "display": "none"
  });
  $('.extend_imgG4').css({
    "display": "block"
  });
  $('.extend_menu4').css({
    "display": "block"
  });
  $('.extend_imgG4').click(function () {
    $('.extend_imgG4').css({
      "display": "none"
    });
    $('.extend_imgK4').css({
      "display": "block"
    });
    $('.extend_menu4').css({
      "display": "none"
    });
  });
});
$('.extend_imgK5').click(function () {
  $('.extend_imgK5').css({
    "display": "none"
  });
  $('.extend_imgG5').css({
    "display": "block"
  });
  $('.extend_menu5').css({
    "display": "block"
  });
  $('.extend_imgG5').click(function () {
    $('.extend_imgG5').css({
      "display": "none"
    });
    $('.extend_imgK5').css({
      "display": "block"
    });
    $('.extend_menu5').css({
      "display": "none"
    });
  });
});
$('.extend_imgK6').click(function () {
  $('.extend_imgK6').css({
    "display": "none"
  });
  $('.extend_imgG6').css({
    "display": "block"
  });
  $('.extend_menu6').css({
    "display": "block"
  });
  $('.extend_imgG6').click(function () {
    $('.extend_imgG6').css({
      "display": "none"
    });
    $('.extend_imgK6').css({
      "display": "block"
    });
    $('.extend_menu6').css({
      "display": "none"
    });
  });
});
$('.extend_imgK7').click(function () {
  $('.extend_imgK7').css({
    "display": "none"
  });
  $('.extend_imgG7').css({
    "display": "block"
  });
  $('.extend_menu7').css({
    "display": "block"
  });
  $('.extend_imgG7').click(function () {
    $('.extend_imgG7').css({
      "display": "none"
    });
    $('.extend_imgK7').css({
      "display": "block"
    });
    $('.extend_menu7').css({
      "display": "none"
    });
  });
});
$('.extend_imgK8').click(function () {
  $('.extend_imgK8').css({
    "display": "none"
  });
  $('.extend_imgG8').css({
    "display": "block"
  });
  $('.extend_menu8').css({
    "display": "block"
  });
  $('.extend_imgG8').click(function () {
    $('.extend_imgG8').css({
      "display": "none"
    });
    $('.extend_imgK8').css({
      "display": "block"
    });
    $('.extend_menu8').css({
      "display": "none"
    });
  });
}); // 宝贝排行榜

$('.main_l_d_boxL').click(function () {
  $('.main_l_d_boxL').css({
    "background": "white"
  });
  $('.main_l_d_boxR').css({
    "background": "#e5e5e5"
  });
  $('.main_l_d_box ol').css({
    "display": "none"
  });
  $('.main_l_d_box ul').css({
    "display": "block"
  });
});
$('.main_l_d_boxR').click(function () {
  $('.main_l_d_boxL').css({
    "background": "#e5e5e5"
  });
  $('.main_l_d_boxR').css({
    "background": "white"
  });
  $('.main_l_d_box ol').css({
    "display": "block"
  });
  $('.main_l_d_box ul').css({
    "display": "none"
  });
}); // 吸顶

$('.ceiling_box2L').click(function () {
  $(this).addClass('ceiling_active').siblings().removeClass('ceiling_active');
});
$('.ceiling_box2R').click(function () {
  $(this).addClass('ceiling_active').siblings().removeClass('ceiling_active');
});

window.onscroll = function () {
  var oDiv = document.querySelector('.ceiling');

  var _top = document.documentElement.scrollTop || document.body.scrollTop;

  if (_top > 962) {
    oDiv.style.position = "fixed";
    oDiv.style.top = 0;
    oDiv.style.display = "block";
  } else {
    oDiv.style.position = "absolute";
    oDiv.style.top = "700px";
    oDiv.style.display = "none";
  }
}; // 累计评价


$('.ceiling_box2R').click(function () {
  $('.main_spxq').css({
    "display": "none"
  });
  location.href = "#ljpj";
});
$('.ceiling_box2L').click(function () {
  $('.main_spxq').css({
    "display": "block"
  });
  location.href = "#spxq";
}); // 购物车
//获取购买按钮 添加点击事件

var oBuy1 = document.querySelector('.zoom_e_cart');

oBuy1.onclick = function () {
  // let size = $('.chiMa_active').text();
  // ID
  var shopId = document.querySelector('.store').innerHTML; // 名称

  var shopName = document.querySelector('.zoom_c_name').innerHTML; // 尺码

  var shopSize = document.querySelector('.chiMa_active').innerHTML; // 颜色

  var shopColor = document.querySelector('.yanSe_active').firstElementChild.alt; // 数量

  var shopNum = document.querySelector('.zoom_btn1').value; // 价格

  var shopPrice = document.querySelector('.zoom_c_priceNew').innerHTML; // 图片

  var shopSrc = document.querySelector('.yanSe_active').firstElementChild.src;
  console.log(shopId, shopSrc, shopName, shopSize, shopColor, shopPrice, shopNum); //获取localStorage中的信息

  var storage = window.localStorage;
  var storageStr = storage.getItem('shop') ? storage.getItem('shop') : '';
  var storageObj = abc(storageStr); //判断点击的商品在localStorage中是否存在，如果存在 num++ 如果不存在 则新建

  if (shopId in storageObj) {
    storageObj[shopId].num = parseInt(storageObj[shopId].num) + parseInt(shopNum);
  } else {
    storageObj[shopId] = {
      "store": shopId,
      "src": shopSrc,
      "color": shopColor,
      "size": shopSize,
      "name": shopName,
      "price": shopPrice,
      "num": shopNum
    };
  } //将数据加入localStorage中


  storage.setItem('shop', JSON.stringify(storageObj));
  alert('商品添加成功！');
}; //获取购买按钮 添加点击事件


var oBuy2 = document.querySelector('.ceiling_box3');

oBuy2.onclick = function () {
  // let size = $('.chiMa_active').text();
  // ID
  var shopId = document.querySelector('.store').innerHTML; // 名称

  var shopName = document.querySelector('.zoom_c_name').innerHTML; // 尺码

  var shopSize = document.querySelector('.chiMa_active').innerHTML; // 颜色

  var shopColor = document.querySelector('.yanSe_active').firstElementChild.alt; // 数量

  var shopNum = document.querySelector('.zoom_btn1').value; // 价格

  var shopPrice = document.querySelector('.zoom_c_priceNew').innerHTML; // 图片

  var shopSrc = document.querySelector('.yanSe_active').firstElementChild.src;
  console.log(shopId, shopSrc, shopName, shopSize, shopColor, shopPrice, shopNum); //获取localStorage中的信息

  var storage = window.localStorage;
  var storageStr = storage.getItem('shop') ? storage.getItem('shop') : '';
  var storageObj = abc(storageStr); //判断点击的商品在localStorage中是否存在，如果存在 num++ 如果不存在 则新建

  if (shopId in storageObj) {
    storageObj[shopId].num = parseInt(storageObj[shopId].num) + parseInt(shopNum);
  } else {
    storageObj[shopId] = {
      "store": shopId,
      "src": shopSrc,
      "color": shopColor,
      "size": shopSize,
      "name": shopName,
      "price": shopPrice,
      "num": shopNum
    };
  } //将数据加入localStorage中


  storage.setItem('shop', JSON.stringify(storageObj));
  alert('商品添加成功！');
};

function abc(storageStr) {
  if (!isNaN(storageStr)) {
    return {};
  }

  return JSON.parse(storageStr);
}
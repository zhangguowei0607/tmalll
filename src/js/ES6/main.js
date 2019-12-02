$('.main_c .btn_1').mouseenter(function(){
    $('.main_c .btn_1').css({"background" : "#00b262" , "color" : "white" , })
    $('.main_c .btn_2').css({"background" : "#f1f1f1" , "color" : "black" , })
    $('.main_c .btn_1_img').css("display" , "block");
    $('.main_c .btn_2_img').css("display" , "none");
})
$('.main_c .btn_2').mouseenter(function(){
    $('.main_c .btn_2').css({"background" : "#00b262" , "color" : "white" , })
    $('.main_c .btn_1').css({"background" : "#f1f1f1" , "color" : "black" , })
    $('.main_c .btn_2_img').css("display" , "block");
    $('.main_c .btn_1_img').css("display" , "none");
})



window.onscroll = function(){
    let oDiv = document.querySelector('.menu');
    let _top = document.documentElement.scrollTop || document.body.scrollTop;
    if(_top > 700){
        oDiv.style.position = "fixed";
        oDiv.style.top = 0;
        oDiv.style.display = "block";
    } else {
        oDiv.style.position = "absolute";
        oDiv.style.top = "700px";
        oDiv.style.display = "none";
    }
}

$("#LoutiNav ul li").not(".last").hover(function() {
    //鼠标滑上去
    $(this).addClass("hover");
}, function() {
    //鼠标移开
    $(this).removeClass("hover");
});
 //鼠标点击
var mark = 1;
$("#LoutiNav ul li").not(".last").click(function() {
    mark = 2; //改变标记
    $("#LoutiNav ul li").find("span").removeClass("active_a");
    $(this).find("span").addClass("active_a");
    //点击左边导航 然后跳到指定的楼层
    var $index = $(this).index(); //找到了对应的序列号
    //alert($index);
    var $top = $("#main .Louti").eq($index).offset().top; //获取制定Louti与浏览器上面的距离
    //alert($top);
    $("body,html").animate({
        scrollTop: $top
    }, 660, function() {
        mark = 1;
    }); //浏览器滚动的高度
});
 //浏览器窗口滚动事件
$(window).scroll(function() {
    if (mark == 1) {
        var $t = $(this).scrollTop(); //获取滚动条滚动的高度
        //document.title = $t;
        if ($t > 700) { //通过滚动条来判断
            $("#LoutiNav").fadeIn(); //淡入 导航慢慢显示出来
        } else {
            $("#LoutiNav").fadeOut(); //淡出 导航慢慢消失
        }
        var $obj = $("#main .Louti");
        //循环每一个Louti 然后找到最先满足条件的那个 Louti
        $obj.each(function() {
            var $index = $(this).index();
            //楼层与浏览器上面的高度
            var $height = $obj.eq($index).offset().top + $(this).height() / 2;
            //alert($height) 
            //document.title = $t + "--" + $height;
            if ($t < $height) {
                $("#LoutiNav ul li").find("span").removeClass("active_a")
                $("#LoutiNav ul li").eq($index).find("span").addClass("active_a");
                return false;
            }
        });
    }
});
 //点击 Top按钮 跳转到浏览器顶部
$("#LoutiNav ul li.last").click(function() {
    $("body,html").animate({
        scrollTop: 0
    }, 0, function() {
        mark = 1;
    });
});


$(function(){
    $('.yiz-slider-2').ScrollPic({
        Time: '3000',
        speed: '800',
        autoscrooll: true,
        arrowcontrol: true, //开启开右箭头
        // numbercontrol: false //关闭右下角按钮
    });

})

function currentPage(currentPage){
    /*
        触发页码数位置： Page/js/jquery.z-pager.js 64行
    */
    console.log("当前页码数：" + currentPage);
}
//左侧分类导航
$('.category-option .cat-item').hover(function(){$(this).toggleClass('hover')})
//图片轮播
jQuery(".scroll-banner").slide({mainCell:".scroll-content",titCell:".scroll-btn span",titOnClassName:"current",effect:"fold",autoPlay:true,delayTime:1000,interTime:3500});
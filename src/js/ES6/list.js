// 更多
$('.main_b_btn2').click(function(){
    $('.main_b_main').css({"height":"311px","overflow":"visible"});
    $('.main_b_btn2').css({"display":"none"});
    $('.main_b_btn1').css({"display":"block"});
    $('.main_b_logo ul').css({"display":"block"});
    $('.main_b_logo ol').css({"display":"none"});
})

// 收起
$('.main_b_btn1').click(function(){
    $('.main_b_main').css({"height":"154px","overflow":"hidden"});
    $('.main_b_btn2').css({"display":"block"});
    $('.main_b_btn1').css({"display":"none"});
    $('.main_b_logo ul').css({"display":"none"});
    $('.main_b_logo ol').css({"display":"block"});
})

$('.local').click(function(){
    location.href = 'details.html';
})
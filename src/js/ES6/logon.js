// 用户名
$('.main_box .main_btn .yhm').focus(function(){
    $('.main_box .main_hint .main_hint_yhm').css({"display" : "block"});
    $('.main_box .main_null .main_null_yhm').css({"display" : "none"});
    $('.main_box .main_btn .yhm').attr({'placeholder':''});
    $('.main_box .main_require .main_require_yhm').css({"display" : "block"});
})
$('.main_box .main_btn .yhm').blur(function(){
    $('.main_box .main_require .main_require_yhm').css({"display" : "none"});
    let str = $('.main_box .main_btn .yhm').val();
    //console.log(str);
    if(str == ''){
        $('.main_box .main_null .main_null_yhm').css({"display" : "block"});
    }else{
        $('.main_box .main_null .main_null_yhm').css({"display" : "none"});
        let re = /^\w{4,20}$/;
        let text = $('.main_box .main_btn .yhm').val();
        if(re.test(text)){
            $('.main_box .main_mistake .main_mistake_yhm').css({"display" : "none"});
        }else{
            $('.main_box .main_mistake .main_mistake_yhm').css({"display" : "block"});
        }
    }
})


// 手机号
$('.main_box .main_btn .sjh').focus(function(){
    $('.main_box .main_hint .main_hint_sjh').css({"display" : "block"});
    $('.main_box .main_btn .sjh').attr({'placeholder':''});
})
$('.main_box .main_btn .sjh').blur(function(){
    let str = $('.main_box .main_btn .sjh').val();
    //console.log(str);
    if(str == ''){
        $('.main_box .main_null .main_null_sjh').css({"display" : "block"});
    }else{
        $('.main_box .main_null .main_null_sjh').css({"display" : "none"});
        let re = /^1\d{10}$/;
        let text = $('.main_box .main_btn .sjh').val();
        if(re.test(text)){
            $('.main_box .main_mistake .main_mistake_sjh').css({"display" : "none"});
        }else{
            $('.main_box .main_mistake .main_mistake_sjh').css({"display" : "block"});
        }
    }
})


// 短信验证码
$('.main_box .main_btn .dxyzm').focus(function(){
    $('.main_box .main_hint .main_hint_dxyzm').css({"display" : "block"});
    $('.main_box .main_btn .dxyzm').attr({'placeholder':''});
})
$('.main_box .main_btn .dxyzm').blur(function(){
    let str = $('.main_box .main_btn .dxyzm').val();
    //console.log(str);
    if(str == ''){
        $('.main_box .main_null .main_null_dxyzm').css({"display" : "block"});
    }else{
        $('.main_box .main_null .main_null_dxyzm').css({"display" : "none"});
    }
})


// 设置密码
$('.main_box .main_btn .szmm').focus(function(){
    $('.main_box .main_hint .main_hint_szmm').css({"display" : "block"});
    $('.main_box .main_null .main_null_szmm').css({"display" : "none"});
    $('.main_box .main_btn .szmm').attr({'placeholder':''});
    $('.main_box .main_require .main_require_szmm').css({"display" : "block"});
})
$('.main_box .main_btn .szmm').blur(function(){
    $('.main_box .main_require .main_require_szmm').css({"display" : "none"});
    let str = $('.main_box .main_btn .szmm').val();
    //console.log(str);
    if(str == ''){
        $('.main_box .main_null .main_null_szmm').css({"display" : "block"});
    }else{
        $('.main_box .main_null .main_null_szmm').css({"display" : "none"});
        let re = /^\w{6,20}$/;
        let text = $('.main_box .main_btn .szmm').val();
        if(re.test(text)){
            $('.main_box .main_mistake .main_mistake_szmm').css({"display" : "none"});
        }else{
            $('.main_box .main_mistake .main_mistake_szmm').css({"display" : "block"});
        }
    }
})


// 确认密码
$('.main_box .main_btn .qrmm').focus(function(){
    $('.main_box .main_hint .main_hint_qrmm').css({"display" : "block"});
    $('.main_box .main_btn .qrmm').attr({'placeholder':''});
})
$('.main_box .main_btn .qrmm').blur(function(){
    let str = $('.main_box .main_btn .szmm').val();
    //console.log(str);
    let str1 = $('.main_box .main_btn .qrmm').val();
    //console.log(str1);
    if(str !== str1){
        $('.main_box .main_mistake .main_mistake_qrmm').css({"display" : "block"});
    }else{
        $('.main_box .main_mistake .main_mistake_qrmm').css({"display" : "none"});
    }
})

// // 注册按钮
// $('.main_box .main_btn .button2').click(function(){
//     location.href = './login.html';
// })

// 实现cookie交互
// 获取页面元素
let oName = $('.yhm')[0];
let oIphone = $('.sjh')[0];
let oCode = $('.dxyzm')[0];
let oPwd = $('.szmm')[0];
let oSure = $('.qrmm')[0];
// 注册按钮
let oBtn = $('.button2')[0];

// 注册按钮点击事件
oBtn.onclick = function(){
    // 获取五个框中的内容
    let name = oName.value;
    let iphone = oIphone.value;
    let code = oCode.value;
    let pwd = oPwd.value;
    let sure = oSure.value;

    // 判断框中的内容是否为空
    if(!name){
        alert('用户名不能为空！');
    }
    if(!iphone){
        alert('手机号不能为空！');
    }
    if(!code){
        alert('验证码不能为空！');
    }
    if(!pwd){
        alert('密码不能为空！');
    }
    if(!sure){
        alert('确认密码不能为空！');
    }

    //获取cookie中的内容
    let cookieStr = cookie.get('ID') ? cookie.get('ID') : '';

    //字符串转对象
    let cookieObj = abc(cookieStr);

    //判断输入的账号在cookie中是否存在
    if(name in cookieObj){
        alert('用户名已存在！请直接登录');
        oName.value = oIphone.value = oCode.value = oPwd.value = oSure.value = '';
    }else{
        alert('注册成功！(点击确定将跳转至登录页面)');
        oName.value = oIphone.value = oCode.value = oPwd.value = oSure.value = '';
        setTimeout(()=>{
            location.href = './login.html';
        },1000)
    }
    cookieObj[name] = pwd;
    //创建cookie
    cookie.create('ID',JSON.stringify(cookieObj),7);

}









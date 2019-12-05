$('.search_btn1').mouseenter(function(){
    $('.search_box').css({"display":"block"});
    $('.search_box p').each(function(){
        let str = $('.search_btn1').val();
        $('.search_box p').click(function(){
            let str1 = $(this).html();
            console.log(str);
            $('.search_btn1').val(str1);
            //$(this).text(str);
        })
    })
})

$('.search_box').mouseleave(function(){
    $('.search_box').css({"display":"none"});
})




$('.shop ul li').each(function(){
    $('.shop ul li').mouseenter(function(){
        $(this).addClass('shop_active').siblings().removeClass('shop_active');
    })
})

$('.cart ul li').each(function(){
    $('.cart ul li').mouseenter(function(){
        $(this).addClass('cart_active').siblings().removeClass('cart_active');
    })
})








// 刷新
window.onload = function(){
    // 结算
    let oSum3 = document.querySelector('.cart_close_sum');
    let oNum3 = document.querySelector('.cart_close_num');
    let a = document.querySelector('.cart_shop_text').value;
    let b = document.querySelector('.cart_shop_sum').innerHTML;
    oNum3.innerHTML = a;
    oSum3.innerHTML = b;
    let n = document.querySelector('.cart_close_num').innerHTML;
    if(n > 0){
        $('.cart_null').css({"display":"none"});
        $('.cart_close_btn').css({"background":"red"});
    }else{
        $('.cart_null').css({"display":"block"});
        $('.cart_close_btn').css({"background":"#b0b0b0"});
    }
}



// 购物车
//获取页面元素
let oCart = document.querySelector('.cart');
//获取localStorage中的信息
let storage = window.localStorage;
let storageStr = storage.getItem('shop') ? storage.getItem('shop') : '';
let storageObj = abc(storageStr);
for(let shopId in storageObj){
    let goodInfo = storageObj[shopId];
    console.log(goodInfo);
    //创建div
    let oDiv = document.createElement('div');
    //设置div的class名字
    oDiv.className = 'cart_shop';
    // 动态添加div中的内容
    let str = `
        <dl class="cart_shop_title">
            <dd>商品信息</dd>
            <dd>单价</dd>
            <dd>数量</dd>
            <dd>金额</dd>
            <dd>操作</dd>
        </dl>
        <dl class="cart_shop_name">
            <dt>${goodInfo.store}</dt>
        </dl>
        <dl class="cart_shop_details">
            <dd>
                <img src="${goodInfo.src}" alt="">
                <p>${goodInfo.name}</p>
                <p class="cart_shop_color">颜色分类：<span>${goodInfo.color}</span></p>
                <p class="cart_shop_size">尺码：<span>${goodInfo.size}</span></p>
            </dd>
            <dd class="cart_shop_price">￥${goodInfo.price}</dd>
            <dd class="cart_shop_num">
                <button class="cart_shop_up">-</button>
                <input type="text" value="${goodInfo.num}" class="cart_shop_text">
                <button class="cart_shop_down">+</button>
            </dd>
            <dd class="cart_shop_sum">￥${goodInfo.price * goodInfo.num}</dd>
            <dd class="cart_shop_remove">删除</dd>
        </dl>
    `;
    oDiv.innerHTML = str;
    oCart.appendChild(oDiv);
}


//获取页面中的-按钮 并添加事件
let oMinus = document.querySelector('.cart_shop_up');
oMinus.onclick = function(){
    console.log(1);
    //找到当前点击的商品id
    let shopId = document.querySelector('.cart_shop_name').firstElementChild.innerHTML;
    //获取localStorage中的数据
    let storage = window.localStorage;
    let storageStr = storage.getItem('shop') ? storage.getItem('shop') : '';
    let storageObj = abc(storageStr);
    //判断localStorage中的数据中对应商品数量是否大于1，大于则--
    if(storageObj[shopId].num > 1){
        storageObj[shopId].num --;
    }
    //将新的数据存入localStorage
    storage.setItem('shop',JSON.stringify(storageObj));
    // 获取文本框元素
    let oText = document.querySelector('.cart_shop_text');
    // 获取总金额
    let oSum = document.querySelector('.cart_shop_sum');
    //改变文本里面的值
    oText.value = storageObj[shopId].num;
    //改变金额里的值
    oSum.innerHTML =  `￥${storageObj[shopId].num * storageObj[shopId].price}`;
    // 结算
    let oSum2 = document.querySelector('.cart_close_sum');
    let oNum2 = document.querySelector('.cart_close_num');
    oNum2.innerHTML = storageObj[shopId].num;
    oSum2.innerHTML = `${storageObj[shopId].num * storageObj[shopId].price}`;
    if(oNum2.innerHTML > 0){
        $('.cart_null').css({"display":"none"});
        $('.cart_close_btn').css({"background":"red"});
    }else{
        $('.cart_null').css({"display":"block"});
        $('.cart_close_btn').css({"background":"#b0b0b0"});
    }
}


//获取页面中的+按钮 并添加事件
let oPlus = document.querySelector('.cart_shop_down');
oPlus.onclick = function(){
    //找到当前点击的商品id
    let shopId = document.querySelector('.cart_shop_name').firstElementChild.innerHTML;
    //获取localStorage中的数据
    let storage = window.localStorage;
    let storageStr = storage.getItem('shop') ? storage.getItem('shop') : '';
    let storageObj = abc(storageStr);
    //localStorage中的数据中对应商品数量++
    storageObj[shopId].num ++;
    //将新的数据存入localStorage
    storage.setItem('shop',JSON.stringify(storageObj));
    // 获取文本框元素
    let oText = document.querySelector('.cart_shop_text');
    // 获取总金额
    let oSum = document.querySelector('.cart_shop_sum');
    //改变文本里面的值
    oText.value = storageObj[shopId].num;
    //改变合计里的值
    oSum.innerHTML = `￥${storageObj[shopId].num * storageObj[shopId].price}`;
    // 结算
    let oSum2 = document.querySelector('.cart_close_sum');
    let oNum2 = document.querySelector('.cart_close_num');
    oNum2.innerHTML = storageObj[shopId].num;
    oSum2.innerHTML = `${storageObj[shopId].num * storageObj[shopId].price}`;
    if(oNum2.innerHTML > 0){
        $('.cart_null').css({"display":"none"});
        $('.cart_close_btn').css({"background":"red"});
    }else{
        $('.cart_null').css({"display":"block"});
        $('.cart_close_btn').css({"background":"#b0b0b0"});
    }
}

//获取页面中的输出按钮 并添加事件
let oText = document.querySelector('.cart_shop_text');
oText.onblur = function(){
    //找到当前点击的商品id
    let shopId = document.querySelector('.cart_shop_name').firstElementChild.innerHTML;
    //获取localStorage中的数据
    let storage = window.localStorage;
    let storageStr = storage.getItem('shop') ? storage.getItem('shop') : '';
    let storageObj = abc(storageStr);
    //判断输入的数为大于0的数字 否则数量默认为1
    let num = parseInt(this.value);
    if( num < 1 || isNaN(num)){
        num = 1;
    }
    storageObj[shopId].num = num;
    //将新的数据存入localStorage
    storage.setItem('shop',JSON.stringify(storageObj));
    //改变文本里面的值
    this.value = storageObj[shopId].num;
    // 获取总金额
    let oSum = document.querySelector('.cart_shop_sum');
    //改变合计里的值
    oSum.innerHTML = `￥${storageObj[shopId].num * storageObj[shopId].price}`;
    // 结算
    let oSum2 = document.querySelector('.cart_close_sum');
    let oNum2 = document.querySelector('.cart_close_num');
    oNum2.innerHTML = storageObj[shopId].num;
    oSum2.innerHTML = `${storageObj[shopId].num * storageObj[shopId].price}`;
    if(oNum2.innerHTML > 0){
        $('.cart_null').css({"display":"none"});
        $('.cart_close_btn').css({"background":"red"});
    }else{
        $('.cart_null').css({"display":"block"});
        $('.cart_close_btn').css({"background":"#b0b0b0"});
    }
}

//获取页面中的删除按钮 并添加事件
let oDel = document.querySelector('.cart_shop_remove');
oDel.onclick = function(){
    //找到当前点击的商品id
    let shopId = document.querySelector('.cart_shop_name').firstElementChild.innerHTML;
    //获取localStorage中的数据
    let storage = window.localStorage;
    let storageStr = storage.getItem('shop') ? storage.getItem('shop') : '';
    let storageObj = abc(storageStr);
    //删除对象中指定的属性
    delete storageObj[shopId];
    //将新的数据存入localStorage
    storage.setItem('shop',JSON.stringify(storageObj));
    //删除这个ul
    this.parentNode.parentNode.remove();
    // 结算
    let oSum2 = document.querySelector('.cart_close_sum');
    let oNum2 = document.querySelector('.cart_close_num');
    oNum2.innerHTML = 0;
    oSum2.innerHTML = `0.00`;
    if(oNum2.innerHTML > 0){
        $('.cart_null').css({"display":"none"});
        $('.cart_close_btn').css({"background":"red"});
    }else{
        $('.cart_null').css({"display":"block"});
        $('.cart_close_btn').css({"background":"#b0b0b0"});
    }
}



function abc(storageStr){
    if(!isNaN(storageStr)){
        return {};
    }
    return JSON.parse(storageStr);
}
//=====================全局函数========================
//Tab控制函数
function tabs(tabId, tabNum) {
    //设置点击后的切换样式
    $(tabId + " .tab li").removeClass("curr");
    $(tabId + " .tab li").eq(tabNum).addClass("curr");
    //根据参数决定显示内容
    $(tabId + " .tabcon").hide();
    $(tabId + " .tabcon").eq(tabNum).show();
}
//=====================全局函数========================

//==================图片详细页函数=====================
//鼠标经过预览图片函数
function preview(img) {
    $("#preview .jqzoom img").attr("src", $(img).attr("src"));
    $("#preview .jqzoom img").attr("jqimg", $(img).attr("bimg"));
}

//图片放大镜效果
$(function() {
    $(".jqzoom").jqueryzoom({ xzoom: 418, yzoom: 418 });
});

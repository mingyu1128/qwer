$(function(){
    $(".gnb li").mouseover(function(){
        $("#sub").stop().slideDown();
    });
    $(".gnb li").mouseleave(function(){
        $("#sub").stop().slideUp();
    });
});
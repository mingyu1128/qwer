$(function(){
    $(".gnb li, .logo").mouseover(function(){
        $("#sub").stop().slideDown();
    });
    $(".gnb li, .logo").mouseleave(function(){
        $("#sub").stop().slideUp();
    });
});
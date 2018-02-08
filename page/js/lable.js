
$(function () {
    $(".on").click(function () {
        var title=$(this).text();
        var src=$(this).data("src");
        $(".home").hide();
        $(".template iframe").show();
        var lh='<span class=\"display-inline-block cursor tb\" data-src='+src+' style="position: relative">'+title+'<i class="fa fa-times close" style="position: absolute;right: 3px;top: 3px;z-index: 99;color: #183761"></i></span>'
        $(".label-list").append(lh);
        $(".template iframe").attr('src',src);
    });
});

$(function () {
    $(".label-list").on("click",".tb",function () {
        $(this).css("background-color","white").siblings().css("background-color","#def3fd");
        if($(this).data("src")=="1"){
            $(".home").show();
            $(".template iframe").hide();
        }else{
            $(".home").hide();
            $(".template iframe").show();
            var src=$(this).data("src");
            $(".template iframe").attr('src',src);
        }

    });
})
$(function () {
    $(".label-list").on("click",".close",function () {
        confirm("确认关闭该页面吗？");
        $(this).parent().remove();
        var src=$(this).siblings().last().data("src");
        $(this).siblings().css("background-color","#def3fd");
        $(this).siblings().last().css("background-color","white");
        $(".template iframe").attr('src',src);
    })

})
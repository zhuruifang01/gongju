$(function(){
    var mapheight=$("body").height()-100-105;
    $("#map").css("height",mapheight+'px');
    $(".tree").css('height',mapheight+'px');
    //左侧 选项卡：
    $(".xuanxian_title .conn").click(function(){
        var index=$(this).index(".xuanxian_title .conn");
        $(".xuanxian_title .conn").removeClass('active');
        $(".xuanxian_title .conn").eq(index).addClass('active');
        $(".tree .yiji").css('display','none');
        $(".tree .yiji").eq(index).css('display','block');
    });
    //左侧 树：【国内】
    $(".yiji1 .erjicon").click(function(){
        var index=$(this).index(".yiji1 .erjicon");
        $(".yiji1 .erjicon").removeClass('active');
        $(".yiji1 .erjicon").eq(index).addClass('active');
        $(".yiji1 .sanji").eq(index).slideToggle();
    });
    //左侧 树：【国外】
    $(".yiji2 .erjicon").click(function(){
        var index=$(this).index(".yiji2 .erjicon");
        $(".yiji2 .sanji").eq(index).slideToggle();
    });
});
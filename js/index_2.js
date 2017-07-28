(function() {
    $(".news-ul>li").hover(e=> {
        //    //获得当前a是第几个
        console.log(e.target);
        var i = $(".news-ul>li").index($(e.target));
        //    //修改div的left为i*LIWIDTH
        if ($(e.target).hasClass("active")) {
            $(e.target).siblings().removeClass("active");
        } else {
            $(e.target).addClass("active");
            $(e.target).siblings().removeClass("active");
        }

        $(".activity-contente").css("left", i * -312);
    })

})()







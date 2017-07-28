
var w=parseFloat($(".occ-int>ul").css("left"));
$(".occ-sel>.R").click(function(){
    if(w!=-2448) {
        w -= 816;
        $(".occ-int>ul").css("left", w);
    }else{
        return;
    }

});
$(".occ-sel>.L").click(function(){
    if(w!=0){
    w+=816;
    $(".occ-int>ul").css("left",w);
    }else{
        return;
    }
});











//$(document).ready(function() {
//    var page=1;//初始为第一版
//    var J_pro=$(".occ-int>ul");//图片列表区域
//    var view_wrap=$(".occ-int").width();//图片显示固定范围
//    var total=$(".occ-int>ul li").length;//图片总数
//    var num=4;//每页显示的条数
//    var total_page=Math.round(total/num);//总页数
//    //下一页
//    $(".occ-sel>.R").click(function(){
//        if (!J_pro.is(":animated")) {  // 如果正处于动画中的则不进行动画
//            if (page == total_page) {
//                return false;
//            } else {
//                J_pro.animate({ "margin-left": "-=" + view_wrap }, 200);
//                page++;
//            }
//        }
//    });
//    //上一页
//    $(".occ-sel>.L").click(function(){
//        if (!J_pro.is(":animated")) {  // 如果正处于动画中的则不进行动画
//            if (page == 1) {
//                return false;
//            }
//            else {
//                J_pro.animate({ "margin-left": "+=" + view_wrap }, 200);
//                page--;
//            }
//        }
//    });
//})
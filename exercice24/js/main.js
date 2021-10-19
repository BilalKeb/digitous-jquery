$(document).click(function(){
    $("#bg").css("position","absolute")
})

$(".btn").click(function(){
    $("#bg").animate({
        left : "100px"
    });
})
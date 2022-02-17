/* phone menu */
let phone_menu = document.getElementById("phone-menu");
$(function(){
    /* open menu */
    $("#open-menu").on("mousedown",function() {
        $(".phone-menu").animate({left: "0%"},1300);
    });
    
    /* close menu */
    $("#close-menu").on("mousedown",function() {
        $(".phone-menu").animate({left: "-100%"},1300);
    });
});
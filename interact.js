/* paragraph shortcut buttons cover the text */
let saved_width = 0;
setInterval(function(){
    if (document.body.clientWidth != saved_width) {
        console.clear();
        document.body.style.height = "auto";
        document.body.style.height = (document.body.clientHeight + 65).toString() + "px";
        saved_width = document.body.clientWidth;
    }
},500);

/* paragraphs shortcut */
let paragraphs_buttons = document.getElementsByClassName("par");
let content_texts = document.getElementsByName("example");
for (let i = 0; i < paragraphs_buttons.length; i++) {
    paragraphs_buttons[i].addEventListener("mousedown",function(){
        window.scroll(0,content_texts[i].offsetTop - 10);
    });
}

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
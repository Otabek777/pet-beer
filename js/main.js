$(".header__burgir").click(function() {
    $(this).toggleClass("open");
    $(".main__aside").toggleClass("open")
});
if(document.querySelector(".education__aside .item")) {
    $(".education__aside .item").click(function() {
        $(this).toggleClass("active");
    });
}

if(document.querySelector(".education_3__block")) {
    $(".education_3__block").click(function() {
        $(this).toggleClass("open");
    });
}
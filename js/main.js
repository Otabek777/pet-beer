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
    $(".education_3_option_open").click(function() {
        $(this).toggleClass("open");
    });
}
if(document.querySelector(".employees__block_option_open")) {
    $(".employees__block_option_open .btn").click(function() {
        $(this).toggleClass("open");
    });
}
if(document.querySelector(".document__block_option_open")) {
    $(".document__block_option_open .btn").click(function() {
        $(this).toggleClass("open");
    });
}
if(document.querySelector('.input_phone')) {
    window.addEventListener("DOMContentLoaded", function() {
        [].forEach.call( document.querySelectorAll('.tel'), function(input) {
        var keyCode;
        function mask(event) {
            event.keyCode && (keyCode = event.keyCode);
            var pos = this.selectionStart;
            if (pos < 3) event.preventDefault();
            var matrix = "+7 (___) ___ ____",
                i = 0,
                def = matrix.replace(/\D/g, ""),
                val = this.value.replace(/\D/g, ""),
                new_value = matrix.replace(/[_\d]/g, function(a) {
                    return i < val.length ? val.charAt(i++) || def.charAt(i) : a
                });
            i = new_value.indexOf("_");
            if (i != -1) {
                i < 5 && (i = 3);
                new_value = new_value.slice(0, i)
            }
            var reg = matrix.substr(0, this.value.length).replace(/_+/g,
                function(a) {
                    return "\\d{1," + a.length + "}"
                }).replace(/[+()]/g, "\\$&");
            reg = new RegExp("^" + reg + "$");
            if (!reg.test(this.value) || this.value.length < 5 || keyCode > 47 && keyCode < 58) this.value = new_value;
            if (event.type == "blur" && this.value.length < 5)  this.value = ""
        }
    
        input.addEventListener("input", mask, false);
        input.addEventListener("focus", mask, false);
        input.addEventListener("blur", mask, false);
        input.addEventListener("keydown", mask, false)
    
      });
    
    });
};

if(document.querySelector(".person_edit")) {
    $(".header__admin").click(function() {
        $(".person_edit").addClass("active");
    });
    $(".person_edit__wrap .close").click(function() {
        $(".person_edit").removeClass("active");
    });
    
};
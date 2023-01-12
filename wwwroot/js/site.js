// Write your JavaScript code.
$(document).ready(function () {
    $("img[src!='']").one("load", function () {
        $(this).removeClass("placeholder");
    }).each(function () {
        if (this.complete) {
            $(this).trigger('load');
        }
    });
});
( function( $ ) {
    $(document).ready(function() {
        var listItems = $(".navMain").find("li").has("a:not([class ^= icon-])");
        var button = $("#responsive-tab");

        button.click( function(){
            button.toggleClass("_close");
            listItems.slideToggle("fast");
            listItems.addClass("_collapsed");
        });
    });
} )( jQuery );
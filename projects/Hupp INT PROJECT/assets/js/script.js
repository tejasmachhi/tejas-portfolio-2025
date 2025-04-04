var $ = jQuery



$(".accordion h6:first").addClass("active");
    $(".accordion  p:not(:first)").hide();

    $(".accordion h6").click(function(){
        $(this).next("p").slideToggle("slow")
        .siblings("p:visible").slideUp("slow");
        $(this).toggleClass("active");
        $(this).siblings("h6").removeClass("active");
    });








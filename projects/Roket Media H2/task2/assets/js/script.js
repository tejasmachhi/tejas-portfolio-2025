
// script for  stiky menu

// window.onscroll = function () { myFunction() };

//             var navbar = document.getElementById("navbar");
//             var sticky = navbar.offsetTop;

//             function myFunction() {
//                 if (window.pageYOffset >= sticky) {
//                     navbar.classList.add("sticky")
//                 } else {
//                     navbar.classList.remove("sticky");
//                 }
//             }


// Sticky Header


  $(window).scroll(function() {

  if ($(this).scrollTop() > 1){
      $('header div ').addClass("sticky");
    }
    else{
      $('header div ').removeClass("sticky");
    }

  });





$(document).ready(function () {

  $('.first-button').on('click', function () {

    $('.animated-icon1').toggleClass('open');
  });
  $('.second-button').on('click', function () {

    $('.animated-icon2').toggleClass('open');
  });
  $('.third-button').on('click', function () {

    $('.animated-icon3').toggleClass('open');
  });
});


// stiky header


  $(window).scroll(function() {

  if ($(this).scrollTop() > 1){
      $('header').addClass("sticky");
    }
    else{
      $('header').removeClass("sticky");
    }

  });

// preloder js

    $(window).on('load', function () { // makes sure the whole site is loaded
                $('#status').fadeOut(); // will first fade out the loading animation
                $('#preloader').delay(350).fadeOut('slow'); // will fade out the white DIV that covers the website.
                $('body').delay(350).css({ 'overflow': 'visible' });
            })
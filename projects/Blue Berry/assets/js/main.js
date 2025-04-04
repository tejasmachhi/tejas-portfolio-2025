// js for insta slider

$(document).ready(function () {
  $(".insta-owl").owlCarousel({
    loop: true,
    margin: 10,
    autoplay: true,
    autoplayTimeout: 3300, // Slide duration
    nav: false,
    autoplayHoverPause: true, // Pause on hover
    items: 6, // Number of items visible
    center: true, // Center the items
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 3,
      },
      1000: {
        items: 6,
      },
    },
  });
});

$(document).ready(function () {
  $(".testimonials-slider").owlCarousel({
    loop: true, // Loop items
    margin: 10, // Margin between items
    autoplay: true, // Enable autoplay
    autoplayTimeout: 2000, // Duration between slides
    autoplayHoverPause: true, // Pause on hover
    nav: false, // Hide navigation arrows
    dots: true, // Show pagination dots
    smartSpeed: 800, // Speed of the transition
    items: 1, // Number of items to display
    fade: true,
    center: true, // Center the items
    responsive: {
      0: {
        items: 1, // Items on extra-small devices
      },
      600: {
        items: 1, // Items on small devices
      },
      1000: {
        items: 1, // Adjust the number of items on larger screens
      },
    },
  });
});

// js for blog slider

$(document).ready(function () {
  $(".blog-slider").owlCarousel({
    loop: true,
    margin: 10,
    dots: false,
    nav: false,
    autoplay: true,
    autoplayTimeout: 2000,

    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 4,
      },
    },
  });
});

//   js for scrool page loader
document.addEventListener("DOMContentLoaded", function (event) {
  let scrollLoader = document.getElementById("scrollLoader");
  let circle = document.getElementById("circle");

  // Debounce function to limit the rate at which a function can fire
  function debounce(func, wait) {
    let timeout;
    return function (...args) {
      clearTimeout(timeout);
      timeout = setTimeout(() => func.apply(this, args), wait);
    };
  }

  // Function to handle scroll updates
  function handleScroll() {
    let scrollableHeight =
      document.documentElement.scrollHeight - window.innerHeight;
    let scrolled = (window.scrollY / scrollableHeight) * 100;

    // Show the loader once scrolling starts
    if (window.scrollY > 0) {
      scrollLoader.style.display = "flex";
    } else {
      scrollLoader.style.display = "none";
    }

    // Update circular loader based on scroll position
    circle.style.background = `conic-gradient(#6382d1 ${scrolled}%, transparent ${scrolled}%)`;
  }

  // Attach the debounced scroll handler
  window.addEventListener("scroll", debounce(handleScroll, 50));

  // Attach click handler to scrollLoader to scroll to top
  scrollLoader.addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
});

// js for slider section

$(document).ready(function () {
  var currentIndex = 0;
  var slides = $(".slider-item");

  function changeSlide(index) {
    if (index === currentIndex) return;

    // Animate out the current slide
    $(slides[currentIndex]).removeClass("active");

    // Animate in the new slide
    $(slides[index]).addClass("active");

    // Update navigation buttons
    $(".nav-btn").removeClass("active");
    $(".nav-btn[data-slide='" + index + "']").addClass("active");

    currentIndex = index;
  }

  $(".nav-btn").click(function () {
    var slideIndex = $(this).data("slide");
    changeSlide(slideIndex);
  });
});
// js for slider section end here

// js for countdoan of deal section
function countdownTimer() {
  const targetDate = new Date();
  targetDate.setDate(targetDate.getDate() + 965); // Set target date to 965 days from now

  function updateTimer() {
    const now = new Date();
    const timeDifference = targetDate - now;

    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor(
      (timeDifference % (1000 * 60 * 60)) / (1000 * 60)
    );
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

    document.getElementById("days").textContent = days;
    document.getElementById("hours").textContent = ("0" + hours).slice(-2);
    document.getElementById("minutes").textContent = ("0" + minutes).slice(-2);
    document.getElementById("seconds").textContent = ("0" + seconds).slice(-2);

    if (timeDifference < 0) {
      clearInterval(timerInterval);
      document.getElementById("countdown").textContent = "EXPIRED";
    }
  }

  const timerInterval = setInterval(updateTimer, 1000);
}

countdownTimer();
// js end for coutdown section


//   js for shop card slider

$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    loop: true,
    margin: 10,
    dots: false,
    nav: false,
    autoplay: true,
    autoplayTimeout: 2000,

    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 4,
      },
    },
  });
});

// js for arrival

function openCity(evt, cityName) {
  evt.preventDefault(); // Prevent the default anchor click behavior
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}

// Automatically open the "all" tab when the page loads
window.onload = function () {
  document.getElementById("defaultOpen").click();
};


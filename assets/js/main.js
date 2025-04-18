const navLinks = document.querySelectorAll(".navbar-nav .nav-link");

      navLinks.forEach((link) => {
        link.addEventListener("click", function () {
          navLinks.forEach((el) => el.classList.remove("active"));
          this.classList.add("active");
        });
});

$(document).ready(function () {
    $("#text-carousel").owlCarousel({
      items: 1,
      loop: true,
      nav: true,
      dots: false,
      autoplay: false,
      navText: [
        `<div class="custom-nav-btn">←</div>`,
        `<div class="custom-nav-btn">→</div>`

      ]
    });

    $(".owl-carousel").owlCarousel({
      loop: true,
      margin: 20,
      nav: false,
      dots: false,
      responsiveClass: true,
      responsive: {
        0: {
          items: 1,
          stagePadding: 40, // mobile: peeking next slide a bit
        },
        600: {
          items: 1,
          stagePadding: 60, // adjust as you like
        },
        1000: {
          items: 2,
          stagePadding: 150, // this will make half of 3rd item visible
          nav: false,
        }
      }
    });
    
});
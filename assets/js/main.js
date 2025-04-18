const navLinks = document.querySelectorAll(".navbar-nav .nav-link");

navLinks.forEach((link) => {
  link.addEventListener("click", function () {
    navLinks.forEach((el) => el.classList.remove("active"));
    this.classList.add("active");
  });
});

$(document).ready(function () {
  const $carousel = $("#text-carousel");
  const $progressBar = $(".progress-bar-fill");
  const $slideCounter = $(".slide-counter");

  $("#text-carousel").owlCarousel({
    items: 1,
    loop: true,
    nav: true,
    dots: false,
    autoplay: false,
    navText: [
      `<div class="custom-nav-btn my-arrow">←</div>`,
      `<div class="custom-nav-btn my-arrow">→</div>`,
    ],
    onInitialized: function (event) {
      updateProgressBar(event);

      // Move nav after progress bar wrapper
      const $nav = $carousel.find(".owl-nav");
      $(".progress-bar-wrapper").after($nav);
    },
    onTranslated: updateProgressBar,
  });

  function updateProgressBar(event) {
    const totalItems = event.item.count;
    const currentIndex =
      event.item.index - event.relatedTarget._clones.length / 2;
    const realIndex = (currentIndex + totalItems) % totalItems;
    const percentage = ((realIndex + 1) / totalItems) * 100;

    $progressBar.css("width", `${percentage}%`);
    $slideCounter.text(`${realIndex + 1}/${totalItems}`);
  }

  $(".owl-carousel").owlCarousel({
    loop: false,
    margin: 20,
    nav: false,
    dots: false,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
        stagePadding: 40,
      },
      600: {
        items: 1,
        stagePadding: 60,
      },
      1000: {
        items: 2,
        stagePadding: 100,
        nav: false,
      },
    },
  });
});

$(document).ready(function () {
  "use strict";

  var windowOn = $(window);

  ////////////////////////////////////////////////////
  // 01. PreLoader Js
  windowOn.on("load", function () {
    $("#loading").fadeOut(500);
  });

  ////////////////////////////////////////////////////
  // 02. Mobile Menu Js
  $("#mobile-menu").meanmenu({
    meanMenuContainer: ".mobile-menu",
    meanScreenWidth: "1199",
    meanExpand: ['<i class="fal fa-plus"></i>'],
  });

  // 03. Sidebar Js
  $(".side-info-close,.offcanvas-overlay").on("click", function () {
    $(".side-info").removeClass("info-open");
    $(".offcanvas-overlay").removeClass("overlay-open");
  });
  $(".side-toggle").on("click", function () {
    $(".side-info").addClass("info-open");
    $(".offcanvas-overlay").addClass("overlay-open");
  });

  ////////////////////////////////////////////////////
  // 04. Cart Toggle Js
  $(".cart-toggle-btn").on("click", function () {
    $(".cartmini__wrapper").addClass("opened");
    $(".body-overlay").addClass("opened");
  });
  $(".cartmini__close-btn").on("click", function () {
    $(".cartmini__wrapper").removeClass("opened");
    $(".body-overlay").removeClass("opened");
  });
  $(".body-overlay").on("click", function () {
    $(".cartmini__wrapper").removeClass("opened");
    $(".sidebar__area").removeClass("sidebar-opened");
    $(".header__search-3").removeClass("search-opened");
    $(".body-overlay").removeClass("opened");
  });

  ////////////////////////////////////////////////////
  // 05. Search Js
  $(".search-toggle").on("click", function () {
    $(".search__area").addClass("opened");
  });
  $(".search-close-btn").on("click", function () {
    $(".search__area").removeClass("opened");
  });

  ////////////////////////////////////////////////////
  // 06. Sticky Header Js
  windowOn.on("scroll", function () {
    var scroll = $(window).scrollTop();
    if (scroll < 100) {
      $(".sticky-header").removeClass("sticky");
    } else {
      $(".sticky-header").addClass("sticky");
    }
  });

  ////////////////////////////////////////////////////
  // 07. Data Background Js
  $("[data-background]").each(function () {
    $(this).css(
      "background-image",
      "url( " + $(this).attr("data-background") + "  )"
    );
  });

  ////////////////////////////////////////////////////
  // 08. Nice Select Js
  $("select").niceSelect();

  ////////////////////////////////////////////////////
  // 09. slider__active Slider Js
  if ($(".slider__active").length > 0) {
    let sliderActive1 = ".slider__active";
    let sliderInit1 = new Swiper(sliderActive1, {
      // Optional parameters
      slidesPerView: 1,
      slidesPerColumn: 1,
      paginationClickable: true,
      loop: true,
      effect: "fade",

      autoplay: {
        delay: 5000,
      },

      // If we need pagination
      pagination: {
        el: ".swiper-paginations",
        clickable: true,
      },

      // Navigation arrows
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },

      a11y: false,
    });

    function animated_swiper(selector, init) {
      let animated = function animated() {
        $(selector + " [data-animation]").each(function () {
          let anim = $(this).data("animation");
          let delay = $(this).data("delay");
          let duration = $(this).data("duration");

          $(this)
            .removeClass("anim" + anim)
            .addClass(anim + " animated")
            .css({
              webkitAnimationDelay: delay,
              animationDelay: delay,
              webkitAnimationDuration: duration,
              animationDuration: duration,
            })
            .one(
              "webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend",
              function () {
                $(this).removeClass(anim + " animated");
              }
            );
        });
      };
      animated();
      // Make animated when slide change
      init.on("slideChange", function () {
        $(sliderActive1 + " [data-animation]").removeClass("animated");
      });
      init.on("slideChange", animated);
    }

    animated_swiper(sliderActive1, sliderInit1);
  }

  if ($(".slider__active-2").length > 0) {
    let sliderActive1 = ".slider__active-2";
    let sliderInit1 = new Swiper(sliderActive1, {
      // Optional parameters
      slidesPerView: 1,
      slidesPerColumn: 1,
      paginationClickable: true,
      loop: true,
      effect: "fade",

      autoplay: {
        delay: 5000,
      },

      // If we need pagination
      pagination: {
        el: ".swiper-paginations",
        clickable: true,
      },

      // Navigation arrows
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },

      a11y: false,
    });

    function animated_swiper(selector, init) {
      let animated = function animated() {
        $(selector + " [data-animation]").each(function () {
          let anim = $(this).data("animation");
          let delay = $(this).data("delay");
          let duration = $(this).data("duration");

          $(this)
            .removeClass("anim" + anim)
            .addClass(anim + " animated")
            .css({
              webkitAnimationDelay: delay,
              animationDelay: delay,
              webkitAnimationDuration: duration,
              animationDuration: duration,
            })
            .one(
              "webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend",
              function () {
                $(this).removeClass(anim + " animated");
              }
            );
        });
      };
      animated();
      // Make animated when slide change
      init.on("slideChange", function () {
        $(sliderActive1 + " [data-animation]").removeClass("animated");
      });
      init.on("slideChange", animated);
    }

    animated_swiper(sliderActive1, sliderInit1);
  }

  var themeSlider = new Swiper(".classname", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      1200: {
        slidesPerView: 6,
      },
      992: {
        slidesPerView: 5,
      },
      768: {
        slidesPerView: 3,
      },
      576: {
        slidesPerView: 2,
      },
      0: {
        slidesPerView: 2,
      },
    },
  });

  ////////////////////////////////////////////////////
  // 10. Masonary Js
  $(".portfolio-active").imagesLoaded(function () {
    var $grid = $(".grid").isotope({
      itemSelector: ".grid-item",
      percentPosition: true,
      masonry: {
        columnWidth: 1,
      },
    });

    $(".portfolio-active").on("click", "button", function () {
      var filterValue = $(this).attr("data-filter");
      $grid.isotope({ filter: filterValue });
    });

    $(".masonary-menu button").on("click", function (event) {
      $(this).siblings(".active").removeClass("active");
      $(this).addClass("active");
      event.preventDefault();
    });
  });

  // 11. Popup js
  $(".image-popups").magnificPopup({
    type: "image",
    gallery: {
      enabled: true,
    },
  });

  $(".popup-video").magnificPopup({
    type: "iframe",
  });

  $(document).ready(function () {
    "use strict";

    // 12. Wow Js
    new WOW().init();

    // 13. Data width Js
    $("[data-width]").each(function () {
      $(this).css("width", $(this).attr("data-width"));
    });

    // 14. Cart Quantity Js
    $(".cart-minus").click(function () {
      var $input = $(this).parent().find("input");
      var count = parseInt($input.val()) - 1;
      count = count < 1 ? 1 : count;
      $input.val(count);
      $input.change();
      return false;
    });
    $(".cart-plus").click(function () {
      var $input = $(this).parent().find("input");
      $input.val(parseInt($input.val()) + 1);
      $input.change();
      return false;
    });

    // 15. Show Login Toggle Js
    $("#showlogin").on("click", function () {
      $("#checkout-login").slideToggle(700);
    });

    // 16. Show Coupon Toggle Js
    $("#showcoupon").on("click", function () {
      $("#checkout_coupon").slideToggle(700);
    });

    // 17. Create An Account Toggle Js
    $("#cbox").on("click", function () {
      $("#cbox_info").slideToggle(700);
    });

    // 18. Shipping Box Toggle Js
    $("#ship-box").on("click", function () {
      $("#ship-box-info").slideToggle(700);
    });

    // 19. Counter Js
    $(".counter").counterUp({
      delay: 10,
      time: 1000,
    });

    // 20. Parallax Js
    if ($(".scene").length > 0) {
      $(".scene").parallax({
        scalarX: 10.0,
        scalarY: 15.0,
      });
    }
  });

  ////////////////////////////////////////////////////
  // 20. Parallax Js
  if ($(".scene").length > 0) {
    $(".scene").parallax({
      scalarX: 10.0,
      scalarY: 15.0,
    });
  }

  ////////////////////////////////////////////////////
  // 21. InHover Active Js
  $(".hover__active").on("mouseenter", function () {
    $(this)
      .addClass("active")
      .parent()
      .siblings()
      .find(".hover__active")
      .removeClass("active");
  });

  if (typeof $.fn.knob !== "undefined") {
    $(".knob").each(function () {
      var $this = $(this),
        knobVal = $this.attr("data-rel");

      $this.knob({
        draw: function () {
          $(this.i).val(this.cv + "%");
        },
      });

      $this.appear(
        function () {
          $({ value: 0 }).animate(
            {
              value: knobVal,
            },
            {
              duration: 2000,
              easing: "swing",
              step: function () {
                $this.val(Math.ceil(this.value)).trigger("change");
              },
            }
          );
        },
        {
          accX: 0,
          accY: -150,
        }
      );
    });
  }

  // Helper function for creating Swiper instances
  function createSwiper(selector, slidesPerView, spaceBetween) {
    return new Swiper(selector, {
      slidesPerView: slidesPerView,
      spaceBetween: spaceBetween,
      loop: true,
      autoplay: {
        delay: 3000,
      },
      breakpoints: {
        320: { slidesPerView: 1, spaceBetween: 20 },
        480: { slidesPerView: 2, spaceBetween: 30 },
        640: { slidesPerView: 2, spaceBetween: 40 },
        991: { slidesPerView: 3, spaceBetween: 40 },
        1200: { slidesPerView: 4, spaceBetween: 40 },
        1400: { slidesPerView: 5, spaceBetween: 40 },
      },
    });
  }

  // 22. brand activation
  const brand = createSwiper(".brand-active", 1, 10);

  // 23. testimonial activation
  const testimonial = new Swiper(".testimonial-active", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    autoplay: {
      delay: 1000,
    },
    breakpoints: {
      320: { slidesPerView: 1, spaceBetween: 20 },
      480: { slidesPerView: 1, spaceBetween: 30 },
      640: { slidesPerView: 1, spaceBetween: 40 },
      991: { slidesPerView: 3, spaceBetween: 40 },
      1200: { slidesPerView: 3, spaceBetween: 40 },
      1400: { slidesPerView: 3 },
    },
    observer: true,
    observeParents: true,
    freeMode: true,
    watchSlidesVisibility: true,
    allowTouchMove: true,
    watchSlidesProgress: true,
    spaceBetween: 30,
    hashNavigation: {
      watchState: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  // 24. feedback activation
  const feedback = createSwiper(".feedback-active", 1, 30);

  // 25. category-active
  const category = createSwiper(".category-active", 1, 15);

  // 26. gallery-active
  const gallery = createSwiper(".gallery-active", 1, 0);

  // 27. init Isotope
  $(".grid").imagesLoaded(function () {
    var $grid = $(".grid").isotope({
      layoutMode: "fitRows",
    });

    $(".portfolio-button").on("click", "button", function () {
      var filterValue = $(this).attr("data-filter");
      $grid.isotope({ filter: filterValue });
    });

    $(".portfolio-button button").on("click", function (event) {
      $(this).siblings(".active").removeClass("active");
      $(this).addClass("active");
      event.preventDefault();
    });
  });

  // 28. user-btn-active
  $(".user-btn-sign-in, .user-btn-sign-up").on("click", function () {
    $(".signin-area, .signup-area").addClass("open");
    $(".offcanvas-overlay").addClass("overlay-open");
  });

  $(".offcanvas-overlay").on("click", function () {
    $(".signin-area, .signup-area").removeClass("open");
    $(".offcanvas-overlay").removeClass("overlay-open");
  });

  // 29. calender
  if ($(".myCalendar").length > 0) {
    $(".myCalendar")
      .huicalendar({
        viewDay: new Date("2022/03/19"),
      })
      .on("changeMonth", function (e) {
        console.log(e.year);
        console.log(e.month);
        $(this).huicalendar(
          {
            enabledDay: [19],
            viewDay: new Date(e.year + "/" + e.month + "/01"),
          },
          "update"
        );
      });
  }

  // 30. text-notice
  $(".eduman-header-notice-action-close button").on("click", function () {
    $(".header-note-area").addClass("eduman-header-notice-hide");
  });

  // 31. category-menu
  $(".cattext").on("click", function () {
    $(".cattext").toggleClass("showCategory");
  });

  $("body").on("click", function (e) {
    if ($(e.target).is(".cattext")) {
      return;
    }
    if ($(".cattext.showCategory").length > 0) {
      $(".cattext").removeClass("showCategory");
    }
  });

  // 32. drop-btn
  $(".drop-btn").on("click", function () {
    $(this).parent("").toggleClass("content-hidden");
  });

  $(".wishlist-btn").on("click", function () {
    $(this).toggleClass("w-added");
  });

  // follow btn
  $(".edu-follow-btn").click(function () {
    $(this).toggleClass("followed");
    if ($(".edu-follow-btn").hasClass("followed")) {
      $(this).html("followed");
    } else {
      $(this).html("follow");
    }
  });

  $("#show-review-box").on("click", function () {
    $("#review-box").slideToggle(700);
  });
});
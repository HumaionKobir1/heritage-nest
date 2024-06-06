/*
Theme Name: Heritage-Nest
Theme URI: 
Design by: 
Developed by: Humaion Kobir
Version: 1.0
License: 
Tags: 
*/

(($) => {
  ("use strict");

  menuBar();

  featuredSection();
  
  propartySlider();
 
  propartySlider2()

  testimonialSlider();

  backToTop();


     /*=======================================
    proparty Slider
  =========================================*/
  function propartySlider(){
    let propartySlider1 = new Swiper(".proparty.v1 .slider", {
      slidesPerView: 1,
      spaceBetween: 30,
      loop: true,
      speed: 1000,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      },
      navigation: {
        nextEl: ".proparty.v1 .next-btn",
        prevEl: ".proparty.v1 .prev-btn",
      },
      pagination: {
        el: ".proparty.v1 .proparty-pagination",
        clickable: true,
      },
      breakpoints: {
        300: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        1200: {
          slidesPerView: 3,
        },
      },
    });
  }

  function propartySlider2(){
    let propartySlider2 = new Swiper(".proparty.v2 .slider", {
      slidesPerView: 1,
      spaceBetween: 30,
      loop: true,
      speed: 1000,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      },
      navigation: {
        nextEl: ".proparty.v2 .next-btn",
        prevEl: ".proparty.v2 .prev-btn",
      },
      pagination: {
        el: ".proparty.v2 .proparty-pagination",
        clickable: true,
      },
      breakpoints: {
        300: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        1200: {
          slidesPerView: 3,
        },
      },
    });
  }

  /*=====================
      Menu Bar
  =======================*/

  $(".menu-bar .siderbar-menu .close-btn")
    .parents(".menu-right")
    .find(".siderbar-menu")
    .before(`<div class="siderbar-overlay"></div>`);

  $(".menu-bar .siderbar-btns").on("click", function () {
    $(this).parents(".menu-right").find(".siderbar-menu").addClass("active");
    $(this).parents(".menu-right").find(".siderbar-overlay").addClass("active");
  });

  $(".menu-bar .siderbar-menu .close-btn, .menu-bar .siderbar-overlay").on(
    "click",
    function () {
      $(this)
        .parents(".menu-right")
        .find(".siderbar-menu")
        .removeClass("active");
      $(this)
        .parents(".menu-right")
        .find(".siderbar-overlay")
        .removeClass("active");
    }
  );

  function menuBar() {
    let copyMenuLogo = $(".menu-bar .menu-logo").html();
    let copyMenuList = $(".menu-bar .main-menu ul").html();

    $(".menu-bar .menu-right").append(`<div class="search-overlay"></div>`);

    $(".menu-bar .mobile-menu-bar .mobile-content").before(`
        <div class="mobile-menu-header">
          <div class="mobile-logo">${copyMenuLogo}</div>
          <button class="close-mobile-btn"><i class="my-icon icon-close"></i></button>
        </div>
        <nav class="mobile-main-manu">
            <ul>${copyMenuList}</ul>
        </nav>
      </div>`);

    $(".menu-bar .mobile-btns").on("click", function () {
      $(this).addClass("active");
      $(this)
        .parents(".menu-right")
        .find(".mobile-menu-bar, .mobile-menu-overlay")
        .addClass("active");
    });

    $(".menu-bar .search-option-open").on("click", function () {
      $(this).parents(".menu-right").addClass("active");
    });

    $(".menu-bar .search-close").on("click", function () {
      $(this).parents(".menu-right").removeClass("active");
    });

    $(".menu-bar .mobile-menu-bar")
      .parent()
      .append(`<div class="mobile-menu-overlay"></div>`);

    $(".menu-bar .close-mobile-btn, .menu-bar .mobile-menu-overlay").on(
      "click",
      function () {
        $(this)
          .parents(".menu-right")
          .find(".mobile-menu-bar, .mobile-menu-btn, .mobile-menu-overlay")
          .removeClass("active");
      }
    );

    $(".menu-bar .mobile-main-manu li:has(ul) > a").on("click", function (e) {
      e.preventDefault();
      const $parent = $(this).parent("li");
      const $siblings = $parent.siblings("li");
      const isActive = $parent.hasClass("active");
      if (isActive) {
        $parent.removeClass("active");
        $parent.find("ul").slideUp();
      } else {
        $parent.addClass("active");
        $siblings.removeClass("active");
        $siblings.find("ul:visible").slideUp();
        $parent.find("ul").slideDown();
      }
    });

    $(".menu-bar .mobile-main-manu .has-dropdown")
      .find(".active")
      .parent()
      .slideDown();

    let topHeight = $(".top-bar").outerHeight();
    $(window).scroll(() => {
      let menuHeight = $(".menu-bar").outerHeight();
      let menuBar = $(".menu-bar");
      if (
        menuBar.hasClass("v3") ||
        menuBar.hasClass("v5") ||
        menuBar.hasClass("v6")
      ) {
        handleStickyHeader(topHeight);
      } else {
        stikyHeader1();
      }
      function handleStickyHeader(topHeight) {
        if ($(window).scrollTop() > topHeight) {
          menuBar.addClass("sticky-header");
        } else {
          menuBar.removeClass("sticky-header");
        }
      }

      function stikyHeader1() {
        if ($(window).scrollTop() > 0) {
          menuBar.addClass("sticky-header");
          $("main").css({ "margin-top": menuHeight });
        } else {
          menuBar.removeClass("sticky-header");
          $("main").css({ "margin-top": 0 });
        }
      }
    });
  }


  /*========================
      3 VenoBox
  =======================*/
  function venoBox() {
    new VenoBox();
  }

  /*========================
      Anime Counter Up
  =======================*/
  function animeCounterUp() {
    const $counterElements = $(".counter");

    function animateElement(element) {
      if (!element.dataset.animated) {
        const originalText = element.textContent; // Capture the original text before animation
        anime({
          targets: element,
          innerHTML: [
            parseInt(element.dataset.countMin) || 0,
            parseInt(element.dataset.countMax),
          ],
          round: 1,
          easing: "linear",
          duration: parseInt(element.dataset.countDuration) || 1000,
          delay: parseInt(element.dataset.countDelay) || 500,
          complete: function (anim) {
            // Animation is complete, restore the original text
            element.textContent = originalText;
          },
        });

        element.dataset.animated = true; // Set the animated flag to prevent re-animating
      }
    }

    const isElementInViewport = (el) => {
      const rect = el.getBoundingClientRect();
      return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <=
          (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <=
          (window.innerWidth || document.documentElement.clientWidth)
      );
    };

    const handleScroll = () => {
      $counterElements.each(function () {
        if (isElementInViewport(this)) {
          animateElement(this); // Animate the current counter element if not already animated
        }
      });
    };

    $counterElements.each(function () {
      if (isElementInViewport(this)) {
        animateElement(this); // Animate initially visible counter elements
      }
    });

    $(window).on("scroll", handleScroll);
  }

  /*========================
        5 My Progress Bar
    =======================*/

  function myProgressBar() {
    document.addEventListener("DOMContentLoaded", function () {
      const percentDivs = document.querySelectorAll(".percent");
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animateCircle(entry.target);
            observer.unobserve(entry.target);
          }
        });
      });
      percentDivs.forEach((percentDiv) => {
        observer.observe(percentDiv);
      });

      function animateCircle(percentDiv) {
        const percent = parseInt(percentDiv.getAttribute("data-percent"), 10);
        const duration =
          parseInt(percentDiv.getAttribute("data-duration")) || 1500;
        const delay = parseInt(percentDiv.getAttribute("data-delay")) || 0;

        const svg = document.createElementNS(
          "http://www.w3.org/2000/svg",
          "svg"
        );
        const bgCircle = document.createElementNS(
          "http://www.w3.org/2000/svg",
          "circle"
        );
        const circle = document.createElementNS(
          "http://www.w3.org/2000/svg",
          "circle"
        );

        svg.setAttribute("viewBox", "0 0 215 215");
        svg.setAttribute("width", "100%");

        bgCircle.setAttribute("cx", "108");
        bgCircle.setAttribute("cy", "108");
        bgCircle.setAttribute("r", "100");

        circle.setAttribute("cx", "108");
        circle.setAttribute("cy", "108");
        circle.setAttribute("r", "100");

        svg.appendChild(bgCircle);
        svg.appendChild(circle);
        percentDiv.appendChild(svg);

        anime({
          targets: circle,
          strokeDashoffset: [
            anime.setDashoffset,
            2 * Math.PI * 100 - (2 * Math.PI * 100 * percent) / 100,
          ],
          easing: "easeInOutSine",
          duration: duration,
          delay: delay,
        });

        const numberDiv = document.createElement("div");
        numberDiv.classList.add("number");
        percentDiv.appendChild(numberDiv);

        // Counting animation for numberDiv
        anime({
          targets: numberDiv,
          innerHTML: [0, percent],
          round: 1, // Round the numbers to whole integers
          easing: "easeInOutQuad",
          duration: duration,
          delay: delay, // Adjust the delay to start the numberDiv animation after the circle animation
        });
      }
    });


    const isElementInViewport = (el) => {
      const rect = el.getBoundingClientRect();
      return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <=
          (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <=
          (window.innerWidth || document.documentElement.clientWidth)
      );
    };

    const handleScroll = () => {
      $progressElements.each(function () {
        if (isElementInViewport(this)) {
          animateElement();
          $(window).off("scroll", handleScroll);
        }
      });
    };

    $(window).on("scroll", handleScroll);
  }

  /*============================
      Testimonial Slider
  ===========================*/

  function testimonialSlider(){
    let testimonialSlider1 = new Swiper(".testimonial.v1 .slider", {
      slidesPerView: 1,
      spaceBetween: 30,
      loop: true,
      speed: 1000,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      },
      navigation: {
        nextEl: ".next-btn",
        prevEl: ".prev-btn",
      },
      pagination: {
        el: ".testimonial.v2 .testimonial-pagination",
        clickable: true,
      },
      breakpoints: {
        300: {
          slidesPerView: 1,
        },
        992: {
          slidesPerView: 2,
        },
      },
    });
    let testimonialSlider2 = new Swiper(".testimonial.v2 .slider", {
      slidesPerView: 1,
      spaceBetween: 30,
      loop: true,
      speed: 1000,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      },
      navigation: {
        nextEl: ".next-btn",
        prevEl: ".prev-btn",
      },
      pagination: {
        el: ".testimonial.v2 .testimonial-pagination",
        clickable: true,
      },
      breakpoints: {
        300: {
          slidesPerView: 1,
        },
        992: {
          slidesPerView: 2,
        },
      },
    });

    let testimonialSlider3 = new Swiper(".testimonial.v3 .slider", {
      slidesPerView: 1,
      spaceBetween: 30,
      loop: true,
      speed: 1000,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      },
    });
  }
})(jQuery);

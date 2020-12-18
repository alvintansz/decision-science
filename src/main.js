// Import css
import "./scss/index.scss";

if (typeof window.Steenify === "undefined") {
  window.Steenify = {};
}

import "./js/home";

var interval = null;

window.Steenify.common = {
  init: function () {
    Steenify.common.init__page();
    Steenify.common.init__scroll__page();
    Steenify.common.init__movedown();
  },
  init__page: function () {
    const view = $(".steenify__page").data("view");
    switch (view) {
      case "home":
        Steenify.home.init__home();
        break;
      default:
        console.log(view);
    }
  },
  init__scroll__page: function () {
    const windowWidth = $(window).width();
    const fullPageDs = new fullpage("#fullpage", {
      autoScrolling: true,
      scrollHorizontally: true,
      scrollingSpeed: 700,
      lockAnchors: true,
      anchors: [
        "intro",
        "about-us",
        "philosophy",
        "clients",
        "projects",
        "leadership",
        "join-us",
        "location",
      ],
      onLeave: function (origin, destination, direction) {
        const { item, index } = destination;
        const social = $(item).data("social");
        const nav = $(item).data("nav");
        const navLine = $("[data-nav-line]");

        if (index === 0) {
          if ($(".canvas--2").hasClass("active")) {
            const video1 = document.getElementById("video1");
            video1.play();
          }
        }

        $(".navigate")
          .removeClass("navigate--light")
          .removeClass("navigate--dark");

        $(".social-media")
          .removeClass("social-media--light")
          .removeClass("social-media--dark");

        $(".navigate").addClass(nav);
        $(".social-media").addClass(social);

        let i = index;
        if (index > 0) {
          i = index - 1;
        }

        $("[data-nav-item]").removeClass("active");
        $("[data-nav-item]").eq(i).addClass("active");

        navLine.stop().animate(
          {
            height:
              index === 1
                ? 25
                : index === 8
                ? (index - 1) * 50 + 50
                : (index - 1) * 50 + 25,
          },
          750,
          function () {}
        );

        const classNameLabelAnimate =
          ".block-content--" + (parseInt(index) + 1) + " .label-animate";
        const classNameTextAnimate =
          ".block-content--" + (parseInt(index) + 1) + " .text-animate";
        const classNameClippathAnimate =
          ".block-content--" + (parseInt(index) + 1) + " .clippath-animate";
        const classNameImgAnimate =
          ".block-content--" + (parseInt(index) + 1) + " .img-animate";
        const classNameFadeAnimate =
          ".block-content--" + (parseInt(index) + 1) + " .fade-animate";
        const classNameFadeTextAnimate =
          ".block-content--" + (parseInt(index) + 1) + " .fade-text-animate";

        $(classNameLabelAnimate).attr("style", "");
        $(classNameTextAnimate).attr("style", "");
        $(classNameClippathAnimate).attr("style", "");
        $(classNameImgAnimate).attr("style", "");
        $(classNameFadeAnimate).attr("style", "");
        $(classNameFadeTextAnimate).attr("style", "");

        // Reset slider
        if ($(".philosophy__control").hasClass("slick-initialized")) {
          $(".philosophy__control").slick("slickGoTo", 0);
          $(".philosophy__control").slick("slickPause");
        }

        $(".philosophy").removeClass("active");
        $(".philosophy .item.active").removeClass("active");
        $(".philosophy__circle__line").css(
          "-webkit-transform",
          "rotate(" + 0 + "deg)"
        );

        $(".philosophy__circle__line")
          .find(".philosophy__circle__input")
          .val(0);

        if (interval) {
          clearInterval(interval);
          interval = null;
        }
      },
      afterLoad: function (origin, destination, direction) {
        const { index } = destination;
        if (index % 2 === 0) {
          $(".scroll-down").removeClass("scroll-down--dark");
        } else {
          $(".scroll-down").addClass("scroll-down--dark");
        }
        if (index === 7) {
          $(".scroll-down").addClass("scroll-down--back");
        } else {
          $(".scroll-down").removeClass("scroll-down--back");
        }

        const classNameLabelAnimate =
          ".block-content--" + (parseInt(index) + 1) + " .label-animate";
        const classNameTextAnimate =
          ".block-content--" + (parseInt(index) + 1) + " .text-animate";
        const classNameClippathAnimate =
          ".block-content--" + (parseInt(index) + 1) + " .clippath-animate";
        const classNameImgAnimate =
          ".block-content--" + (parseInt(index) + 1) + " .img-animate";
        const classNameFadeAnimate =
          ".block-content--" + (parseInt(index) + 1) + " .fade-animate";
        const classNameClippathImgAnimate =
          ".block-content--" + (parseInt(index) + 1) + " .clippath-img-animate";
        const classNameFadeTextAnimate =
          ".block-content--" + (parseInt(index) + 1) + " .fade-text-animate";

        if ($(classNameLabelAnimate).length && $(classNameTextAnimate).length) {
          var t = new TimelineLite();

          if ($(classNameLabelAnimate).length) {
            t.fromTo(
              classNameLabelAnimate,
              0.7,
              {
                y: "40px",
                opacity: 0,
              },
              {
                y: 0,
                opacity: 1,
                ease: "Power3.easeOut",
              },
              "animate-heading"
            );
          }

          if ($(classNameTextAnimate).length) {
            t.staggerFromTo(
              classNameTextAnimate,
              1,
              {
                y: "40px",
                opacity: 0,
              },
              {
                y: 0,
                opacity: 1,
                ease: "Power4.easeOut",
              },
              0.1,
              "animate-heading"
            );
          }

          if ($(classNameFadeTextAnimate).length) {
            t.fromTo(
              classNameFadeTextAnimate,
              0.8,
              {
                opacity: 0,
              },
              {
                delay: 0.5,
                opacity: 1,
              },
              "animate-heading"
            );
          }
          if (direction === "down") {
            if ($(classNameClippathAnimate).length) {
              t.fromTo(
                classNameClippathAnimate,
                0.8,
                {
                  webkitClipPath:
                    "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",
                  clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",
                },
                {
                  webkitClipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
                  clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
                  ease: "Power4.easeInOut",
                  force3D: !1,
                },
                "animate-heading"
              );
            }
          } else {
            if ($(classNameClippathAnimate).length) {
              t.fromTo(
                classNameClippathAnimate,
                0.8,
                {
                  webkitClipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
                  clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
                },
                {
                  webkitClipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
                  clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
                  ease: "Power4.easeInOut",
                  force3D: !1,
                },
                "animate-heading"
              );
            }
          }

          if ($(classNameImgAnimate).length) {
            t.fromTo(
              classNameImgAnimate,
              0.5,
              {
                y: 20,
                opacity: 0,
                ease: "Power3.ease",
              },
              {
                delay: 0.7,
                y: 0,
                opacity: 1,
                ease: "Power3.ease",
              },
              "animate-heading"
            );
          }

          if (direction === "down") {
            if ($(classNameClippathImgAnimate).length) {
              t.fromTo(
                classNameClippathImgAnimate,
                0.8,
                {
                  webkitClipPath:
                    "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",
                  clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",
                },
                {
                  delay: 0.3,
                  webkitClipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
                  clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
                  ease: "Power4.easeInOut",
                  force3D: !1,
                },
                "animate-heading"
              );
            }
          } else {
            if ($(classNameClippathImgAnimate).length) {
              t.fromTo(
                classNameClippathImgAnimate,
                0.8,
                {
                  webkitClipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
                  clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
                },
                {
                  delay: 0.3,
                  webkitClipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
                  clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
                  ease: "Power4.easeInOut",
                  force3D: !1,
                },
                "animate-heading"
              );
            }
          }

          if ($(classNameFadeAnimate).length) {
            t.to(
              classNameFadeAnimate,
              0.7,
              {
                delay: 0.3,
                opacity: 1,
                ease: "Power3.easeOut",
                onComplete: onComplete,
              },
              "animate-heading"
            );
          }

          function onComplete() {
            $(".philosophy").addClass("active");
            $(".philosophy .item--top-left").addClass("active");
            $(".philosophy__circle__line").css(
              "-webkit-transform",
              "rotate(" + 0 + "deg)"
            );
            $(".philosophy__circle__input").val(0);

            // Autoplay slider
            if ($(".philosophy__control").hasClass("slick-initialized")) {
              $(".philosophy__control").slick("slickPlay");
            }

            // Auto play on desktop
            interval = setInterval(() => {
              const current = parseInt(
                $(".philosophy .item.active").data("index")
              );
              const next = current + 1 > 3 ? 0 : current + 1;

              gotoItem($(".philosophy .item").eq(next));
            }, 5000);
          }
        }
      },
    });

    fullPageDs.setAllowScrolling(false);

    $("[data-nav-item]").on("click", function () {
      const self = $(this);
      const anchor = self.data("anchor");

      const w = $(window).width();

      if (w < 992) {
        if ($(".hamburger").hasClass("active")) {
          $(".hamburger").trigger("click");
        }

        if (anchor) {
          const eleTarget = $("#section-" + anchor);
          if (eleTarget.length) {
            $("html, body")
              .stop()
              .animate(
                {
                  scrollTop: eleTarget.offset().top - 70,
                },
                800
              );
          }
        }

        $(".navigate .listlinks .item.active").removeClass("active");
        self.addClass("active");
      } else {
        if (anchor && fullPageDs) {
          fullPageDs.silentMoveTo(anchor);
        }
      }
    });

    if ($(window).width() < 992) {
      fullPageDs.setAllowScrolling(true);
      fullPageDs.setResponsive(true);
      animateBanner();
    } else {
      fullPageDs.setResponsive(false);
    }

    // Block 1

    function animateBanner() {
      $(".page__cover").addClass("done");
      $(".logo").addClass("animated");
      $(".navigate").addClass("animated");
      $(".social-media").addClass("animated");

      setTimeout(function () {
        // Animate title
        const tl = new TimelineLite();

        tl.staggerTo(
          $(".block-content--1 .title-animate"),
          0.7,
          {
            y: 0,
            opacity: 1,
            ease: "Power4.easeOut",
          },
          0.1,
          "title"
        );

        tl.staggerTo(
          ".block-content--1 .intro__title span",
          0.2,
          {
            opacity: 1,
            top: 0,
          },
          0.1,
          "title"
        );

        tl.to(".certificates", 0.5, {
          opacity: 1,
          onComplete: onCompleteBlock1,
        });

        function onCompleteBlock1() {
          $(".scroll-down").stop().fadeIn();
          fullPageDs.setAllowScrolling(true);
        }
      }, 0.5);
    }

    var processor = {
      timerCallback: function () {
        if ($(window).width() < 992) {
          return;
        }
        if (this.video.currentTime > 11.5) {
          $(".canvas--2").addClass("active");
        }
        if (this.video.paused || this.video.ended) {
          animateBanner();
          return;
        }

        this.computeFrame();
        let self = this;
        setTimeout(function () {
          self.timerCallback();
        }, 0);
      },

      doLoad: function () {
        this.video = document.getElementById("video");
        var c1 = document.getElementById("c1");
        this.ctx1 = c1.getContext("2d");
        let self = this;

        if ($(window).width() < 992) {
          return;
        }

        window.addEventListener("resize", resizeCanvas, false);

        function resizeCanvas() {
          c1.width = window.innerWidth;
          c1.height = window.innerHeight;
        }

        resizeCanvas();

        video.play();

        this.video.addEventListener(
          "play",
          function () {
            self.width = $(window).width();
            self.height = $(window).height();
            self.timerCallback();
          },
          false
        );
      },

      computeFrame: function () {
        this.ctx1.drawImage(this.video, 0, 0, this.width, this.height);
        return;
      },
    };

    var processor1 = {
      timerCallback: function () {
        if ($(window).width() < 992) {
          return;
        }
        if (this.video1.paused || this.video1.ended) {
          return;
        }

        this.computeFrame();
        let self = this;
        setTimeout(function () {
          self.timerCallback();
        }, 0);
      },

      doLoad: function () {
        this.video1 = document.getElementById("video1");
        var c2 = document.getElementById("c2");
        this.ctx2 = c2.getContext("2d");
        let self = this;

        if ($(window).width() < 992) {
          return;
        }

        window.addEventListener("resize", resizeCanvas, false);

        function resizeCanvas() {
          const w = window.innerWidth;
          c2.width = window.innerWidth;
          c2.height = window.innerHeight;
        }

        resizeCanvas();

        video1.play();

        this.video1.addEventListener(
          "play",
          function () {
            self.width = $(window).width();
            self.height = $(window).height();
            self.timerCallback();
          },
          false
        );
      },

      computeFrame: function () {
        this.ctx2.drawImage(this.video1, 0, 0, this.width, this.height);
        return;
      },
    };

    processor.doLoad();
    processor1.doLoad();

    // Block 3
    $(".block-content--2 .block-control .item-control").on(
      "click",
      function () {
        const self = $(this);
        if (!self.hasClass("active")) {
          const blockCaption = self.closest(".block-caption");
          const blockControl = self.closest(".block-control");
          const total = blockControl.find(".item-control").length;
          const index = self.data("index");

          blockCaption.find(".item-control.active").removeClass("active");
          self.addClass("active");

          blockControl
            .find(".current")
            .html(parseInt(index) > 9 ? index : `0${index}`);

          blockControl.find(".bar").css({
            width: `${(index / total) * 100}%`,
          });

          blockCaption.find(".block-tab.active").removeClass("active");
          blockCaption.find(`.block-tab--${index}`).addClass("active");
        }
      }
    );

    $(".block-content--2 .block-control .btn-control--next").on(
      "click",
      function () {
        const self = $(this);
        const blockControl = self.closest(".block-control");
        const total = blockControl.find(".item-control").length;
        const currentIndex = blockControl
          .find(".item-control.active")
          .data("index");
        const nextIndex = parseInt(currentIndex) + 1;
        if (nextIndex > total) {
          blockControl.find('[data-index="1"]').trigger("click");
        } else {
          blockControl
            .find('[data-index="' + nextIndex + '"]')
            .trigger("click");
        }
      }
    );

    $(".block-content--2 .block-control .btn-control--prev").on(
      "click",
      function () {
        const self = $(this);
        const blockControl = self.closest(".block-control");
        const total = blockControl.find(".item-control").length;
        const currentIndex = blockControl
          .find(".item-control.active")
          .data("index");
        const prevIndex = parseInt(currentIndex) - 1;
        if (prevIndex < 1) {
          blockControl.find('[data-index="' + total + '"]').trigger("click");
        } else {
          blockControl
            .find('[data-index="' + prevIndex + '"]')
            .trigger("click");
        }
      }
    );

    // Block 3
    $(".philosophy .item").on("click", function () {
      if ($(window).width() > 992) {
        if (interval) {
          clearInterval(interval);
          interval = null;
        }

        gotoItem($(this));
      }
    });

    $(".philosophy .dot").on("click", function () {
      const index = $(this).data("index");

      gotoItem($(".philosophy .item").eq(index));
    });

    $("#swipe-container").swipe({
      swipe: function (
        event,
        direction,
        distance,
        duration,
        fingerCount,
        fingerData
      ) {
        if ($(window).width() < 992) {
          if (interval) {
            clearInterval(interval);
            interval = null;
          }

          const current = parseInt($(".philosophy .item.active").data("index"));

          let target = -1;

          if (direction === "left") {
            // Next slide
            target = current + 1 > 3 ? 0 : current + 1;
          } else {
            // Prev slide
            target = current - 1 < 0 ? 3 : current - 1;
          }

          gotoItem($(".philosophy .item").eq(target));
        }
      },
      threshold: 0,
    });

    function gotoItem(target) {
      const index = target.data("index");
      const philosophy = target.closest(".philosophy");
      const line = philosophy.find(".philosophy__circle__line");
      const input = line.find(".philosophy__circle__input");
      const currentDeg = input.val();
      const dot = philosophy.find(".dot");

      if (philosophy.hasClass("active")) {
        const startIndex = philosophy.find(".item.active").index();
        philosophy.find(".item.active").removeClass("active");
        philosophy.find(".dot.active").removeClass("active");

        target.addClass("active");

        dot.eq(index).addClass("active");

        philosophy.find(".philosophy__image.active").removeClass("active");

        philosophy.find(".philosophy__image").eq(index).addClass("active");

        let deg = 0;

        switch (index - startIndex) {
          case 1:
            deg = parseInt(currentDeg) - 90;
            break;
          case 2:
            deg = parseInt(currentDeg) - 2 * 90;
            break;
          case -1:
            deg = parseInt(currentDeg) + 90;
            break;
          case -2:
            deg = parseInt(currentDeg) + 2 * 90;
            break;
          case 3:
            deg = parseInt(currentDeg) + 90;
            break;
          case -3:
            deg = parseInt(currentDeg) - 90;
            break;
          default:
            deg = parseInt(currentDeg);
        }

        input.val(deg);
        philosophy.addClass("active");
        line.css("-webkit-transform", "rotate(" + deg + "deg)");

        // Auto play on desktop
        if (!interval) {
          interval = setInterval(() => {
            const current = $(".philosophy .item.active").data("index");
            const next = current + 1 > 3 ? 0 : current + 1;
            gotoItem($(".philosophy .item").eq(next));
          }, 5000);
        }
      }
    }

    // Block 4
    if ($(".clients__logo").length) {
      $(".clients__logo").slick({
        slidesToShow: 5,
        slidesToScroll: 5,
        infinite: true,
        arrows: true,
        prevArrow:
          '<button type="button" class="slick-prev"><svg width="15" height="18" viewBox="0 0 15 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.59643 7.41469L8.46349 1.0877C8.91443 0.67223 9.64404 0.992082 9.64404 1.60524C9.64404 1.79619 9.56644 1.97895 9.42905 2.11157L3.15644 8.16605C2.74909 8.55924 2.74909 9.21188 3.15644 9.60507L9.42905 15.6596C9.56644 15.7922 9.64405 15.9749 9.64405 16.1659C9.64405 16.779 8.91443 17.0989 8.4635 16.6834L1.59643 10.3564C0.736681 9.5643 0.736681 8.20682 1.59643 7.41469Z" fill="#D41222"/><path d="M9.89787 7.81966L14.0927 4.07183C14.4007 3.7967 14.8891 4.01528 14.8891 4.42823C14.8891 4.56047 14.8343 4.68679 14.7377 4.77716L10.6737 8.58101C10.2515 8.97618 10.2515 9.64603 10.6737 10.0412L14.7377 13.8451C14.8343 13.9354 14.8891 14.0617 14.8891 14.194C14.8891 14.6069 14.4007 14.8255 14.0927 14.5504L9.89786 10.8026C9.00788 10.0074 9.00788 8.6148 9.89787 7.81966Z" fill="#909090"/></svg></button>',
        nextArrow:
          '<button type="button" class="slick-next"><svg width="15" height="18" viewBox="0 0 15 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13.2922 10.5853L6.42518 16.9123C5.97424 17.3278 5.24463 17.0079 5.24463 16.3948C5.24463 16.2038 5.32223 16.021 5.45962 15.8884L11.7322 9.83395C12.1396 9.44076 12.1396 8.78812 11.7322 8.39493L5.45962 2.34045C5.32223 2.20783 5.24463 2.02508 5.24463 1.83412C5.24463 1.22097 5.97424 0.901114 6.42518 1.31658L13.2922 7.64357C14.152 8.4357 14.152 9.79318 13.2922 10.5853Z" fill="#D41222"/><path d="M4.99081 10.1803L0.795946 13.9282C0.487999 14.2033 -0.000398269 13.9847 -0.000398338 13.5718C-0.00039836 13.4395 0.0543916 13.3132 0.150937 13.2228L4.21498 9.41899C4.63719 9.02382 4.63719 8.35397 4.21498 7.9588L0.150935 4.15495C0.0543901 4.06459 -0.000399955 3.93826 -0.000399978 3.80602C-0.000400047 3.39307 0.487998 3.17449 0.795945 3.44962L4.99081 7.19745C5.8808 7.99259 5.8808 9.3852 4.99081 10.1803Z" fill="#909090"/></svg></button>',
        responsive: [
          {
            breakpoint: 1201,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 4,
            },
          },
          {
            breakpoint: 992,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
            },
          },
          {
            breakpoint: 564,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
            },
          },
        ],
      });
    }

    // Block 5
    $("[data-view-more]").on("click", function () {
      const self = $(this);
      const target = self.data("target");

      const eleTarget = $(target);
      const content = self.closest(".item").html();
      if (eleTarget.length) {
        eleTarget.find(".modal-body").html(content);
        eleTarget.modal("show");
      }
    });

    const leadership = $(".leadership");
    if (leadership.length) {
      leadership.slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
      });

      leadership.on(
        "beforeChange",
        function (event, slick, currentSlide, nextSlide) {
          $(".leadership-bar .current").html(
            nextSlide + 1 > 9 ? nextSlide + 1 : `0${nextSlide + 1}`
          );
          $(".leadership-bar")
            .find(".bar")
            .css({
              width: `${((nextSlide + 1) / slick.slideCount) * 100}%`,
            });
        }
      );
    }

    $(".leadership-bar .btn-control--next").on("click", function () {
      leadership.slick("slickNext");
    });

    $(".leadership-bar .btn-control--prev").on("click", function () {
      leadership.slick("slickPrev");
    });

    // Block 6
    const projects = $(".projects");
    // const projectBar = $(".projects-bar__slider");

    if (projects.length) {
      projects.slick({
        slidesToShow: 1,
        infinite: true,
        slidesToScroll: 1,
      });

      projects.on(
        "beforeChange",
        function (event, slick, currentSlide, nextSlide) {
          $(".projects-bar .current").html(
            nextSlide + 1 > 9 ? nextSlide + 1 : `0${nextSlide + 1}`
          );
          $(".projects-bar")
            .find(".bar")
            .css({
              width: `${((nextSlide + 1) / slick.slideCount) * 100}%`,
            });
        }
      );
    }

    $(".projects-bar .btn-control--next").on("click", function () {
      projects.slick("slickNext");
    });

    $(".projects-bar .btn-control--prev").on("click", function () {
      projects.slick("slickPrev");
    });

    // Resize
    $(window).on("resize", function () {
      if ($(this).width() < 992) {
        fullPageDs.setResponsive(true);

        if ($(".hamburger").hasClass("active")) {
          $(".navigate").stop().show();
        } else {
          $(".navigate").stop().hide();
        }
      } else {
        // fullPageDs.setResponsive(false);
        // Menu
        if (!$(".hamburger").hasClass("active")) {
          $(".navigate").stop().show();
        }
      }
    });

    // Menu
    $(".hamburger").on("click", function () {
      const self = $(this);

      self.toggleClass("active");
      $(".navigate").toggle();
      $(".main-header").toggleClass("opened");
    });

    var $main_header = $(".main-header");

    $(window).on("scroll", function () {
      var scroll = $(window).scrollTop();

      if (scroll > 300) {
        $main_header.addClass("sticky");
      } else {
        $main_header.removeClass("sticky");
      }
    });
  },

  init__movedown: function () {
    $(".scroll-down").on("click", function () {
      if ($(this).hasClass("scroll-down--back")) {
        fullpage_api.moveTo(1, 0);
      } else {
        fullpage_api.moveSectionDown();
      }
    });
  },
};

//***************************************
//      Main program
//***************************************
$(document).ready(function () {
  Steenify.common.init();
});

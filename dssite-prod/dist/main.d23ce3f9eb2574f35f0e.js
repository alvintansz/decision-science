!function(i){var o={};function n(e){if(o[e])return o[e].exports;var t=o[e]={i:e,l:!1,exports:{}};return i[e].call(t.exports,t,t.exports,n),t.l=!0,t.exports}n.m=i,n.c=o,n.d=function(e,t,i){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(i,o,function(e){return t[e]}.bind(null,o));return i},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/dist/",n(n.s=0)}([function(e,t,i){"use strict";i(1),i(2),void 0===window.Steenify&&(window.Steenify={});var h=null;window.Steenify.common={init:function(){Steenify.common.init__page(),Steenify.common.init__scroll__page(),Steenify.common.init__movedown()},init__page:function(){var e=$(".steenify__page").data("view");"home"===e?Steenify.home.init__home():console.log(e)},init__scroll__page:function(){$(window).width();var o=new fullpage("#fullpage",{autoScrolling:!0,scrollHorizontally:!0,scrollingSpeed:700,lockAnchors:!0,anchors:["intro","about-us","philosophy","clients","projects","leadership","join-us","location"],onLeave:function(e,t,i){var o=t.item,n=t.index,a=$(o).data("social"),l=$(o).data("nav"),s=$("[data-nav-line]");0===n&&$(".canvas--2").hasClass("active")&&document.getElementById("video1").play(),$(".navigate").removeClass("navigate--light").removeClass("navigate--dark"),$(".social-media").removeClass("social-media--light").removeClass("social-media--dark"),$(".navigate").addClass(l),$(".social-media").addClass(a);t=0<n?n-1:n;$("[data-nav-item]").removeClass("active"),$("[data-nav-item]").eq(t).addClass("active"),s.stop().animate({height:1===n?25:8===n?50*(n-1)+50:50*(n-1)+25},750,function(){});o=".block-content--"+(parseInt(n)+1)+" .label-animate",l=".block-content--"+(parseInt(n)+1)+" .text-animate",a=".block-content--"+(parseInt(n)+1)+" .clippath-animate",t=".block-content--"+(parseInt(n)+1)+" .img-animate",s=".block-content--"+(parseInt(n)+1)+" .fade-animate",n=".block-content--"+(parseInt(n)+1)+" .fade-text-animate";$(o).attr("style",""),$(l).attr("style",""),$(a).attr("style",""),$(t).attr("style",""),$(s).attr("style",""),$(n).attr("style",""),$(".philosophy__control").hasClass("slick-initialized")&&($(".philosophy__control").slick("slickGoTo",0),$(".philosophy__control").slick("slickPause")),$(".philosophy").removeClass("active"),$(".philosophy .item.active").removeClass("active"),$(".philosophy__circle__line").css("-webkit-transform","rotate(0deg)"),$(".philosophy__circle__line").find(".philosophy__circle__input").val(0),h&&(clearInterval(h),h=null)},afterLoad:function(e,t,i){var o=t.index;o%2==0?$(".scroll-down").removeClass("scroll-down--dark"):$(".scroll-down").addClass("scroll-down--dark"),7===o?$(".scroll-down").addClass("scroll-down--back"):$(".scroll-down").removeClass("scroll-down--back");var n=".block-content--"+(parseInt(o)+1)+" .label-animate",a=".block-content--"+(parseInt(o)+1)+" .text-animate",l=".block-content--"+(parseInt(o)+1)+" .clippath-animate",s=".block-content--"+(parseInt(o)+1)+" .img-animate",c=".block-content--"+(parseInt(o)+1)+" .fade-animate",r=".block-content--"+(parseInt(o)+1)+" .clippath-img-animate",t=".block-content--"+(parseInt(o)+1)+" .fade-text-animate";$(n).length&&$(a).length&&(o=new TimelineLite,$(n).length&&o.fromTo(n,.7,{y:"40px",opacity:0},{y:0,opacity:1,ease:"Power3.easeOut"},"animate-heading"),$(a).length&&o.staggerFromTo(a,1,{y:"40px",opacity:0},{y:0,opacity:1,ease:"Power4.easeOut"},.1,"animate-heading"),$(t).length&&o.fromTo(t,.8,{opacity:0},{delay:.5,opacity:1},"animate-heading"),"down"===i?$(l).length&&o.fromTo(l,.8,{webkitClipPath:"polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",clipPath:"polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)"},{webkitClipPath:"polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",clipPath:"polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",ease:"Power4.easeInOut",force3D:!1},"animate-heading"):$(l).length&&o.fromTo(l,.8,{webkitClipPath:"polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",clipPath:"polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)"},{webkitClipPath:"polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",clipPath:"polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",ease:"Power4.easeInOut",force3D:!1},"animate-heading"),$(s).length&&o.fromTo(s,.5,{y:20,opacity:0,ease:"Power3.ease"},{delay:.7,y:0,opacity:1,ease:"Power3.ease"},"animate-heading"),"down"===i?$(r).length&&o.fromTo(r,.8,{webkitClipPath:"polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",clipPath:"polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)"},{delay:.3,webkitClipPath:"polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",clipPath:"polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",ease:"Power4.easeInOut",force3D:!1},"animate-heading"):$(r).length&&o.fromTo(r,.8,{webkitClipPath:"polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",clipPath:"polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)"},{delay:.3,webkitClipPath:"polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",clipPath:"polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",ease:"Power4.easeInOut",force3D:!1},"animate-heading"),$(c).length&&o.to(c,.7,{delay:.3,opacity:1,ease:"Power3.easeOut",onComplete:function(){$(".philosophy").addClass("active"),$(".philosophy .item--top-left").addClass("active"),$(".philosophy__circle__line").css("-webkit-transform","rotate(0deg)"),$(".philosophy__circle__input").val(0),$(".philosophy__control").hasClass("slick-initialized")&&$(".philosophy__control").slick("slickPlay"),h=setInterval(function(){var e=parseInt($(".philosophy .item.active").data("index")),e=3<e+1?0:e+1;d($(".philosophy .item").eq(e))},5e3)}},"animate-heading"))}});function t(){$(".page__cover").addClass("done"),$(".logo").addClass("animated"),$(".navigate").addClass("animated"),$(".social-media").addClass("animated"),setTimeout(function(){var e=new TimelineLite;e.staggerTo($(".block-content--1 .title-animate"),.7,{y:0,opacity:1,ease:"Power4.easeOut"},.1,"title"),e.staggerTo(".block-content--1 .intro__title span",.2,{opacity:1,top:0},.1,"title"),e.to(".certificates",.5,{opacity:1,onComplete:function(){$(".scroll-down").stop().fadeIn(),o.setAllowScrolling(!0)}})},.5)}o.setAllowScrolling(!1),$("[data-nav-item]").on("click",function(){var e,t=$(this),i=t.data("anchor");$(window).width()<992?($(".hamburger").hasClass("active")&&$(".hamburger").trigger("click"),!i||(e=$("#section-"+i)).length&&$("html, body").stop().animate({scrollTop:e.offset().top-70},800),$(".navigate .listlinks .item.active").removeClass("active"),t.addClass("active")):i&&o&&o.silentMoveTo(i)}),$(window).width()<992?(o.setAllowScrolling(!0),o.setResponsive(!0),t()):o.setResponsive(!1);var e={timerCallback:function(){var e;$(window).width()<992||this.video1.paused||this.video1.ended||(this.computeFrame(),e=this,setTimeout(function(){e.timerCallback()},0))},doLoad:function(){this.video1=document.getElementById("video1");var e=document.getElementById("c2");this.ctx2=e.getContext("2d");var t=this;function i(){window.innerWidth;e.width=window.innerWidth,e.height=window.innerHeight}$(window).width()<992||(window.addEventListener("resize",i,!1),i(),video1.play(),this.video1.addEventListener("play",function(){t.width=$(window).width(),t.height=$(window).height(),t.timerCallback()},!1))},computeFrame:function(){this.ctx2.drawImage(this.video1,0,0,this.width,this.height)}};function d(e){var t=e.data("index"),i=e.closest(".philosophy"),o=i.find(".philosophy__circle__line"),n=o.find(".philosophy__circle__input"),a=n.val(),l=i.find(".dot");if(i.hasClass("active")){var s=i.find(".item.active").index();i.find(".item.active").removeClass("active"),i.find(".dot.active").removeClass("active"),e.addClass("active"),l.eq(t).addClass("active"),i.find(".philosophy__image.active").removeClass("active"),i.find(".philosophy__image").eq(t).addClass("active");var c=0;switch(t-s){case 1:c=parseInt(a)-90;break;case 2:c=parseInt(a)-180;break;case-1:c=parseInt(a)+90;break;case-2:c=parseInt(a)+180;break;case 3:c=parseInt(a)+90;break;case-3:c=parseInt(a)-90;break;default:c=parseInt(a)}n.val(c),i.addClass("active"),o.css("-webkit-transform","rotate("+c+"deg)"),h=h||setInterval(function(){var e=$(".philosophy .item.active").data("index"),e=3<e+1?0:e+1;d($(".philosophy .item").eq(e))},5e3)}}({timerCallback:function(){var e;$(window).width()<992||(11.5<this.video.currentTime&&$(".canvas--2").addClass("active"),this.video.paused||this.video.ended?t():(this.computeFrame(),e=this,setTimeout(function(){e.timerCallback()},0)))},doLoad:function(){this.video=document.getElementById("video");var e=document.getElementById("c1");this.ctx1=e.getContext("2d");var t=this;function i(){e.width=window.innerWidth,e.height=window.innerHeight}$(window).width()<992||(window.addEventListener("resize",i,!1),i(),video.play(),this.video.addEventListener("play",function(){t.width=$(window).width(),t.height=$(window).height(),t.timerCallback()},!1))},computeFrame:function(){this.ctx1.drawImage(this.video,0,0,this.width,this.height)}}).doLoad(),e.doLoad(),$(".block-content--2 .block-control .item-control").on("click",function(){var e,t,i,o,n=$(this);n.hasClass("active")||(e=n.closest(".block-caption"),i=(t=n.closest(".block-control")).find(".item-control").length,o=n.data("index"),e.find(".item-control.active").removeClass("active"),n.addClass("active"),t.find(".current").html(9<parseInt(o)?o:"0"+o),t.find(".bar").css({width:o/i*100+"%"}),e.find(".block-tab.active").removeClass("active"),e.find(".block-tab--"+o).addClass("active"))}),$(".block-content--2 .block-control .btn-control--next").on("click",function(){var e=$(this).closest(".block-control"),t=e.find(".item-control").length,i=e.find(".item-control.active").data("index"),i=parseInt(i)+1;(t<i?e.find('[data-index="1"]'):e.find('[data-index="'+i+'"]')).trigger("click")}),$(".block-content--2 .block-control .btn-control--prev").on("click",function(){var e=$(this).closest(".block-control"),t=e.find(".item-control").length,i=e.find(".item-control.active").data("index"),i=parseInt(i)-1;(i<1?e.find('[data-index="'+t+'"]'):e.find('[data-index="'+i+'"]')).trigger("click")}),$(".philosophy .item").on("click",function(){992<$(window).width()&&(h&&(clearInterval(h),h=null),d($(this)))}),$(".philosophy .dot").on("click",function(){var e=$(this).data("index");d($(".philosophy .item").eq(e))}),$("#swipe-container").swipe({swipe:function(e,t,i,o,n,a){var l,s;$(window).width()<992&&(h&&(clearInterval(h),h=null),l=parseInt($(".philosophy .item.active").data("index")),s=-1,s="left"===t?3<l+1?0:l+1:l-1<0?3:l-1,d($(".philosophy .item").eq(s)))},threshold:0}),$(".clients__logo").length&&$(".clients__logo").slick({slidesToShow:5,slidesToScroll:5,infinite:!0,arrows:!0,prevArrow:'<button type="button" class="slick-prev"><svg width="15" height="18" viewBox="0 0 15 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.59643 7.41469L8.46349 1.0877C8.91443 0.67223 9.64404 0.992082 9.64404 1.60524C9.64404 1.79619 9.56644 1.97895 9.42905 2.11157L3.15644 8.16605C2.74909 8.55924 2.74909 9.21188 3.15644 9.60507L9.42905 15.6596C9.56644 15.7922 9.64405 15.9749 9.64405 16.1659C9.64405 16.779 8.91443 17.0989 8.4635 16.6834L1.59643 10.3564C0.736681 9.5643 0.736681 8.20682 1.59643 7.41469Z" fill="#D41222"/><path d="M9.89787 7.81966L14.0927 4.07183C14.4007 3.7967 14.8891 4.01528 14.8891 4.42823C14.8891 4.56047 14.8343 4.68679 14.7377 4.77716L10.6737 8.58101C10.2515 8.97618 10.2515 9.64603 10.6737 10.0412L14.7377 13.8451C14.8343 13.9354 14.8891 14.0617 14.8891 14.194C14.8891 14.6069 14.4007 14.8255 14.0927 14.5504L9.89786 10.8026C9.00788 10.0074 9.00788 8.6148 9.89787 7.81966Z" fill="#909090"/></svg></button>',nextArrow:'<button type="button" class="slick-next"><svg width="15" height="18" viewBox="0 0 15 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13.2922 10.5853L6.42518 16.9123C5.97424 17.3278 5.24463 17.0079 5.24463 16.3948C5.24463 16.2038 5.32223 16.021 5.45962 15.8884L11.7322 9.83395C12.1396 9.44076 12.1396 8.78812 11.7322 8.39493L5.45962 2.34045C5.32223 2.20783 5.24463 2.02508 5.24463 1.83412C5.24463 1.22097 5.97424 0.901114 6.42518 1.31658L13.2922 7.64357C14.152 8.4357 14.152 9.79318 13.2922 10.5853Z" fill="#D41222"/><path d="M4.99081 10.1803L0.795946 13.9282C0.487999 14.2033 -0.000398269 13.9847 -0.000398338 13.5718C-0.00039836 13.4395 0.0543916 13.3132 0.150937 13.2228L4.21498 9.41899C4.63719 9.02382 4.63719 8.35397 4.21498 7.9588L0.150935 4.15495C0.0543901 4.06459 -0.000399955 3.93826 -0.000399978 3.80602C-0.000400047 3.39307 0.487998 3.17449 0.795945 3.44962L4.99081 7.19745C5.8808 7.99259 5.8808 9.3852 4.99081 10.1803Z" fill="#909090"/></svg></button>',responsive:[{breakpoint:1201,settings:{slidesToShow:4,slidesToScroll:4}},{breakpoint:992,settings:{slidesToShow:3,slidesToScroll:3}},{breakpoint:564,settings:{slidesToShow:2,slidesToScroll:2}}]}),$("[data-view-more]").on("click",function(){var e=$(this),t=e.data("target"),t=$(t),e=e.closest(".item").html();t.length&&(t.find(".modal-body").html(e),t.modal("show"))});var i=$(".leadership");i.length&&(i.slick({infinite:!0,slidesToShow:1,slidesToScroll:1}),i.on("beforeChange",function(e,t,i,o){$(".leadership-bar .current").html(9<o+1?o+1:"0"+(o+1)),$(".leadership-bar").find(".bar").css({width:(o+1)/t.slideCount*100+"%"})})),$(".leadership-bar .btn-control--next").on("click",function(){i.slick("slickNext")}),$(".leadership-bar .btn-control--prev").on("click",function(){i.slick("slickPrev")});var n=$(".projects");n.length&&(n.slick({slidesToShow:1,infinite:!0,slidesToScroll:1}),n.on("beforeChange",function(e,t,i,o){$(".projects-bar .current").html(9<o+1?o+1:"0"+(o+1)),$(".projects-bar").find(".bar").css({width:(o+1)/t.slideCount*100+"%"})})),$(".projects-bar .btn-control--next").on("click",function(){n.slick("slickNext")}),$(".projects-bar .btn-control--prev").on("click",function(){n.slick("slickPrev")}),$(window).on("resize",function(){$(this).width()<992?(o.setResponsive(!0),$(".hamburger").hasClass("active")?$(".navigate").stop().show():$(".navigate").stop().hide()):$(".hamburger").hasClass("active")||$(".navigate").stop().show()}),$(".hamburger").on("click",function(){$(this).toggleClass("active"),$(".navigate").toggle(),$(".main-header").toggleClass("opened")});var a=$(".main-header");$(window).on("scroll",function(){300<$(window).scrollTop()?a.addClass("sticky"):a.removeClass("sticky")})},init__movedown:function(){$(".scroll-down").on("click",function(){$(this).hasClass("scroll-down--back")?fullpage_api.moveTo(1,0):fullpage_api.moveSectionDown()})}},$(document).ready(function(){Steenify.common.init()})},function(e,t,i){},function(e,t,i){"use strict";void 0===window.Steenify&&(window.Steenify={}),window.Steenify.home={init__home:function(){}}}]);
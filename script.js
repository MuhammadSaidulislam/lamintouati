$(document).ready(function() {
    // executes when HTML-Document is loaded and DOM is ready
   
   // breakpoint and up  
   $(window).resize(function(){
       if ($(window).width() >= 980){	
   
         // when you hover a toggle show its dropdown menu
         $(".navbar .dropdown-toggle").hover(function () {
            $(this).parent().toggleClass("show");
            $(this).parent().find(".dropdown-menu").toggleClass("show"); 
          });
   
           // hide the menu when the mouse leaves the dropdown
         $( ".navbar .dropdown-menu" ).mouseleave(function() {
           $(this).removeClass("show");  
         });
     
           // do something here
       }	
   });  
     
     
   
   // document ready  
   });

// Button
$(function() {  
    $('.btn-6')
      .on('mouseenter', function(e) {
              var parentOffset = $(this).offset(),
                relX = e.pageX - parentOffset.left,
                relY = e.pageY - parentOffset.top;
              $(this).find('span').css({top:relY, left:relX})
      })
      .on('mouseout', function(e) {
              var parentOffset = $(this).offset(),
                relX = e.pageX - parentOffset.left,
                relY = e.pageY - parentOffset.top;
          $(this).find('span').css({top:relY, left:relX})
      });
    $('[href=#]').click(function(){return false});
  });

  AOS.init({
    duration: 1200,
  })

// service slider

$(document).ready(function () {
  var getActiveSlideIndex = function () {
    return $("#productSlider .active").index("#productSlider .carousel-item");
  };
  var slider = function (IndexNumber) {
    $(".slider .image")
      .removeClass("active")
      .eq(IndexNumber)
      .addClass("active");
  };
  slider(getActiveSlideIndex());
  $("#productSlider").on("slid.bs.carousel", function () {
    slider(getActiveSlideIndex());
  });
});


// timeline

jQuery(document).ready(function ($) {
  var $timeline_block = $(".cd-timeline-block");

  //hide timeline blocks which are outside the viewport
  $timeline_block.each(function () {
    if (
      $(this).offset().top >
      $(window).scrollTop() + $(window).height() * 0.75
    ) {
      $(this)
        .find(".cd-timeline-img, .cd-timeline-content")
        .addClass("is-hidden");
    }
  });

  //on scolling, show/animate timeline blocks when enter the viewport
  $(window).on("scroll", function () {
    $timeline_block.each(function () {
      if (
        $(this).offset().top <=
          $(window).scrollTop() + $(window).height() * 0.75 &&
        $(this).find(".cd-timeline-img").hasClass("is-hidden")
      ) {
        $(this)
          .find(".cd-timeline-img, .cd-timeline-content")
          .removeClass("is-hidden")
          .addClass("bounce-in");
      }
    });
  });
});


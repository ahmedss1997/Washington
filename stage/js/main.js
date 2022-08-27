

$(document).ready(function () {
  
  // Interval carousal
  
  $('.carousel').carousel({
    interval: 2000
  });



  // $('nav.navbar ul.navbar-nav li.nav-item a').on('click', function () {
  //   $(this).parent().toggleClass('active').siblings().removeClass('active');
  // });

  // Check Testimonials
  var leftArrow = $('.testimonial .fa-chevron-left');
  var rightArrow = $('.testimonial .fa-chevron-right');
  
  function checkClients() {
    if ($('.client:first').hasClass('active')) {
      leftArrow.fadeOut();
    } else {
      leftArrow.fadeIn();
    }
    $('.client:last').hasClass('active') ? rightArrow.fadeOut() : rightArrow.fadeIn();
  }
  checkClients();
  
  $('.testimonial i').click(function (){
    if ($(this).hasClass('fa-chevron-right')) {
      $('.testimonial .active').fadeOut(100, function (){
        $(this).removeClass('active').next('.client').addClass('active').fadeIn();
        checkClients();
      });
    } else {
      $('.testimonial .active').fadeOut(100, function (){
        $(this).removeClass('active').prev('.client').addClass('active').fadeIn();
        checkClients();
      });
    }
  });
  
  // Show / Hidden Slide Navbar
  
  $(window).scroll(function navScroll() {
    var navbar = $('.navbar');
    if ($(window).scrollTop() >= navbar.height()) {
      navbar.addClass('scrolled');
    } else {
      navbar.removeClass('scrolled');
    }
  });
  
  // Scroll To Button
  
  var scrollButton = $("#scroll-top");
  $(window).scroll(function () {
    if ($(this).scrollTop() >= 1100) {
      scrollButton.fadeIn();
    } else {
      scrollButton.fadeOut();
    }
  });
  scrollButton.click(function () {
    $("html,body").animate({scrollTop: 0}, 2000);
  });
  


  // Loading Screen

  setTimeout(function () {
    "use strict";
    $('.loading .sk-circle').fadeOut(1000, function () {
      $(this).parent().fadeOut(1000, function () {
        $("body").css({
          overflow: "auto",
          overflowX: "hidden",
        });
        
        
        $(this).remove();
      });
    });
  }, 500);

  // Validation + Effects
  $('.main-input').on('blur', function () {
    if ($(this).val() !== '') {
      $(this).parent().parent().addClass('has-words-right');
      $(this).parent().parent().removeClass('has-words-wrong');
      $(this).parent().parent().find('.empty').fadeOut(); // Hide Validation Message
    } else {
      $(this).parent().parent().removeClass('has-words-right');
      $(this).parent().parent().addClass('has-words-wrong');
      $(this).parent().parent().find('.empty').fadeIn(); // Show Validation Message
    }
    
  });

});




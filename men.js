$(document).ready(function() {
    
    if ($(window).width() < 768) {
      $('nav ul').hide();
    }
  
    
    $('#menu-btn').click(function() {
      $('nav ul').slideToggle();
    });
  
    
    $(window).resize(function() {
      if ($(window).width() >= 768) {
        $('nav ul').show();
      } else {
        $('nav ul').hide();
      }
    });
  });
  
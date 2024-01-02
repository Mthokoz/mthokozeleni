// Handling the scrolling behavior
var lastScrollTop = 0;

$(window).scroll(function() {
  var st = $(this).scrollTop();

  // Show/hide navbar based on scroll direction
  if (st > lastScrollTop){
    // Scroll down
    $(".navbar").fadeOut();
  } else {
    // Scroll up
    $(".navbar").fadeIn();
  }

  lastScrollTop = st;
});
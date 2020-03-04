$(document).ready(function() {
  $(window).scroll(function() {
    if ($(window).scrollTop() > 300) {
      $('.scroll').css({
        opacity: '1',
        'pointer-events': 'auto'
      });
    } else {
      $('.scroll').css({
        opacity: '0',
        'pointer-events': 'none'
      });
    }
  });
  $('.scroll').click(function() {
    $('html, body').animate({ scrollTop: 0 }, 'slow');
  });
});

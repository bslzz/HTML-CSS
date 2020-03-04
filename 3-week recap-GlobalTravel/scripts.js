$(document).ready(function() {
  $('#logo').click(function() {
    $('#flash')
      .fadeTo(100, 0.2)
      .fadeTo(100, 1.2)
      .fadeTo(100, 0.2)
      .fadeTo(100, 1.2)
      .fadeTo(100, (0.2).click);
  });
});

$('.show-btn').click(function() {
  $('.sm-menu').fadeToggle(1000);
});

var btn = $('#button');

$(window).scroll(function() {
  if ($(window).scrollTop() > 300) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});

btn.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({ scrollTop: 0 }, '300');
});

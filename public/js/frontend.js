
var list,
    player;


$(function() {

  list = $('#list');
  player = $('#player')

  $('.item').click(function() {
    var ext = $(this).data('ext'),
        el = list.attr('id');
    console.log(el);
    $(this).toggleClass('item--active');
    list.toggleClass(el + ext)
  });

  $('.scrubber__control').click(function() {
    player.toggleClass('widget--playing');
  });


});
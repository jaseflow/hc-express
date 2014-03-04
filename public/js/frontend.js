
var list,
    player,
    playerControl;


$(function() {

  list = $('#list');
  player = $('#player')
  playerControl = $('#player-control')

  $('.item').click(function() {
    var ext = $(this).data('ext'),
        el = list.attr('id');
    console.log(el);
    $(this).toggleClass('item--active');
    list.toggleClass(el + ext)
  });

  $('.widget__control').click(function() {
    playerControl.toggleClass('widget__control--playing');
  });


});
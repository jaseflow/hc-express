
var list;


$(function() {

  list = $('#list');

  $('.item').click(function() {
    var ext = $(this).data('ext'),
        el = list.attr('id');
    console.log(el);
    $(this).toggleClass('item--active');
    list.toggleClass(el + ext)
  });


});
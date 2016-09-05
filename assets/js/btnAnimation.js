/* https://youtu.be/CBQGl6zokMs */
$(function(){
  $('div.giftBtn').mousedown(function(){
    $('div.giftBtn').addClass('giftBtn-mousedown').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',
    function(){
      $(this).removeClass('giftBtn-mousedown');
    });
  });
  $('div.giftBtn').mouseup(function(){
    $('div.giftBtn').addClass('giftBtn-mouseup').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',
    function(){
      $(this).removeClass('giftBtn-mouseup');
    });
  });
});

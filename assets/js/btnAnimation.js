/* https://youtu.be/CBQGl6zokMs */
$(function(){

  var Animated = "webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend";

  $('div.giftBtn').mousedown(function(){
    $('div.giftBtn').addClass('giftBtn-mousedown')
  });

  $('div.giftBtn').mouseup(function(){
    $('div.giftBtn').addClass('giftBtn-mouseup').one(Animated, function(){
      $(this).removeClass('giftBtn-mouseup');
      $(this).removeClass('giftBtn-mousedown');
    });
  });

});

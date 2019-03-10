$(window).scroll(function(){

  var wScroll = $(this).scrollTop();

  $('.logo').css({
    'transform' : 'translate(0px, '+ wScroll / 3+'%)'
  });

  $('.back-bird').css({
    'transform' : 'translate(0px, '+ wScroll / 4 +'%)'
  });
if(wScroll > $('.project-pics').offset().top - ($(window).height() / 1.2)) {

    $('.project-pics img').each(function(i){

      setTimeout(function(){
        $('.project-pics img').eq(i).addClass('is-showing');
      }, 150 * (i+1));
    });
  };
});

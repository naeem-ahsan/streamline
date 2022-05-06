$(window).on('load', function () {

  $('.heart a').on('click', function(e){
    e.preventDefault();
    $(this).toggleClass('active');
  })

});
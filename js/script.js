/* Multiple slideshows */
$('#slider1').bxSlider({
  mode: 'fade',
  auto: true,
  autoControls: true,
  pause: 2000
});

$('#slider2').bxSlider({
  auto: true,
  autoControls: true,
  pause: 3000,
  slideMargin: 20
});

/* Multiple slideshows */





$('.bxslider').bxSlider({
  buildPager: function(slideIndex){
    switch(slideIndex){
      case 0:
        return '<img src="/photos/2505.jpg">';
      case 1:
        return '<img src="/photos/2573.jpg">';
      case 2:
        return '<img src="/photos/2575.jpg">';
      case 3:
        return '<img src="/photos/2617.jpg">';
      case 4:
        return '<img src="/photos/2669.jpg">';
    }
  }
});


$(window).scroll(function () {
  var 높이 = $(window).scrollTop();
  console.log(높이);
  
  // var y = -1 / 760 * 높이 + 1.89;
  // var y1 = -1 / 760 * 높이 + 2.89;
  // var y2 = -1 / 760 * 높이 + 3.89;

  // var sca = -1/7800 * 높이 + 1.084;

  // $('.card-box').eq(0).css('opacity', y);
  // $('.card-box').eq(1).css('opacity', y1);
  // $('.card-box').eq(2).css('opacity', y2);
  // $('.card-box').eq(0).css('transform', 'scale('+sca+')');
  
  for (i = 0; i < ('.card-box').length; i++) {
    
    var y = -1 / 760 * 높이 + i + 1.89;
    var sca = -1/7800/(i+1) * 높이 + 1;
    
    $('.card-box').eq(i).css('opacity', y);
    $('.card-box').eq(i).css('transform', 'scale('+sca+')');
  
  }

});





$('.nav_icon').click(function(){
  var big_container = $('.big_container');
  if(big_container.css('marginLeft') == '0px'){
    big_container.animate({
      marginLeft:'-1.57rem'
    },'fast','swing');
  }else {
    big_container.animate({
      marginLeft:'0px'
    },'fast','swing');
  }

});
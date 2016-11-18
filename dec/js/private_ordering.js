$(document).ready(function(){
  $('.list_item ul li').click(function(){
    if($(this).hasClass('active')){
      $(this).removeClass('active')
    }else {
      $(this).addClass('active')
    }
  });
  $('.gender').click(function(){
    $(this).addClass('active').siblings().removeClass('active')
  });
});

/********下拉菜单组*********/
$(document).ready(function(){
  var btn = $(".arrow_down_up");
  var price_list = $('.price_list');
  var price_li = $('.price_list ul li');
  $('.to_price_box').click(function(){
    if(btn.hasClass('flipy')){
      btn.removeClass('flipy')
    }else {
      btn.addClass("flipy");
    }
    if(price_list.css("display") == 'none'){
      price_list.slideDown();
      price_li.click(function(){
        $(this).addClass('active').siblings().removeClass('active');
        var txt = $(this).html();
        $('.default').html(txt);
      });
    }else {
      price_list.slideUp()
    }
  })
});
/********下拉菜单组*********/
$(document).ready(function(){
  $('.filter_item').click(function(){
    var down_list = $(this).children('.down_list');
    if(down_list.css("display") == 'none'){
      down_list.slideDown();
    }else {
      down_list.slideUp()
    }
  })
});
/**
 * Created by Administrator on 2016/10/18.
 */
/*******关闭模态对话框******/
$(document).ready(function(){
  $('.switch').click(function(){
    $('.bg_black').fadeOut('slow',function(){
      $('.big_img').hide()
    })
  });
});

/*******打开模态对话框*******/
$(document).ready(function(){
  $('.mode_item').click(function(){
    var index = $(this).index();
    $('.bg_black').fadeIn('slow');
    $('.message_box').eq(index-5).show().siblings('.message_box').hide()
  });
});
$(document).ready(function(){
  $('.pic_item').click(function(){
    $('.bg_black').fadeIn('slow');
    $('.message_box').hide();
    $('.big_img').show()
  });
});


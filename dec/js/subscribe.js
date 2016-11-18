/**
 * Created by Administrator on 2016/10/18.
 */
/*******关闭模态对话框******/
$(document).ready(function(){
  $('.message_box .switch').click(function(){
    $(this).css('backgroundPositionY','-197px');
    $('.bg_black').fadeOut('slow',function(){
      $('.message_box .switch').css('backgroundPositionY','-163px');
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


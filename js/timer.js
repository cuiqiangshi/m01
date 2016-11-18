//计时器的封装
function TimerEmp(config) {
  this.day = 0;
  this.hour = 0;
  this.minute = 0;
  this.second = 0;
  this.day_show = config.day_show;
  this.hour_show = config.hour_show;
  this.minute_show = config.minute_show;
  this.second_show = config.second_show;
  this.time_item = config.time_item;
  this.endTime = config.endTime;
  this.now = '';
  this.intNumber = '';

  this.timeLength = function(){
    this.endTime = parseInt(new Date(this.endTime).getTime());
    this.now = parseInt(new Date().getTime());
    this.intNumber = parseInt((this.endTime -this.now)/1000);
  };

  this.timer = function(){
    window.setInterval(function () {
      this.timeLength();
      if (this.intNumber >= 0) {
        this.day = Math.floor(this.intNumber / (60 * 60 * 24));
        this.hour = Math.floor(this.intNumber / (60 * 60)) - (this.day * 24);
        this.minute = Math.floor(this.intNumber / 60) - (this.day * 24 * 60) - (this.hour * 60);
        this.second = Math.floor(this.intNumber) - (this.day * 24 * 60 * 60) - (this.hour * 60 * 60) - (this.minute * 60);
        if (this.minute <= 9){
          this.minute = '0' + this.minute;
        }
        if (this.second <= 9){
          this.second = '0' + this.second;
        }
        $(this.day_show).html('<span>'+this.day+'</span>天');
        $(this.hour_show).html('<span>'+this.hour + '</span>时');
        $(this.minute_show).html('<span>'+this.minute + '</span>分');
        $(this.second_show).html('<span>'+this.second + '</span>秒');
        this.intNumber--;
      }else {
        $(this.time_item).html('团购已过期')
      }

    }.bind(this), 1000);
  }
}

/*******创建首页计时器*******/
$(document).ready(function(){
  var timer_length_index = $('.timer_box').length;
  var timer_index = [];
  var config_index = [];
  var endTime_index = [
    "2016-12-16T19:20:30",
    '2016-12-06T09:10:20'
  ];
  for (var j =0; j<timer_length_index ; j++) {
    config_index[j] = {
      day_show: '.timer_box:eq(' + j + ') .show_day',
      hour_show: '.timer_box:eq(' + j + ') .show_hour',
      minute_show: '.timer_box:eq(' + j + ') .show_minute',
      second_show: '.timer_box:eq(' + j + ') .show_second',
      time_item: '.timer_box:eq(' + j + ')',
      endTime: endTime_index[j]
    };
    timer_index[j] = new TimerEmp(config_index[j]);
    timer_index[j].timer();
  }
});
/*
/!********创建团购页面计时器********!/
$(document).ready(function(){
  var timer_length_group = $('.lp_item').length;
  var timer_group = [];
  var config_group = [];
  var endTime_group = [
    '2016/11/20/8:30:40',
    '2016/11/22/20:9:18',
    '2016/10/2/22:9:1',
    '2016/11/22/22:9:1',
    '2016/10/24/22:12:10',
    '2016/11/27/23:12:1',
    '2016/12/29/3:2:11',
    '2016/12/29/3:2:11'
  ];
  for (var j =0; j<timer_length_group ; j++) {
    config_group[j] = {
      day_show: '.lp_item:eq(' + j + ') .show_day',
      hour_show: '.lp_item:eq(' + j + ') .show_hour',
      minute_show: '.lp_item:eq(' + j + ') .show_minute',
      second_show: '.lp_item:eq(' + j + ') .show_second',
      time_item: '.lp_item:eq(' + j + ') .timer_box',
      endTime: endTime_group[j]
    };
    timer_group[j] = new TimerEmp(config_group[j]);
    timer_group[j].timer();
  }
});

/!*******创建团购详情计时器*******!/
$(document).ready(function(){
  var config_group_detail = {
    day_show : '.main .show_day',
    hour_show : '.main .show_hour',
    minute_show : '.main .show_minute',
    second_show : '.main .show_second',
    time_item : '.main .timer_box',
    endTime : '2016/12/27/23:12:1'
  };
  var timer_group_detail = new TimerEmp(config_group_detail);
  timer_group_detail.timer();
});*/

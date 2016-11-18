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
    this.endTime = new Date(this.endTime).getTime();
    this.now = new Date().getTime();
    this.intNumber = (this.endTime -this.now)/1000;
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
var config_group_index = {
  day_show : '.timer_box .show_day',
  hour_show : '.timer_box .show_hour',
  minute_show : '.timer_box .show_minute',
  second_show : '.timer_box .show_second',
  time_item : '.timer_boxer .timer_box',
  endTime : '2016/11/27/23:12:1'
};
timer_group_index = new TimerEmp(config_group_index);
timer_group_index.timer();

/********创建团购页面计时器********/
var timer_length_group = $('.lp_item').length;
var timer_group = [];
var config_group = [];
var endTime_group = [
  '2016/11/20/08:30:40',
  '2016/11/22/20:9:18',
  '2016/10/2/22:9:1',
  '2016/11/22/22:9:1',
  '2016/10/24/22:12:10',
  '2016/11/27/23:12:1',
  '2016/12/29/3:2:11',
  '2016/12/29/3:2:11'
];
for (var j =0; j<timer_length_group ; j++){
  config_group[j] = {
    day_show : '.lp_item:eq('+j+') .show_day',
    hour_show : '.lp_item:eq('+j+') .show_hour',
    minute_show : '.lp_item:eq('+j+') .show_minute',
    second_show : '.lp_item:eq('+j+') .show_second',
    time_item : '.lp_item:eq('+j+') .timer_box',
    endTime : endTime_group[j]
  };
  timer_group[j] = new TimerEmp(config_group[j]);
  timer_group[j].timer();
}
/*******创建团购详情计时器*******/
var config_group_detail = {
  day_show : '.show_day',
  hour_show : '.show_hour',
  minute_show : '.show_minute',
  second_show : '.show_second',
  time_item : '.timer_box',
  endTime : '2016/11/27/23:12:1'
};
timer_group_detail = new TimerEmp(config_group_detail);
timer_group_detail.timer();
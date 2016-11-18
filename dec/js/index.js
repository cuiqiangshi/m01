function Emp(banner,container,li,pointLi,marginX){
  this._index = 0;
  this.banner = $(banner);
  this.container = $(container);
  this.length = $(li).length;
  this.pointLi = $(pointLi);
  this.marginX =marginX;

  this.change = function(){
    this.pointLi.eq(this._index).addClass("active").siblings().removeClass("active");
  };

  this.boxSize = function (){
    if(this.marginX == "marginLeft"){
      this.size = this.container.width();
    }else {
      this.size = this.container.height();
    }
  };

  this.auto = function (){
    this._index++;
    this.boxSize();
    if(this._index < this.length){
      if(this.marginX == "marginLeft"){
        this.banner.animate({marginLeft: -this.size*this._index + 'px'}, 1000);
      }else {
        this.banner.animate({marginTop: -this.size*this._index + 'px'}, 1000);
      }
      this.change()
    }
    if (this._index == this.length) {
      this._index = 0;
      if(this.marginX == "marginLeft"){
        this.banner.animate({marginLeft: 0 + 'px'}, 1000);
      }else {
        this.banner.animate({marginTop: 0 + 'px'}, 1000);
      }
      this.change()
    }
  };

  this.click = function (){
    this.boxSize();
    if(this.marginX == "marginLeft"){
      this.banner.animate({marginLeft: -this.size*this._index + 'px'}, 1000);

    }else {
      this.banner.animate({marginTop: -this.size*this._index + 'px'}, 1000);
    }
    this.change();
    console.log(this._index)
  };

  this.click_arrow_left =function(){
    this._index--;
    this.boxSize();
    if(this._index < this.length &&  this._index >-1){
      this.banner.animate({"marginLeft": -this.size*this._index + 'px'}, 1000);
      this.change()
    }
    if(this._index < 0){
      this._index = this.length-1;
      this.banner.animate({"marginLeft": -this.size*this._index + 'px'}, 1000);
      this.change()
    }

  };

  this.timer = function(){
    return (
      setInterval(this.auto.bind(this),2000)
    )
  };
}
/**********banner************/

$(document).ready(function() {
  var bannerObj = new Emp(".banner>ul", ".banner", ".banner>ul li", ".banner .point_list ul li", 'marginLeft');

  var timer_banner = bannerObj.timer();

  $('.banner ul li,.banner .point_list li').hover(function () {
    clearInterval(timer_banner)
  }, function () {
    timer_banner = bannerObj.timer()
  });

  $('.banner .point_list li').click(function () {
    bannerObj._index = $(this).index();
    bannerObj.click();
  });
});

/********切换城市*******/
$(document).ready(function(){
  var city_list =$('.city_list');
  $('.cities_box').click(function(){
    if(city_list.css('display') == 'none'){
      city_list.fadeIn()
    }else {
      city_list.fadeOut();
    }
  });
});

/*****nav******/
$(document).ready(function(){
  var nav_bar =$('.nav_bar');
  $('.nav_icon').click(function(){
    if(nav_bar.css('display') == 'none'){
      nav_bar.fadeIn()
    }else {
      nav_bar.fadeOut();
    }
  });
});

/********地图连接*********/
$('.map,.check_map').click(function(){
  window.location = "map.html";
});

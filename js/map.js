/**
 * Created by Administrator on 2016/10/19.
 */
// 百度地图API功能
var map = new BMap.Map("map_container");
var point = new BMap.Point(110.343654,20.022253);
map.centerAndZoom(point, 18);
var marker = new BMap.Marker(point);  // 创建标注
map.addOverlay(marker);               // 将标注添加到地图中
marker.setAnimation(BMAP_ANIMATION_BOUNCE); //跳动的动画
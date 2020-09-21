window.onload = function() {
    var canvas = document.querySelector('canvas');
    var brush = canvas.getContext('2d');

    brush.beginPath();
    // 移动坐标系的原点位置
    // 保存当前的绘图的状态（坐标系、画笔状态、颜色、宽度、样式。。）
     brush.save();
    brush.translate(250,250);
    // 旋转坐标系的角度(需要用弧度)
    brush.rotate(-67/180 * Math.PI);
    // 改变坐标系的系数比值
    // brush.scale(.5,1)   x ,y
    brush.moveTo(0,0);
    brush.lineTo(200,0);
    brush.stroke();

    // 恢复默认坐标系
    brush.restore();
    brush.beginPath();
    brush.moveTo(20,0);
    brush.lineTo(200,200)
    brush.stroke();
}
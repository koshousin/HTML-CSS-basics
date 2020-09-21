window.onload = function(){
    var canvas = document.querySelector('canvas');
    var brush = canvas.getContext('2d');
    
    // 添加阴影
    brush.shadowColor = '#b2bec3'
    brush.shadowOffsetX = 10;
    brush.shadowOffsetY = 10;
    brush.shadowBlur = 5;       // 设置阴影模糊
    
    brush.fillRect(150,150,200,200);

}

window.onload = function(){
    var canvas = document.querySelector('canvas');
    var ctx = canvas.getContext('2d');
    // 绘制圆弧
    // 一度圆弧
    // var one = 180 / Math.PI;
    //x ,y ,radius,starting angle , ending angle ,optional(isAnticlockwise)
    //  旋转的零度默认在右侧，顺时针为正角度，逆时针为负角度
    // ctx.arc(200,200,50,0,60/one,true);
    // ctx.stroke();

    // 重新画
    // ctx.beginPath();
    // ctx.arc(300,300,50,-90/one,0);
    // ctx.stroke();

    //  绘制切线之间的圆弧
    ctx.beginPath();
    // 定位第一个点
    ctx.moveTo(200,200);
    // arcTo(x1, y1, x2, y2, radius)
    ctx.arcTo(300,300,200,300,50);
    ctx.stroke();


}
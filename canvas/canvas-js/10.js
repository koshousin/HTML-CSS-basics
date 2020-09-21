window.onload = function(){
    var canvas = document.querySelector('canvas');
    var brush = canvas.getContext('2d');

    brush.moveTo(250,0);
    brush.lineTo(250,500);
    brush.stroke();
    brush.moveTo(0,250)
    brush.lineTo(500,250);
    brush.stroke();

    // 设置文本字体
    brush.font = 'bold 30px 微软雅黑';

    // 设置文字对齐方式
    brush.textAlign = 'center'  // left right center

    // 基线对齐
    brush.textBaseline = 'hanging'   //top bottom middle hanging

    //  填充文字
    brush.fillText('Hello World',250,250);

    // 镂空字体
    // brush.strokeText('Hello World',300,300);




}
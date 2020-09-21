// 画一个矩形
window.onload = function(){
    var canvas = document.querySelector('canvas');
    var brush = canvas.getContext('2d');
    // 绘制矩形
    // brush.rect(100,100,200,200);
    // brush.fill();
    // brush.fillRect(100,100,200,200);
    
    // 绘制边框
    // brush.strokeRect(100,100,200,200)
    // brush.rect(100,100,200,200);
    // brush.stroke();

    //绘制线段
    // brush.beginPath();   
    //pencil style 
    // brush.lineWidth = 5;
    // brush.strokeStyle = 'green';    
    // brush.moveTo(100,150);  // moveTo : starting point
    // brush.lineTo(300,200);  // lineTo : next coordinate
    // brush.lineTo(300,100);
    // brush.lineTo(100,150);
    // brush.stroke();         // 描边   

    // 线段样式
    // brush.beginPath();
    // brush.lineWidth = 15;
    // brush.lineCap = 'round';        // 线段头尾样式
    // // brush.lineCap = 'butt';
    // // brush.lineCap = 'square'
    // brush.strokeStyle = 'gray';
    // brush.moveTo(100,100);
    // brush.lineTo(250,250);
    // brush.lineTo(300,100);
    // brush.closePath();              // 闭合路径
    // brush.lineJoin = 'round';       // 线段拐角样式
    // // brush.lineJoin = 'miter'; 
    // // brush.lineJoin = 'bevel'; 
    // brush.stroke();

    
}

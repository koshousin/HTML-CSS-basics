window.onload = function(){
    var canvas = document.querySelector('canvas');
    var brush = canvas.getContext('2d');

    // 绘制完毕的为 目标图形
    brush.fillStyle = '#00cec9'
    brush.fillRect(100,100,250,100)

    //设置源图形的显示
    brush.globalCompositeOperation = 'source-over';     // 显示覆盖在目标图形上的源图形
    brush.globalCompositeOperation = 'source-in';   // 显示源图形交集
    brush.globalCompositeOperation = 'source-atop'; // 显示在目标图形顶上的源图形
    brush.globalCompositeOperation = 'source-out';  // 显示在目标图形外的源图形

    // 设置目标图形的显示
    brush.globalCompositeOperation = 'destination-over';  
    brush.globalCompositeOperation = 'destination-in';   
    brush.globalCompositeOperation = 'destination-atop'; 
    brush.globalCompositeOperation = 'destination-out';  

    // 其他显示效果
    brush.globalCompositeOperation = 'lighter'; // 混合色
    brush.globalCompositeOperation = 'copy'     // 展示源图形
    brush.globalCompositeOperation = 'xor'      // 交集部分透明

    // 新绘制的图形标识为 源图形
    brush.fillStyle = '#e17055'
    brush.fillRect(100,100,100,250)

    


}
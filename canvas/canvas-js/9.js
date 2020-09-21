window.onload = function(){
    var canvas = document.querySelector('canvas');
    var brush = canvas.getContext('2d');

    // 线性渐变
    // var linear = brush.createLinearGradient(0,0,canvas.width,canvas.height);      // x1,y1,x2,y2

    // linear.addColorStop(0,'red')    // 0 ~ 1
    // linear.addColorStop(.5,'yellow') 
    // linear.addColorStop(1,'blue') 

    // 径向渐变
    var radial = brush.createRadialGradient(250,250,20,250,250,100) // x , y ,
    radial.addColorStop(0,'red');
    radial.addColorStop(.5,'#00cec9');
    radial.addColorStop(1,'black');
    // 填充颜色
    brush.fillStyle = radial;
    brush.fillRect(0,0,canvas.width,canvas.height);
    
    

}
window.onload = function(){
    var canvas = document.querySelector('canvas');
    var brush = canvas.getContext('2d');

    // 填充遮罩
    brush.fillStyle = '#d2dae2'
    brush.fillRect(0,0,canvas.width,canvas.height);
   
    // 设置合成规则
    brush.globalCompositeOperation = 'destination-out';

    // brush.fillRect(50,50,100,100);

    var flag = false;
    // 鼠标按下
    canvas.onmousedown = function(event){
        brush.beginPath();
        brush.lineWidth = 20;
        brush.lineCap = 'round'
        brush.moveTo(event.offsetX,event.offsetY);
        flag = true;
    }

    // 鼠标移动
    canvas.onmousemove = function(event){  
        var x = event.offsetX;
        var y = event.offsetY;
        if(flag){
            brush.lineTo(x,y);
            brush.stroke();
        }
    }

    // 鼠标松开
    canvas.onmouseup = function(event){
        flag = false;
    }

}
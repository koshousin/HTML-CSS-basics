window.onload = function(){
    var canvas = document.querySelector('canvas');
    var brush = canvas.getContext('2d');
    var one = 180 / Math.PI;
    setInterval(function(){
    //      清空画布
        brush.clearRect(0,0,2000,2000);
        brush.save();
        brush.beginPath();
        brush.arc(250,250,150,0,360/one);
        brush.lineWidth = 10;
        brush.stroke();
        brush.translate(250,250);
        brush.rotate(-90/one);
        // 绘制刻度
        brush.save();
        // 定义角度变量
        // var angle = -6;
        // var timer = setInterval(function(){
        //     brush.restore();
        //     brush.save();
        //     brush.beginPath();
        //     brush.translate(250,250);
        //     angle += 6;
        //     brush.rotate(angle/one);
        //     if(angle == 360){
        //         clearInterval(timer);
        //     } else if(!(angle%30 == 0)){
        //         brush.moveTo(140,0);
        //         brush.lineWidth = 2;
        //     } else {
        //         brush.lineWidth = 2;
        //         brush.moveTo(134,0);
        //     }
        //     brush.lineTo(145,0);
        //     brush.stroke();
        // },50)
        // brush.restore();

        // 绘制分针刻度
        for(var i=0; i<60; i++){
            brush.rotate(6 / one);
            if(i%5 === 4){
                continue;
            }
            brush.beginPath();
            brush.lineWidth = 2;
            brush.moveTo(140,0);
            brush.lineTo(145,0);
            brush.stroke();   
        }
        brush.restore();

        brush.save();
        // 绘制时针刻度
        for(var i=0; i<12; i++){
            brush.rotate(30 / one);
            brush.beginPath();
            brush.lineWidth = 3;
            brush.moveTo(135,0);
            brush.lineTo(145,0);
            brush.stroke();   
        }
        brush.restore();
    
        var date = new Date();
        var h = date.getHours();
        var m = date.getMinutes();
        var s = date.getSeconds();

        // 时针的旋转角度
        var h_angle = (h * 60 + m) / 60 * 30;
        var m_angle = (m * 60 + s) / 60 * 6;
        var s_angle = s * 6;
        // 设置秒针
        brush.save();
        brush.rotate(s_angle/one);
        brush.beginPath();
        brush.moveTo(-15,0);
        brush.lineWidth = 1;
        brush.lineTo(128,0);
        brush.stroke();
        brush.restore();
        // 设置分针
        brush.save();
        brush.rotate(m_angle/one);
        brush.beginPath();
        brush.lineWidth = 2;
        brush.moveTo(-10,0);
        brush.lineTo(100,0);
        brush.stroke();
        brush.restore();
        // 设置时针
        brush.save();
        brush.beginPath();
        brush.rotate(h_angle/one);
        brush.lineWidth = 3;
        brush.moveTo(-5,0);
        brush.lineTo(70,0);
        brush.stroke();
        brush.restore();

        // 绘制画布中心原点
        brush.beginPath();
        brush.arc(0,0,8,0,360/one);
        brush.fillStyle = 'gray'
        brush.fill();
        // 恢复坐标系
        brush.restore();
    },1000)

    
    
}
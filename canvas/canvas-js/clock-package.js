/**
 *  1.目标：封装时针代码，通过对象形式得到
 *  2. new Clock('canvas',{width:400 , height:400})
 * 
 */
window.onload = function(){
    function Clock(selector,options){
        var canvas = document.querySelector(selector);
        canvas.width = options && options.width ? options.width : 400;
        canvas.height = options && options.height ? options.width : 400;
        var brush = canvas.getContext('2d');
        var proportion = canvas.width / 500;
        var one = 180 / Math.PI;
        setInterval(function(){
            //      清空画布
                brush.clearRect(0,0,canvas.width,canvas.height);
                brush.save();
                brush.beginPath();
                brush.arc(canvas.width/2,canvas.height/2,150 * proportion,0,360/one);
                brush.lineWidth = 10;
                brush.stroke();
                brush.translate(canvas.width/2,canvas.height/2);
                brush.rotate(-90/one);
                // 绘制刻度
                brush.save();       
                // 绘制分针刻度
                for(var i=0; i<60; i++){
                    brush.rotate(6 / one);
                    if(i%5 === 4){
                        continue;
                    }
                    brush.beginPath();
                    brush.lineWidth = 2 * proportion;
                    brush.moveTo(140 * proportion,0);
                    brush.lineTo(145 * proportion,0);
                    brush.stroke();   
                }
                brush.restore();
        
                brush.save();
                // 绘制时针刻度
                for(var i=0; i<12; i++){
                    brush.rotate(30 / one);
                    brush.beginPath();
                    brush.lineWidth = 3 * proportion;
                    brush.moveTo(135 * proportion,0);
                    brush.lineTo(145 * proportion,0);
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
                brush.moveTo(-15 * proportion,0);
                brush.lineWidth = 1 * proportion;
                brush.lineTo(128 * proportion,0);
                brush.stroke();
                brush.restore();
                // 设置分针
                brush.save();
                brush.rotate(m_angle/one);
                brush.beginPath();
                brush.lineWidth = 2 * proportion;
                brush.moveTo(-10 * proportion,0);
                brush.lineTo(100 * proportion,0);
                brush.stroke();
                brush.restore();
                // 设置时针
                brush.save();
                brush.beginPath();
                brush.rotate(h_angle/one);
                brush.lineWidth = 3 * proportion;
                brush.moveTo(-5 * proportion,0);
                brush.lineTo(70 * proportion,0);
                brush.stroke();
                brush.restore();
        
                // 绘制画布中心原点
                brush.beginPath();
                brush.arc(0,0,8 * proportion,0,360/one);
                brush.fillStyle = 'gray'
                brush.fill();
                // 恢复坐标系
                brush.restore();
            },1000)   
    }
    
    new Clock('#c1');
    new Clock('#c2',{
        width:100,
        height:100
    })



}
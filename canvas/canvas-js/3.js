window.onload = function(){
    var color = document.querySelector('.color-selector');
    var canvas = document.querySelector('canvas');
    var brush = canvas.getContext('2d');
    // 默认黑色
    brush.strokeStyle = 'black';
    // 标识变量,表示鼠标是否被按下
    var isDown = false;

    
    // canvas.onmousemove = function(event){
    //     // 获取鼠标的坐标
    //     var x = event.offsetX;
    //     var y = event.offsetY;
    //     this.onmousedown = function(){
    //         console.log(x,y);
    //         brush.moveTo(x,y);
    //     }
    //     this.onmouseup = function(){
    //         console.log(x,y);
    //         brush.lineTo(x,y)
    //     }
    //     brush.stroke();
    // }

    // 鼠标按下事件
    canvas.onmousedown = function(event){
        brush.beginPath();
        brush.lineWidth = 1;
        var x = event.offsetX;
        var y = event.offsetY;
        brush.moveTo(x,y);
        isDown = true;
    }

    // 鼠标移动
    canvas.onmousemove = function(event){
        var x = event.offsetX;
        var y = event.offsetY;
        if(isDown){
            brush.lineTo(x,y);
            brush.stroke();
        } 
    }

    // 鼠标松开
    canvas.onmouseup = function(){
        isDown = false;
    }

    var temp_obj;
    // 点击颜色版改变画笔颜色
    color.onclick = function(event){
        if(temp_obj){
            temp_obj.style.width = '50px';
        }
        var obj = event.target;
        if(obj.classList.contains('color')){
            var selected = getComputedStyle(obj,null)['backgroundColor'];
            brush.strokeStyle = selected;
            obj.style.width = '75px'
            temp_obj = obj;
        }    
    }
}
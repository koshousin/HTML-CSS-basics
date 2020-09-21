window.onload = function(){
    var canvas = document.querySelector('canvas');
    var brush = canvas.getContext('2d');

    // 绘制图片
    var img = new Image;
    img.src = '../imgs/aimyon.jpg';
    img.onload = function(){
        var proportion = 1837 / 2756;   // height / width
        brush.drawImage(img,0,0,canvas.width,canvas.width*proportion); // obj,x,y,width,height
        
        // 随机颜色显示
        var imgData = brush.getImageData(0,0,canvas.width,canvas.height);
        // console.log(imgData)
        // // 
        // for(var i=0; i<imgData.data.length; i++){
        //     imgData.data[i] = Math.floor(Math.random() * 255)
        // }

        
        
        var size =5;
        for(var i=0; i<canvas.width; i+=size){
            for(var j=0; j<canvas.height; j+= size){
                // 获取坐标点的颜色
                var color = getPixel(i,j,imgData.data);
                // console.log(color)
                for(var a=i; a< i+size; a++){
                    for(var b=j; b < j+ size; b++){
                        setPixel(imgData.data,a,b,color)
                    }
                }
            }
        }
        // // 设置像素信息
        brush.putImageData(imgData,0,0);
    }

    function getPixel(row,column,imgData){
        var pixel = canvas.width * (row - 1) + column;
        var start_index = (pixel - 1) * 4;
        var r = imgData[start_index];
        var g = imgData[start_index + 1];
        var b = imgData[start_index + 2];
        var a = imgData[start_index + 3];
        return [r,g,b,a];
    }

    function setPixel(data,row,column,color){
        var pixel = canvas.width * (row - 1) + column;
        var start_index = (pixel - 1) * 4;
        data[start_index] = color[0];
        data[start_index + 1] = color[1];
        data[start_index + 2] = color[2];
        data[start_index + 3] = color[3];
    }
}
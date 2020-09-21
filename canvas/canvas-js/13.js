window.onload = function() {
    var canvas = document.querySelector('canvas');
    var brush = canvas.getContext('2d');
    var gradient = brush.createLinearGradient(0,0,500,0);
    gradient.addColorStop(0,'red');
    gradient.addColorStop(.5,'blue');
    gradient.addColorStop(1,'orange');

    brush.fillStyle = gradient;
    brush.fillRect(0,0,500,500)

    // 获取 10*10 的矩形信息
    var pixelData = brush.getImageData(0,0,10,10)
    // console.log(data)  

    // 定义一个函数获取像素信息
    function getPixel(row,column,imgData){
        /**
         *  一个像素四个相连下标表示 r g b a
         *      - a不是 float 表示，而是 0 ~ 255
         *  0,1,2,3         1px     (1-1) * 4
         *  4,5,6,7         2px     (2-1) * 4
         *  8,9,10,11       3px     (3-1) * 4
         *  12,13,14,15     4px     (4-1) * 4
         * 10 * ( row-1 ) + column
         */
        var pixel = 10 * (row - 1) + column;
        var start_index = (pixel - 1) * 4;
        var r = imgData[start_index];
        var g = imgData[start_index + 1];
        var b = imgData[start_index + 2];
        var a = imgData[start_index + 3];
        console.log(a)
        return `rgba[${r},${g},${b},${a}]`;
    }

    console.log(getPixel(1,6,pixelData.data));

    // 像素设置
    // brush.putImageData(pixelData,0,0,);

    // 修改 （5,5） 的像素颜色为红色
    function setPixel(data,row,column,color){
        var pixel = 10 * (row - 1) + column;
        var start_index = (pixel - 1) * 4;
        data[start_index] = color[0];
        data[start_index + 1] = color[1];
        data[start_index + 2] = color[2];
        data[start_index + 3] = color[3];
    }
    setPixel(pixelData.data,1,1,[52, 231, 228,255])

    // 修改信息
    brush.putImageData(pixelData,0,0);
}
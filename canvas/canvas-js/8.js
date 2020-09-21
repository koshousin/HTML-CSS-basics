window.onload = function(){
    var canvas = document.querySelector('canvas');
    var brush = canvas.getContext('2d');

    // 1.操作图片
    var img = new Image;
    var img = document.createElement('img');
    // 2.设置src
    img.src = '../imgs/aimyon.jpg';
    // 3.图片绑定加载完毕事件
    img.onload = function(){
        //绘制图片
        var proportion = 1837 / 2756;   // height / width
        brush.drawImage(img,0,0,450,450*proportion); // obj,x,y,width,height
    }
}
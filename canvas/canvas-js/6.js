window.onload = function(){
    var canvas = document.querySelector('canvas');
    var brush = canvas.getContext('2d');
    brush.fillRect(100,100,300,200);

    // 擦除区域
    brush.clearRect(100,100,50,50)
}
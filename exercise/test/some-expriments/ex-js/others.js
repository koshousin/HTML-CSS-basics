window.onload = function(){
    var btn = document.querySelector('.btn');
    var links = document.querySelectorAll('li');
    var deg = 0;
    // 定义按钮状态
    var isOpen = false;

    btn.onclick = function(){
        deg += 405;
        // 按钮旋转
        btn.style.transform = 'rotate(' +  deg + 'deg)';
        if(!isOpen){
            var r_degree = 720;
            for(var i=0; i< links.length; i++){
                // 控制元素的位置
                var left = 150 * Math.cos(30 * i / 180 * Math.PI);
                var top = -150 * Math.sin(30 * i / 180 * Math.PI);
                links[i].style.transition = 'all .3s ' + 0.1 * i +'s';
                links[i].style.top = top + 'px';
                links[i].style.left = left + 'px';
                links[i].style.transform = 'rotate(' + r_degree + 'deg)'
            } 
        } else {
            for(var i=0;i<links.length;i++){
                var left = 0;
                var top = 0;
                links[i].style.left = 0;
                links[i].style.top = 0;
                links[i].style.transform = 'rotate(-720deg)'
                links[i].style.transitionDelay = (links.length-1-i) * 100 + 'ms'
            }
        }
        isOpen = !isOpen;
    }
}
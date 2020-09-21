window.onload = function(){
    // 网页中的对象
    var slide_shadow = document.getElementsByClassName("shadow-slide")[0];
    var slide_block = document.getElementsByClassName("slide-block")[0];
    var input = document.querySelector("input[type=text]");
    var search = document.getElementsByClassName("search-wrapper")[0];
    var button = document.getElementsByTagName("button")[0];
    var content = document.getElementsByClassName("content")[0];
    // 实现滑块的左右移动
    slide_block.onclick = function(event){
        if(event.target.className == "library"){
            slide_shadow.style.left = 167 + "px";
            input.placeholder = "您的资料库";
        } else if (event.target.className == "music"){
            slide_shadow.style.left = 2 + "px";
            input.placeholder = "艺人、歌曲、歌词以及更多内容";
        }
    }
    // 当输入框获取焦点时，显示滑块以及取消键
    input.onfocus = function(event){
        event.cancelBubble = true;
        this.style.width = "260px";
        content.style.top = "50%";
    }
    // 当取消时
    button.onclick = function(){
        input.style.width = "300px";
        content.style.top = "95%";
    }
    // 
    // content.onclick = function(event){
    //     if((event.target!= slide_block) || (event.target!=input)){
           
    //     }
    // }
}
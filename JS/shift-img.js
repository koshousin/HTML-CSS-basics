window.onload = function() {
    var a_list = document.querySelectorAll("nav a");
    for(var i=0; i<a_list.length; i++){
        a_list[i].onclick = function() {
            var href = this.href;
            alert(href);
        }
    }
}
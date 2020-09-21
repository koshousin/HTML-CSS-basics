window.onload = function() {
    var ul = document.getElementsByTagName('ul')[0];
    var deletes = document.getElementsByClassName('fa-trash-alt');
    // 给删除键绑定事件
    for(let i=0; i < deletes.length; i++){
        deletes[i].onclick = deleteReminder;
    }
    // 添加要做的事情
    var input = document.getElementsByClassName('todo-things')[0];
    input.onkeydown = function(event){
        var evevt = evevt || window.event;
        if(event.keyCode == 13){
            let li = document.createElement('li');
            if(input.value){
                let checkbox = document.createElement("input");
                checkbox.setAttribute('type','checkbox');
                li.appendChild(checkbox);
                let text = document.createTextNode(input.value);
                let div = document.createElement('div');
                div.className = 'todo-content';
                div.appendChild(text);
                li.appendChild(div);
                let i = document.createElement('i');
                i.className = 'fa fa-trash-alt';
                i.onclick = deleteReminder;
                li.appendChild(i);
                ul.appendChild(li);
                //添加成功后清空输入框
                input.value = '';
            }
        }
    }
    // 全选按钮
    var btn = document.getElementsByTagName('button')[0];
    btn.onclick = function(){
        var boxes = document.querySelectorAll('ul li input[type=checkbox]');
        for(let i=0; i<boxes.length; i++){
            boxes[i].checked = true;
        }
    }

    // 提取删除函数
    function deleteReminder() {
        let parentNode = this.parentNode;
        if(confirm('Are you sure ?')){
           parentNode.remove();
        }
    }

}
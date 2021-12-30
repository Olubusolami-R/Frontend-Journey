var createTodo = function(todo) {
  var li=document.createElement('li');
    var checkbox=document.createElement('input');
    checkbox.type="checkbox";
    var label=document.createElement('label');
    label.innerHTML=todo;
    var button=document.createElement('button');
    button.innerHTML="Delete";
    button.className="delete";
    li.appendChild(checkbox);
    li.appendChild(label);
    li.appendChild(button);
    checkbox.onchange=function(){
        li.classList.toggle('checked');
    }
    var ul=document.querySelector('ul');
    button.onclick=function(){
        ul.removeChild(li);
    }
    return li;
}

document.getElementById('add').onclick = function() {
  var parent = this.parentNode;
  var input = parent.children[0];
  var inputval=input.value;
  var ul=document.querySelector('ul');
  if(inputval!=""){
      var item=createTodo(inputval);
      ul.appendChild(item);
        input.value="";
  }
}
'use strict';

const todoControl = document.querySelector('.todo-control'),
      headerInput = document.querySelector('.header-input'),
      todoList = document.querySelector('.todo-list'),
      todoCompleted = document.querySelector('.todo-completed');

let todoData = [];

const render = function(){
  if (localStorage.todoData) {
  todoData = JSON.parse(localStorage.getItem("todoData"));
};
  todoList.textContent = '';
  todoCompleted.textContent = ''; 

    
    todoData.forEach(function(item){
    const li = document.createElement('li');
    li.classList.add('todo-item');  

    li.innerHTML = '<span class="text-todo">' + item.value + '</span>' +
    '<div class="todo-buttons">' +
      '<button class="todo-remove"></button>'+
      '<button class="todo-complete"></button>' +
    '</div>';
  
     
      if (item.completed) {
      todoCompleted.append(li);      
      } else {
      todoList.append(li);
      };

      const btnTodoCompleted = li.querySelector('.todo-complete');    
      btnTodoCompleted.addEventListener('click', function() {
        item.completed = !item.completed;
        localStorage.setItem("todoData", JSON.stringify(todoData));         

        render();         
      });  

      const btnTodoRemove = li.querySelector('.todo-remove');
    btnTodoRemove.addEventListener('click', function() {                          
    li.remove();               
    todoData.splice(!item, 1);        
    localStorage.setItem("todoData", JSON.stringify(todoData));
  });
  }); 
};



todoControl.addEventListener('submit' || 'click', function(event) {  
  event.preventDefault(); 
  
  const newTodo = {
    value: headerInput.value,
    completed: false 
  };

  if (headerInput.value.trim() !== '') {
    todoData.push(newTodo);
    localStorage.setItem("todoData", JSON.stringify(todoData));      
    headerInput.value = '';
  };

  render();

});

render();
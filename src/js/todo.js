'use strict';

const todoControl = document.querySelector('.todo-control'),
      headerInput = document.querySelector('.header-input'),
      todoList = document.querySelector('.todo-list'),
      todoCompleted = document.querySelector('.todo-completed');

const todoData = [
  {
    value: 'Сварить кофе',
    completed: false
  },
  {
    value: 'Помыть посуду',
    completed: true
  }
];

const showBusiness = function(){
  todoList.textContent = localStorage.getItem('memory_1');
  todoCompleted.textContent = localStorage.getItem('memory_2');
};

const renderBusiness = function(){
  localStorage.setItem('memory_1', todoList.value);
  localStorage.setItem('memory_2', todoCompleted.textContent);
  showBusiness();
};

const render = function(){      
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
        render();         
      });
      
      const btnTodoRemove = li.querySelector('.todo-remove');
      btnTodoRemove.addEventListener('click', function() {        
        let i = 0;
        if (btnTodoRemove) {        
        li.remove();       
        i = 1;
        if (i = 1) {
          todoData.splice(item, 1);
        }        
      }      
      });
  }); 

};

todoControl.addEventListener('submit' || 'click', function(event) {  
  event.preventDefault();
  if (headerInput.value !=='' && headerInput.value.trim()) {    
  const newTodo = {
    value: headerInput.value,
    completed: false    
  };

  if (todoData.push(newTodo)){    
    headerInput.value = '';    
  }

  render();
  };
});

render();


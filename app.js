// variables
const todoForm = document.querySelector('.form-todo');
const todoInput = document.querySelector(".form-todo input[type='text']");
const todoList = document.querySelector('.todo-list');

todoForm.addEventListener('submit', (e) => {
  // it prevent page form reloading
  e.preventDefault();

  // value of task field
  const newTodoValue = todoInput.value;
  todoInput.value = '';
  // if user dont write any taks and add todo!
  if (newTodoValue.length === 0) {
    alert('Please Enter Task');
    // if user write task and add todo.
  } else {
    const newLi = document.createElement('li');

    newLi.innerHTML = ` <span class="text">${newTodoValue}</span>
      <div class="todo-buttons">
          <button class="todo-btn done">Done</button>
          <button class="todo-btn remove">Remove</button>
      </div>`;

    todoList.append(newLi);
  }
});

// event listener on todolist
todoList.addEventListener('click', (e) => {
  // check if clicked button has class "done"
  if (e.target.classList.contains('done')) {
    const targatedElm = e.target.parentNode.previousElementSibling;
    const targatedElmParent = e.target.parentNode.parentNode;
    targatedElm.style.textDecoration = 'line-through';
    targatedElmParent.style.backgroundColor = '#999';
  }

  // check if clicked button has class "remove"
  if (e.target.classList.contains('remove')) {
    const targatedElm = e.target.parentNode.parentNode;
    targatedElm.remove();
  }
});

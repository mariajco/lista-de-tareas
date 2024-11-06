// Array para almacenar las tareas
const todos = [];

// Renderizar la lista al cargar
render();

// Añadir una nueva tarea
function addTodo() {
  const title = document.getElementById('todo-title').value;
  const dueDate = document.getElementById('date-picker').value;

  if (title && dueDate) {
    todos.push({ title, dueDate, completed: false });
    document.getElementById('todo-title').value = '';
    document.getElementById('date-picker').value = '';
    render();
  } else {
    alert('Por favor, ingrese una tarea y seleccione una fecha.');
  }
}

// Renderizar la lista de tareas
function render() {
  const todoList = document.getElementById('todo-list');
  todoList.innerHTML = '';  // Limpiar la lista

  todos.forEach((todo, index) => {
    const todoItem = document.createElement('div');
    todoItem.className = 'todo-item';
    if (todo.completed) todoItem.classList.add('complete');

    const title = document.createElement('span');
    title.className = 'title';
    title.innerText = `${todo.title} - ${todo.dueDate}`;
    todoItem.appendChild(title);

    // Botón para completar tarea
    const completeButton = document.createElement('button');
    completeButton.className = 'complete';
    completeButton.innerText = todo.completed ? 'Reactivar' : 'Completado';
    completeButton.onclick = () => toggleComplete(index);
    todoItem.appendChild(completeButton);

    // Botón para eliminar tarea
    const deleteButton = document.createElement('button');
    deleteButton.className = 'delete';
    deleteButton.innerText = 'Eliminar';
    deleteButton.onclick = () => deleteTodo(index);
    todoItem.appendChild(deleteButton);

    todoList.appendChild(todoItem);
  });
}

// Alternar el estado de completado de la tarea
function toggleComplete(index) {
  todos[index].completed = !todos[index].completed;
  render();
}

// Eliminar una tarea de la lista
function deleteTodo(index) {
  todos.splice(index, 1);
  render();
}
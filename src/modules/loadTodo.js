const loadTodo = function() {
  const todo = document.createElement('div')
  todo.setAttribute('id', 'todo')
  let main = document.getElementById('main')
  main.appendChild(todo)
}

export { loadTodo }
const loadWrap = function() { // wrap for entire app
  const wrap = document.createElement('div')
  wrap.setAttribute('id', 'wrap')
  document.body.appendChild(wrap)
}

const loadHeader = function() { // header, logo, add section
  const header = document.createElement('header')
  header.textContent = "Things"
  wrap.appendChild(header)
}

const loadMainWrap = function() { // wrap for sidebar and todo content
  const mainWrap = document.createElement('div')
  mainWrap.setAttribute('id', 'main')
  wrap.appendChild(mainWrap)
}

const loadSidebar = function() {
  const sidebar = document.createElement('div')
  sidebar.setAttribute('id', 'sidebar')
  let h2 = document.createElement('h2')
  let text = document.createTextNode('Projects')
  h2.appendChild(text)
  sidebar.appendChild(h2)
  let main = document.getElementById('main')
  main.appendChild(sidebar)
}

const loadTodoSection = function() {
  const todo = document.createElement('div')
  todo.setAttribute('id', 'todo')
  let main = document.getElementById('main')
  main.appendChild(todo)
}

const loadFooter = function() {
  const footer = document.createElement('div')
  footer.setAttribute('id', 'footer')
  wrap.appendChild(footer)
}

export { loadWrap, loadHeader, loadMainWrap, loadSidebar, loadTodoSection, loadFooter }
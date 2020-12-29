const loadWrap = function() { // wrap for entire app
  const wrap = document.createElement('div')
  wrap.setAttribute('id', 'wrap')
  document.body.appendChild(wrap)
}

const loadHeader = function() { // header, logo, add section
  const header = document.createElement('header')
  header.textContent = "Things"
  wrap.appendChild(header)

  const addButton = document.createElement('addTodo')
  addButton.setAttribute('id', 'add-btn')
  addButton.textContent = '+'
  header.appendChild(addButton)
}

const loadMainWrap = function() { // wrap for sidebar and todo content
  const mainWrap = document.createElement('div')
  mainWrap.setAttribute('id', 'main')
  wrap.appendChild(mainWrap)
}

const loadFooter = function() {
  const footer = document.createElement('div')
  footer.setAttribute('id', 'footer')
  wrap.appendChild(footer)
}

export { loadWrap, loadHeader, loadMainWrap, loadFooter }
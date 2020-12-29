const loadProjects = function() {
  const projects = document.createElement('div')
  projects.setAttribute('id', 'projects')
  let h2 = document.createElement('h2')
  let text = document.createTextNode('Projects')
  h2.appendChild(text)
  projects.appendChild(h2)
  let main = document.getElementById('main')
  main.appendChild(projects)
}

function createProject(name) {
  const newProject = document.createElement('')
}

export { loadProjects }
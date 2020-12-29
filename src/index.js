import _ from 'lodash';
import "./sass/app.sass";
import { loadWrap, loadHeader, loadMainWrap, loadFooter } from './modules/loadPage'
import { loadProjects } from './modules/loadProjects'
import { loadTodo } from './modules/loadTodo'

init() // loads dom 

let button = document.getElementById('add-btn')
button.addEventListener('click', (e) => {
  e.preventDefault();
  todo.textContent = prompt('Enter todo: ')
   
})



function init() {
  loadWrap()
  loadHeader()
  loadMainWrap()
  loadProjects()
  loadTodo()
  loadFooter()
}
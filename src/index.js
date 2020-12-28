import _ from 'lodash';
import "./sass/app.sass";
import { loadHeader, loadSidebar, loadTodoSection, loadFooter } from './modules/loadPage'

init()

function init() {
  loadHeader()
  loadSidebar()
  loadTodoSection()
  loadFooter()
}
import _ from 'lodash';
import "./sass/app.sass";
import { loadWrap, loadHeader, loadMainWrap, loadSidebar, loadTodoSection, loadFooter } from './modules/loadPage'

init()

function init() {
  loadWrap()
  loadHeader()
  loadMainWrap()
  loadSidebar()
  loadTodoSection()
  loadFooter()
}
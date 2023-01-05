import './style.css'
import Card from "./src/components/Card";
import UserPage from "./src/pages/UserPage";
import TabManager from "./src/utils/TabManager";
import PagePersonnage from './src/pages/PagePersonnage';

const rootElement = document.querySelector('#app')

const tabManager = new TabManager(rootElement, {
  page1: {
    component: PagePersonnage
  },
  user: {
    component: UserPage,
  }
})

tabManager.openTabById('page1')



document.querySelectorAll('[data-tabId]').forEach(element => {
  element.addEventListener('click', () => {
    tabManager.openTabById(element.getAttribute('data-tabId'))
  })




})


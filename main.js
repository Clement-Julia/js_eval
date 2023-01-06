import './style.css'
import Card from "./src/components/Card";
import UserPage from "./src/pages/UserPage";
import TabManager from "./src/utils/TabManager";
import PagePersonnage from './src/pages/PagePersonnage';

const rootElement = document.querySelector('#app')

export const tabManager = new TabManager(rootElement, {
  pagePerso: {
    component: PagePersonnage
  },
  user: {
    component: UserPage,
    params: [{ page: 1 }]
  }
})

tabManager.openTabById('pagePerso')

tabManager.openTabById('user')

document.querySelectorAll('[data-tabId]').forEach(element => {
  element.addEventListener('click', () => {
    tabManager.openTabById(element.getAttribute('data-tabId'))
  })




})



const searchBar = document.querySelector('#searchBar');
const searchSelect = document.querySelector('#searchType');
searchBar.addEventListener('keyup', (event) => {
  let searchValue = searchBar.value;

  if (searchValue.length > 25) {
    alert('Limite de charactères atteintes (25)');
    return false;
  }

  let searchTypeValue = searchSelect.value;
  let searchTypeText = searchSelect.options[searchSelect.selectedIndex].text;

  console.log("searchValue : " + searchValue);
  console.log("searchTypeValue : " + searchTypeValue);
  
  renderList(searchValue, searchType);
})

function renderList(searchValue, searchType) {
  
}
document.querySelectorAll('[data-page]').forEach(element => {
  element.addEventListener('click', () => {
    tabManager.openTabById('user', element.getAttribute('data-page'));
  })
})

document.querySelector('#select-page').addEventListener('change', (e) => {
  tabManager.openTabById('user', e.target.value);
})

document.querySelectorAll('.character').forEach(element => {
  console.log(element);
  element.addEventListener('click',() =>{
    console.log(element.getAttribute('data-id'));
    tabManager.openTabById('pagePerso', element.getAttribute('data-id'));
  })
})


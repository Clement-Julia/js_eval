import './style.css'
import Card from "./src/components/Card";
import UserPage from "./src/pages/UserPage";
import TabManager from "./src/utils/TabManager";

const rootElement = document.querySelector('#app')

const tabManager = new TabManager(rootElement, {
  page1: {
    component: () => document.createElement('div'),
    params: [{ src: 'http://placekitten.com/200/200', text: 'A cat' }]
  },
  user: {
    component: UserPage,
  }
})

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
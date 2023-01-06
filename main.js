import './style.css'
import Card from "./src/components/Card";
import UserPage from "./src/pages/UserPage";
import FiltrePage from "./src/pages/FiltrePage";
import TabManager from "./src/utils/TabManager";


const rootElement = document.querySelector('#app')

const tabManager = new TabManager(rootElement, {
  user: {
    component: UserPage,
    params: [{ page: 1 }]
  },
  filtre: {
    component: FiltrePage
  }
})

tabManager.openTabById('user')

// Actualise la liste en cas de clic sur les flèches
document.querySelectorAll('[data-page]').forEach(element => {
  element.addEventListener('click', () => {
    tabManager.openTabById('user', element.getAttribute('data-page'));
  })
})

document.querySelector('#select-page').addEventListener('change', (e) => {
  tabManager.openTabById('user', e.target.value);
})

/* --------------------------------- SEARCHBAR --------------------------------- */
const searchBar = document.querySelector('#searchBar');
const searchSelect = document.querySelector('#searchType');
const btnSubmit = document.querySelector('#btnSubmit');

btnSubmit.addEventListener('click', () => {
  let searchValue = searchBar.value;

  if (searchValue.length > 25) {
    alert('Limite de charactères atteintes (25)');
    return false;
  }

  let searchTypeValue = searchSelect.value;
  let searchTypeText = searchSelect.options[searchSelect.selectedIndex].text;
  
  renderList(searchValue, searchTypeValue);
})

function renderList(searchValue, searchTypeValue) {
  tabManager.openTabById('filtre', [{ searchValue: searchValue, searchTypeValue: searchTypeValue }]);
}
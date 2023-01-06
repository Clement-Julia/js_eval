import './style.css'
import UserPage from "./src/pages/UserPage";
import FiltrePage from "./src/pages/FiltrePage";
import TabManager from "./src/utils/TabManager";
import PagePersonnage from './src/pages/PagePersonnage';
import EpPage from './src/pages/EpPage';

const rootElement = document.querySelector('#app')
const select = document.querySelector('#select-page');

export const tabManager = new TabManager(rootElement, {
  user: {
    component: UserPage,
  },
  ep: {
    component: EpPage,
  },
  pagePerso: {
    component: PagePersonnage
  },
  filtre: {
    component: FiltrePage
  }
});

tabManager.openTabById('ep', [{ season: 1 }])
// tabManager.openTabById('user', [{ page: 1 }])

// Actualise la liste en cas de clic sur les flèches
document.querySelectorAll('[data-page]').forEach(element => {
  element.addEventListener('click', () => {
    select.value = parseInt(select.value) + parseInt(element.getAttribute('data-page'));
    select.dispatchEvent(new Event('change'));
  })

})

document.querySelector('#select-page').addEventListener('change', (e) => {
  tabManager.openTabById('user', [{ page: e.target.value }]);
})

document.querySelector('#select-season').addEventListener('change', (e) => {
  tabManager.openTabById('ep', [{ season: e.target.value }]);
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

document.querySelector('#select-page').addEventListener('change', (e) => {
  tabManager.openTabById('user', [{ page: e.target.value}]);
})

document.querySelectorAll('.character').forEach(element => {
  element.addEventListener('click',() =>{
    console.log(element.getAttribute('data-id'));
    tabManager.openTabById('pagePerso', element.getAttribute('data-id'));
  })
})

function renderList(searchValue, searchTypeValue) {
  tabManager.openTabById('filtre', [{ searchValue: searchValue, searchTypeValue: searchTypeValue }]);
}
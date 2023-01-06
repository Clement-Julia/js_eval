import './style.css'
import UserPage from "./src/pages/UserPage";
import FiltrePage from "./src/pages/FiltrePage";
import TabManager from "./src/utils/TabManager";
import PagePersonnage from './src/pages/PagePersonnage';
import EpPage from './src/pages/EpPage';

const rootElement = document.querySelector('#app')

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

// tabManager.openTabById('ep', [{ season: 1 }])
tabManager.openTabById('user', [{ page: 1 }])

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

document.querySelectorAll('.character').forEach(element => {
  element.addEventListener('click',() =>{
    console.log(element.getAttribute('data-id'));
    tabManager.openTabByIdPerso('pagePerso', element.getAttribute('data-id'));
  })
})

document.querySelector('.tab-perso').addEventListener('click',() =>{
  tabManager.openTabByIdPerso('user', [{ page: 1 }]);
});

document.querySelector('.tab-ep').addEventListener('click',() =>{
  tabManager.openTabByIdPerso('ep', [{ season: 1 }]);
});

function renderList(searchValue, searchTypeValue) {
  tabManager.openTabById('filtre', [{ searchValue: searchValue, searchTypeValue: searchTypeValue, page: 1 }]);
}
import './style.css'
import UserPage from "./src/pages/UserPage";
import TabManager from "./src/utils/TabManager";

const rootElement = document.querySelector('#app');
const select = document.querySelector('#select-page');

const tabManager = new TabManager(rootElement, {
  user: {
    component: UserPage
  }
})

tabManager.openTabById('user', [{ page: 1 }])

document.querySelectorAll('[data-page]').forEach(element => {
  element.addEventListener('click', () => {
    select.value = parseInt(select.value) + parseInt(element.getAttribute('data-page'));
    select.dispatchEvent(new Event('change'));
  })

})

document.querySelector('#select-page').addEventListener('change', (e) => {
  tabManager.openTabById('user', [{ page: e.target.value }]);
})
import { tabManager } from "../../main";
import CardList from "../components/CardList"
import createElement from "../dom/createElement";

const fetchPage = async (page) => {
  try {
    const req = await fetch(`https://rickandmortyapi.com/api/character?page=${page}`)
    const res = await req.json();

    return res
  } catch (e) {
    throw new Error(e)
  }
}

const UserPage = async (obj) => {
  const res = await fetchPage(obj.page)

  const divPage = {
    tagName: 'div',
    classList: ['divPage'],
    children: [
      {
        tagName: 'label',
        attributes:{
          'for':'select-page'
        },
        text:'Page :'
      },
      {
        tagName: 'select',
        attributes:{
          'id':'select-page',
          'name':'select-page'
        },
        text:'Page :'
      },
    ]
  }
  
  const previousElement = {
    tagName: 'div',
    classList: ['previous'],
    attributes:{
      'id':'previous',
      'title':'Page précédente',
      'data-page':'-1'
    },
    children: [
      {
        tagName: 'i',
        classList: ['fas', 'fa-angle-left'],
      }
    ]
  }

  const nextElement = {
    tagName: 'div',
    classList: ['next'],
    attributes:{
      'id':'next',
      'title':'Page suivante',
      'data-page':'1'
    },
    children: [
      {
        tagName: 'i',
        classList: ['fas', 'fa-angle-right'],
      }
    ]
  }

  const HTMLElement = createElement(divPage);
  const previousHTML = createElement(previousElement);
  const nextHTML = createElement(nextElement);
  const select = HTMLElement.querySelector('#select-page');

  select.addEventListener('change', (e) => {
    tabManager.openTabById('user', [{ page: e.target.value }]);
  });

  // Actualise la liste en cas de clic sur les flèches
  [previousHTML, nextHTML].forEach(element => {
    element.addEventListener('click', () => {
      select.value = parseInt(select.value) + parseInt(element.getAttribute('data-page'));
      select.dispatchEvent(new Event('change'));
    })
  })


  if (select.length != res.info.pages) {
    select.replaceChildren();
    for (var i = 1; i <= res.info.pages; i++) {
      const option = document.createElement('option');
      option.value = i;
      option.text = i;

      if(obj.page == option.value){
        option.selected = true;
      }

      select.appendChild(option);
    }
  }

  let urlPrevious = res.info.prev;
  let urlNext = res.info.next;

  if (urlPrevious) {
    urlPrevious = urlPrevious.slice(47);
    previousHTML.classList.remove('d-none');
  } else {
    previousHTML.classList.add('d-none');
  }

  if (urlNext) {
    urlNext = urlNext.slice(47);
    nextHTML.classList.remove('d-none');
  } else {
    nextHTML.classList.add('d-none');
  }

  const rootElement = document.createElement('div');
  
  rootElement.appendChild(HTMLElement);
  rootElement.appendChild(previousHTML);
  rootElement.appendChild(nextHTML);
  rootElement.appendChild(CardList(res.results));
  
  return rootElement;
}

export default UserPage
import createElement from "../dom/createElement";

export default function ElementPage(array, title = null) {
  const HTMLElement = document.createElement('div');

  if (arrayObj.includes('title')) {
    const title = {
      tagName: 'h1',
      text: arrayObj.title.text
    }
    HTMLElement.appendChild(createElement(title));
  }

  if (arrayObj.includes('div')) {
    const divPage = {
      tagName: 'div',
      classList: ['divPage'],
      children: [
        {
          tagName: 'select',
          attributes: {
            'id': 'select-page',
            'name': 'select-page',
            class: 'bg-dark'
          },
        },
      ]
    }
    HTMLElement.appendChild(createElement(divPage));
  }

  if (arrayObj.includes('previous')) {
    const previousElement = {
      tagName: 'div',
      classList: ['previous'],
      attributes: {
        'id': 'previous',
        'title': 'Page précédente',
        'data-page': '-1'
      },
      children: [
        {
          tagName: 'i',
          classList: ['fas', 'fa-angle-left'],
        }
      ]
    }
    HTMLElement.appendChild(createElement(previousElement));
  }

  if (arrayObj.includes('title')) {
    const nextElement = {
      tagName: 'div',
      classList: ['next'],
      attributes: {
        'id': 'next',
        'title': 'Page suivante',
        'data-page': '1'
      },
      children: [
        {
          tagName: 'i',
          classList: ['fas', 'fa-angle-right'],
        }
      ]
    }
    HTMLElement.appendChild(createElement(nextElement));
  }

  return HTMLElement;
}
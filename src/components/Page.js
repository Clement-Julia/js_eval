export default function Ep({ id, name, episode }) {
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
  
  return {
    tagName: 'div',
    classList: ['ep', 'card', 'bg-dark'],
    attributes:
    {
      'data-id': id,
      'title': name
    },
    children: [
      {
        tagName: 'p',
        text: `${episode}:`
      },
      {
        tagName: 'p',
        classList: ['truncate'],
        text: name
      },
    ]
  }
}
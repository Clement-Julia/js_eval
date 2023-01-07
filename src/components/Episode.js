import createElement from "../dom/createElement"
import Card from "./Card"

export default function Episode({ name, air_date, episode, characters, created }) {
  return createElement({
        
    tagName: 'div',
    attributes: {
      class: ['container-episode align-center']
    },
    children: [
      {
        tagName: 'button',
        text: 'Retour',
        attributes: {
          class: ['retour'],
          onclick: ['window.location.reload()']
        },
      },
      {
        tagName: 'h1',
        text: name
      },
      {
        tagName: 'ul',
        children: [
          {
            tagName: 'li',
            text: air_date
          },
          {
            tagName: 'li',
            text: episode
          },
          {
            tagName: 'li',
            text: created
          }
        ]
      },

      {
        tagName: 'div',
        attributes: {
          class: ['divEpCharacters']
        },
        children: characters.map(({ id, name, image }) => Card({ id: id, name: name, src: image }))
      }

    ]

  }
  )
}
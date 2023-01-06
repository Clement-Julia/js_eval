export default function Card({ id, name, src }) {
  return {
    tagName: 'div',
    classList: ['character', 'card', 'bg-dark'],
    attributes:
    {
      'data-id': id
    },
    children: [
      {
        tagName: 'img',
        attributes: {
          src,
          class: ['card-image-top pointer']
        }
      },
      {
        tagName: 'p',
        text: name
      },
    ]
  }
}
export default function Ep({ id, name, episode }) {
    return {
      tagName: 'div',
      classList: ['episode', 'card', 'bg-dark'],
      attributes:
      {
        'data-id': id
      },
      children: [
        {
          tagName: 'p',
          text: `${episode}:`
        },
        {
          tagName: 'p',
          classList:['truncate'],
          text: name
        },
      ]
    }
  }
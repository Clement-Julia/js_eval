export default function Ep({ id, name, episode }) {
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
          classList:['truncate'],
          text: name
        },
      ]
    }
  }
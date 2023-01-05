export default function Card({ id, name, src }) {
  return {
    tagName: 'div',
    classList: ["character"],
    attributes:
    {
      'data-id': id
    },
    children: [
      {
        tagName: 'img',
        attributes: {
          src
        }
      },
      {
        tagName: 'p',
        text: name
      },
    ]
  }
}
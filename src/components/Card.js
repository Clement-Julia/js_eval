export default function Card({ src, text }) {
  return {
    tagName: 'div',
    classList: ['card', 'bg-dark'],
    children: [
      {
        tagName: 'img',
        attributes: {
          src,
          class: ['card-image-top']
        }
      },
      {
        tagName: 'p',
        text
      },
    ]
  }
}
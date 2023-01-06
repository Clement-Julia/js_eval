import createElement from "../dom/createElement"

export default function Perso({ name, status, species, type, gender, origin, location, image, episode, url, created }) {
  return createElement({
    tagName: 'div',
    children: [
      {
        tagName:'button',
        text: 'Retour',
        attributes:{
          class:['retour'],
          onclick:['window.location.reload()']
        }
       
      },
      {
        tagName: 'h1',
        text: name
      },
      {
        tagName: 'img',
        attributes: {
          src: image
        }
      },
      {
        tagName: 'ul',
        children: [
          {
            tagName: 'li',
            text: status
          },
          {
            tagName: 'li',
            text: species
          },
          {
            tagName: 'li',
            text: type
          },
          {
            tagName: 'li',
            text: gender
          },
          {
            tagName: 'li',
            text: origin.name
          },
          {
            tagName: 'li',
            text: location.name,
          },
          
          {
            tagName: 'li',
            text: new Date(created).toDateString()
          }
        ]
      },

      {
        tagName: 'p',
        text: 'liste des épisodes: '+episode.reduce((acc, curr)=>{
          acc.push(curr.slice(40))
          return acc;
        }, [])
      },
      
    ]
  }
  )
}
import createElement from "../dom/createElement"
let n = 0;
let comma = '';
export default function Perso({ name, status, species, type, gender, origin, location, image, episode, url, created }) {

  const ep = episode.reduce((acc, curr, index) => {
    n++;
    if(n == 20 || index == episode.length-1) { comma = ''} else { comma = ', ' }
    acc.push({
      tagName: 'span',
      attributes: {
        class: 'spanEp',
      },
      text: curr.slice(40) + comma
    });

    if (n == 20) {
      acc.push({
        tagName: 'br'
      });
      n = 0;
    }

    return acc;
  }, [])

  return createElement({

    tagName: 'div',
    attributes: {
      class: ['container-personnage'],
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
        tagName: 'div',
        attributes: {
          class: ['card cardPerso justify-center  direction-row'],
        },
        children: [
          {
            tagName: 'div',
            attributes: {
              class: ['card-img'],
            },
            children: [
              {
                tagName: 'img',
                attributes: {
                  src: image
                }
              }
            ]
          },
          {
            tagName: 'div',
            attributes: {
              class: ['card-body'],
            },
            children: [
              {
                tagName: 'h1',
                text: name
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
            ],
          }
        ]
      },
      {
        tagName: 'div',
        attributes: {
          class: ['listEpisodes'],
        },
        children: [
          {
            tagName: 'div',
            attributes: {
              class: ['divListEpisodesHeader'],
            },
            text: 'Apparaît dans les épisodes : ',
          },
          {
            tagName: 'div',
            attributes: {
              class: ['divListEpisodes'],
            },
            children: ep
          },
        ]
      }

    ]
  }
  )
}
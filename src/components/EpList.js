import { tabManager } from "../../main";
import createElement from "../dom/createElement";
import Ep from "./Ep";

export default function EpList(arrayOfEp) {
  const elements =  createElement({
    tagName: 'div',
    classList: ['users'],
    children: arrayOfEp.map(({ id, name, episode }) => Ep({ id: id, name:name, episode: episode }))
  })


  elements.querySelectorAll('.ep').forEach(element =>{
    element.addEventListener('click',() =>{
      tabManager.openTabByIdPerso('pageEpisode', element.getAttribute('data-id'));
    })
  })

  return elements
}
import createElement from "../dom/createElement";
import Ep from "./Ep";

export default function EpList(arrayOfEp) {
  return createElement({
    tagName: 'div',
    classList: ['users'],
    children: arrayOfEp.map(({ id, name, episode }) => Ep({ id: id, name:name, episode: episode }))
  })
}
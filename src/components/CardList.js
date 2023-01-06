import createElement from "../dom/createElement";
import Card from "./Card";

export default function CardList(arrayOfUsers) {
  const HTMLElements = createElement({
    tagName: 'div',
    classList: ['users'],
    children: arrayOfUsers.map(({ id, name, image }) => Card({ id: id, name:name, src: image }))
  })

  return HTMLElements;
}
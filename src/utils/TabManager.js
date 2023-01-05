class TabManager {
  constructor(rootElement, componentMapping) {
    this.rootElement = rootElement
    this.componentMapping = componentMapping
  }

  async openTabById(id, page) {
    if (!(id in this.componentMapping)) {
      throw new Error('This id is not valid')
    }
    const { component, params = [] } = this.componentMapping[id]
    if(page){
      var Component = await component({page})
    }else{
      var Component = await component(...params)
    }

    this.rootElement.innerHTML = ''
    this.rootElement.appendChild(Component)
  }
}

export default TabManager
class TabManager {
  constructor(rootElement, componentMapping) {
    this.rootElement = rootElement
    this.componentMapping = componentMapping
  }

  async openTabById(id, array) {
    if (!(id in this.componentMapping)) {
      throw new Error('This id is not valid')
    }
    const { component, params = [] } = this.componentMapping[id]
    let Component = await component(...(params.length ? params : array))

    this.rootElement.innerHTML = ''
    this.rootElement.appendChild(Component)
  }

  async openTabByIdPerso(id, perso) {
    if (!(id in this.componentMapping)) {
      throw new Error('This id is not valid')
    }
    const { component, params = [] } = this.componentMapping[id]
    console.log({perso})
    if(perso){
      var Component = await component({perso})
    }else{
      var Component = await component(...params)
    }

    this.rootElement.innerHTML = ''
    this.rootElement.appendChild(Component)
  }
}


export default TabManager
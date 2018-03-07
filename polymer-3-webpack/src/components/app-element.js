/* global customElements */
import { Element as PolymerElement } from '@polymer/polymer/polymer-element.js'
import * as templateElement from './app-element-template.html'

class AppElement extends PolymerElement {
  static get is () {
    return 'app-element'
  }
  static get template () {
    return templateElement
  }

  constructor () {
    super()
    this.name = '3.0 preview'
  }

  static get properties () {
    return {
      name: {
        Type: String
      }
    }
  }
}

customElements.define(AppElement.is, AppElement)

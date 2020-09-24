import { html, customElement, LitElement } from 'lit-element';
import styles from './chip-group-css';
import '@my-first-project/chips';

@customElement('orxe-chip-group')
export default class OrxeChipGroup extends LitElement {
  /**
   * Implement `render` to define a template for button element.
   */
  render() {
    return html`<div @click="${this.onChipSelectedHandler}"><slot></slot></div>`;
  }

  onChipSelectedHandler(event) {
    let elems = event.target.parentNode.querySelectorAll("orxe-chips");
    for (var i = 0; i < elems.length; i++) {
      elems[i].setAttribute('chip-selected', 'false');
    }
    setTimeout(() => {
      event.target.setAttribute('chip-selected', 'true');
    }, 5);
  }

 
  /**
   *  Getting styles from components custom scss file
   */
  static styles = styles;
}


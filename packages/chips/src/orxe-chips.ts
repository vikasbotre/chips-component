import { html, customElement, LitElement, property } from 'lit-element';
import styles from './chips-css';

@customElement('orxe-chips')
export default class OrxeChips extends LitElement {

  @property({type: String, attribute:'chip-content',reflect:true})
  chipContent;

  @property({type: String, attribute:'chip-counter',reflect:true})
  chipCounter;

  @property({type: String, attribute:'chip-selected',reflect:true})
  chipSelected;

  constructor() {
    super();
  }
  /**
   * Implement `render` to define a template for button element.
   */

   render() {
    return html`
    <div class="main">
        <div data-testid="chips-container" class="container" @click="${this.addDynamicClass}">
          ${this. renderLeftLabel()}${this.renderRightNumber()}
        </div>
    </div>
    `;
  }

  renderLeftLabel(){
    return html`
          <label class="label-text">${this.chipContent}</label>
    `;
  }

  renderRightNumber(){
    return html`
         <label class="label-number">${this.chipCounter}</label>
    `;
  }

  /**
   *  add dynamic class for label container
   */

  addDynamicClass(){
      this.chipSelected = !this.chipSelected;
  }

  /**
   *  Getting styles from components custom scss file
   */
  static styles = styles;
}

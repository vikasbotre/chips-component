import { html, customElement, LitElement } from 'lit-element';
import styles from './chips-css';

@customElement('orxe-chips')
export default class OrxeChips extends LitElement {

  labels = [
    {
      name: 'Label 1',
      count: 8.7,
    },
    {
      name: 'Label 2',
      count: 6.7,
    },
    {
      name: 'Label 3',
      count: 5.7,
    },
    {
      name: 'Label 4',
      count: 9.7,
    },
    {
      name: 'Label 5',
      count: 9.7,
    },
    {
      name: 'Label 6',
      count: 9.7,
    },
  ];
  constructor() {
    super();
  }
  /**
   * Implement `render` to define a template for button element.
   */

   render() {
    return html`
    <div class="main">${this.labels.map((currentelement) => html`
        <div data-testid="chips-container" class="container" @click="${this.addDynamicClass}">
          <label class="label-text">${currentelement.name}</label>
          <label class="label-number">${currentelement.count}</label>
        </div>
        `)}
    </div>
    `;
  }

  /**
   *  add dynamic class for label container
   */

  addDynamicClass(event){
    let elems = event.currentTarget.parentNode.querySelector(".active");
    if(elems !==null){
     elems.classList.remove("active");
    }
    event.currentTarget.className += " active";
  }

  /**
   *  Getting styles from components custom scss file
   */
  static styles = styles;
}

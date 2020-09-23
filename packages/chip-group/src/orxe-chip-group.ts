import { html, customElement, LitElement } from 'lit-element';
import styles from './chip-group-css';
import '@my-first-project/chips';

@customElement('orxe-chip-group')
export default class OrxeChipGroup extends LitElement {
  /**
   * Implement `render` to define a template for button element.
   */
  render() {
    return html`
      <orxe-chips chip-content="All reviews" chip-counter="8.2" chip-selected="false"></orxe-chips> 
      <orxe-chips chip-content="Couples" chip-counter="6.2" chip-selected="true"></orxe-chips>
      <orxe-chips chip-content="Friends" chip-counter="7" chip-selected="true"></orxe-chips>
    `;
  }

  /**
   *  Getting styles from components custom scss file
   */
  static styles = styles;
}

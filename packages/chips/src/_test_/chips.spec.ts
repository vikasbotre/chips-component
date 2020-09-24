import { OrxeChips } from '../';
import '@testing-library/jest-dom';

describe('orxe-chips', () => {
  let chips;

  beforeEach(async function() {
    OrxeChips;
    chips = (await document.body.appendChild(document.createElement('orxe-chips'))) as OrxeChips;
  });

  afterEach(async function() {
    await chips.remove();
  });
 
   /**
   * Function that returns an element containing the testId data attribute.
   */
  function getByTestId(id: string): HTMLElement {
    return chips.shadowRoot.querySelector(`[data-testid=${id}]`);
  }

  it('Should check default attribute', async () => {
    const chipsConatiner = getByTestId('chips-container');
    expect(chipsConatiner).toHaveAttribute('class', 'container');
  });

  it('Should function render is call', () => {
    expect(chips.render()).toBeTruthy();
  });

  it('Should function onclickChip is call', () => {
        expect(chips.onclickChip()).toBeUndefined();
    });
});
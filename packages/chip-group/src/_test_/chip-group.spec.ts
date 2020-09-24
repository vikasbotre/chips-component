import { OrxeChipGroup } from '../';
import '@testing-library/jest-dom';

describe('orxe-chip-group', () => {
  let chipsGroup;

  beforeEach(async function() {
    OrxeChipGroup;
    chipsGroup = (await document.body.appendChild(document.createElement('orxe-chip-group'))) as OrxeChipGroup;
  });

  afterEach(async function() {
    await chipsGroup.remove();
  });
 
  it('Should function render is call', () => {
    expect(chipsGroup.render()).toBeTruthy();
  });

  it('Should function onChipSelectedHandler is call', () => {
    const dummyEvent = {
              target: {
                 parentNode: {
                  querySelectorAll: () => {
                      return { orxechips: ['orxe-chips','orxe-chips','orxe-chips']};
                  },
                 }
            }
        };
        expect(chipsGroup.onChipSelectedHandler(dummyEvent)).toBeUndefined();
    });

});
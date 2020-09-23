import { OrxeChipGroup } from '../';

import { axe, toHaveNoViolations } from '@orxe-devkit/axe';
expect.extend(toHaveNoViolations);

describe('orxe-chip-group-axe', () => {
  it('', () => {
    expect(true).toBeTruthy();
  });
  
  let ChipGroup;

  beforeEach(async () => {
    OrxeChipGroup;
    document.body.appendChild(document.createElement('ChipGroup'));
    ChipGroup = document.querySelector('ChipGroup') as OrxeChipGroup;
  });

  afterEach(() => {
    ChipGroup.remove();
  });

  it('should support all WCAG Accessibility Rules. when default toolbar is rendered', async () => {
    const result = await axe(ChipGroup);
    expect(result).toHaveNoViolations();
  });
});

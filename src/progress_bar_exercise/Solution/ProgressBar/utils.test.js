import { getIsVisibleClass } from './utils';

describe('getIsVisibleClass', () => {
  it('Should not return a class', () => {
    const isVisible = true;
    const result = getIsVisibleClass(isVisible);
    const expectedResult = 'visible';

    expect(result).toEqual(expectedResult)
  })
  it("Should return the 'visible' class", () => {
    const isVisible = false;
    const result = getIsVisibleClass(isVisible);
    const expectedResult = '';

    expect(result).toEqual(expectedResult)
  })
});

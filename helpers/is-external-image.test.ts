import isExternalImage from './is-external-image';

describe('isExternalImage', () => {
  it('returns true when the string includes https', () => {
    expect(isExternalImage('https://url.com/image.png')).toBeTruthy();
  });

  it('returns true when the string includes http', () => {
    expect(isExternalImage('http://url.com/image.png')).toBeTruthy();
  });

  it('returns false when the string does not includes http or https', () => {
    expect(isExternalImage('url.png')).toBeFalsy();
  });
});

const { expect } = require('chai');
const { hexToRgb } = require('../src/hexToRgb');
describe('Unit: hexToRgb()', () => {
  it('converts red with # prefix', () => expect(hexToRgb('#FF0000')).to.deep.equal({ r: 255, g: 0, b: 0 }));
  it('converts mixed-case input without #', () => expect(hexToRgb('00aAfF')).to.deep.equal({ r: 0, g: 170, b: 255 }));
  it('converts black boundary', () => expect(hexToRgb('000000')).to.deep.equal({ r: 0, g: 0, b: 0 }));
  it('converts white boundary', () => expect(hexToRgb('#FFFFFF')).to.deep.equal({ r: 255, g: 255, b: 255 }));
  it('rejects short hex', () => expect(() => hexToRgb('#FFF')).to.throw(TypeError));
  it('rejects non-hex characters', () => expect(() => hexToRgb('#GG0000')).to.throw(TypeError));
  it('rejects non-string input', () => expect(() => hexToRgb(null)).to.throw(TypeError));
});

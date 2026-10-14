/** Convert a six-digit hexadecimal colour into RGB channels. */
function hexToRgb(hex) {
  if (typeof hex !== 'string' || !/^#?[0-9a-fA-F]{6}$/.test(hex)) {
    throw new TypeError('hex must be a six-digit hexadecimal colour');
  }
  const value = hex.replace(/^#/, '');
  return {
    r: parseInt(value.slice(0, 2), 16),
    g: parseInt(value.slice(2, 4), 16),
    b: parseInt(value.slice(4, 6), 16)
  };
}
module.exports = { hexToRgb };

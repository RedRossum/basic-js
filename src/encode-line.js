const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let multi = 1;
  const res = [];
  str.split('').forEach((item, index) => (item === str[index + 1] ? (multi++)
    : (res.push(multi + item), multi = 1)));
  return res.join('')
    .replace(/1/g, '');
}

module.exports = {
  encodeLine
};

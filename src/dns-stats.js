const { NotImplementedError } = require('../lib');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains ) {
  const res = {};
  domains.map((item) => item.split('.').reverse())
    .forEach((item) => {
      item.reduce((acc, i) => {
        const dns = `${acc}.${i}`;
        res[dns] = res[dns] ? ++res[dns] : 1;
        return dns;
      }, '');
    });
  return res;
}

module.exports = {
  getDNSStats
};

const { NotImplementedError } = require('../lib');

/**
 * Extract season from given date and expose the enemy scout!
 *
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 *
 * @example
 *
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 *
 */
function getSeason(date) {
  if (date === undefined) return 'Unable to determine the time of year!';

  if (!(date instanceof Date)) {
    throw Error('Invalid date!');
  }
  try {
    date.getUTCDate();
  } catch (TypeError) {
    throw Error('Invalid date!');
  }
  let month = date.getMonth();

  switch (true) {
    case (month === 11 || month < 2): return 'winter';
    case (month > 1 && month < 5): return 'spring';
    case (month > 4 && month < 8): return 'summer';
    case (month > 7 && month < 11): return 'autumn';
  }
}

module.exports = {
  getSeason
};

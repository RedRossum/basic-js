const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */
class VigenereCipheringMachine {
  constructor(reverse) {
    if (reverse === undefined) this.reverse = true;
    else this.reverse = reverse;
  }
  encrypt(text, key) {
    let alphabet = "abcdefghijklmnopqrstuvwxyz".split("")

    if (text === undefined || key === undefined) throw new Error('Incorrect arguments!');

    const arrText = text.toLowerCase().split('');
    const arrKey = key.toLowerCase().split('');
    let res = [];

    for (let i = 0; i < arrText.length; i++) {
      if (alphabet.includes(arrText[i])) {
        let indexBias = 0;
        let indexSum = alphabet.indexOf(arrText[i]) + alphabet.indexOf(arrKey[i]);

        if (arrKey.length < arrText.length) arrKey.push(arrKey[i]);
        if (indexSum >= 26) indexBias = indexSum - 26;

        else indexBias = indexSum;

        res.push(alphabet[indexBias]);
      } else {
        res.push(arrText[i]);
        arrKey.splice(i, 0, ' ');
      }
    }

    if (!this.reverse) res = res.reverse();
    return res.join('').toUpperCase();
  }

  decrypt(text, key) {
    let alphabet = "abcdefghijklmnopqrstuvwxyz".split("")

    if (text === undefined || key === undefined) throw new Error('Incorrect arguments!');

    const arrText = text.toLowerCase().split('');
    const arrKey = key.toLowerCase().split('');
    let res = [];

    for (let i = 0; i < arrText.length; i++) {
      if (alphabet.includes(arrText[i])) {
        let indexBias = 0;
        let indexDiff = alphabet.indexOf(arrText[i]) - alphabet.indexOf(arrKey[i]);

        if (arrKey.length < arrText.length) arrKey.push(arrKey[i]);
        if (indexDiff < 0) indexBias = indexDiff + 26;

        else indexBias = indexDiff;

        res.push(alphabet[indexBias]);
      } else {
        res.push(arrText[i]);
        arrKey.splice(i, 0, ' ');
      }
    }

    if (!this.reverse) res = res.reverse();
    return res.join('').toUpperCase();
  }
}

module.exports = {
  VigenereCipheringMachine
};

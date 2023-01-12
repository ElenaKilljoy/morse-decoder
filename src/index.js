const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let result = '';
    let char = '';
    let morseCode = '';
    let i = expr.length - 1;
    let x = 0;
    while (i > 0) {
      char = expr[i - 9] + expr[i - 8] + expr[i - 7] + expr[i - 6] + expr[i - 5] + expr[i - 4] + expr[i - 3] + expr[i - 2] + expr[i - 1] + expr[i] + char;
      if (char === '**********') {
        result = ' ' + result;
      } else {
          while (x < char.length) {
            if (char[x] + char[x + 1] === '10') {
              morseCode = morseCode + '.';
            } else if (char[x] + char[x + 1] === '11') {
              morseCode = morseCode + '-';
            } else {
              morseCode = morseCode + '';
            }
            x = x + 2;
          }
          for (let key in MORSE_TABLE) {
            if (key === morseCode) {
              result = MORSE_TABLE[key] + result;
            }
          }
        }
      i = i - 10;
      x = 0;
      char = '';
      morseCode = '';
    }
    return result;
}

module.exports = {
    decode
}
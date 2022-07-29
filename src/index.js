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
    let letter = '';
    let finmassive = [];
    let stroch = '';
    for (let i = 0; i < expr.length; i = i + 10) {
     letter = (expr.slice(i, i + 10));
     if (letter.includes('**********')) {
      finmassive.push(' ');
     }
     else {
      for (b = 0; b < letter.length; b = b + 2) {
        if (letter.slice(b, b + 2) === '10') {
          stroch += '.';
        }
        else if (letter.slice(b, b + 2) === '11') {
          stroch += '-';
        }
      }
      finmassive.push(MORSE_TABLE[stroch]);
      stroch = '';
    }
   }
   return finmassive.join('');
 }

module.exports = {
    decode
}
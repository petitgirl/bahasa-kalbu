const encryptionMap = {
  'A': '@', 'a': '@',
  'E': '3', 'e': '3',
  'I': '1', 'i': '1',
  'O': '0', 'o': '0',
  'U': '|_|', 'u': '|_|',
  'B': '|3', 'b': '|3',
  'C': '(', 'c': '(',
  'D': '|)', 'd': '|)',
  'F': '|=', 'f': '|=',
  'G': '6', 'g': '6',
  'H': '|-|', 'h': '|-|',
  'J': ']', 'j': ']',
  'K': '|<', 'k': '|<',
  'L': '|_', 'l': '|_',
  'M': '|\\/|', 'm': '|\\/|',
  'N': '|\\|', 'n': '|\\|',
  'P': '|*', 'p': '|*',
  'Q': '(u', 'q': '(u',
  'R': '|2', 'r': '|2',
  'S': '5', 's': '5',
  'T': '+', 't': '+',
  'V': '\\/', 'v': '\\/',
  'W': '\\/\\/', 'w': '\\/\\/',
  'X': '><', 'x': '><',
  'Y': '`/', 'y': '`/',
  'Z': '2', 'z': '2',
  '1': '|-', '2': '||', '3': '|=', '4': '|^',
  '5': '|~', '6': '|>', '7': '|&', '8': '|*',
  '9': '|(', '0': '|)'
};

const decryptionMap = Object.fromEntries(
  Object.entries(encryptionMap).map(([key, value]) => [value, key])
);

function encrypt(text) {
  return text.split('').map(char => encryptionMap[char] || char).join('');
}

function decrypt(text) {
  let decryptedText = '';
  let i = 0;

  while (i < text.length) {
    let found = false;
    for (const [encChar, decChar] of Object.entries(decryptionMap)) {
      if (text.slice(i, i + encChar.length) === encChar) {
        decryptedText += decChar;
        i += encChar.length;
        found = true;
        break;
      }
    }
    if (!found) {
      decryptedText += text[i];
      i++;
    }
  }

  return decryptedText;
}

function encryptText() {
  const inputText = document.getElementById('inputText').value;
  const encryptedText = encrypt(inputText);
  document.getElementById('outputText').value = encryptedText;
}

function decryptText() {
  const inputText = document.getElementById('inputText').value;
  const decryptedText = decrypt(inputText);
  document.getElementById('outputText').value = decryptedText;
}

const encryptionMap = {
        '4': 'A', '8': 'B', '(': 'C', '|)': 'D', '3': 'E', '|=': 'F', '6': 'G', '#': 'H', '1': 'I', 
        '_|': 'J', '|<': 'K', '1_': 'L', '/\/\ ': 'M', '/\/': 'N', '0': 'O', '|D': 'P', '(,)': 'Q', 
        '|2': 'R', '5': 'S', '+': 'T', '|_': 'U', '\/': 'V', '\/\/': 'W', '><': 'X', '`/': 'Y', '2': 'Z',
        '4': 'a', '8': 'b', '(': 'c', '|)': 'd', '3': 'e', '|=': 'f', '6': 'g', '#': 'h', '1': 'i', 
        '_|': 'j', '|<': 'k', '1_': 'l', '/\/\ ': 'm', '/\/': 'n', '0': 'o', '|D': 'p', '(,)': 'q', 
        '|2': 'r', '5': 's', '+': 't', '|_': 'u', '\/': 'v', '\/\/': 'w', '><': 'x', '`/': 'y', '2': 'z'
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

# Text Encryption and Decryption

This repository contains JavaScript functions to encrypt and decrypt text using a custom substitution cipher. The encryption replaces certain characters with predefined symbols, making the text harder to read for those who do not know the cipher.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
  - [Encrypt Function](#encrypt-function)
  - [Decrypt Function](#decrypt-function)
  - [Example](#example)
- [Encryption Map](#encryption-map)
- [Decryption Map](#decryption-map)
- [Contributing](#contributing)
- [License](#license)

## Installation

To use these functions, simply copy the code from `encryptDecrypt.js` into your project. There are no external dependencies.

## Usage

### Encrypt Function

The `encrypt` function takes a string as input and returns the encrypted version of the string.

```javascript
function encrypt(text) {
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
    'Z': '2', 'z': '2'
  };

  return text.split('').map(char => encryptionMap[char] || char).join('');
}

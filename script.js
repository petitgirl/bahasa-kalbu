const substitution = {
    'A': '@', 'B': '8', 'C': '(', 'D': '|)', 'E': '3', 'F': '|=', 'G': '9', 'H': '#', 'I': '!', 
    'J': '_|', 'K': '|<', 'L': '1_', 'M': '/\\/\\', 'N': '/\\/', 'O': '0', 'P': '|D', 'Q': '(,)', 
    'R': '|2', 'S': '5', 'T': '+', 'U': '|_', 'V': '\\/', 'W': '\\/\\/', 'X': '><', 'Y': '`/', 'Z': '2',
    'a': '@', 'b': '8', 'c': '(', 'd': '|)', 'e': '3', 'f': '|=', 'g': '9', 'h': '#', 'i': '!', 
    'j': '_|', 'k': '|<', 'l': '1_', 'm': '/\\/\\', 'n': '/\\/', 'o': '0', 'p': '|D', 'q': '(,)', 
    'r': '|2', 's': '5', 't': '+', 'u': '|_', 'v': '\\/', 'w': '\\/\\/', 'x': '><', 'y': '`/', 'z': '2'
};

const reverseSubstitution = Object.fromEntries(Object.entries(substitution).map(([k, v]) => [v, k]));

function encryptText() {
    const inputText = document.getElementById('inputText').value;
    let encryptedText = '';
    for (let char of inputText) {
        encryptedText += substitution[char] || char;
    }
    document.getElementById('outputText').value = encryptedText;
}

function decryptText() {
    const inputText = document.getElementById('inputText').value;
    let decryptedText = '';
    let i = 0;
    while (i < inputText.length) {
        let char = inputText[i];
        if (char === '|') {
            const nextChar = inputText[i + 1];
            const combinedChar = char + nextChar;
            if (reverseSubstitution[combinedChar]) {
                decryptedText += reverseSubstitution[combinedChar];
                i += 2;
                continue;
            }
        }
        decryptedText += reverseSubstitution[char] || char;
        i++;
    }
    document.getElementById('outputText').value = decryptedText;
}

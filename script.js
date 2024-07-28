        const substitution = {
            'A': '@', 'B': '8', 'C': '(', 'D': 'd', 'E': '€', 'F': '|=', 'G': '9', 'H': 'h', 'I': '!', 
            'J': 'j', 'K': '|<', 'L': 'L', 'M': 'm', 'N': '|\\|', 'O': '0', 'P': 'p', 'Q': 'q', 
            'R': 'r', 'S': '5', 'T': '7', 'U': 'u', 'V': '\\/', 'W': '\\/\\/', 'X': '><', 'Y': 'y', 'Z': '2',
            'a': '@', 'b': 'b', 'c': '(', 'd': 'd', 'e': '€', 'f': '|=', 'g': '9', 'h': 'h', 'i': '!', 
            'j': 'j', 'k': '|<', 'l': 'L', 'm': 'm', 'n': '|\\|', 'o': '0', 'p': 'p', 'q': 'q', 
            'r': 'r', 's': '5', 't': '7', 'u': 'u', 'v': '\\/', 'w': '\\/\\/', 'x': '><', 'y': 'y', 'z': '2'
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

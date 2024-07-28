        const substitution = {
            'A': '4', 'B': '8', 'C': '(', 'D': '|)', 'E': '3', 'F': '|=', 'G': '6', 'H': '#', 'I': '1', 
            'J': '_|', 'K': '|<', 'L': '1_', 'M': '/\\/\\', 'N': '/\\/', 'O': '0', 'P': '|D', 'Q': '(,)', 
            'R': '|2', 'S': '5', 'T': '+', 'U': '|_', 'V': '\\/', 'W': '\\/\\/', 'X': '><', 'Y': '`/', 'Z': '2',
            'a': '4', 'b': '8', 'c': '(', 'd': '|)', 'e': '3', 'f': '|=', 'g': '6', 'h': '#', 'i': '1', 
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
            let skip = 0;
            for (let i = 0; i < inputText.length; i++) {
                if (skip > 0) {
                    skip--;
                    continue;
                }
                const twoChar = inputText.substring(i, i + 2);
                if (reverseSubstitution[twoChar]) {
                    decryptedText += reverseSubstitution[twoChar];
                    skip = 1;
                } else {
                    decryptedText += reverseSubstitution[inputText[i]] || inputText[i];
                }
            }
            document.getElementById('outputText').value = decryptedText;
        }

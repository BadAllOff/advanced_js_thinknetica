/**
 * 4. Шифр подменой - декодировщик
 * Задача, обратная задаче, рассмотренной на лайв кодинге.
 * Дается символьная строка, использованная для кодирования, и несколько закодированных текстов, требуется написать программу для декодирования 
 */

const keyCodeA = 'a'.charCodeAt(0);
const key = 'sqnzbeuigvxtmhfpdcjyoakwlr';

function encode() {

    let text = `React (also known as React.js or ReactJS) is a JavaScript library for building user interfaces. It is maintained by Facebook and a community of individual developers and companies`.toLocaleLowerCase();
    let encoded = '';

    for (let index = 0; index < text.length; index++) {
        let code = text.charCodeAt(index) - keyCodeA;
        if (code < 0 || code >= 26)
            encoded += ' ';
        else
            encoded += key[code];
    }

    console.log(encoded);
}

function decode() {
    // Результат функции decode().
    const encodedText = 'cbsny  stjf xhfkh sj cbsny vj fc cbsnyvj  gj s vsasjncgpy tgqcscl efc qogtzghu ojbc ghybcesnbj gy gj msghysghbz ql esnbqffx shz s nfmmohgyl fe ghzgagzost zbabtfpbcj shz nfmpshgbj';
    let decodeText = '';

    for (let i = 0; i < encodedText.length; i++) {
        if (encodedText[i] === ' ') { decodeText += ' ' };

        for (let j = 0; j < key.length; j++) {
            if (encodedText[i] === key[j]) {
                decodeLetter = j + keyCodeA;
                decodeText += String.fromCharCode(decodeLetter);
                continue;
            }
        }
    }

    console.log(decodeText)
}

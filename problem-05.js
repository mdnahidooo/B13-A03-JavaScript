
function analyzeText(str) {

    if (typeof str !== 'string' || str.length === 0) {
        return 'Invalid'
    }
    const wordsArray = str.trim().split(' ');

    let longWords = '';
    let maxLength = 0;
    for (const word of wordsArray) {
        if (word.length > maxLength) {
            maxLength = word.length;
            longWords = word;
        }
    }

    const letters = str.trim().split('');

    let token = 0;
    for (const letter of letters) {
        if (letter === ' ') {
            continue;
        } 
        token++; 
    }


    return {
        longwords: longWords,
        token: token,
    };
}

// const output = analyzeText([12345]);
// console.log(output);
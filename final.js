//Problem-01: New Price for Eid Sale

function newPrice(currentPrice, discount) {
    if (typeof currentPrice !== 'number' || typeof discount !== 'number' || discount < 0 || discount > 100) {

        return 'Invalid';
    }
    
    const totalDiscount = (currentPrice * discount) / 100;
    const afterDiscountTotalPrice = currentPrice - totalDiscount;
    return afterDiscountTotalPrice.toFixed(3);
}

//Problem-02: OTP Validation for Zapshift
function validOtp(otp) {
    
    if (typeof otp !== 'string') {
        return 'Invalid';
    }

    if (otp.startsWith('ph-') && otp.length === 8) {
        return true;
    }
    else {
        return false;
    }
}

//Problem-03: BCS Final Score Calculator

function finalScore(omr) {
    const totalQuestionMark = omr.right + omr.wrong + omr.skip;

    if (typeof omr !== 'object' || Array.isArray(omr) ===true || totalQuestionMark < 0 || totalQuestionMark > 100) {
        return 'Invalid'
    }
    const rightAnswerPoint = omr.right * 1;
    const wrongAnswerPoint = omr.wrong * 0.5;
    const totalMark = rightAnswerPoint - wrongAnswerPoint;

    return Math.round(totalMark);
}

//Problem-04: Upcoming Gono Vote

function gonoVote(array) {

    if (Array.isArray(array) === false) {
        return 'Invalid';
    }

    let haCount = 0;
    let naCount = 0;
    for (const item of array) {
        if (item.toLowerCase() === 'ha') {
            haCount++;
        }
        else if (item.toLowerCase() === 'na') {
            naCount++;
        }
    }
    if (haCount > naCount) {
        return true;
    }
    else if (haCount === naCount) {
        return 'equal';
    }
    else {
        return false;
    }
}

//Problem-05: Text Analyzer for an AI Company

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



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

// const output = finalScore({ right: 67, wrong: 23, skip: 10 });
// console.log(output);
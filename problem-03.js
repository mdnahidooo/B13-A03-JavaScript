
function finalScore(omr) {
    const totalQuestionMark = omr.right + omr.wrong + omr.skip;

    if (typeof omr !== 'object' || Array.isArray(omr) ===true || totalQuestionMark !== 100) {
        return 'Invalid'
    }
    const rightAnswerPoint = omr.right * 1;
    const wrongAnswerPoint = omr.wrong * 0.5;
    const totalMark = rightAnswerPoint - wrongAnswerPoint;

    return Math.round(totalMark);
}

// const output = finalScore({ right: 30, wrong: 30, skip: 40 });
// console.log(output);
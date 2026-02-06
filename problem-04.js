
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

// const output = gonoVote(["ha", "na", "ha", "na"]);
// console.log(output);
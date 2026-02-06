
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

// const output = validOtp(12345678);
// console.log(output);
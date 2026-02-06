
function newPrice(currentPrice, discount) {
    if (typeof currentPrice !== 'number' || typeof discount !== 'number' || discount < 0 || discount > 100) {

        return 'Invalid';
    }
    
    const totalDiscount = (currentPrice * discount) / 100;
    const afterDiscountTotalPrice = currentPrice - totalDiscount;
    return afterDiscountTotalPrice.toFixed(3);
}

// const output = newPrice("1000", 10);
// console.log(output);
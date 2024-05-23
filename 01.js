let obj = {
    price1: 100,
    price2: 150,
    price3: 200,
    price4: 100,
    price5: 150,
};

function calculateTotal(obj) {
    let totalSum = Object.values(obj).reduce((acc, val) => acc + val, 0);
    return totalSum;
}

console.log(calculateTotal(obj));

module.exports = { calculateTotal };

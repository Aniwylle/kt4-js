function checkObj(obj) {
    return 'particle' in obj;
}

console.log(checkObj({id: 1, particle: 10})); // Вернет true
console.log(checkObj({id: 2, name: "tag"})); // Вернет false

module.exports = { checkObj };
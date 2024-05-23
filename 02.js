let array = [
    {id: 1, name: 'apple'},
    {id: 2, name: 'watermelon'},
    {id: 3, name: 'qiwi'},
    {id: 4, name: 'lemon'}
];

function transform_objects(array) {
    let resultArray = array.map(obj => Object.values(obj));
    return resultArray
}

console.log(transform_objects(array));

module.exports = { transform_objects };

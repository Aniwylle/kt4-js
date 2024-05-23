const test = require("node:test");
const assert = require("node:assert");

const { transform_objects } = require("./02.js");

test("transforms each object", () => {
    assert.deepStrictEqual(transform_objects([
        {id: 1, name: 'orange'},
        {id: 2, name: 'apple'}
    ]), [[1, "orange"], [2, "apple"]]);

    assert.deepStrictEqual(transform_objects([
        {id: 3, name: 'punch'},
        {id: 4, name: 'banana'}
    ]), [[3, "punch"], [4, "banana"]]);
});

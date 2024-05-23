const test = require("node:test");
const assert = require("node:assert");

const { generateArray } = require("./05.js");

test("does an object exist in this array", () => {
    assert.deepStrictEqual(generateArray([[5], {id: 2}, [100], [150], {part: 1}]), [[5], [2], [100], [150], [1]]);
    assert.deepStrictEqual(generateArray([[2], {id: 2}, {part: 2}, [2], [2]]), [[2], [2], [2], [2], [2]]);
    assert.deepStrictEqual(generateArray([[1], [2], {id: 3}, [4], {part: 5}]), [[1], [2], [3], [4], [5]]);
});

const test = require("node:test");
const assert = require("node:assert");

const { checkObj } = require("./04.js");

test("checking if particle exists with any value", () => {
    assert.strictEqual(checkObj({id: 1, particle: 5}), true);
    assert.strictEqual(checkObj({id: 5, particle: 10}), true);
    assert.strictEqual(checkObj({id: 2, name: "wha"}), false);
});

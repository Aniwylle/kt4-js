const test = require("node:test");
const assert = require("node:assert");

const { logString } = require("./03.js");

test("prints the line", () => {
    assert.strictEqual(logString("Hello", "friend"), 'Hello friend ');
    assert.strictEqual(logString("Bye", "bye", "fiend!"), 'Bye bye fiend! ');
    assert.strictEqual(logString("Hello", "Im", "Diana!"), 'Hello Im Diana! ');
});


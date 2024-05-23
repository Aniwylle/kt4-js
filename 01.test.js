const test = require("node:test");
const assert = require("node:assert");

const { calculateTotal } = require("./01.js");

  test("Obj with n number of properties", () => {  
    assert.strictEqual(calculateTotal({ price1: 100, price2: 150 }), 250);  
    assert.strictEqual(calculateTotal({ price1: 200, price2: 100 }), 300);  
    assert.strictEqual(calculateTotal({ price1: 150, price2: 100, price3: 100 }), 350);  
});


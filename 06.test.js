const test = require("node:test");
const assert = require("node:assert");

const { addUser } = require("./06.js");
const { updateUser } = require("./06.js");
const { deleteUser } = require("./06.js");

test("add Users", () => {
    assert.deepStrictEqual(addUser('Frese', 'fea', 18 ), ({ id: 3, name: 'Frese', lastname: 'fea', age: 18 }));
    assert.deepStrictEqual(addUser('mamma', 'mia', 60), ({ id: 4, name: 'mamma', lastname: 'mia', age: 60 }));
    assert.deepStrictEqual(addUser('pappa', 'pia', 60), ({ id: 5, name: 'pappa', lastname: 'pia', age: 60 }));
});
test("update Users", () => {
    updateUser(2, 'Peter', 'Parker', 30 );
    updateUser(5, 'pappa', 'pia', 60);
    updateUser(6, 'mamma', 'mia', 60);
    
    assert.deepStrictEqual(updateUser(2, 'Peter', 'Parker', 30), ({ id: 2, name: 'Peter', lastname: 'Parker', age: 30 }));
    assert.deepStrictEqual(updateUser(5, 'pappa', 'pia', 60), ({ id: 5, name: 'pappa', lastname: 'pia', age: 60 }));
    assert.strictEqual(updateUser(6), undefined);
});
test("delete Users", () => {
    deleteUser(2);
    deleteUser(6);
    deleteUser(5);

    assert.strictEqual(deleteUser(2), undefined);
    assert.strictEqual(deleteUser(6), undefined);
    assert.strictEqual(deleteUser(5), undefined);
});


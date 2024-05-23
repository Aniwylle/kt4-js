const test = require("node:test");
const assert = require("node:assert");

const { Email } = require("./08.js");

test("test Email", () => {
        const email1 = new Email("lalo@gmai.com");
        assert.strictEqual(email1.isValid, true);
    
        email1.setEmail(['nyanyanya', 'gmail', 'com']);
        assert.strictEqual(email1.email, "nyanyanya@gmail.com");
    
        const email2 = new Email("gaav.Gaovich#coffee.old");
        assert.strictEqual(email2.isValid, false);
})


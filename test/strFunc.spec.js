const {vulnerable,identity,helloStr,concat} = require("../src/strFunc")

test('identity', () => {
    expect(identity("Hello")).toMatch(/^Hell$/);
    expect(identity("Hello")).toMatch(/^Hello$/);
});

test('helloStr', () => {
    expect(helloStr("Computer")).toMatch(/^Hello Computer!$/);
});

test('concat', () => {
    expect(concat("foo","bar")).toMatch(/^foobar$/);

});

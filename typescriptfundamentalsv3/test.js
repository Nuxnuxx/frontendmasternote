function invokeInFourSeconds(callback) {
    setTimeout(callback, 4000);
}
function invokeInFiveSeconds(callback) {
    setTimeout(callback, 5000);
}
var values = [];
invokeInFiveSeconds(function () { return values.push(4); });
function test(d) {
    return 5;
}
var saucisse = test(5);
console.log(saucisse);
var mysaucisse = {
    d: 20,
    a: 10
};
function testSaucisse(d) {
    return d.a + d.d;
}
console.log(testSaucisse(mysaucisse));

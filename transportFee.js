const assert = require ("assert");
function transportFee (shift) {
if (shift === "morning") {
  return "R20";
}

else if (shift === "afternoon") {
  return "R10";
}
  else {
    return "You pay nothing";
  }
}
console.log (transportFee ("morning"));
console.log (transportFee ("afternoon"));
console.log (transportFee (""));

assert.equal(transportFee ("morning"),"R20");
assert.equal(transportFee ("afternoon"),"R10");
assert.equal(transportFee (""),"You pay nothing");

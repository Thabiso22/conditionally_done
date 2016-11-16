var assert = require ("assert");
function weekOrWeekend(day) {
  if (!day.startsWith("S")) {
    return "week";
  }
  else (day.startsWith("S"))
  {
    return "weekend";
  }
};
console.log(weekOrWeekend("Monday"));
assert.equal(weekOrWeekend("Monday"),"week");

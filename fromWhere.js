const assert = require ("assert");
function fromWhere (carRegNum) {
switch (carRegNum.substring(0,2)) {
case "CY" :
return "Bellville";

break;

case  "CF" :
return "Paarl";

break;

case "CA" :
return "Cape Town";

default :
return  "From another location";

}
}

console.log(fromWhere("CA 222"));
assert.equal(fromWhere("CA 222"),"Cape Town");

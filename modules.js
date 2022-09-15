//modules and require
var counter = require('./count');
var staff = require('./staff')

console.log(staff.counter(['shaun','crystal','ryu']));
console.log(staff.adder(5,6));
console.log(staff.adder(staff.pi,5));

let x = "Harry bhai";
let y = 22;
let z = 3.55;
const p = true;
let q = undefined;
let r = null;

console.log(x, y, z, p, q, r)
console.log(typeof x, typeof y, typeof z, typeof p, typeof q, typeof r)


let o = {
    "name": "Harry",
    "job code": 5600,
    "is_handsome": true
}

console.log(o);
o.salary = "100crores";
console.log(o);
o.salary = "500crores";
console.log(o);


a = 5;
b = 15;
c = a > b ? (a - b) : (b - a);

console.log(c)


let age = 19;
if (age > 18) {
    console.log("you can drive...");
}
else if (age == 0) {
    console.log("Are you kidding....? ");
}
else if (age == 1) {
    console.log("Again, are you kidding......? ");
}
else {
    console.log("you cannot drive......")
}
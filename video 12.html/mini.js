console.log("This is String Tutorial")
let a = "Amlesh";
console.log(a[0]);
console.log(a[1]);
console.log(a[2]);
console.log(a[3]);
console.log(a[4]);
console.log(a[5]);

console.log(a.length)

let real_name = "Amlesh"
let friend1 = "Akash"
let friend2 = "Aditya"

console.log("His name is " + real_name + ", he have two friend first name is " + friend1 + " and second friend name is " + friend2)
console.log(`His name is ${real_name}, he have two friend first name is ${friend1} and second friend name is ${friend2}`)

let b = "Shivam"
console.log(b.toUpperCase())
console.log(b.toLowerCase())
console.log(b.length)
console.log(b.slice(1, 5))
console.log(b.slice(2))
console.log(b.replace("Sh", "77"))
console.log(b.concat("Amlesh", "Aishwariya", "Akash" , "Priya", "Aditya"))

console.log(b)


// using of for loop in JavaScript...

for (let i = 0; i < 100; i++) {
    console.log(0 + i);
}

let obj = {
    name: "Amlesh",
    role: "Programmer",
    company: "CodeWithHarry AI"
}

for (const key in obj) {
    console.log(`${key}: ${obj[key]}`)
}

// using of while loop in JavaScript...

let i = 0;
while (i<60) {
    console.log(i)
    i++;
}


//  using of do while loop in JavaScript....

let j = 10;
do {
    console.log(j)
    j++;
} while (j<6);
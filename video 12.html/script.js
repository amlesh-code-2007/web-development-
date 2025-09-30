// else if example in script..
let time = 20;
if (time < 10) {
    greeting = "Good Morning";
    console.log(greeting);
}
else if (time < 18) {
    greeting = "Good day";
    console.log(greeting);
}
else {
    greeting = "Good evening";
    console.log(greeting);
}


// Switch example in script..
const x = 5;
switch (x) {
    case 0: day = "Sunday";
        console.log(day)
        break;
    case 1: day = "Monday";
        console.log(day)
        break;
    case 2: day = "Tuesday";
        console.log(day)
        break;
    case 3: day = "Wednesday";
        console.log(day)
        break;
    case 4: day = "Thursday";
        console.log(day)
        break;
    case 5: day = "Friday";
        console.log(day)
        break;
    case 6: day = "Saturday";
        console.log(day)
        break;
}


// switch example in script...
const expr = "Papayas";
switch (expr) {
    case "Orange":
        console.log("Orange are Rs. 60/- per kg");
        break;
    case "mangoes":
    case "Papayas":
        console.log("Mangoes and papayas are Rs 100/- per kg");
        break;
    default:
        console.log('sorry');
}


// For example in script...
const numbers = [1, 2, 3, 4, 5];
for (let i = 0; i < 5; i++) {
    console.log(numbers[i]);
}


// While example in script...
let count = 1;
while (count <= 5) {
    console.log(count);
    count++;
}


// Do While in Script....
let result = "";
let i = 0;
do {
    i = i + 1;
    result = result + i;
} while (i < 5);
console.log(result);


// Break in Script...
let j = 0;
while (j < 6) {
    if (j === 3) {
        break;
    }
    j = j + 1;
}
console.log(j)


// Continue in Script...
let text = "";
for (let i = 0; i < 10; i++) {
    if (i === 3) {
        continue;
    }
    else if (i === 6) {
        continue;
    }
    text = text + i;
}
console.log(text);
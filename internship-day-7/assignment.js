// Student Details
let name = "Sakshi";
let marks = 82;
let attendance = 80;
let dept = "CS";

console.log("Name:", name);
console.log("Marks:", marks);
console.log("Attendance:", attendance + "%");

// Pass or Fail
if (marks >= 35) {
    console.log("Result: Pass");
} else {
    console.log("Result: Fail");
}

// Grade
if (marks >= 90) {
    console.log("Grade: A+");
} else if (marks >= 75) {
    console.log("Grade: A");
} else if (marks >= 60) {
    console.log("Grade: B");
} else if (marks >= 35) {
    console.log("Grade: C");
} else {
    console.log("Grade: Fail");
}

// Department
switch (dept) {
    case "CS":
        console.log("Department: Computer Science");
        break;
    case "IT":
        console.log("Department: Information Technology");
        break;
    case "CE":
        console.log("Department: Computer Engineering");
        break;
    case "ME":
        console.log("Department: Mechanical Engineering");
        break;
}

// Attendance Eligibility
let status = attendance >= 75
    ? "Eligible for Exam"
    : "Not Eligible for Exam";

console.log(status);

// For Loop
for (let i = 1; i <= 20; i++) {
    console.log(i);
}

// While Loop
let i = 2;
while (i <= 20) {
    console.log(i);
    i += 2;
}

// Do-While Loop
let j = 10;
do {
    console.log(j);
    j--;
} while (j >= 1);

// Break
for (let k = 1; k <= 20; k++) {
    if (k == 15) break;
    console.log(k);
}

// Continue
for (let k = 1; k <= 20; k++) {
    if (k % 3 == 0) continue;
    console.log(k);
}

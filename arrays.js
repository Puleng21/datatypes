let courses = ["HTML", "Css","Javascript", "React" ]
let total = courses.leghth;

let convertor = courses.toString();

let separator = courses.join('|');//using join method to separate elements with "|"//
console.log( `separate elements ${separator}`)
let caps = convertor.toUpperCase();
let smalls = convertor.toLowerCase();


//we creating a list//

console.log(`Elements inside array courses ${courses}`);
console.log(`Number of items in an array is ${total}`);
console.log(`This array becomes a list of strings ${convertor}`);
console.log(`This if strings can convertor to uppercases ${caps}`);
console.log(`testing is string can call small cases ${smalls}`);


let student= {
    firstName: "Sandile",
    secondName: "Buhle",
    stipend: 6000
}

console.log(delete student.stipend)
console.log(student);
console.log(student.firstName, student.secondName);




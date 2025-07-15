//Concatenate is method we use to combine or join two or more arrays into one.

let intro = ["HTML", "CSS", "JS"];
let basic = ["Problem Solving", "Coding", "GIT"]
let fundamentals = ["Algorithms", "Functions", "Logics"]

let cs= intro.concat(basic, fundamentals)
console.log(cs)

//flat method we use it to reduce nesting inside array. also called to flatten the array

let courses = [["HTML", "CSS", "JS"],
["Problem Solving", "Coding", "GIT"],
["Algorithms", "Functions", "Logics"]

]

console.log (courses)
let subjects = courses.flat(Infinity)
console.log(subjects)



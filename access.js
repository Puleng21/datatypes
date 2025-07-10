let globalVar = "This is a global variable"


function myVar(){
    let localVar = "This is a local variable"
    console.log(localVar + ",it is accessible inside a method or a function")

}
console.log(globalVar + "it is accessible everywhere");
myVar()
// Function
function fc() {
    console.log("hello world")
}
fc()
fc2("TanDinh", 22)

function fc2(name, age) {
    console.log("this is the function which behind the line call it")
    console.log(`my name is ${name}, i am ${age}`)
}

function yearOfBirt(age) {
    return 2024 - age;
}

console.log(`your year of birth is ${yearOfBirt(22)}`)

//function call function and return function

function fc3() {
    fc2("TanDinh", 22)
    console.log(`your year of birth is ${yearOfBirt(22)}`)
    return fc();
}

let a = fc3()


// arrow function
const arrowFc1 = () => {
    console.log("arrow function")
}
arrowFc1()

const arrowFc2 = () => {
    return "arrow function"
}

console.log(arrowFc2())

// difference btw function and arrow function
//function
function human() {
    this.name = 'Tan',
        this.age = 22,
        this.doWork = function () {

            console.log(this.age);

            function normalFC() {

                console.log(this.age); // can not call to global variable 
            }

            normalFC();

        }
}

let x = new human();
x.doWork();

function cat() {
    this.name = "mango"
    this.color = "orange"
    this.doWork = () => {
        console.log(`meow meow ${this.name}`)
        work = () => {
            console.log(`the cat name: ${this.name}`) //call to global variable
        }
        work();
    }
}
let y= new cat();
y.doWork();
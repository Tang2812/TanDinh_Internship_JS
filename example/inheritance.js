class Person{
    name
    age
    phoneNumber

    constructor(name,age){
        this.name= name
        this.age=age
    }
    saySomeThing= function(){
        console.log(`hello i am ${this.name}`)
    }
} 

//Programer has the element and method of Person
class Programer extends Person {
    email
    language
    constructor(name, age, email, language) {
        super(name, age)
        this.email = email
        this.language = language
    }

    codeSomeThing=function() {
        console.log(`i can write ${this.language}`)
    }
}

const b = new Programer('Tan', 22, "nhattan@gmail.com", ["Java", "C#"])
b.saySomeThing()
b.codeSomeThing()
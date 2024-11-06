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
const a= new Person("Tan",22)
a.saySomeThing()
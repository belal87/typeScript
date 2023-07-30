 // Access modifiers: public, protected, private, readonly
 class User{
    userName:string;
    age:number;

    constructor(userName:string, age:number){
        this.userName=userName
        this.age=age
    }

     display():void{
        console.log(`username:${this.userName}, age:${this.age}`)
    }
}

class Student extends User{
    private studentId:number;
    constructor(userName:string, age:number, studentId:number){
        super(userName, age)
        this.studentId=studentId;
    }
    display(){
        console.log(`username:${this.userName}, age:${this.age}, ID:${this.studentId}`)
    }
    getID():number{
        return this.studentId;
    }
}


let student1 = new Student('Belal', 101, 1012223)
console.log(student1.getID())

let user1 = new User('hossain', 202)
/* user1.userName = 'Hello'
console.log(user1.display()) */

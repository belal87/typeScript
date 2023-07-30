"use strict";
class User {
    constructor(fullName, age) {
        this.fullName = fullName;
        this.age = age;
        this.formatUser = () => {
            return `${this.fullName} ${this.age}`;
        };
    }
}
let u1 = new User("belal", 444);
console.log(u1.formatUser());

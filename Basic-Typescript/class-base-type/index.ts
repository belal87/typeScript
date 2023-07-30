class User {
  userName: string;
  age: number;

  constructor(userName: string, age: number) {
    this.userName = userName;
    this.age = age;
  }

  display(): void {
    console.log(`username:${this.userName}, age:${this.age}`);
  }
}

class Student extends User {
  studentId: number;
  constructor(userName: string, age: number, studentId: number) {
    super(userName, age);
    this.studentId = studentId;
  }
  display() {
    console.log(
      `username:${this.userName}, age:${this.age}, ID:${this.studentId}`
    );
  }
}

let student1 = new Student("Belal", 101, 1012223);
student1.display();
export {};

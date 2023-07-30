interface IUserFormattrer {
  formatUser: () => string;
}
class User implements IUserFormattrer {
  constructor(private fullName: string, private age: number) {}
  formatUser = () => {
    return `${this.fullName} ${this.age}`;
  };
}

let u1 = new User("belal", 444);
console.log(u1.formatUser());

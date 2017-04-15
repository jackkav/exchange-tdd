class Student {
  public fullName: string;
  constructor(public firstName: string, public middleInitial: string, public lastName: string) {
    this.fullName = firstName + " " + middleInitial + " " + lastName;
  }
}
interface IPerson {
  firstName: string;
  lastName: string;
}

export const greeter = (person: IPerson) => {
  return "Hello, " + person.firstName + " " + person.lastName;
};
const user = new Student("Jane", "M.", "User");
// const user = { firstName: "Bob", lastName: "Ross" };
// console.log(greeter(user));

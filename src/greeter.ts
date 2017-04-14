// TODO: debugging

interface IPerson {
  firstName: string;
  lastName: string;
}

export const greeter = (person: IPerson) => {
  return "Hello, " + person.firstName + " " + person.lastName;
};

const user = { firstName: "Bob", lastName: "Ross" };
// console.log(greeter(user));

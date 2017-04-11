interface Person {
  firstName: string;
  lastName: string;
}

export const greeter = (person: Person) => {
  return "Hello, " + person.firstName + " " + person.lastName;
}


var user = { firstName: 'Bob', lastName: 'Ross' };
console.log(greeter(user))
class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName
  }

  greeting() {
    return `hello ${this.firstName} ${this.lastName}`;
  }
}

class Customer extends Person {
  constructor(firstName, lastName, phone, membership) {
    super(firstName, lastName);//calls the parent class super method
    this.phone = phone;
    this.membership = membership;
  }

  static getNumberShipCost() {
    return 500;
  }
}

const john = new Customer('john', 'doe', '555555555', 'standard');

console.log(john);
console.log(john.greeting());

console.log(Customer.getNumberShipCost());
//person constructor

function Person(firstName, lastName) {

  this.firstName = firstName;
  this.lastName = lastName;
}


Person.prototype.greeting = function () {
  return `Hello welcome ${this.firstName} ${this.lastName}`;
}

const person1 = new Person('rio', 'raj');
console.log(person1.greeting());

const person2 = new Person('sruthi', 'rav');
console.log(person2.greeting());

//customer constructor

function Customer(firstName, lastName, phone, membership) {

  Person.call(this, firstName, lastName);
  this.phone = phone;
  this.membership = membership;
}

//inherit the person prototype method
Customer.prototype = Object.create(Person.prototype);

//make customer.prototype return customer
Customer.prototype.constructor = Customer;

//create customer
const customer1 = new Customer('tom', 'smith', '5555-5555', 'standard');

console.log(customer1);

//customer greeting
Customer.prototype.greeting = function () {
  return `Hello welcome ${this.firstName} ${this.lastName} welcome to our company`;
}

console.log(customer1.greeting());
const personProtoTypes = {
  greeting: function () {
    return `hello ${this.firstName} ${this.lastName}`;
  },
  getsMarried: function (newLastName) {
    this.lastName = newLastName;
  }
}

const mary = Object.create(personProtoTypes);
mary.firstName = 'mary';
mary.lastName = 'thomas';
mary.age = 30;

mary.getsMarried('smith');

console.log(mary.greeting());

const brad = Object.create(personProtoTypes, {
  firstName: { value: 'Brad' },
  lastName: { value: 'Traversy' },
  age: { value: 40 }
});

console.log(brad);

console.log(brad.greeting());
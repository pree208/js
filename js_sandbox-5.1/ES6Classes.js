class Person {

  constructor(firstName, lastName, dob) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthday = new Date(dob);
  }
  greeting() {
    return `hello ${this.firstName} ${this.lastName}`;
  }
  calculateAge() {
    const diff = Date.now() - this.birthday.getTime();
    const ageDate = new Date(diff);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  }

  getsMarried(newLastName) {
    this.lastName = newLastName;
  }

  static addNumbers(x, y) {
    return x + y;
  }
}


const mary = new Person('mary', 'jackson', '11-13-1980');
mary.getsMarried('smith');
//console.log(mary.greeting());

console.log(mary.greeting());

console.log(Person.addNumbers(2, 3));//incase of static function use class name

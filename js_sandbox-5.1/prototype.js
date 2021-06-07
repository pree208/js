//Object.prototype
//person.prototype


//person constructor
function Person(firstName, lastName, dob) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.birthday = new Date(dob);
  //this.age = age;
  // this.calculateAge = function () {
  //   const diff = Date.now() - this.birthday.getTime();
  //   const ageDate = new Date(diff);
  //   return Math.abs(ageDate.getUTCFullYear() - 1970);
  // }
}

//get name
Person.prototype.getFullName = function () {
  return `${this.firstName} ${this.lastName}`;
}


//gets married

Person.prototype.getMarried = function (newLastName) {
  this.lastName = newLastName;
}

Person.prototype.calculateAge = function () {//the function calculateAge is inside proto now in person class
  const diff = Date.now() - this.birthday.getTime();
  const ageDate = new Date(diff);
  return Math.abs(ageDate.getUTCFullYear() - 1970);
}
const john = new Person('john', 'Doe', '8-12-90');
const mary = new Person('mary', 'jenner', 'march 20 978');

console.log(john);

console.log(mary.getFullName());

mary.getMarried('smith');

console.log(mary.getFullName());

console.log(mary.hasOwnProperty('firstName'));//one of the builtin method of proto
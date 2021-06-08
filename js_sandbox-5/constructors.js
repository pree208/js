// const Brad = {
//   name: 'brad',
//   age: 30
// }

// console.log(Brad);
// console.log(Brad.age);

//PERSON CONSTRUCTOR
function Person(name, dob) {
  this.name = name;
  this.birthday = new Date(dob);
  //this.age = age;
  this.calculateAge = function () {
    const diff = Date.now() - this.birthday.getTime();
    const ageDate = new Date(diff);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  }
}
// const brad = new Person('Brad', 40);
// const john = new Person('John', 30);


const brad = new Person('Brad', '9-10-1981');
//console.log(john);
// console.log(john.age);
console.log(brad.calculateAge());
//destructuring assignment

let a, b;
[a, b] = [100, 200];

console.log(b);

//rest pattern
[a, b, ...rest] = [100, 200, 300, 400, 500];//the rest of the values will be assigned to rest variable

({ a, b } = { a: 100, b: 100, c: 300, d: 400, e: 500 });
({ a, b, ...rest } = { a: 100, b: 100, c: 300, d: 400, e: 500 });//rest pattern

console.log(rest);

//array destructuring

// const people = ['John', 'Beth', 'Mike'];
// const [person1, person2, person3] = people;

// console.log(person1, person2, person3);



//parse array returned from function
// function getPeople() {
//   return ['John', 'Beth', 'Mike'];
// }
// let person1, person2, person3;
// [person1, person2, person3] = getPeople();

// console.log(person1, person2, person3);

//object destructuring
const person = {
  name: 'Preethi',
  age: 20,
  city: 'perambalur',
  gender: 'female',
  sayHello: function () {
    console.log('Hello');
  }
}

// //old es5
// const name = person.name,
//   age = person.age,
//   city = person.city,
//   gender = person.gender;

//new es6 destructuring
const { name, age, city, sayHello } = person;
console.log(name, age, city);
sayHello();
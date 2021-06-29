//normal function

// const sayHello = function () {
//   console.log('hello');
// }

//arrow function
// const sayHello = () => {
//   console.log('hello');
// }

//one line function does not need braces
//const sayHello = () => console.log('hello');

//normal return
// const sayHello = function () {
//   return 'hello';
// }

//one line returns
//const sayHello = () => 'hello';

//return object
//const sayHello = () => ({ msg: 'hello' });//write inside parenthesis //since it considers curly braces as parent body


//single parameter does not need parenthesis
//const sayHello = (name) => console.log(`hello ${name}`);


//more than one parameter  need parenthesis
//const sayHello = (firstName, lastName) => console.log(`hello ${firstName} ${lastName}`);

//sayHello('Pree', 'thi');

const users = ['Preethi', 'Priya', 'Saran'];

// const nameLengths = users.map(function (name) {
//   return name.length;
// })

//shorter
// const nameLengths = users.map((name) => {
//   return name.length;
// })

//shortest
const nameLengths = users.map(name => name.length);
console.log(nameLengths);
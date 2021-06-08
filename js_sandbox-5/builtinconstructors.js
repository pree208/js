//string

const name1 = 'Jeff';
const name2 = new String('Jeff');//gives string as an object//main advantage is we can add something to the object

// console.log(name1);

// name2.foo = 'bar';
// console.log(name2);

// console.log(typeof name1);//string
// console.log(typeof name2);//object
// if (name1 === 'Jeff') {//normal string
//   console.log('YES');
// }
// else {
//   console.log('NO');
// }

if (name2 == 'Jeff') {//gives string as an object//since === also takes the type no will be displayed 
  console.log('YES');
}
else {
  console.log('NO');
}

//NUMBER
const number1 = 5;
const number2 = new Number(5);
console.log(number1);//number
console.log(number2);//object

//BOOLEAN
const bool1 = true;
const bool2 = new Boolean(true);//object

console.log(bool2);

//functions

const getSum = function (x, y) {
  return x + y;
}
console.log(getSum(3, 5));

const getSum1 = new Function('x', 'y', 'return x+y');//type object
console.log(getSum1(1, 1));

//object

const John1 = { name: "john" };
const John2 = new Object({ name: "john" });


console.log(John1);
console.log(John2);

//arrays
const arr1 = [1, 2, 3, 4, 5];
const arr2 = new Array(1, 2, 3, 4, 5);//object

console.log(arr1);
console.log(arr2);

//regular expressions

const re1 = /\w+/;//writing inside two slash are regular expression

const re2 = new RegExp('\\w+');//to get what we want add one back slash before in object

console.log(re1);
console.log(re2);



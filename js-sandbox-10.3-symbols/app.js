//create a symbol

// const sym1 = Symbol();
// const sym2 = Symbol('sym2');//symbol with identifier

// console.log(sym1);
// console.log(sym2);

// console.log(typeof sym2);

// console.log(Symbol() === Symbol());//false.. no symbol can be equal
// console.log(`Hello ${String(sym1)}`);

//unique object keys
const KEY1 = Symbol();
const KEY2 = Symbol('sym2');

const myObj = {};

myObj[KEY1] = 'Prop1';
myObj[KEY2] = 'Prop2';
myObj.key3 = 'prop3';
myObj.key4 = 'prop4';

console.log(myObj[KEY1]);
console.log(myObj[KEY2]);


//symbols are not enumerable in for...in 

for (let i in myObj) {
  console.log(`${i}:${myObj[i]}`);
}

//symbols are ignored by json.stringify
console.log(JSON.stringify({ key: 'prop' }));
console.log(JSON.stringify({ [Symbol('sym1')]: 'prop' }));

//SETS-store unique value of any type

const set1 = new Set();

//add values to set
set1.add(100);
set1.add('A string');
set1.add({ name: 'John' });
set1.add(true);
set1.add(100);//it will not be stored since the sets store unique values

// console.log(set1);

// // const set2 = new Set([1, true, 'string']);
// // console.log(set2);

// //get count
// console.log(set1.size);

// //check for values
// console.log(set1.has(100));//true
// console.log(set1.has(50 + 50));//true
// console.log(set1.has({ name: 'John' }));//false//since object is reference data type 

// //delete from set
// set1.delete(100);
// console.log(set1);

//iterating through sets
//for of
for (let item of set1) {
  console.log(item);
}

//foreach loop
set1.forEach((value) => {
  console.log(value);
});

//convert set to array
const setArr = Array.from(set1);
console.log(setArr);
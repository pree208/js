let re;
re = /Hello/;
re = /Hello/i;//i=case insensitive flag
//re = /Hello/g;//global search flag

// console.log(re);//    /Hello/
// console.log(re.source);//   Hello

//exec()//returns the result in an array or null


// const result = re.exec('Pree Hello world');
// console.log(result);


// console.log(result[0]);
// console.log(result.index);
// console.log(result.input);

//test()  //returns true are false

// const result = re.test('hello');
// console.log(result);

//match() returns result in n array or null
// const str = 'hello there';
// const result = str.match(re);
// console.log(result); 

//search() returns index of the first match if not found returns -1

// const str = 'Pree Hello there';
// const result = str.search(re);
// console.log(result);

//replace new string with some or all matches of a pattern
const str = 'Hello there';
const newStr = str.replace(re, 'hiii');
console.log(newStr);
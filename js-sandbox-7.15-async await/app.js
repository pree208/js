// async function myFunc() {// async makes the function return a promise
//   const promise = new Promise((resolve, reject) => {
//     setTimeout(() => resolve('hello'), 1000);
//   });

//   const error = false;
//   if (!error) {
//     const res = await promise;//wait until the promise is resolved
//     return res;
//   } else {
//     await Promise.reject(new Error('something went wrong'));
//   }

// }

// myFunc()
//   .then(res => console.log(res));


async function getUsers() {
  //await response of the fetch call
  const response = await fetch('https://jsonplaceholder.typicode.com/users');

  //only proceed once promise is resolved
  const data = await response.json();

  //only proceed once second promise is resolved
  return data;

}

getUsers().then(users => console.log(users));
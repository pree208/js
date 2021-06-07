//MULTIPLE ELEMENT SELECTOR

//document.getElementsByClassName

// const items = document.getElementsByClassName('collection-item');//gives all the class with collection item in dom
// console.log(items);
// console.log(items[0]);//based on index

// items[0].style.color = 'red';
// items[3].textContent = 'greeny';

// const listItems = document.querySelector('ul').getElementsByClassName('collection-item');//gives all the classname collection-item in the ul
// console.log(listItems);


//document.getElementsByTagName

// let lis = document.getElementsByTagName('li');//gives all the tag li
// console.log(lis);
// console.log(lis[0]);//based on index

// lis[0].style.color = 'red';
// lis[3].textContent = 'greeny';

// lis = Array.from(lis);
// lis.reverse();
// lis.forEach(function (li, index) {
//   console.log(li.className);
//   li.textContent = `${index}:hello`;
// });

// console.log(lis);

//document.querySelectorAll

// const items = document.querySelectorAll('ul.collection li.collection-item');

// items.forEach(function (item, index) {
//   item.textContent = `${index}:hello`;
// })
// console.log(items);

const liOdd = document.querySelectorAll('li:nth-child(odd)');
const liEven = document.querySelectorAll('li:nth-child(Even)');

liOdd.forEach(function (item) {
  item.style.background = 'yellow';
});

for (i = 0; i < liEven.length; i++) {
  liEven[i].style.background = 'red';
}
//console.log(items);
//REPLACE ELEMENT

//CREATE ELEMENT
const newHeading = document.createElement('h2');

//add id
newHeading.id = 'task-title';

//NEW TEXT NODE
newHeading.appendChild(document.createTextNode('Task List'));

//GET OLD HEADING
const oldHeading = document.getElementById('task-title');
//PARENT NODE
const cardAction = document.querySelector('.card-action');

//REPLACE TEXT
cardAction.replaceChild(newHeading, oldHeading);

console.log(newHeading);

//REMOVE ELEMENT

const lis = document.querySelectorAll('li');
const list = document.querySelector('ul');

//REMOVE LIST ITEM

lis[0].remove();

//REMOVE CHILD ELEMENT
list.removeChild(lis[3]);

//CLASSES AND ATTR
const firstLi = document.querySelector('li:first-child');
const link = firstLi.children[0];

let val;

//CLASSES
val = link.className;
val = link.classList;
//val = link.classList[0];
link.classList.add('test');
link.classList.remove('test');


//ATTRIBUTES
val = link.getAttribute('href');
val = link.setAttribute('href', 'http://google.com');
link.setAttribute('title', 'task-list');
val = link.hasAttribute('title');
val = link.removeAttribute('title');

console.log(val);
console.log(link);
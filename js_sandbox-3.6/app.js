//CREATE ELEMENT

const li = document.createElement('li');

//ADD CLASS

li.className = 'collection-id';

//ADD ID

li.id = 'new-item';

//ADD ATTRIBUTE
li.setAttribute('title', 'new-item');//add attribute


//CREATE A TEXT NODE AND APPEND

li.appendChild(document.createTextNode('Hello world'));

//CREATE A NEW LINK ELEMENT

const link = document.createElement('a');
link.className = 'delete-item secondary-content';
link.innerHTML = ' <i class="fa fa-remove"></i>';

//APPEND LINK TO LI
li.appendChild(link);
//APPEND li AS A CHILD TO ul

document.querySelector('ul.collection').appendChild(li);

console.log(li);
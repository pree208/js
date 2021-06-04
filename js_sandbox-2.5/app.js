let val;

const list = document.querySelector('ul.collection');
const listItem = document.querySelector('li.collection-item:first-child');

val = listItem;
val = list;

//GET CHILD NODES
val = list.childNodes;// gives node list//space after li is text node
val = list.childNodes[0];
val = list.childNodes[0].nodeName;
val = list.childNodes[0].nodeType;


//NODE TYPE
//ELEMENT-1
//ATTRIBUTE(DEPRECATED)-2
//TEXT NODE-3
//COMMENT-8
//DOCUMENT ITSELF-9
//DOCTYPE-10

//GET CHILDREN ELEMENTS NODES
val = list.children;//gives the html collection
val = list.children[1];
list.children[1].textContent = 'Hello';

//CHILDREN OF CHILDREN
list.children[3].children[0].id = 'test-link';
val = list.children[3].children[0];

//FIRST CHILD
val = list.firstChild;
val = list.firstElementChild;

//LAST CHILD
val = list.lastChild;
val = list.lastElementChild;

val = list.childElementCount;//gives the number of child elements

//GET PARENT NODE
val = listItem.parentNode;//gives the parent node of the child
val = listItem.parentElement;
val = listItem.parentElement.parentElement;//it gives parent of parent

//GET NEXT SIBLING
val = listItem.nextSibling;
val = listItem.nextElementSibling;
val = listItem.nextElementSibling.nextElementSibling.previousElementSibling;

//GET PREVIOUS SIBLING
// val = listItem.previousSibling;
// val = listItem.previousElementSibling;
console.log(val);
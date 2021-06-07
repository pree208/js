//single element selector

//document.getElementById();//gets element by its id

// console.log(document.getElementById('task-title'));

//get things from element

// console.log(document.getElementById('task-title').id);
// console.log(document.getElementById('task-title').className);

// const taskTitle = document.getElementById('task-title');

//change styling

// document.getElementById('task-title').style.background = 'black';
// document.getElementById('task-title').style.color = 'white';
// document.getElementById('task-title').style.padding = '5px';
//document.getElementById('task-title').style.display = 'none';

//change content
// taskTitle.textContent = 'Tasks title';//change the content
// taskTitle.innerText = 'Tasks';//change the content
// taskTitle.innerHTML = '<span style="color:red">Tasks</span>';//change the content

//document.querySelector();

console.log(document.querySelector('#task-title'));
console.log(document.querySelector('.card-title'));
console.log(document.querySelector('h5'));//if more h5 are there in dom then frst h5 will be selected


document.querySelector('li').style.color = 'red';//changes only color of first li since it is a single element selector.
document.querySelector('ul li').style.color = 'blue';

document.querySelector('li:last-child').style.color = 'red';
document.querySelector('li:nth-child(3)').style.color = 'yellow';
document.querySelector('li:nth-child(4)').textContent = 'hello';
document.querySelector('li:nth-child(odd)').style.background = 'green';//only first odd will change
document.querySelector('li:nth-child(even)').style.background = 'pink';//only first even will change
//set local storage item//local storage value remains even after the session ends
// localStorage.setItem('name', 'John');//inspect-application-storage-local-storage
// localStorage.setItem('age', '30');
//set session storage item//session storage saves the value only at the end of the session
//sessionStorage.setItem('name', 'beth');//inspect-application-storage-session--storage

//remove from storage
// localStorage.removeItem('name');

//get from storage
// const name = localStorage.getItem('name');
// const age = localStorage.getItem('age');

//clear local storage
// localStorage.clear();
// console.log('name', 'age');

document.querySelector('form').addEventListener('submit', function (e) {
  //console.log('123');
  const task = document.getElementById('task').value;
  let tasks;
  if (localStorage.getItem('tasks===null')) {
    tasks = [];
  }
  else {
    tasks = JSON.parse(localStorage.getItem('tasks'));//json .parse converts the string to array
  }
  tasks.push(task);
  localStorage.setItem('tasks', JSON.stringify(tasks));//if we add other new tasks the task in local storage gets replaced
  alert("task saved");
  //console.log(task);
  e.preventDefault();
})

const tasks = JSON.parse(localStorage.getItem(tasks));

tasks.forEach(function (task) {
  console.log(task);
});
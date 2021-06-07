//EVENT BUBBLING//inside col class ,card class,card-content class ,card title class is present,so when we click card title class it is considered as clicked col,card and card-content class.this is called event bubbling.

// document.querySelector('.card-title').addEventListener('click', function () {
//   console.log('card title');
// })

// document.querySelector('.card-content').addEventListener('click', function () {
//   console.log('card content');
// })

// document.querySelector('.card').addEventListener('click', function () {
//   console.log('card ');
// })

// document.querySelector('.col').addEventListener('click', function () {
//   console.log('col');
// })

// EVENT DELGATION

//const delItem = document.querySelector('.delete-item');//this selects only the first element with class delete-item.IN this case event delgation is used.
// delItem.addEventListener('click', deleteItem);

document.body.addEventListener('click', deleteItem);





function deleteItem(e) {
  // console.log('delete item');
  // console.log(e.target);
  // if (e.target.className === 'fa fa-remove') {
  //   console.log('delete-item');
  // }
  // if (e.target.parentElement.className === 'delete-item secondary-content') {//in classname we should write all the class name of element
  //   console.log('delete-item');
  // }

  if (e.target.parentElement.classList.contains('delete-item')) {//since classList is an array enough to write only one class
    console.log('delete-item');
    e.target.parentElement.parentElement.remove();
  }
}


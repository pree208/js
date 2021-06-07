const form = document.querySelector('form');
const taskInput = document.getElementById('task');

const heading = document.querySelector('h5');

//const select = document.querySelector('select');

//CLEAR INPUT
// taskInput.value = '';


//form.addEventListener('submit', runEvent);

//key down
//form.addEventListener('keydown', runEvent);//any key we type is considered as keydown

//key up
//form.addEventListener('keyup', runEvent);

//key press
//form.addEventListener('keypress', runEvent);

//focus
//form.addEventListener('focus', runEvent);
//blur
//form.addEventListener('blur', runEvent);

//cut
// form.addEventListener('cut', runEvent);//helps to cut something

//paste
// form.addEventListener('paste', runEvent);//helps to paste something

//Input
//form.addEventListener('input', runEvent);//helps to cut,paste or  anything we do comes under input

//CHANGE
Select.addEventListener('change', runEvent);//helps to change in dropdown
function runEvent(e) {
  console.log(`Event type:${e.type}`);

  console.log(e.target.value);//target is the place where event occurs

  heading.innerText = e.target.value;//the heading text changes into target value

  //GET INPUT VALUE
  // console.log(taskInput.value);
  // e.preventDefault();
}

//console.log(form);
// document.querySelector('.clear-tasks').addEventListener('click', function (e) {
//   //alert("hello");
//   console.log("hello world");
//   //e.preventDefault();//prevents the link in href to loading
// });

document.querySelector('.clear-tasks').addEventListener('click', onClick);

function onClick(e) {
  //console.log("clicked");
  let val;
  val = e;

  //EVENT TARGET ELEMENT
  val = e.target;
  val = e.target.id;
  val = e.target.className;
  val = e.target.classList;

  //EVENT TYPE
  val = e.type;// click event  will come


  //TIME STAMP
  val = e.timeStamp;

  //coords events relative to window
  val = e.clientY;
  val = e.clientX;

  //coords events relative to element
  val = e.offsetY;
  val = e.offsetX;

  console.log(val);
}
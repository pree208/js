let val;
val = document;//from top to bottom entire page is considered s document
val = document.all;//gives all the tags in an array
val = document.all[2];//based on the index it will give the tag
val = document.all.length;//gives number of elements in dom
val = document.head;//gives the head tag
val = document.body;//gives the body tag
val = document.doctype;//gives the doctype
val = document.domain;//gives the ip address
val = document.URL;//gives the url
val = document.characterSet;//gives the characterset like utf-8
val = document.contentType;//gives the text/html


val = document.forms;//gives the forms in document
val = document.forms[0];//gives the first form of document based on index 0
val = document.forms[0].id;//gives the id of form
val = document.forms[0].method;//gives whether the form  method is get or post
val = document.forms[0].action;//gives the action file tht form has


val = document.links;//gives all the links in dom
val = document.links[0];//gives the links based on index
val = document.links[0].id;//if there is id for tht link that will be displayed
val = document.links[0].className;//gives all the classes that link have
val = document.links[0].classList[0];//gives all the classes of link based on position


val = document.images;//gives all the images in dom


val = document.scripts;//gives the scripts in dom;
val = document.scripts[2].getAttribute('src');//get by attribute name

let scripts = document.scripts;
let scriptArr = Array.from(scripts);//convert script to array  bcoz in array only for each will work
scriptArr.forEach(function (script) {
  console.log(script.getAttribute('src'));
});
console.log(val);

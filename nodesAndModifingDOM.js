var itemlist = document.querySelector('#items');
//  itemlist.parentNode.style.background =  "lightgray";
// itemlist.parentNode.parentNode.style.background =  "red";
// console.log(itemlist.parentNode);
// console.log(itemlist.parentNode.parentNode);
// console.log(itemlist.parentNode.parentNode.parentElement);

// //parentElement = parentNode
// console.log(itemlist.parentElement);
// console.log(itemlist.parentElement.parentElement);
// console.log(itemlist.parentElement.parentElement.parentElement);

//childNodes --> they are giving text node which is basically a line break

// console.log(itemlist.childNodes);  // not good

//cildElements

// console.log(itemlist.children);
// console.log(itemlist.children[1]);
// itemlist.children[1].style.color =  "red";

//firstchild
// console.log(itemlist.firstChild);  // not good

//firstElementChild

// console.log(itemlist.firstElementChild);
// itemlist.firstElementChild.textContent = "hello bhai";

//lastchild
// console.log(itemlist.lastChild); --> not good

//lastElementChild

// console.log(itemlist.lastElementChild);

// itemlist.lastChild.textContent = "INDIA"   // not good
// itemlist.lastElementChild.textContent = "INDIA"

//nextsibling
// console.log(itemlist.nextSibling); --> not good

// console.log(itemlist.nextElementSibling);

//previoussiblings
// console.log(itemlist.previousSibling); --> not good

// console.log(itemlist.previousElementSibling);

// itemlist.previousElementSibling.style.color = "red";

// createElement --> craete a div

// let newdiv = document.createElement('div');
// newdiv.className = 'hello';
// newdiv.id = 'hello 1';
// newdiv.setAttribute('title', 'hello world');
// let newDivText = document.createTextNode('HEllo');
// newdiv.appendChild(newDivText);

// let base = document.getElementById('main');
// base.firstElementChild('base');



// khudse
// craete new h element.
let newh1 = document.createElement('h1');
newh1.className = 'newclassname';
newh1.id = "newid";
newh1.appendChild(document.createTextNode('HEllo'));

let friendelement = document.getElementById('header-title');

// Get the parent node of the element with id "header-title"
let parentElement = friendelement.parentNode;


// Insert the new <h1> element before the element with id "header-title"
 parentElement.insertBefore(newh1, friendelement);

 let newli = document.createElement('li');
 newli.className = 'list-group-item';
 newli.appendChild(document.createTextNode("hello"));


 let friend = document.getElementById('1');
 let parent = friend.parentNode;
 parent.insertBefore(newli, friend);


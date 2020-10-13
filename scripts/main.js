// 헤더 체인지
let myHeading = document.querySelector('h1');
if(!localStorage.getItem('name')) {
  setUserName();
}else {
  myHeading.textContent = 'Mozilla is cool, ' + localStorage.getItem('name') ;

}

let name = 'pung';
let age = 26;
let isMale = true;
let skill = ['C', 'C++', 'C#', 'JAVA', 'Python'];

let nameHeader = document.getElementById('name')
let ageElement = document.getElementById('age');
let genderElement = document.getElementById('gender');
let skillElement = document.getElementById('skill');

nameHeader.textContent = name;
ageElement.textContent = age;
genderElement.textContent = isMale ? 'Male' : 'Female';
skillElement.textContent = skill.join(", ");

let opTest = document.getElementById('op_test');
opTest.textContent = 1 + 1 + 'dkdk' + 2 + 3;

dk = 2;
console.log(dk);
function sum(a, b) {
  var dk;
  return a + b
}

nameHeader.onclick = function() {alert('good')}

let image = document.querySelector('img');

image.onclick = function() {
  let src = image.getAttribute('src');
  if(src === 'images/firefox-icon.png'){
    image.setAttribute('src', 'images/google.png');
  } else {
    image.setAttribute('src', 'images/firefox-icon.png');
  }
}

let btn = document.querySelector('button');

function setUserName() {
  let name = prompt('Please enter your name.');
  if(!name || name === null) {
    setUserName();
  } else {
    localStorage.setItem('name', name);
    myHeading.textContent = 'Mozilla is cool, ' + name;
  }
}
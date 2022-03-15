/*
in javascript every html tag is an object t
that has properties and behaviour
*/
alert('i am called form external file')
var ele = document.getElementById('h1')
console.log(ele)
ele.style.color='red';
console.log(ele.innerHTML)
console.log(ele.getAttribute('id'))
ele.innerHTML='dynamically changed the content'

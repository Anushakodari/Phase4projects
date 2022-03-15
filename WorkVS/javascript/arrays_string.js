// js arrays allows to store values of different types
let nos = [1,2,3,4,5,'a','b',true,234.4]
var ele = document.getElementById('content');
let data=''
// for(i=0;i<nos.length;i++)
// {
//     // tick `
//     data+=`<div>${nos[i]}</div>`
// }

// for in where you get index
// for(var n in nos)
//     data+=`<div>${n} : ${nos[n]}</div>`

// for of loop that directly gives the value
for(var n of nos)
    data+=`<div>${n}</div>`

ele.innerHTML = data;
var fruits = ["apples","oranges","banana","apricot","grapes"];
ele.innerHTML += `<p> fruits[0] => ${fruits[0]} </p>`
ele.innerHTML += `<p> Join : ${fruits.join(' : ')} </p>`
ele.innerHTML += `<p> Push : ${fruits.push('strawberies')} </p>`
ele.innerHTML += `<p> Fruits : ${fruits} </p>`
ele.innerHTML += `<p> Pop : ${fruits.pop()} </p>`
ele.innerHTML += `<p> Shift : ${fruits.shift()} </p>`
ele.innerHTML += `<p> Fruits : ${fruits} </p>`
ele.innerHTML += `<p> Splice(1) : ${fruits.splice(1)} </p>`
ele.innerHTML += `<p> Fruits : ${fruits} </p>`
fruits.push('cherries');
fruits.push('watermelon');
fruits.push('guava');
ele.innerHTML += `<p> Fruits : ${fruits} </p>`
ele.innerHTML += `<p> Splice(1,1) : ${fruits.splice(1,1)} </p>`
ele.innerHTML += `<p> Fruits : ${fruits} </p>`
ele.innerHTML += `<p> Unshift : ${fruits.unshift('melon','mangoes')} </p>`
ele.innerHTML += `<p> Fruits : ${fruits} </p>`

let desc = 'This is a dummy text'
ele.innerHTML += `<h1>Strings</h1><p> Length : ${desc.length} </p>`
ele.innerHTML += `<p> Lowercase : ${desc.toUpperCase()} </p>`
ele.innerHTML += `<p> Desc : ${desc} </p>`
ele.innerHTML += `<p> Char AT : ${desc.charAt(3)} </p>`
ele.innerHTML += `<p> Substring(5) : ${desc.substring(5)} </p>`
ele.innerHTML += `<p> Substring(10, 15) : ${desc.substring(10,15)} </p>`
let country = '     India     '
ele.innerHTML += `<p> Country:${country}:</p>`
ele.innerHTML += `<p> Trim :${country.trim()}: </p>`

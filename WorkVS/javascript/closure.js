// javascript functions can return function and can pass functions as paramaters 
// and can store function in a varibale
// function expression
// let counter = function()
// {
//     console.log('counter called')
// }
// console.log(counter)
// counter()
// function show()
// {
//     console.log('show called')
// }
// console.log(show);
// show();
// let x = 10;
// console.log(x);

// function m1()
// {
//     console.log('m1 called')
//     function m2(){
//         console.log('m2 called')
//     }
//     return m2;
// }
// // here m1 is a function whose reference is stored in f1
// let f1 = m1
// console.log(f1)
// // m1 is called and it returns reference to m2 which is stored in f1
// f1 = m1();
// // f1 here is pointing to m2 function
// console.log(f1)
// // this executes m2
// f1()

// function square(no)
// {
//     return no*no;
// }
// function calculates(nos, func)// func = square and since square is a function func is also a fucntion
// {
//     for (n of nos)
//         console.log(func(n))
// }
// calculates([1,2,3,4,5], square);

// CLOSURES
//var i=1;
let ele = document.getElementById('content')
function count()
{
    // s declared in side the function with var or let keyword
    // hence its scope is only within count function
    var i=1;
    // since the function returned is an inner function
    // of count, it has access to i and it creates a boundary around i
    // creating inner functions that have acess to varibles in its enclosing function i.e count is called as closure
    // as it provides encapsulation and it protects the variables of enclosing function
    return function(){
       // return `button clicked ${i++} times`;
       ele.innerHTML=`Button clicked ${i++} times`
       //return i++;
    }
}
let display = count();
// console.log(display)
// console.log(display())
// i=5;
// console.log(display())
// console.log(display())
// console.log(display())

function greet()
{
    console.log('Welcome')
}

function add(a,b)
{
    return a+b;
}
/**
 * function what are the 3 important parts of a function apart from funciton name
 * body  parameters and return type
 * functional programming
 */
// arrow function
// (<list of parameters if any>) => {body; return}

let display = () => console.log('display called');

let addition = (a,b)=> a+b;

console.log(addition(2,4));

function square(no)
{
    return no*no;
}
function calculates(nos, func)// func = square and since square is a function func is also a fucntion
{
    for (n of nos)
        console.log(func(n))
}
calculates([1,2,3,4,5], square);
// takes a parameter and returns cube of that parameter?
calculates([2,3,4,5,6], (v)=>v*v*v);
calculates([2,3,4,5,6], function(v){
    return  v*v*v
});

let prices =[23.45, 34.56, 100.34, 90.34, 120.56];
prices.forEach((price, index)=>
    console.log(index+" : "+price)    
);

let pfound = prices.find(price => price === 34.56)
console.log(pfound)
pfound = prices.find(price => price === 134.56)
console.log(pfound)

let pgthan90 = prices.filter(price => price > 90)
console.log(pgthan90)

let dprice = prices.map(price=> price - price * .02)
console.log(dprice)

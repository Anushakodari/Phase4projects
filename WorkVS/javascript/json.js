// key-value => Map
// json
let employee ={'name':'shalini','phone':'23497923', 'salary':876897};

employee.phone = '99999999'
employee.city='Mumbai'
var ele = document.getElementById('content')
ele.innerHTML = `<p> Name : ${employee.name} </p>
<p> Phone : ${employee['phone']} </p>
<p> Salary : ${employee.salary} </p>
<p> City : ${employee.city} </p>
`;

for (var e in employee)
console.log(e)

// entries returns 2-d array with key and value as 1st array
console.log(Object.entries(employee))
console.log(Object.keys(employee))
console.log(Object.values(employee))
let emps = [

    {'name':'shalini','phone':'23497923', 'salary':876897},
    {'name':'rohine','phone':'1111111111', 'salary':976897},
    {'name':'sudeep','phone':'222222222', 'salary':8176897},
    {'name':'anusha','phone':'3333333333', 'salary':2876897}
]

var i=1
for(let emp of emps)
{
    ele.innerHTML += `<h1>Employee ${i++}</h1>`;
    for(var e in emp){
        ele.innerHTML +=`<p> ${e} : ${emp[e]} </p>
            `;
    }
}

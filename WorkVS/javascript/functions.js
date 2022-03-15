var ele = document.getElementById('content');
function display()
{
    ele.innerHTML='Button was clicked'
    ele.innerHTML+=`<p>Addition : ${add(2,7)}</p>`
    ele.innerHTML+=`<p>Show : ${show('hello')}</p>`
    ele.innerHTML+=`<p>Show : ${show('Good Day','Anusha')}</p>`
    ele.innerHTML+=`<p>Show : ${show()}</p>`
}
function add(n1, n2)
{
    return n1+n2;
}
// allows parameters to be passed even if argumemts are not defined
function show(msg='Welcome Guest')
{
   // alert('show called '+msg );
   st=''
   if(arguments.length===0)
    st=''+msg

    for(let arg of arguments)
        st+= `<p>Arguments : ${arg}</p>`;
   return st;
}

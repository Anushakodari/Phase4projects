// alert that just displays a message
//alert('Hey i am an alert');
let uname = prompt('enter your name', 'Guest')
var uc = confirm('Are you sure you want to exit');
if(uc)
    document.write("<p> We will miss you "+uname+" as you choose : "+uc+ " </h1>")
else
    document.write("<p> Right Choice "+ uname+" ahaaaa !! : "+uc+ " </h1>")

/*
1) start zookeeper
2) start kafka broker => topic / message is registerd with kafka broker
3) start spring boot project
4) access the controller from the browser and produce messages
http://localhost:8080/kafka/producer?message=Hello
*/

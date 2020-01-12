console.log(1);
console.log(2);
setTimeout(()=>console.log('this will be executed at the end due to async nature'), 2000);
console.log(3);
console.log(4);
console.log(5);

// http request learning

//creating request object
const request= new XMLHttpRequest();

//every time there is state change, listener will triggger an event.
request.addEventListener('readystatechange', ()=>{
    console.log('request', request.readyState);
    //ready state is 4 when request is complete, look up diffrent stages of ready state
   if(request.readyState ===4){
       console.log('response obj---->', request.responseText);
   }
})
//type of request
request.open('Get','https://jsonplaceholder.typicode.com/todos/');
request.send();
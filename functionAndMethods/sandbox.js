// function declaration
function greet(){
    console.log('hello ');
}


//function  expression: when we store function inside a variable
const speak = function(){
    console.log('good day');
};
//this will log 'good day'
speak();
greet();

//-------------------------------------------------------------------------------------------

//argument and paramenter
const talk = function(name){
    console.log('name of the person talking is ', name);
}
talk('subash');


//-------------------------------------------------------------------
//returning values
const areaOfCircle = function(radius){
    let area = 3.14 * radius**2;
    return area;
}
const area = areaOfCircle(5);
console.log('area', area);

//-------------------------------------------------------------------
//arrow functions
const areaOfRectangle = (length,breadth)=>{
    return 2*(length + breadth);
}
const areaRect = areaOfRectangle(2,3);
console.log('areaRect', areaRect);

//-----------------------------------------------------------------
//understanding call back function
const x = (callback) =>{
    console.log('This should log first and then the call back');
    callback();
};
const y = () => console.log('This shoudl execute second');

x(y);
//----------------------------------------------

// let people =['subahs', 'minu', 'aurora'];
// people.forEach( (person, index)=>{
// console.log('people', person, 'with index of',index);
// }

// );

//-------------------------------------------
//get reference to ul
const ul =document.querySelector('.people');
const people =['subahs', 'minu', 'aurora'];
let html =``;
people.forEach((person) =>{
    //create html template
    html +=`<li style = "color:purple">${person}</li>`

})
console.log('html', html)
ul.innerHTML = html;
//storing data in local storage
//every thing stored in local storage is a string and entered other type it will convert that in to string
localStorage.setItem('name','Subash');
localStorage.setItem('age',10);
localStorage.setItem('phone','111111111');

//get data from local storage
let name = localStorage.getItem('name');
console.log('name', name)

//updating data
localStorage.setItem('name', 'Mario');

//deleting from local storage
localStorage.removeItem('name');
name = localStorage.getItem('name');
console.log('name', name);

//to clear local storage
localStorage.clear();
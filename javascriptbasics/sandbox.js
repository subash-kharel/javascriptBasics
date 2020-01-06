//    alert("hello");
   let age= 25;
   let year = 2019;

   console.log(age, year);
   age =31;
   console.log("Let can be overidden",age);

//    const points =1000;
//    console.log(points);

    //this doesnot work because const cannot be changed
    points =1001;
    console.log("trying to override consts", points)

    let email = 'subash.kharel@gmail.com'
 
 //this will slice the string from first position to the 6th
    console.log('This should log subash ----->',  email.slice(0,6));
// In this 7 is where you want to substring from and 6 is the number of charater you want to substring after
    console.log('This should print kharel---->',email.substr(7,6));

    console.log('Replace kharel with thakuri in the email', email.replace('kharel','thakuri'));

    //creating a template string
    const  name = 'subash';
    let templateString = `<h2> My name is ${name}</h2>`
    console.log(templateString);

    let myArray = ['subash', 'Aurora', 'Minu'];
    console.log('Join my array by -  ------>', myArray.join("-"));

    console.log('getting the index of minu in an array', myArray.indexOf('Minu'));

    console.log('pushing item in an array should return the length', myArray.push('Milan'));

    console.log('poping an item from an array should return the item popped', myArray.pop());
const para= document.querySelector('p');
console.log('this will log the first paragraph in the dom', para);

const para1= document.querySelector('.error');
console.log('this will log the paragraph with the class name= error', para1);

const para2 = document.querySelector('div.error');
console.log('this will only print the div with class error not just the class will error', para2);

const para3= document.querySelectorAll('p');
console.log('This should log all p tags in the dom', para3);
console.log('para3 will return a node list and we can select element from that list', para3[0]);

const para4 = document.getElementById('pagetitle');
console.log('this should select the element in dom with the given id', para4);

const para5 = document.getElementsByClassName('error');
console.log('this should give us the list of elements with classname error', para5);

const para6= document.getElementsByTagName('p');
console.log('this should log all elements with p tag', para6);

const para7 = document.querySelector('p');
console.log('this should log the innter html inside the first p tag --->', para7.innerText);
para7.innerText ="This is the changed inner text";
console.log('this is changed inner text', para7);

const para8 = document.querySelector(".content");
para8.innerHTML = `<p>this is the changed content in the paragraph</p>`
console.log('this should log the new overridden paragraph--->', para8);

const para9 = document.querySelector("a");
console.log('this should get attribute inside the anchor tag-->', para9.getAttribute("href"));
console.log('this should change teh attribute value in teh anchor tag-->', 
para9.setAttribute('href', 'www.outlook.com'));
console.log('adding css', para9.setAttribute('style', 'color:red') )

const para10= document.querySelector("h2");
console.log('gettign the list of class and calling add or remove class', para10.classList.add("addClass"));
console.log('gettign the list of class and calling add or remove class', para10.classList.remove("addClass"));

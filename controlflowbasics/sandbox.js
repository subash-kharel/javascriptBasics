//for loop example
const arrItems = ['subash', 'Minu', 'Aurora'];
for (let i=0; i<arrItems.length; i++){
    console.log('for loop log---->', arrItems[i]);
}

//while loop example
let i = 0;

while(i < arrItems.length){
    console.log('while loop example', arrItems[i]);
    i++;
}

//do while loop example
//In this example even though the while condition is not met it will still log one time
let j =5;
do{
    console.log('This will execute regardless of the while condition(do while)', j);
    j++;
} while (j<5);


//break and continue examples
const numbers = [1, 4, 5,7,9,11];
for(let i =0; i < numbers.length;i ++){
    if( numbers[i] === 1){
        continue;
    } else {
        console.log('it should print every items but 1------->', numbers[i]);
    }
}

// break statement example
for(let i =0; i < numbers.length;i ++){
    if( numbers[i] === 7){
        break;
    } else {
        console.log('it should only pring 1,4,5 and stop at 7------->', numbers[i]);
    }
}
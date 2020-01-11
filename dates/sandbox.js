const testDate = new Date();
console.log('testDate', testDate);
console.log('this gives us the type--->', typeof testDate);
console.log('this will give us full year--->',testDate.getFullYear() );
console.log('this will give us  month--->',testDate.getMonth() );
//since today is saturday it gives 6
console.log('this will give us full day--->',testDate.getDay() );
console.log('this will give us date--->',testDate.getDate());
console.log('this will give us hours--->',testDate.getHours() );
console.log('this will give us mins--->',testDate.getMinutes() );
console.log('this will give us secs--->',testDate.getSeconds() );

// timestamps
console.log('this will give us timestamp--->',testDate.getTime() );

console.log('this will give us date string--->',testDate.toDateString() );
console.log('this will give us time staring--->',testDate.toTimeString() );
console.log('this will give us local string-->',testDate.toLocaleString() );


//Building digital clock
const clock = document.querySelector('.clock');
const tick = () =>{
    const now = new Date();
    const h = now.getHours();
    const m = now.getMinutes();
    const s = now.getSeconds();

    const html = `<span>${h}:</span>
                  <span>${m}:</span>
                  <span>${s}</span>`;
    clock.innerHTML = html;
    clock.setAttribute('style', 'border:5px solid black; display: inline-block;color:blue')
};
    
setInterval(tick,1000);

var year = parseInt(prompt('Enter a year'));
var isLeapYear = false;


const isDivisibleBy4 = year % 4 === 0;
if (isDivisibleBy4) {
    const isDivisibleBy100 = year % 100 === 0;
    if (isDivisibleBy100){
        const isDivisibleBy400 = year % 400 === 0;
        if (isDivisibleBy400) {
            isLeapYear = true;
        }

    } else {
        isLeapYear = true;
    }
}
if (isLeapYear){
    alert('is a leap year');
}else{
    alert('is NOT a leap year');
}
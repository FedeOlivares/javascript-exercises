const leapYears = function(year) {
    let divisible4 = !(year % 4);
    let divisible100 = !(year % 100);
    let divisible400 = !(year % 400);

    if ((divisible400) || (divisible4 && !divisible100)) {
        return true;
    } else {
        return false;
    }
};




// Do not edit below this line
module.exports = leapYears;

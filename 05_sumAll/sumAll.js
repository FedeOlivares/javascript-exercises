const sumAll = function(a, b) {
    let output = 0;
    if (!Number.isInteger(a) || !Number.isInteger(b) || ((a < 0) || (b < 0))){ // verifies no input is non integer and that no input is under 0
        output = "ERROR";
    } else {
        if (a > b) {
            let temp = a;
            a = b; 
            b = temp;
        }
        for (let i = a; i <= b; i++) {
            output += i;
        }
    }
    return output
};

// Do not edit below this line
module.exports = sumAll;

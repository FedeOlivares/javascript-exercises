const fibonacci = function(index) {
    index = Number(index);
    if (index === 0) {
        return 0;
    } else if (index < 0){
        return "OOPS";
    } else {
        let i = 1;
        let x = 0;
        let counter = 2;
        let temp = 0;
        for (i = 1; counter <= index; counter++) {
            temp = i;
            i += x;
            x = temp;
        }
        
        return i;
    }
};




// Do not edit below this line
module.exports = fibonacci;

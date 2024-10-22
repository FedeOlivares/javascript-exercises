const palindromes = function (string) {
    
    const allowed = [
        "0", "1", "2", "3", "4", "5", "6", 
        "7", "8", "9", "a", "b", "c", "d", 
        "e", "f", "g", "h", "i", "j", "k",
        "l", "m", "n", "o", "p", "q", "r",
        "s", "t", "u", "v", "w", "x", "y", "z" ];


    string = string.toLowerCase();
    let newArray = [];
        for (let i = 0; i < string.length; i++) {
            if (allowed.includes(string[i]))
                newArray.push(string[i]);
        };

    let counter = newArray.length-1;
    for (let index of newArray) {
        if (index !== newArray[counter]) {
            return false
        };
        counter--;      
    };
    return true;

};

// Do not edit below this line
module.exports = palindromes;

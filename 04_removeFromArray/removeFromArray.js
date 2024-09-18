const removeFromArray = function(array, ...args) {
    let elements = arguments[0];
    let toRemove = [];
    let output = [];
    for (let i = 1; i < arguments.length; i++) {
        toRemove.push(arguments[i]);
    }
    for (let element of elements) {
        if (!toRemove.includes(element)) {
                output.push(element);
        }
    }
    return output;
    
};


// Do not edit below this line
module.exports = removeFromArray;

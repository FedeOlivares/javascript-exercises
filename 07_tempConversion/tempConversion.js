const convertToCelsius = function(tempF) {
 let converted = ((tempF - 32) * (5/9)).toFixed(1);
 if (converted[converted.length-1] === "0") {
    return Math.floor(converted)
  } else {
    return parseFloat(converted);
  }

};

const convertToFahrenheit = function(tempC) {
  let converted = (tempC * (9/5) + 32).toFixed(1);
  if (converted[converted.length-1] === "0") {
     return Math.floor(converted)
   } else {
     return parseFloat(converted);
   }
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};

const reverseString = function(string) {

    let newString = "";

    for (let letter = string.length - 1; letter >= 0; letter--) {
        newString += string[letter];
    }

    return newString;
};

// Do not edit below this line
module.exports = reverseString;

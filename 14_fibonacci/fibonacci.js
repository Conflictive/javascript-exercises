const fibonacci = function(num) {
    if (num < 0) {
        return "OOPS";
    } 

    if (num == 0) {
        return 0;
    }
    
    let numOne = 0;
    let numTwo = 1;

    for (let i = 0; i < num - 1; i++) {
        temp = numTwo;
        numTwo = numOne + numTwo ;
        numOne = temp;
    }

    return numTwo ;
};

// Do not edit below this line
module.exports = fibonacci;

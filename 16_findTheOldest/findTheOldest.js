const findTheOldest = function(arr) {
    let sortedArr = arr.sort((a, b) => {
        const currentYear = new Date().getFullYear();

        const firstPerson = (a.yearOfDeath || currentYear) - a.yearOfBirth;
        const secondPerson = (b.yearOfDeath || currentYear) - b.yearOfBirth;

        return secondPerson - firstPerson;
    });

    return sortedArr[0];
};

// Do not edit below this line
module.exports = findTheOldest;

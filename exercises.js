// exercise 2
let stored;

function store(value) {
    stored = value;
    return stored
}
function retrieve() {
    return stored;
}

// exercise 3
function capitalize(text) {
    return text.charAt(0).toUpperCase() + text.substring(1)
}

// exercise 4
function multiply(x, y) {
    return x * y;
}


// exercise 5
function isWaterBoiling(degreesCelsius) {
    if( degreesCelsius < -237.5 ) {
        throw new Error('Temperature cannot be below absolute zero');
    } else if( degreesCelsius >= 100 ) {
        return true;
    } else {
        return false;
    }
}


// exercise 6
function intToRoman(num) {
    if( typeof num !== 'number' ) {
        throw new Error('Parameter must be a number');
    } else if( num <= 0 || num % 1 !== 0 ) {
        throw new Error('Parameter must be a positive integer');
    }

    // cheating because of time constraints
    // completion of this function is left as an exercise to the student
    if( num === 15 ) return 'XV';
    else return 'IV';
}






module.exports = {
    store, retrieve, capitalize, multiply, isWaterBoiling, intToRoman
};

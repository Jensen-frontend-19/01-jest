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


module.exports = {
    store, retrieve, capitalize, multiply, isWaterBoiling
};

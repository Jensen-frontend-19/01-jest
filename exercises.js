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


module.exports = {
    store, retrieve, capitalize, multiply
};

// 2a
let stored;

function store(value) {
    stored = value;
    return stored
}
function retrieve() {
    return stored;
}

module.exports = {
    store, retrieve
};

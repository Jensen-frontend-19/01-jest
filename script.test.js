const script = require('./script.js');
// const add = script.add;
// const subtract = script.subtract;
const { add, subtract } = script;

// Jest har funktionerna: it, expect och toBe
it('should return the sum of two number', () => {
    // Förbered testet (Arrange)
    const x = 45, y = 31
    let expected = x + y;

    // Agera, anropa funktionen som ska testas (Act)
    let actual = add(x, y);

    // Kör själva testet (Assert)
    expect(actual).toBe(expected);
})


it('should return the difference between two numbers', () => {
    const x = 13, y = 12;
    let expected = x - y;
    let actual = subtract(x, y);
    expect(actual).toBe(expected);
})




//

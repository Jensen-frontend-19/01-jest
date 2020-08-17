const { store, retrieve, capitalize, multiply } = require('./exercises.js')

// 2a
// Vilka testfall har vi?

it('should store a value', () => {
    // store ska returnera det sparade värdet
    // Arrange
    const value = [9, 5, 2];

    // Act
    let actual = store(value);

    // Assert
    expect(actual).toBe(value);
})


it('should store a value and return the most recently stored value', () => {
    //Arrange
    const value = 4

    //Act
    store(value)
    let expected = value;
    let actual = retrieve()

    //Assert
    expect(actual).toBe(expected)
})


// 3
// should capitalize "zoom" to "Zoom"
it('should capitalize "zoom" to "Zoom"', () => {
    // Arrange
    const string = 'zoom';
    let expected = 'Zoom';

    // Act
    let actual = capitalize(string);

    // Assert
    expect(actual).toBe(expected);
})

it('should return "1234" for "1234" ', () => {
    const string = '1234';
    const expected = '1234';
    let actual = capitalize(string);
    expect(actual).toBe(expected);
})

it('should return "" for "" ', () => {
    const string = '';
    const expected = '';
    let actual = capitalize(string);
    expect(actual).toBe(expected);
})



// 4
it("should return product of 2 numbers", () => {
    expect(multiply(2, 3)).toBe(6);
});

it('multiply of two numbers', () => {
    const num1 = 6, num2 = 8;

    let expected = num1 * num2;
    let actual = multiply(num1, num2)

    // assert
    expect(actual).toBe(expected)

})

it('should return the value of 4*5', () => {
    //Arrange
    const x = 4, y =5
    let expected = 20
    //Act
    let actual = multiply(x, y)
    //Assert
    expect(actual).toBe(expected)
})

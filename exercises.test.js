const { store, retrieve } = require('./exercises.js')

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

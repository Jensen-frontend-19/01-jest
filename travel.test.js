const Travel = require('./travel.js');


/* 5a. Attempts to define the user's current location. The
 * parameter must be a non-empty string. Returns true if successful. */
// setOrigin(origin) {}

it('should be able to set origin to "Västerås" ', () => {
    // Arrange
    const origin = 'Västerås';

    // Act
    let isSuccessful = Travel.setOrigin(origin);

    // Assert
    let currentPosition = Travel.getPosition();
    expect(isSuccessful).toBe(true);
    expect(currentPosition).toBe(origin);
})

it('should return false for empty string', () => {
    // Arrange
    const origin = '';

    // Act
    let isSuccessful = Travel.setOrigin(origin);

    // Arrange
    expect(isSuccessful).toBe(false);
})
// maybe test other data types too
